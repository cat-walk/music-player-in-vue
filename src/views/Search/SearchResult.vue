<template>
  <section class="search-result-container">
    <search-result-list :tracks='songList'></search-result-list>
  </section>
</template>

<script>
// 出于提取公共组件的初衷，原本想加SearchResultList组件和PlayListDetail页面下的SongList组件封装成一个组件
// 但由于二者的api不同，取得的数据格式也不同，导致暂时封装失败
// 于是，就有了这个组件的存在，该组件只负责获取数据，展示搜索结果由SearchResultList组件完成
import SearchResultList from './SearchResultList.vue';
import { getSearchResult } from '../../api/SearchResult';

export default {
  components: {
    SearchResultList,
  },
  data() {
    return {
      songList: [],
    };
  },
  props: ['userInput'],
  methods: {
    async getData() {
      const data = await getSearchResult(this.userInput);
      this.songList = data.result.songs;
    },
  },
  filters: {
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped lang='less'>
.search-result-container {
  padding-top: 0.44rem;
}
</style>
