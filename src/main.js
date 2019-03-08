import Vue from 'vue';
// import MintUI from 'mint-ui';
// import 'mint-ui/lib/style.css';
import 'normalize.css'; // 引入normalize.css来统一浏览器的默认样式
import './style/index.less'; // 引入自定义的全局样式

import VueAwesomeSwiper from 'vue-awesome-swiper'; // 引入Vue版本的swiper插件
import 'swiper/dist/css/swiper.css'; // 引入swiper插件的样式文件
import App from './App.vue';
import router from './router';
import store from './store';

// Vue.use(MintUI);
Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
