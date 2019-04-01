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
        <div>
          <div class="menu-top">
            <p class="login-desc1">音乐给我力量</p>
            <p class="login-desc2">Music give me power!</p>
            <div class="login-btn-container">
              <button class="login-btn" @click="toLoginPage">立即登录</button>
            </div>
          </div>
          <div class="menu-body">
            <div class="btn-wrap"><button @click='logout'>退出登录</button></div>
          </div>
        </div>
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
import MyAudio from './components/MyAudio.vue';
import { logout } from './api/SideBar';

export default {
  components: {
    Slideout,
    MyAudio,
  },
  methods: {
    logout,
    open() {
      console.log('slideoutOpen');
    },
    toLoginPage() {
      this.$children[1].slideout.close();
      this.$router.push('/login');
    },
  },

/*   // 如果后台登录接口不稳定，可以用这种临时的解决方案：退出应用后，删除localStorage里的uid
  created() {
    localStorage.removeItem('uid');
  }, */
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
  .menu-top {
    height: 1rem;
    padding-top: 0.4rem;
    background: #000;
    .login-desc1,
    .login-desc2 {
      color: lightgray;
      text-align: center;
      padding-bottom: 0.02rem;
    }
    .login-btn-container {
      padding-top: 0.1rem;
      text-align: center;
      .login-btn {
        border: 1px solid lightgray;
        padding: 0.05rem 0.35rem;
        border-radius: 0.14rem;
        background: #000;
        color: #f1f1f1;
      }
    }
  }
  .menu-body {
    height: 10rem;
    background: #fff;
  }
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
