import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue'; // 优化了项目结构
import My from './views/My/My.vue'; // 优化了项目结构
import Search from './views/Search/Search.vue'; // 优化了项目结构
import LeaderBoard from './views/LeaderBoard/LeaderBoard.vue'; // 优化了项目结构
import PlayListDetail from './views/PlayListDetail/PlayListDetail.vue';
import PlayControl from './views/PlayControl/PlayControl.vue';
import Login from './views/Login/Login.vue';
import RecentPlay from './views/RecentPlay/RecentPlay.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/my',
      name: 'My',
      component: My,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/leader-board',
      name: 'LeaderBoard',
      component: LeaderBoard,
    },
    {
      path: '/play-list-detail',
      name: 'PlayListDetail',
      component: PlayListDetail,
    },
    {
      path: '/song/:coverImgUrl',
      name: 'Song',
      component: PlayControl,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/recent-play/:data',
      name: 'RecentPlay',
      component: RecentPlay,
    },
  ],
});
