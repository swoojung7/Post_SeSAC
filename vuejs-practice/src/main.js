import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import { BootstrapVue3 } from 'bootstrap-vue-3'; // BootstrapVue3

createApp(App)
  .use(router)
  .use(BootstrapVue3)  // BootstrapVue3 사용
  .mount('#app');
