import Vue from 'vue';
// import MintUI from 'mint-ui';
// import 'mint-ui/lib/style.css';
import 'normalize.css'; // 引入normalize.css来统一浏览器的默认样式
import App from './App.vue';
import router from './router';
import store from './store';

// Vue.use(MintUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
