import loader from './loader';
import { mapGetters } from 'vuex';

export default {
  inject: ['$storageService'],
  data: () => ({ uploading: false }),
  computed: {
    ...mapGetters('repository', { repositoryId: 'id' })
  },
  methods: {
    createFileForm(e) {
      this.form = new FormData();
      const [file] = e.target.files;
      if (!file) return;
      this.form.append('file', file, file.name);
      this.form.append('unpack', true);
    },
    upload: loader(function (e) {
      this.createFileForm(e);
      return this.$storageService.upload(this.repositoryId, this.form)
        .then(data => {
          const { name } = this.form.get('file');
          this.$emit('upload', { ...data, name });
        }).catch(() => {
          this.error = 'An error has occurred!';
        });
    }, 'uploading')
  }
};
