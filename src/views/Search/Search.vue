<template>
  <div class="search-box" ref="searchBox">
    <div class="search-top">
      <i class="iconfont icon-flow" @click='goBack'></i>
      <input type="text" class='search-input'>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 123,
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
  mounted() {
    // 使得搜索组件充满整个屏幕
    this.$refs.searchBox.style.height = `${screen.height}px`;
  },
};
</script>

<style scoped lang='less'>
.search-box {
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  .search-input{
    border-bottom: 1px solid gray;
  }
}
</style>
