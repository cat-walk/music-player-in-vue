<template>
  <div>
    <Header class="bud-header">
      <GoBackBtn/>
      <span class="bud-header-title">排行榜</span>
    </Header>
  </div>
</template>

<script>
import GoBackBtn from './GoBackBtn.vue';

export default {
  components: {
    GoBackBtn,
  },
};
</script>

<style scoped lang='less'>
.bud-header {
  display: flex;
  align-items: center;
  height: 0.44rem;
  background-color: #d44439;
  color: #f1f1f1;
  .bud-header-title {
    margin: 0 .05rem;
    font-size: 0.18rem;
    font-weight: 400;
  }
}
</style>
