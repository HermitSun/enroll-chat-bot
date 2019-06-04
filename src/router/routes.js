export default [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/ChatBot.vue'),
    meta: {
      title: '南大招生'
    }
  },
  {
    path: '/not-found',
    name: '找不到页面',
    component: () => import('@/views/PageNotFound.vue'),
    meta: {
      title: '找不到页面'
    }
  },
  {
    path: '*',
    redirect: '/not-found'
  }
];
