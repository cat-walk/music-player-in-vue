<template>
  <section>
    <back-header color="trans"></back-header>
    <section class="play-list-detail-top" ref="playListDesc">
      <div class="img-box">
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
      <ul class="track-list">
        <li class="track-item" v-for="(item, index) in tracks" :key="index">
          <router-link
            :to="{name: 'song', query: {name: item.name, singers: formatSinger(item.ar), id:item.id}, params: {coverImgUrl: item.al.picUrl}}"
            class="link-to-play-control"
          >
            <div class="track-rank">{{index + 1}}</div>
            <div class="track-info">
              <p class="track-title">{{item.name}}</p>
              <p class="track-desc ellipsis">{{formatSinger(item.ar)}} - {{item.al.name}}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import moment from 'moment'; // 引入Moment.js插件
import BackHeader from '../../components/BackHeader.vue';
import { getPlayListDetail } from '../../api/PlayListDetail/PlayListDetail';

moment.locale('zh-cn'); // 设置moment显示中文

export default {
  data() {
    return {
      coverImgUrl: '',
      playListTitle: '',
      updateTime: '',
      tracks: [],
      trackCount: 0,
      subscribedCount: '',
    };
  },
  components: {
    BackHeader,
  },
  methods: {
    getData() {
      getPlayListDetail(this.$route.query.id).then((res) => {
        // 如果图片的方案行不通，就通过背景来设置歌单的封面
        // this.$refs.playListDesc.style.background = `url(${res.playlist.coverImgUrl})`;
        const { playlist } = res;
        this.coverImgUrl = playlist.coverImgUrl;
        this.playListTitle = playlist.name;
        this.updateTime = moment(playlist.updateTime).format('MMM Do');
        this.tracks = playlist.tracks;
        this.trackCount = playlist.trackCount;
        this.subscribedCount = playlist.subscribedCount;
      });
    },
    formatSinger(singerList) {
      // 拿出列表里面每一项的name，中间用'/'分隔
      let formatedStr = '';
      singerList.forEach((item, index) => {
        formatedStr += `${item.name}/`;
      });
      return formatedStr.slice(0, -1);
    },
  },
  filters: {
    formatToTenThousand(value) {
      return (value / 10000).toFixed(1);
    },
  },
  created() {
    this.getData();
    // debugger;
  },
};
</script>

<style scoped lang='less'>
.play-list-detail-top {
  position: relative;
  .img-box {
    height: 2.8rem;
    overflow: hidden;
    .cover-img {
      width: 100%;
      margin-top: -0.5rem; // 调整图片的位置
    }
  }
  .play-list-title {
    position: absolute;
    bottom: 10%;
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
  .track-list {
    .track-item {
      .link-to-play-control {
        display: flex;
        align-items: center;
        height: 0.6rem;
        border-bottom: 1px solid #e4e4e4;
        .track-rank {
          text-align: center;
          width: 16%;
          font-size: 0.18rem;
        }
        .track-info {
          width: 84%;
          .track-title {
            font-size: 0.16rem;
          }
          .track-desc {
            font-size: 0.14rem;
            color: #757575;
          }
        }
      }
    }
  }
}

// TODO: 做成全局懒加载的话，这个代码放哪里？
image[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
  background: #000;
}
</style>
