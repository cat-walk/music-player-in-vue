<template>
  <div>
    <my-audio></my-audio>
    <Slideout
      menu="#menu"
      panel="#panel"
      :toggleSelectors="['.toggle-button']"
      @on-open="open"
      easing="linear"
    >
      <nav id="menu">
        <side-bar-menu :children='this.$children'></side-bar-menu>
      </nav>
      <main id="panel">
        <!-- keep-alive的作用是：保存未登录状态下，用户的搜索历史。是通过缓存搜索组件和其子组件SearchList做到的 -->
        <!-- <keep-alive :include="['Search', 'SearchList']"> -->
        <!-- 下面这种写法可能比上面的更好，缓存了更多的组件，性能更优秀-->
        <keep-alive :exclude="['PlaylistDetail', 'MyAudio', 'PlayControl']">
          <router-view></router-view>
        </keep-alive>
        <!-- router-view放在合适的地方，slideout才能正常工作 -->
      </main>
    </Slideout>
  </div>
</template>

<script>
import Slideout from 'vue-slideout';
import { mapActions } from 'vuex';
import MyAudio from './components/MyAudio.vue';
import SideBarMenu from './components/SideBarMenu.vue';

export default {
  components: {
    Slideout,
    MyAudio,
    SideBarMenu,
  },
  methods: {
    ...mapActions(['getThenSetLoginStatus']),
    open() {
      console.log('slideoutOpen');
    },
  },

  created() {
    // 如果后台登录接口不稳定，可以用这种临时的解决方案：退出应用后，删除localStorage里的uid
    // localStorage.removeItem('uid');
    this.getThenSetLoginStatus();
  },
};
</script>

<style scoped lang='less'>
/* slideout样式 */
body {
  width: 100%;
  height: 100%;
  margin: 0;
}

.slideout-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 85%;
  height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 999;
  display: none;
  background-color: #1d1f20;
  color: white;
  box-shadow: 0 0 2rem #000;
}

.slideout-menu-left {
  left: 0;
}

.slideout-menu-right {
  right: 0;
}

.slideout-panel {
  // color: white;
  position: relative;
  z-index: 1;
  will-change: transform;
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
  overflow: hidden;
}

.slideout-open .slideout-menu {
  display: block;
}

/* slideout样式 */
</style>
