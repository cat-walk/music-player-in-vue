<template>
  <div>
    <ul class="play-list-group">
      <li class="play-list-item">
        <!-- TODO: 下面的data -->
        <router-link :to="{name: 'RecentPlay'}">
          <div class="icon-container">
            <i class="iconfont icon-bofang1"></i>
          </div>
          <div class="play-list-desc">
            <span class="play-list-title">最近播放</span>
            <span class="play-list-count">（{{recentPlayCount}}）</span>
          </div>
        </router-link>
      </li>
      <li class="play-list-item">
        <router-link :to="{path: '/play-list-detail',query: {id: likelistId,}}">
          <div class="icon-container">
            <i class="iconfont icon-aixin1"></i>
          </div>
          <div class="play-list-desc">
            <span class="play-list-title">我喜欢的音乐</span>
            <span class="play-list-count">（{{likelistCount}}）</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { getUserPlaylist } from '../../api/My';

export default {
  name: 'My',
  data() {
    return {
      likelistId: null,
    };
  },
  computed: {
    ...mapGetters(['likelistCount', 'recentPlaylist']),
    recentPlayCount() {
      return this.recentPlaylist.length;
    },
  },
  methods: {
    ...mapActions(['getThenSetLikelist']),
    async getData() {
      const uid = localStorage.getItem('uid');
      // TODO: 下面的代码是否要等第一个请求完成后才会进行第二个请求？
      this.getThenSetLikelist(uid);
      this.getLikelistId(uid);
    },
    async getLikelistId(uid) {
      try {
        const resUserPlaylist = await getUserPlaylist(uid);
        this.likelistId = resUserPlaylist.playlist[0].id;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped lang='less'>
.play-list-group {
  .play-list-item {
    padding: 0.1rem 0.1rem;
    border-bottom: 1px solid #e4e4e4;
    font-size: .16rem;
    .icon-container {
      box-sizing: border-box;
      display: inline-block;
      width: 10%;
      .iconfont {
        font-size: 22px;
        vertical-align: middle;
      }
    }
    .play-list-desc {
      box-sizing: border-box;
      display: inline-block;
      width: 90%;
      > span {
        vertical-align: middle;
      }
    }
  }
}
</style>
