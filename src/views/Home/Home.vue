<template>
  <div class="home">
    <div class="redWall"></div>
    <HomeSwiper/>
    <FourCircles/>
    <!-- 不要嘲笑这个组件名 -->
    <RecommendSongList/>
  </div>
</template>

<script>
import HomeSwiper from './HomeSwiper.vue';
import FourCircles from './FourCircles.vue';
import RecommendSongList from './RecommendSongList.vue';

export default {
  components: {
    HomeSwiper,
    FourCircles,
    RecommendSongList,
  },
};
</script>

<style lang="less" scoped>
.redWall {
  position: absolute;
  z-index: -1; // 使红墙显示在最底层
  left: 0;
  top: 0;
  width: 100%;
  height: 1.5rem;
  background-color: #d44439;
}
</style>
