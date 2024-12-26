import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import CounterPage from './views/CounterPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/CounterPage',
    component: CounterPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
