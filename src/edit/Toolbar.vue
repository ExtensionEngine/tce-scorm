<template>
  <v-toolbar
    height="72"
    color="transparent"
    class="tce-scorm-toolbar elevation-0"
  >
    <v-toolbar-title class="pl-1"> SCORM toolbar </v-toolbar-title>
    <v-toolbar-items class="mx-auto">
      <upload-btn
        @upload="saveElement"
        :repository-id="element.repositoryId"
        label="Upload SCORM package"
      />
    </v-toolbar-items>
  </v-toolbar>
</template>

<script setup>
import { computed, inject } from 'vue';
import UploadBtn from '@/tce-core/UploadBtn.vue';

const props = defineProps({
  element: { type: Object, required: true }
});

const $elementBus = inject('$elementBus');

// eslint-disable-next-line no-unused-vars
const isUploaded = computed(() => Boolean(props.element.data.launchUrl));

const saveElement = data => {
  $elementBus.emit('save', { ...props.element.data, ...data });
};
</script>

<style lang="scss" scoped>
.tce-scorm-toolbar {
  :deep(.v-toolbar__title) {
    min-width: 23.875rem;
    text-align: left;
  }

  :deep(.file-upload) {
    display: flex;
    align-items: center;
  }
}
</style>
