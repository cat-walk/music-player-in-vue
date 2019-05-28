<template>
  <section>
    <back-header color="trans"></back-header>
    <section class="play-list-detail-top" ref="playListDesc">
      <div class="img-wrap">
        <img v-lazy="coverImgUrl" class="cover-img">
        <!-- TODO: lazyload是否生效？ -->
      </div>
      <h1 class="play-list-title">{{playListTitle}}</h1>
      <p class="play-list-update-time">最近更新：{{updateTime}}</p>
    </section>
    <section class="play-list-detail-bottom">
      <div class="play-list-control">
        <div class="play-all">
          <i class="iconfont icon-bofang"></i>
          <span>播放全部（共{{trackCount}}首）</span>
        </div>
        <div class="star-me">+ 收藏（{{subscribedCount | formatToTenThousand}}万）</div>
      </div>
      <spin :spining="tracks.length === 0">
        <song-list :tracks="tracks"></song-list>
      </spin>
    </section>
  </section>
</template>

<script>
import moment from "moment"; // 引入Moment.js插件
import BackHeader from "../../components/BackHeader.vue";
import SongList from "../../components/SongList.vue";
import { getPlayListDetail } from "../../api/PlayListDetail/PlayListDetail";

moment.locale("zh-cn"); // 设置moment显示中文

export default {
  name: "PlaylistDetail",
  data() {
    return {
      coverImgUrl: "",
      playListTitle: "",
      updateTime: "",
      tracks: [],
      trackCount: 0,
      subscribedCount: ""
    };
  },
  components: {
    BackHeader,
    SongList
  },
  methods: {
    getData() {
      getPlayListDetail(this.$route.query.id).then(res => {
        // 如果图片的方案行不通，就通过背景来设置歌单的封面
        // this.$refs.playListDesc.style.background = `url(${res.playlist.coverImgUrl})`;
        const { playlist } = res;
        this.coverImgUrl = playlist.coverImgUrl;
        this.playListTitle = playlist.name;
        this.updateTime = moment(playlist.updateTime).format("MMM Do");
        this.tracks = playlist.tracks;
        this.trackCount = playlist.trackCount;
        this.subscribedCount = playlist.subscribedCount;
      });
    }
  },
  filters: {
    formatToTenThousand(value) {
      return (value / 10000).toFixed(1);
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang='less'>
// TODO: 做成全局懒加载的话，这个代码放哪里？
img[lazy="loading"] {
  width: 3.75rem;
  height: 3.75rem;
}

.play-list-detail-top {
  position: relative;
  .img-wrap {
    height: 2.8rem;
    overflow: hidden;
    .cover-img {
      width: 100%;
      margin-top: -0.5rem; // 调整图片的位置
    }
  }
  .play-list-title {
    position: absolute;
    bottom: 18%;
    left: 10%;
    font-size: 0.3rem;
    color: #fff;
  }
  .play-list-update-time {
    position: absolute;
    bottom: 10%;
    left: 10%;
    color: #fff;
    font-size: 0.12rem;
  }
}
.play-list-detail-bottom {
  position: relative;
  z-index: 2;
  margin-top: -0.1rem;
  .play-list-control {
    display: flex;
    background: #fff;
    height: 0.4rem;
    border-radius: 0.1rem 0.1rem 0 0;
    border-bottom: 1px solid #e4e4e4;
    overflow: hidden;
    .play-all {
      display: flex;
      align-items: center; // 垂直居中
      flex: 3; // 设置宽度比例
      font-size: 0.16rem;
      color: #2e3030;
      .iconfont {
        font-size: 0.22rem;
        margin: 0 0.12rem 0 0.12rem;
      }
    }
    .star-me {
      display: flex;
      align-items: center; // 垂直居中
      justify-content: space-around; // 水平居中
      flex: 2; // 设置宽度比例
      background: #d44439;
      color: #f1f1f1;
      font-size: 0.16rem;
    }
  }
}
</style>
