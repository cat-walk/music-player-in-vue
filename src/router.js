import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue'; // 优化了项目结构
import My from './views/My/My.vue'; // 优化了项目结构
import Search from './views/Search/Search.vue'; // 优化了项目结构

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
