import loader from './loader';
import { ref } from 'vue';

export default function useUpload($storageService) {
  const uploading = ref(false);

  function createFileForm(e) {
    const form = new FormData();
    const [file] = e.target.files;
    if (!file) return;
    form.append('file', file, file.name);
    form.append('unpack', true);
    return form;
  }

  const upload = loader(function (repositoryId, e) {
    const form = createFileForm(e);
    return $storageService
      .upload(repositoryId, form)
      .then(data => {
        const { name } = form.get('file');
        return { ...data, name };
      })
      .catch(() => {
        throw new Error('An error has occurred!');
      });
  }, uploading);

  return {
    uploading,
    upload
  };
}
