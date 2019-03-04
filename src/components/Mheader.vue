<template>
  <div>
    <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open">
      <nav id="menu">
        <div>Menu</div>
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
  display: inline-block;
  width: 20px;
  height: 20px;
}


.mp-header{
  display: flex;
  justify-content: space-between;
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
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
  overflow: hidden;
}

.slideout-open .slideout-menu {
  display: block;
}

/* .btn-hamburger {
  position: absolute;
  top: 0.12rem;
  left: 0.12rem;
  display: block;
  width: 0.45rem;
  height: 0.45rem;
} */
/* slideout样式 */
</style>
