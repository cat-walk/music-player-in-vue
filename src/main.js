import Vue from 'vue'
import $ from 'zepto' /* FIXME: 暂时不能通过这种方式引入zepto */
import './style/index.less' // 引入自定义的全局样式
import VueAwesomeSwiper from 'vue-awesome-swiper' // 引入Vue版本的swiper插件
import 'swiper/dist/css/swiper.css' // 引入swiper插件的样式文件
import App from './App.vue'
import Spin from './components/Spin.vue'
import router from './router'
import store from './store/index'
import loading from './assets/loading.jpg'

Vue.use(VueAwesomeSwiper)
Vue.use(Spin) // 全局的loading组件
Vue.component('spin', Spin)

Vue.config.productionTip = false

// 注册一个全局自定义指令 `v-lazy`用于图片懒加载
// 在后台创建一个图片元素用于加载图片，当图片完全加载后，再去显示图片
Vue.directive('lazy', (el, binding) => {
  const backImg = document.createElement('img')
  if (el.getAttribute('lazy') === 'loaded') {
    return
  }
  el.setAttribute('lazy', 'loading')
  el.src = loading
  backImg.onload = () => {
    el.setAttribute('lazy', 'loaded')
    el.src = binding.value
  };
  backImg.src = binding.value
})

new Vue({
  router,
  store,
  render: h => h(App),
  components: {
    Spin
  }
}).$mount('#app')
