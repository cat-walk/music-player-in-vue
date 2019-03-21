<template>
  <section class="container">
    <h2 class="title">{{title}}</h2>
    <ul class="search-list">
      <li v-for="(item, index) in list" :key="index" class="item">
        <!-- <router-link to=""> -->
        {{item.first}}
        <!-- </router-link> -->
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['list', 'title'],
};
</script>

<style scoped lang='less'>
.container {
  padding: 0.2rem 0;
  .title {
    padding: 0.1rem 0;
    font-size: .18rem;
  }
  .search-list {
    display: flex;
    flex-wrap: wrap;
    margin-left: .1rem;
    .item {
      height: .24rem;
      line-height: .24rem;
      padding: 0.03rem 0.15rem;
      margin: 0.05rem 0.05rem 0.05rem 0;
      border-radius: 0.15rem;
      background: #eae1e1;
      color: #666161;
    }
  }
}
</style>
