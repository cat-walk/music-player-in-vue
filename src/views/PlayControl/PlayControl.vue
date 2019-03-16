<template>
  <section class="page-wrap">
    <header class="play-control-header">
      <go-back-btn class="back-btn"></go-back-btn>
      <div class="song-info">
        <h1 class="song-name">{{this.$route.query.name}}</h1>
        <p class="singers">{{this.$route.query.singers}}</p>
      </div>
    </header>
    <section class="main">
      <div class="cover-img-box">
        <div class="cover-img-wrap">
          <img :src="this.$route.params.coverImgUrl" alt class="cover-img">
        </div>
      </div>
      <div class="progress-wrap">
        <span class="played-time">00:00</span>
        <span class="total-progress">
          <span class="has-played-progress"></span>
        </span>
        <span class="total-time">{{duration}}</span>
      </div>
      <div class="control-panel">
        <button class="star-me-btn">
          <i class="iconfont icon-cebianlan"></i>
        </button>
        <button class="play-last-song-btn">
          <i class="iconfont icon-cebianlan"></i>
        </button>
        <button class="play-stop-btn">
          <i class="iconfont icon-cebianlan"></i>
        </button>
        <button class="play-next-song-btn">
          <i class="iconfont icon-cebianlan"></i>
        </button>
        <button class="other-operation-btn">
          <i class="iconfont icon-cebianlan"></i>
        </button>
      </div>
      <audio :src="musicUrl" ref="audio" controls @load="refreshDuration"></audio>
    </section>
  </section>
</template>

<script>
import GoBackBtn from '../../components/GoBackBtn.vue';
import { getMusicUrl } from '../../api/PlayControl/PlayControl';

export default {
  data() {
    return {
      musicUrl: '',
      duration: '00:00',
    };
  },
  components: {
    GoBackBtn,
  },
  methods: {
    async getDataThenSet() {
      const res = await getMusicUrl(this.$route.query.id);
      this.musicUrl = res.data[0].url;
      // this.$refs.audio.load(() => {
      //   this.duration = this.$refs.audio.duration;
      // });
      // debugger;
    },
    refreshDuration() {
      // FIXME: load事件不触发
      this.duration = this.$refs.audio.duration;
      console.log(this.duration);
    },
  },
  created() {
    this.getDataThenSet();
    console.log(this.$route.params);
  },
  mounted() {},
};
</script>

<style scoped lang='less'>
.page-wrap {
  background: rgba(0, 0, 0, 0.3);
  .play-control-header {
    height: 0.5rem;
    border-bottom: 1px solid #e4e4e4;
    .back-btn {
      display: inline-block;
      vertical-align: middle;
      color: #f1f1f1;
      width: 0.5rem;
      height: 0.5rem;
      text-align: center;
    }
    .song-info {
      display: inline-block;
      .song-name {
        color: #f1f1f1;
        font-size: 0.2rem;
        margin: 0.05rem 0;
      }
      .singers {
        color: lightgray;
      }
    }
  }
  .main {
    .cover-img-box {
      width: 2.5rem;
      height: 2.5rem;
      background-color: #2e3030;;
      border-radius: 50%;
      // display: flex;
      // justify-content: space-around;
      // align-items: center;
      overflow: hidden;
      .cover-img-wrap {
        width: 70%;
        margin: 15% auto 0;
        border-radius: 50%;
        overflow: hidden;
        .cover-img {
          width: 100%;
        }
      }
    }
  }
}
</style>
