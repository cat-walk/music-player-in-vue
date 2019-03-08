<template>
  <div>
    <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open">
      <nav id="menu">
        <div>
          <div class="menu-top"></div>
          <div class="menu-body"></div>
        </div>
      </nav>
      <main id="panel">
        <header class="mp-header">
          <button class="toggle-button btn-hamburger">
            <i class="iconfont icon-cebianlan"></i>
          </button>
          <router-link to="/home">推荐页</router-link>
          <router-link to="/my">我的</router-link>
          <button @click="toSearch">
            <i class="iconfont icon-sousuo"></i>
          </button>
        </header>
        <router-view></router-view>
        <!-- router-view放在合适的地方，slideout才能正常工作 -->
      </main>
    </Slideout>
  </div>
</template>

<script>
import Slideout from 'vue-slideout';

export default {
  components: {
    Slideout,
  },
  methods: {
    open() {
      console.log('slideoutOpen');
    },
    toSearch() {
      this.$router.push('/search');
    },
  },
};
</script>

<style scoped lang='less'>
i {
  display: block;
  font-size: 0.22rem;
  color: #f1f1f1;
}

// 播放器顶部导航栏
.mp-header {
  display: flex;
  height: 0.44rem;
  justify-content: space-between; // 实现顶栏平均分布
  align-items: center; // 实现顶栏垂直居中
  background-color: #d44439;
}

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
  width: 256px;
  height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 999;
  display: none;
  background-color: #1d1f20;
  color: white;
  .menu-top{
    height: 1rem;
    background: #000;
  }
  .menu-body{
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

a {
  color: lightcoral;
  font-size: 0.15rem;
  &.router-link-active {
    text-decoration: none;
    color: #fcdae9;
  }
}
</style>
