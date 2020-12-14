import Edit from '@/edit/index.vue';
import Toolbar from '@/edit/Toolbar.vue';

export { Edit, Toolbar };

export default {
  initState: () => ({ launchUrl: null }),
  components: { Edit }
};
