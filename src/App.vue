<template>
  <div>
    <my-audio></my-audio>
    <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open">
      <nav id="menu">
        <div>
          <div class="menu-top">
            <p class="login-desc1">登录网易云音乐</p>
            <p class="login-desc2">手机电脑多端同步，尽享海量高品质音乐</p>
            <div class="login-btn-container">
                <button class="login-btn" @click='toLoginPage'>立即登录</button>
            </div>
          </div>
          <div class="menu-body"></div>
        </div>
      </nav>
      <main id="panel">
        <!-- keep-alive的作用是：保存未登录状态下，用户的搜索历史。是通过缓存搜索组件和其子组件SearchList做到的 -->
        <keep-alive :include="['Search', 'SearchList']">
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

export default {
  components: {
    Slideout,
    MyAudio,
  },
  methods: {
    open() {
      console.log('slideoutOpen');
    },
    toLoginPage() {
      this.$children[1].slideout.close();
      this.$router.push('/login');
    },
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
  width: 80%;
  height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 999;
  display: none;
  background-color: #1d1f20;
  color: white;
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
