import Vue from 'vue';
import { Table, TableColumn} from 'element-ui';
import App from './App.vue';
import router from './router';


Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Table)
Vue.use(TableColumn)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
