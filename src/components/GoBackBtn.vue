<template>
  <span class="go-back-btn">
    <i class="iconfont icon-flow" @click="goBack"></i>
  </span>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped lang='less'>
.go-back-btn {
  margin: 0 0.05rem;
  .iconfont {
    font-size: 0.22rem;
  }
}
</style>
