<template>
  <v-toolbar
    height="72"
    color="transparent"
    class="tce-scorm-toolbar elevation-0">
    <v-toolbar-title class="pl-1">SCORM toolbar</v-toolbar-title>
    <v-toolbar-items class="mx-auto">
      <upload-btn
        @upload="saveElement"
        :repository-id="element.repositoryId"
        label="Upload SCORM package" />
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import UploadBtn from '@/tce-core/UploadBtn.vue';

export default {
  inject: ['$elementBus'],
  props: {
    element: { type: Object, required: true }
  },
  computed: {
    isUploaded: vm => Boolean(vm.element.data.launchUrl)
  },
  methods: {
    saveElement(data) {
      this.$elementBus.emit('save', { ...this.element.data, ...data });
    }
  },
  components: { UploadBtn }
};
</script>

<style lang="scss" scoped>
.tce-scorm-toolbar ::v-deep {
  .v-toolbar__title {
    min-width: 23.875rem;
    text-align: left;
  }

  .file-upload {
    display: flex;
    align-items: center;
  }
}
</style>
