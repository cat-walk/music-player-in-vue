<template>
  <Header :class="headerClass">
    <back-btn></back-btn>
    <span v-if="title" class="back-header-title">{{title}}</span>
    <input
      v-if="input"
      v-model="userInput"
      @change="getData"
      type="text"
      class="header-input"
      autofocus
      @keydown.enter="handleEnter"
    >
    <div v-if="searchSuggestionsFlag" class="search-suggestions-container">
      <ul class="search-suggestions-list">
        <li class="search-suggestions-item">{{`搜索"${userInput}"`}}</li>
        <li v-for="(item, index) in allMatch" :key="index" class="search-suggestions-item">
          <i class="iconfont icon-sousuo"></i>
          <span class="keyword-item">{{item.keyword}}</span>
        </li>
      </ul>
    </div>
  </Header>
</template>

<script>
import BackBtn from './BackBtn.vue';
// 可能并没有将input封装进来的必要
import { getSearchSuggestions } from '../api/BackHeader';

export default {
  data() {
    return {
      headerClass: '',
      userInput: null,
      allMatch: [],
    };
  },
  methods: {
    async getData(newValue) {
      const data = await getSearchSuggestions(newValue);
      this.allMatch = data.result.allMatch;
    },
    cleanUserInput() {
      this.userInput = null;
    },
    handleEnter() {
      this.doAfterUserEnter(this.userInput);
      // 每次用户敲击enter键，执行完父组件传来的回调函数后，都要清空用户的输入
      this.cleanUserInput();
    },
  },
  watch: {
    userInput(newUserInput) {
      // 该判定条件防止这种情况：输入框已经为空，但用户还在不断删除时，仍然发起无用请求
      if (newUserInput !== '') this.getData(newUserInput);
    },
  },
  computed: {
    // 搜索建议的显示完全依赖于用户的输入情况
    searchSuggestionsFlag() {
      return this.userInput !== null && this.userInput !== '';
    },
  },
  components: {
    BackBtn,
  },
  // input参数是来自父组件的方法，用于获取用户输入的值userInput
  props: ['title', 'color', 'doAfterUserEnter', 'input'],
  mounted() {
    this.headerClass = `back-header ${this.color}`;
  },
};
</script>

<style scoped lang='less'>
.back-header {
  position: fixed; // FIXME: 由于slideout插件给id为panel的元素设置了will-change: transform, 导致固定定位失效
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 0.44rem;
  color: #f1f1f1;
  &.red {
    background-color: #d44439;
  }
  &.trans {
    background-color: rgba(0, 0, 0, 0);
  }
  .back-header-title {
    margin: 0 0.05rem;
    font-size: 0.18rem;
    font-weight: 400;
  }
  .header-input {
    width: 85%;
    height: 0.28rem;
    margin-left: 0.1rem;
    border: none;
    border-bottom: 1px solid #e6e6e6;
    background: #d44439;
    color: #e6e6e6;
    font-size: 0.17rem;
  }
  .search-suggestions-container {
    position: absolute;
    left: 0.3rem;
    top: 0.44rem;
    width: 90%;
    box-shadow: 0 0 0.05rem rgba(0, 0, 0, 0.5);
    background: #fff;
    color: #2e3030;
    .search-suggestions-list {
      .search-suggestions-item {
        font-size: 0.15rem;
        color: gray;
        padding: 0.1rem;
        border-bottom: 1px solid #e4e4e4;
        &:first-child {
          color: rgb(75, 75, 180);
        }
        .keyword-item {
          margin-left: 0.1rem;
        }
      }
    }
  }
}
</style>
