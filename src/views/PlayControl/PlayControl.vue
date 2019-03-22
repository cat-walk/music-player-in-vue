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
      <div class="cover-img-box rotate" ref="rotateCD">
        <div class="img-wrap">
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
        <button class="star-me-btn">
          <i class="iconfont icon-aixin1"></i>
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

export default {
  data() {
    return {
      iconClassname: 'iconfont icon-zanting',
    };
  },
  computed: {
    ...mapGetters(['duration', 'isPlaying', 'currentTime']),
  },
  components: {
    BackBtn,
  },
  methods: {
    ...mapActions(['getThenSetSongInfo', 'getThenSetIsPlaying']),
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
    // 选中一个新的歌曲，且设置好了歌曲的url后，就将isPlaying设为true
    // 其他状态都由isPlaying的状态，或者MyAudio组件的currentTime决定
    this.getThenSetSongInfo({
      ...this.$route.query,
      coverImgUrl: this.$route.params.coverImgUrl,
    });
    this.getThenSetIsPlaying(true); // 这行代码可能写在MyAudio的watch里更好
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

.page-wrap {
  background: rgba(0, 0, 0, 0.3);
  .play-control-header {
    height: 0.5rem;
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
      width: 80%;
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
      width: 3rem;
      height: 3rem;
      margin: 1rem auto;
      background-color: #2e3030;
      border-radius: 50%;
      overflow: hidden;
      &.rotate {
        animation: infiniteRotate 10s infinite linear;
      }
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
    .progress-wrap {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 0.1rem;
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
      .play-stop-btn {
        .iconfont {
          font-size: 0.5rem;
        }
      }
    }
  }
}
</style>
