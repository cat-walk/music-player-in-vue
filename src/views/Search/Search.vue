<template>
  <div class="search-box" ref="searchBox">
    <div class="search-top">
      <back-header input=1 color='red'></back-header>
    </div>
  </div>
</template>

<script>
import BackHeader from '../../components/BackHeader.vue';

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
  components: {
    BackHeader,
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
}
</style>
