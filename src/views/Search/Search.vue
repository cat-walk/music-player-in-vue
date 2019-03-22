<template>
  <div class="search-box left-right-padding-box" ref="searchBox">
    <back-header :inputCallBack="getUserInput" color="red" :doAfterUserEnter="doAfterUserEnter"></back-header>
    <two-search-list v-if="!showResultPageFlag" :hots="hots" :history="history"></two-search-list>
    <search-result-list v-else :tracks="songList" class="search-result-list"></search-result-list>
  </div>
</template>

<script>
import BackHeader from '../../components/BackHeader.vue';
import TwoSearchList from './TwoSearchList.vue';
import SearchResultList from './SearchResultList.vue';
import { getScreenHeight } from '../../utils/utils';
import { getHotSearch } from '../../api/Search/Search';
import { getSearchResult } from '../../api/SearchResult';

export default {
  components: {
    BackHeader,
    TwoSearchList,
    SearchResultList,
  },
  data() {
    return {
      hots: [],
      showResultPageFlag: false,
      userInput: '',
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
    doAfterUserEnter() {
      this.switchToResult();
      this.getSearchResultData();
      // push一个对象进history数组的原因是，为了使得history和hots的格式一致，这样这两部分才能共用一个SearchList组件
      this.history.push({ first: this.userInput });
    },
    async getSearchResultData() {
      const data = await getSearchResult(this.userInput);
      this.songList = data.result.songs;
    },
    // 该方法用于获取子组件 BackHeader 的 userInput 数据
    getUserInput(userInput) {
      this.userInput = userInput;
    },
  },
  created() {
    this.getData();
  },
  mounted() {
    // 使得搜索组件充满整个屏幕
    this.$refs.searchBox.style.height = getScreenHeight();
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
  .search-result-list {
    padding-top: 0.44rem;
  }
}
</style>
