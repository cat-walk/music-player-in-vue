<template>
  <div id="app">
    <Mheader />
    <router-view></router-view>
  </div>
</template>

<script>
import Mheader from './components/Mheader.vue';

export default {
  components: {
    Mheader,
  },
};
</script>

<style lang="less">

</style>
