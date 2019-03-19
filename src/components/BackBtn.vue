<template>
  <span class="back-btn">
    <i class="iconfont icon-flow" @click="goBack"></i>
  </span>
</template>

<script>
export default {
  props: ['beforeBack'],
  methods: {
    goBack() {
      if (this.beforeBack) {
        this.beforeBack(); // 注意，这个方法的this指向该组件的父组件。TODO: 另外，这串代码可能不需要
      }
      this.$router.back();
    },
  },
};
</script>

<style scoped lang='less'>
.back-btn {
  margin: 0 0.05rem;
  .iconfont {
    font-size: 0.22rem;
  }
}
</style>
