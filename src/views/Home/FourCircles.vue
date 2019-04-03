<template>
  <div class="four-circles-box">
    <ul class="four-circles">
      <li class="circle-item">
        <div class="circle-box">
          <i class="iconfont icon-icon--"></i>
        </div>
        <h5 class="title">私人FM</h5>
      </li>
      <li class="circle-item">
        <div class="circle-box">
          <i class="iconfont icon-rili"></i>
        </div>
        <h5 class="title">每日推荐</h5>
      </li>
      <li class="circle-item">
        <div class="circle-box">
          <i class="iconfont icon-jiarugedan"></i>
        </div>
        <h5 class="title">歌单</h5>
      </li>
      <li class="circle-item">
        <router-link to="/leader-board">
          <div class="circle-box">
            <i class="iconfont icon-paihangbang"></i>
          </div>
          <h5 class="title">排行榜</h5>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.four-circles-box {
  margin: 0.2rem 0;
  .four-circles {
    display: flex;
    justify-content: space-around;
    .circle-item {
      .circle-box {
        margin: 0.05rem auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 50%;
        background-color: #d44439;
        width: 0.5rem;
        height: 0.5rem;
        // box-shadow: 0 0 .05rem #000;
        .iconfont {
          color: #f1f1f1;
          font-size: 0.25rem;
        }
      }
      .title {
        text-align: center;
        font-weight: 400;
        font-size: .16rem;
      }
    }
  }
}

a {
  text-decoration: none;
  color: #000;
  font-size: 0.15rem;
  &.router-link-active {
    // text-decoration: none;
    // color: #000;
  }
}
</style>
