<template>
  <section class="py-spin">
    <div class="py-img-container py-loading" v-if='spining'>
      <img src="../assets/loading2.gif" alt="" class="py-loading-img">
    </div>
    <slot v-else />
  </section>
</template>

<script>
// 加载动画组件，由spining来控制加载动画的显示
export default {
  props: ['spining']
};
</script>

<style scoped lang='less'>
.py-loading{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
}
</style>
