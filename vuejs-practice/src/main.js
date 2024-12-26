import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';  // BootstrapVue3 CSS 파일을 포함
import { BootstrapVue3 } from 'bootstrap-vue-3';

createApp(App)
  .use(router)
  .use(BootstrapVue3)
  .mount('#app');
