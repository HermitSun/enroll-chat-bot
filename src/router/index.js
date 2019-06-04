import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import store from '@/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  await store.dispatch('updateToken', to.query.token);
  next();
});

export default router;
