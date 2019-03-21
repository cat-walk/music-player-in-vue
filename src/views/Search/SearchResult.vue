<template>
  <section class="search-result-container">
    <search-result-list :tracks='songList'></search-result-list>
  </section>
</template>

<script>
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
      console.log(this.songList);
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
