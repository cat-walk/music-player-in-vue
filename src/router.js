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
import store from './store';

Vue.use(Router);

const router = new Router({
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
      meta: {
        needLogin: true,
      },
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
      path: '/recent-play',
      name: 'RecentPlay',
      component: RecentPlay,
    },
  ],
});

/* // 如果后台登录接口不稳定，可以用这种临时的解决方案：通过localStorage里是否有uid来判断是否登录，而不用发请求的方式
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (localStorage.getItem('uid')) next();
    else router.push('/login');
  } else next();
}); */

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin && !store.state.loginStatus) router.push('/login');
  else next();
});

export default router;
