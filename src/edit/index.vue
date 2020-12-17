<template>
  <div class="tce-scorm">
    <element-placeholder
      v-if="!launchUrl"
      :is-focused="isFocused"
      :is-disabled="isDisabled"
      :dense="dense"
      name="SCORM component"
      icon="mdi-package-up"
      active-placeholder="Use toolbar to upload the SCORM package"
      active-icon="mdi-arrow-up" />
    <div v-else>
      <preview-overlay v-if="!isDisabled && !isFocused" />
      <div class="container">
        <iframe
          :src="launchUrl"
          :tabindex="isDisabled || isFocused ? 0 : -1"
          frameborder="0"
          class="element"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import ElementPlaceholder from '@/tce-core/ElementPlaceholder.vue';
import PreviewOverlay from '@/tce-core/PreviewOverlay.vue';

export default {
  name: 'tce-scorm',
  inject: ['$elementBus'],
  props: {
    element: { type: Object, required: true },
    isFocused: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    dense: { type: Boolean, default: false }
  },
  computed: {
    launchUrl: vm => vm.element.data.launchUrl
  },
  mounted() {
    this.$elementBus.on('save', data => this.$emit('save', data));
  },
  components: { ElementPlaceholder, PreviewOverlay }
};
</script>

<style lang="scss" scoped>
.tce-scorm {
  position: relative;
}

.container {
  position: relative;
  width: 100%;
  height: 70vh;
}

.element {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
