<template>
  <div>
    <my-audio></my-audio>
    <Slideout
      menu="#menu"
      panel="#panel"
      :toggleSelectors="['.toggle-button']"
      @on-open="open"
      @on-close="close"
      easing="linear"
      ref="slideout"
    >
      <nav id="menu">
        <side-bar-menu :children="this.$children"></side-bar-menu>
      </nav>
      <main id="panel" ref="panel">
        <Nav v-if="shouldHaveNav"></Nav>
        <!-- keep-alive的作用之一是：保存未登录状态下，用户的搜索历史。是通过缓存搜索组件和其子组件SearchList做到的 -->
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
import Slideout from "vue-slideout";
import { mapActions } from "vuex";
import MyAudio from "./components/MyAudio.vue";
import Nav from "./components/Nav.vue";
import SideBarMenu from "./components/SideBarMenu.vue";

export default {
  components: {
    Slideout,
    MyAudio,
    SideBarMenu,
    Nav
  },
  computed: {
    shouldHaveNav(){
      return ['/home', '/my'].indexOf(this.$route.path) !== -1
    }
  },
  methods: {
    ...mapActions(["getThenSetLoginStatus"]),
    open() {
      this.$refs.panel.addEventListener("click", this.closeSlideout, true);
    },
    close() {
      this.$refs.panel.removeEventListener("click", this.closeSlideout, true);
    },
    closeSlideout(e) {
      // e.stopPropagation();
      e.preventDefault(); // 阻止事件传播，以免触发主页元素的点击事件。   这里很神奇，stopPropagation不起作用，反而preventDefault起到了阻止传播的作用
      this.$refs.slideout.slideout.close();
    }
  },
  created() {
    // 如果后台登录接口不稳定，可以用这种临时的解决方案：退出应用后，删除localStorage里的uid
    // localStorage.removeItem('uid');
    this.getThenSetLoginStatus();
  },
  mounted() {
    this.$refs.slideout.slideout.disableTouch(); // 禁止通过左滑打开侧边栏
  }
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
  min-height: 100vh;
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
