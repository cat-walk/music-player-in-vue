<template>
  <section class="page-wrap" ref="pageWrap">
    <header class="play-control-header">
      <back-btn class="back-btn"></back-btn>
      <div class="song-info">
        <h1 class="song-name ellipsis">{{this.$route.query.name}}</h1>
        <p class="singers ellipsis">{{this.$route.query.singers}}</p>
      </div>
    </header>
    <section class="main">
      <div class="cover-img-box">
        <div class="img-wrap" ref="rotateCD">
          <img alt class="cover-img" v-lazy="this.$route.params.coverImgUrl">
        </div>
      </div>
    </section>
    <section class="play-control-footer">
      <div class="progress-wrap">
        <span class="has-played-time">{{currentTime | formatTime}}</span>
        <span class="total-progress">
          <span class="has-played-progress" ref="progress"></span>
        </span>
        <span class="total-time">{{duration | formatTime}}</span>
      </div>
      <div class="control-panel">
        <button class="star-me-btn" @click="toggleStarStatus">
          <i :class="starBtnStyle"></i>
        </button>
        <button class="play-last-song-btn">
          <i class="iconfont icon-shangyishoushangyige"></i>
        </button>
        <button class="play-stop-btn" @click="toggleStatus">
          <i :class="iconClassname"></i>
        </button>
        <button class="play-next-song-btn">
          <i class="iconfont icon-xiayigexiayishou"></i>
        </button>
        <button class="other-operation-btn">
          <i class="iconfont icon-gengduoxiao"></i>
        </button>
      </div>
    </section>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BackBtn from '../../components/BackBtn.vue';
import { getScreenHeight } from '../../utils/utils';
import { toggleStarTheSong } from '../../api/PlayControl/PlayControl';

export default {
  name: 'PlayControl',
  data() {
    return {
      iconClassname: 'iconfont icon-zanting',
    };
  },
  computed: {
    ...mapGetters([
      'duration',
      'isPlaying',
      'currentTime',
      'likelist',
      'songInfo',
    ]),
    songId() {
      return this.songInfo.id;
    },
    thisSongInLikelist() {
      return this.likelist.indexOf(+this.songId) === -1;
    },
    starBtnStyle() {
      return this.thisSongInLikelist
        ? 'iconfont icon-aixin1'
        : 'iconfont icon-aixin1 red';
    },
  },
  components: {
    BackBtn,
  },
  methods: {
    ...mapActions([
      'getThenSetSongInfo',
      'getThenSetIsPlaying',
      'getThenSetLikelist',
    ]),
    // 设置页面高度为铺满整个屏幕
    setPageHeight() {
      this.$refs.pageWrap.style.height = getScreenHeight();
    },
    toggleToPlayStatus() {
      this.iconClassname = 'iconfont icon-zanting';
      $(this.$refs.rotateCD).addClass('rotate');
    },
    toggleToStopStatus() {
      this.iconClassname = 'iconfont icon-bofang1';
      $(this.$refs.rotateCD).removeClass('rotate');
    },
    toggleStatus() {
      // 切换播放和暂停状态
      this.getThenSetIsPlaying(!this.isPlaying);
    },
    async toggleStarStatus() {
      try {
        const like = this.thisSongInLikelist;
        await toggleStarTheSong(this.songId, like);
        const uid = localStorage.getItem('uid');
        this.getThenSetLikelist(uid);
      } catch (error) {
        if (error.code === 301) {
          this.$router.push('/login');
        } else {
          console.log(error);
        }
      }
    },
  },
  watch: {
    isPlaying(newStatus) {
      // 切换播放和暂停状态
      newStatus ? this.toggleToPlayStatus() : this.toggleToStopStatus();
    },
    currentTime(newTime) {
      // 更新播放进度
      this.$refs.progress.style.width = `${(newTime / this.duration) * 100}%`;
    },
  },
  filters: {
    formatTime(time) {
      // 取整且补零
      const mm = `${Math.floor(time / 60)}`.padStart(2, '0');
      const ss = `${Math.floor(time % 60)}`.padStart(2, '0');
      return `${mm}:${ss}`;
    },
  },
  created() {
    const uid = localStorage.getItem('uid');
    // 选中一个新的歌曲，且设置好了歌曲的url后，就将isPlaying设为true
    // 其他状态都由isPlaying的状态，或者MyAudio组件的currentTime决定
    this.getThenSetSongInfo({
      ...this.$route.query,
      coverImgUrl: this.$route.params.coverImgUrl,
    });
    this.getThenSetIsPlaying(true); // 这行代码可能写在MyAudio的watch里更好
    // 获取用户的收藏歌曲列表以确定爱心按钮的样式
    this.getThenSetLikelist(uid);
  },
  mounted() {
    // 设置页面高度为整屏
    this.setPageHeight();
  },
};
</script>

<style scoped lang='less'>
// lazy-load样式
img[lazy="loading"] {
  width: 100%;
  height: 100%;
}

@keyframes infiniteRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rotate {
  animation: infiniteRotate 10s infinite linear;
}

.page-wrap {
  background: rgba(0, 0, 0, 0.3);
  .play-control-header {
    position: relative;
    height: 10%;
    .back-btn {
      color: #f1f1f1;
      width: 0.5rem;
      height: 0.5rem;
      text-align: center;
      position: absolute;
      left: 0.01rem;
      top: 20%;
    }
    .song-info {
      .song-name {
        color: #f1f1f1;
        font-size: 0.2rem;
        padding: 0.1rem 0 0;
        text-align: center;
      }
      .singers {
        text-align: center;
        color: lightgray;
        font-size: 0.16rem;
      }
    }
  }
  .main {
    height: 72%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .cover-img-box {
      width: 80vw;
      height: 80vw;
      background-color: #2e3030;
      border-radius: 50%;
      overflow: hidden;
      .img-wrap {
        width: 70%;
        height: 70%; // 设置高度以让子元素宽高相同
        margin: 15% auto 0;
        border-radius: 50%;
        overflow: hidden;
        .cover-img {
          width: 100%;
          height: 100%; // 不设置高在某些情况下会有BUG
        }
      }
    }
  }
  // 固定定位应该有问题，那要如何设置呢？
  .play-control-footer {
    height: 18%;
    .progress-wrap {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 0.1rem;
      font-size: 0.16rem;
      .has-played-time {
        color: #f1f1f1;
      }
      .total-time {
        color: lightgray;
      }
      .total-progress {
        width: 70%;
        height: 0.03rem;
        background: lightgray;
        .has-played-progress {
          display: block;
          width: 0;
          height: 100%;
          background-color: #d44439;
        }
      }
    }
    .control-panel {
      display: flex;
      justify-content: space-around;
      > * {
        margin: 0.2rem 0;
        .iconfont {
          font-size: 0.3rem;
          color: #f1f1f1;
        }
      }
      .star-me-btn {
        .iconfont.red {
          color: red;
        }
      }
      .play-stop-btn {
        .iconfont {
          font-size: 0.5rem;
        }
      }
    }
  }
}
</style>
