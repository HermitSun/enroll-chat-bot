export default [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/ChatBot.vue')
  },
  {
    path: '/not-found',
    name: '找不到页面',
    component: () => import('@/views/PageNotFound.vue')
  },
  {
    path: '*',
    redirect: '/not-found'
  }
];
