<template>
  <section class="official-list-box">
    <h2 class="official-list-title">官方榜</h2>
    <ul class="official-list">
      <li v-for="(item, index) in officialList" :key="index" class="offical-list-unit">
        <router-link :to="{path: '/play-list-detail', query: {id: item.id}}">
          <div class="img-wrap">
            <img v-lazy="item.coverImgUrl" alt class="coverImg">
          </div>
          <div class="tracks-box">
            <p
              v-for="(track, indexOfTrack) in item.tracks"
              :key="indexOfTrack"
              class="track-title ellipsis"
            >{{ indexOfTrack + 1}}.{{track.first}} - {{track.second}}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['officialList'],
};
</script>

<style scoped lang='less'>
img[lazy=loading]{
  width: 1rem;
  height: 1rem;
}

a {
  display: flex;
  align-items: center;
}
.official-list-box {
  padding-top: 0.58rem;
  .official-list-title {
    font-size: .18rem;
  }
  .official-list {
    padding-top: 0.1rem;
    .offical-list-unit {
      height: 1.2rem;
      .img-wrap {
        width: 30%;
        overflow: hidden;
        .coverImg {
          width: 100%;
          border-radius: 0.04rem;
        }
      }
      .tracks-box {
        width: 66%;
        .track-title {
          margin: 0.15rem 0.1rem;
          color: gray;
          font-size: .15rem;
        }
      }
    }
  }
}
</style>
