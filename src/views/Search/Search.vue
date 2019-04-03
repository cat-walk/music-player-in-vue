<template>
  <div class="search-box left-right-padding-box" ref="searchBox">
    <back-header color="red" :input='true' :doAfterUserEnter="startSearch"></back-header>
    <search-list v-if="!showResultPageFlag" :doAfterUserClick='startSearch' :list="hots" title="热门搜索" class="hot-search"></search-list>
    <search-list v-if="!showResultPageFlag" :doAfterUserClick='startSearch' :list="history" title="历史记录"></search-list>
    <search-result-list v-else :tracks="songList" class="search-result-list"></search-result-list>
  </div>
</template>

<script>
import BackHeader from '../../components/BackHeader.vue';
import SearchList from './SearchList.vue';
import SearchResultList from './SearchResultList.vue';
import { getHotSearch } from '../../api/Search/Search';
import { getSearchResult } from '../../api/SearchResult';

export default {
  name: 'Search',
  components: {
    BackHeader,
    SearchList,
    SearchResultList,
  },
  data() {
    return {
      hots: [],
      showResultPageFlag: false,
      history: [],
      songList: [],
    };
  },
  methods: {
    async getData() {
      const data = await getHotSearch();
      this.hots = data.result.hots;
    },
    switchToResult() {
      this.showResultPageFlag = true;
    },
    startSearch(theValueToSearch) {
      // debugger;
      this.switchToResult();
      this.getSearchResultData(theValueToSearch);
      // push一个对象进history数组的原因是，为了使得history和hots的格式一致，这样这两部分才能共用一个SearchList组件
      this.history.push({ first: theValueToSearch });
    },
    async getSearchResultData(theValueToSearch) {
      const data = await getSearchResult(theValueToSearch);
      this.songList = data.result.songs;
    },
  },
  created() {
    this.getData();
  },
  // 该局部路由守卫的作用是让每次跳转进搜索界面时，都显示热门搜索和历史记录，而不是搜索结果
  beforeRouteLeave(to, from, next) {
    this.showResultPageFlag = false;
    next();
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
  .hot-search {
    margin-top: 0.44rem;
  }
  .search-result-list {
    padding-top: 0.44rem;
  }
}
</style>
