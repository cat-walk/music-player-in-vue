<template>
  <section>
    <search-list :list="hots" title="热门搜索" class="hot-search"></search-list>
    <search-list :list="hots" title="历史记录"></search-list>
  </section>
</template>

<script>
import SearchList from './SearchList.vue';

export default {
  props: ['hots'],
  components: {
    SearchList,
  },
};
</script>

<style scoped lang='less'>
.hot-search {
  margin-top: 0.44rem;
}
</style>
