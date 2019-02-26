<template>
  <div>
    <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open">
      <nav id="menu">
        <div>Menu</div>
      </nav>
      <main id="panel">
        <header>
          <button class="toggle-button btn-hamburger iconfont cebianlan"></button>
          <router-link to="/home">推荐页
      <!-- FIXME: -->
      <!-- <div>
        <i class="iconfont cebianlan"></i>
      </div>-->
    </router-link>
    <router-link to="/my">我的</router-link>
    <router-link to="/search">搜索</router-link>
        </header>
      </main>
    </Slideout>
    <router-view></router-view>
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
  },
};
</script>

<style scoped>
/* i {
  display: inline-block;
  width: 20px;
  height: 20px;
} */

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
  z-index: 0;
  display: none;
  background-color: #1d1f20;
  color: white;
}

.slideout-menu-left {
  left: 0;
}

.slideout-menu-right {
  right: 0;
}

.slideout-panel {
  color: white;
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

.btn-hamburger{
  position: absolute;
  top: .12rem;
  left: .12rem;
  display: block;
  width: .45rem;
  height: .45rem;
}
/* slideout样式 */
</style>
