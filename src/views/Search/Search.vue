<template>
  <div class="search-box left-right-padding-box" ref="searchBox">
    <back-header :input="getUserInput" color="red" :doAfterEnter='switchToResult' ></back-header>
    <two-search-list v-if='!showResultPageFlag' :hots='hots'></two-search-list>
    <search-result v-if='showResultPageFlag' :userInput="userInput"></search-result>
  </div>
</template>

<script>
import BackHeader from '../../components/BackHeader.vue';
import SearchResult from './SearchResult.vue';
import TwoSearchList from './TwoSearchList.vue';
import { getScreenHeight } from '../../utils/utils';
import { getHotSearch } from '../../api/Search/Search';

export default {
  components: {
    BackHeader,
    SearchResult,
    TwoSearchList,
  },
  data() {
    return {
      hots: [],
      showResultPageFlag: false,
      userInput: '',
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
}
</style>
