<template>
  <Header :class="headerClass">
    <back-btn></back-btn>
    <input v-if="input" type="text" class="header-input" autofocus>
    <span v-if="title" class="back-header-title">{{title}}</span>
  </Header>
</template>

<script>
import BackBtn from './BackBtn.vue';

export default {
  data() {
    return {
      headerClass: '',
    };
  },
  components: {
    BackBtn,
  },
  props: ['title', 'color', 'input'],
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
  .header-input {
    width: 85%;
    height: 0.28rem;
    margin-left: 0.1rem;
    border: none;
    border-bottom: 1px solid #e6e6e6;
    background: #d44439;
    color: #e6e6e6;
  }
}
</style>
