<template>
  <section class="container" @click='handleClick'>
    <h2 class="title">{{title}}</h2>
    <ul class="search-list">
      <li v-for="(item, index) in list" :key="index" class="item">
        {{item.first}}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'SearchList',
  props: ['list', 'title', 'doAfterUserClick'],
  methods: {
    handleClick(e) {
      const src = e.target;
      if (src.className === 'item') {
        this.doAfterUserClick(src.innerText);
      }
    },
  },
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
      height: .3rem;
      line-height: .24rem;
      padding: 0.03rem 0.15rem;
      margin: 0.05rem 0.05rem 0.05rem 0;
      border-radius: 0.18rem;
      background: #eae1e1;
      color: #666161;
    }
  }
}
</style>
