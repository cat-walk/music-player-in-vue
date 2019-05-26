<template>
  <section class="top-list-box">
    <h2 class="top-list-item-title">{{title}}</h2>
    <ul class="top-list">
      <li v-for="(item, index) in data" :key="index" class="top-list-unit">
        <router-link :to="{path: '/play-list-detail', query: {id: item.id}}">
          <div class="img-wrap">
            <img v-lazy="item.coverImgUrl" alt class="coverImg">
          </div>
          <h3 class="top-list-title">{{item.name}}</h3>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
// 该组件为排行榜页面推荐榜、全球榜、更多榜单的公共组件
export default {
  props: ['data', 'title'],
};
</script>

<style scoped lang='less'>
img[lazy=loading]{
  width: 1rem;
  height: 1rem;
}

.top-list-box {
  padding-top: 0.14rem;
  .top-list-item-title {
    font-size: 0.18rem;
  }

  .top-list {
    padding-top: 0.1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .top-list-unit {
      width: 32%;
      margin-bottom: 0.05rem;
      .img-wrap {
        overflow: hidden;
        .coverImg {
          width: 100%;
          border-radius: 0.04rem;
        }
      }
      .top-list-title {
        color: gray;
        font-weight: 400;
        font-size: 0.12rem;
      }
    }
  }
}
</style>
