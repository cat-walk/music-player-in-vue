<template>
  <Header :class="headerClass">
    <GoBackBtn/>
    <span class="back-header-title">{{title}}</span>
  </Header>
</template>

<script>
import GoBackBtn from './GoBackBtn.vue';

export default {
  data() {
    return {
      headerClass: '',
    };
  },
  components: {
    GoBackBtn,
  },
  props: ['title', 'color'],
  mounted() {
    this.headerClass = `back-header ${this.color}`;
  },
};
</script>

<style scoped lang='less'>
.back-header {
  position: fixed; // FIXME: 由于slideout插件给id为panel的元素设置了will-change: transform, 导致固定定位失效
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 0.44rem;
  color: #f1f1f1;
  &.red {
    background-color: #d44439;
  }
  &.trans {
    background-color: rgba(0, 0, 0, 0);
  }
  .back-header-title {
    margin: 0 0.05rem;
    font-size: 0.18rem;
    font-weight: 400;
  }
}
</style>
