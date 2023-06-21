<template>
  <div class="file-upload">
    <form @submit.prevent class="upload-form">
      <validation-provider ref="validator" :rules="validate">
        <input
          :ref="id"
          @change="validateAndUpload"
          :id="id"
          :name="id"
          :accept="validate.ext"
          type="file"
          class="upload-input"
        />
      </validation-provider>
      <v-btn
        v-if="!fileKey"
        @click="$refs[id].click()"
        :loading="uploading"
        color="grey darken-4"
        text
      >
        <v-icon color="secondary" class="mr-2">
          mdi-cloud-upload-outline
        </v-icon>
        {{ label }}
      </v-btn>
      <span v-else @click="downloadFile(fileKey, fileName)" class="file-name"
        >{{ fileName }}
      </span>
    </form>
  </div>
</template>

<script setup>
import { defineProps, inject, ref, watchEffect } from 'vue';
import uniqueId from 'lodash/uniqueId';
import useUpload from './upload';

const props = defineProps({
  repositoryId: { type: Number, required: true },
  id: { type: String, default: () => uniqueId('file_') },
  fileName: { type: String, default: '' },
  fileKey: { type: String, default: '' },
  validate: { type: Object, default: () => ({ ext: [] }) },
  label: { type: String, default: 'Choose a file' },
  sm: { type: Boolean, default: false }
});

const emit = defineEmits(['update:uploading']);

const $storageService = inject('$storageService');

const { uploading, upload } = useUpload($storageService);

const validator = ref(null);

const validateAndUpload = async e => {
  const { valid } = await validator.value.validate(e);
  if (valid) {
    upload(props.repositoryId, e);
  }
};

watchEffect(() => {
  emit('update:uploading', uploading.value);
});
</script>

<style lang="scss" scoped>
.file-upload, .upload-form {
  display: inline-block;
}

/* Using width/height restriction on hidden element
 rather than `display: none;` because of Safari (v11.1 & v11.2) issue
 https://forums.developer.apple.com/thread/103471 */
.upload-input {
  visibility: hidden;
  max-width: 0;
  max-height: 0;
}

.file-name {
  cursor: pointer;
  font-size: 1rem;
  color: #00f;
  text-decoration: underline;
}
</style>
