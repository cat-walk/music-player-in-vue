<template>
  <div>
    <header class="mp-header">
      <button class="toggle-button btn-hamburger">
        <i class="iconfont icon-cebianlan"></i>
      </button>
      <router-link to="/home">推荐页</router-link>
      <router-link to="/my">个人中心</router-link>
      <router-link to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    /*     toSearch() {
      this.$router.push('/search');
    }, */
  },
};
</script>

<style scoped lang='less'>
i {
  display: block;
  font-size: 0.22rem;
  color: #f1f1f1;
}

// 播放器顶部导航栏
.mp-header {
  display: flex;
  height: 0.44rem;
  justify-content: space-between; // 实现顶栏平均分布
  align-items: center; // 实现顶栏垂直居中
  background-color: #d44439;
}

a {
  color: lightcoral;
  font-size: 0.15rem;
  &.router-link-active {
    text-decoration: none;
    color: #fcdae9;
  }
}
</style>
