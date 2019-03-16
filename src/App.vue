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
</style>
