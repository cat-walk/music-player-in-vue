<template>
  <button class="back-btn" @click="goBack">
    <i class="iconfont icon-flow"></i>
  </button>
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
  color: #fff;
  margin: 0 0.05rem;
  padding: 10px 10px 10px 5px;
  .iconfont {
    font-size: 0.22rem;
  }
}
</style>
