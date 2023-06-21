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
      active-icon="mdi-arrow-up"
    />
    <div v-else>
      <preview-overlay v-if="!isDisabled && !isFocused" />
      <div class="container">
        <iframe
          :src="launchUrl"
          :tabindex="isDisabled || isFocused ? 0 : -1"
          frameborder="0"
          class="element"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, onMounted } from 'vue';
import ElementPlaceholder from '@/tce-core/ElementPlaceholder.vue';
import PreviewOverlay from '@/tce-core/PreviewOverlay.vue';

const props = defineProps({
  element: { type: Object, required: true },
  isFocused: { type: Boolean, default: false },
  isDisabled: { type: Boolean, default: false },
  dense: { type: Boolean, default: false }
});

const emit = defineEmits(['save']);

const $elementBus = inject('$elementBus');

const launchUrl = computed(() => props.element.data.launchUrl);

onMounted(() => {
  $elementBus.on('save', data => emit('save', data));
});
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
