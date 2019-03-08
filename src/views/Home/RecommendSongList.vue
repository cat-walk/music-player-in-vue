
<template>
  <div class="horizon-line">
    <h1 class="recom-songlist-header">推荐歌单 ></h1>
    <ul class="songlist-group">
      <li v-for="(item, index) in recomSongList" :key="index" class="songlist-item">
        <div class="img-box">
          <img :src="item.picUrl" alt class="songlist-cover">
          <div class="play-count-box">
            <i class="iconfont icon-erji"></i>
            {{(item.playCount/10000).toFixed(0)}}万
          </div>
        </div>
        <p class="songlist-title">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getRecommendSongList } from '../../api/Home/Home';

export default {
  data() {
    return {
      recomSongList: null,
    };
  },
  methods: {
    getRecom() {
      getRecommendSongList()
        .then((res) => {
          this.recomSongList = res.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getRecom();
  },
};
</script>

<style scoped lang='less'>
.recom-songlist-header {
  font-size: 0.17rem;
  padding-left: 0.03rem;
  margin: 0.28rem 0 0 0;
  font-weight: 400;
}

.songlist-group {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .songlist-item {
    position: relative;
    width: 32%;
    margin: 0.1rem 0;
    .img-box {
      border-radius: 0.02rem;
      overflow: hidden;
      .songlist-cover {
        width: 100%;
        height: 100%;
      }
    }
    .play-count-box{
      position: absolute;
      top: .03rem;
      right: .03rem;
      color: #f1f1f1;
    }
    .songlist-title {
      // font-size: .1rem;
      height: 0.32rem;
      overflow: hidden;
      // text-overflow: ellipsis;
    }
  }
}
</style>
