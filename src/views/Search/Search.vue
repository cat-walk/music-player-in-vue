<template>
  <div class="search-box left-right-padding-box" ref="searchBox">
    <back-header :inputCallBack="getUserInput" color="red" :doAfterEnter="switchToResult"></back-header>
    <two-search-list v-if="!showResultPageFlag" :hots="hots" :history="history"></two-search-list>
    <search-result v-else :userInput="userInput"></search-result>
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
      history: [],
    };
  },
  watch: {
    showResultPageFlag(newFlag) {
      // 当用户进行搜索，即当前页面显示搜索结果组件时，记录用户输入的搜索词
      // push一个对象进history数组的原因是，为了使得history和hots的格式一致，这样这两部分才能共用一个SearchList组件
      if (newFlag) this.history.push({ first: this.userInput });
    },
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
}
</style>
