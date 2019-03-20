import Vue from 'vue';
// import MintUI from 'mint-ui';
// import 'mint-ui/lib/style.css';
// import { Lazyload } from 'mint-ui';
// import $ from 'zepto'; /* FIXME: 引入zepto失败 */

import 'normalize.css'; // 引入normalize.css来统一浏览器的默认样式
import './style/index.less'; // 引入自定义的全局样式

import VueAwesomeSwiper from 'vue-awesome-swiper'; // 引入Vue版本的swiper插件
import 'swiper/dist/css/swiper.css'; // 引入swiper插件的样式文件
import App from './App.vue';
import router from './router';
import store from './store/index';
import loading from './assets/loading.jpg';

// Vue.use(MintUI);
// Vue.use(Lazyload); // 引入lazyload插件
Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.config.productionTip = false;

// 注册一个全局自定义指令 `v-lazy`用于图片懒加载
// 在后台创建一个图片元素用于加载图片，当图片完全加载后，再去显示图片
Vue.directive('lazy', (el, binding) => {
  const backImg = document.createElement('img');
  el.setAttribute('lazy', 'loading');
  el.src = loading;
  backImg.onload = () => {
    el.setAttribute('lazy', 'loaded');
    el.src = binding.value;
  };
  backImg.src = binding.value;
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
