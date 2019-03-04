import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import My from './views/My.vue';
import Search from './views/Search.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/my',
      name: 'my',
      component: My,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
  ],
});
