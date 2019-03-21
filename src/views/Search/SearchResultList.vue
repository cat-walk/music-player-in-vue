<template>
  <ul class="track-list">
    <li class="track-item" v-for="(item, index) in tracks" :key="index">
      <router-link
        :to="{name: 'song', query: {name: item.name, singers: formatSinger(item.artists), id:item.id}, params: {coverImgUrl: picUrlList[index]}}"
        class="link-to-play-control"
      >
        <div class="track-info">
          <p class="track-title ellipsis">{{item.name}}</p>
          <p class="track-desc ellipsis">{{formatSinger(item.artists)}} - {{item.album.name}}</p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { formatSinger } from '../../utils/utils';
import { getCoverImgUrl } from '../../api/SearchResultList';

export default {
  data() {
    return {
      picUrlList: [],
    };
  },
  props: ['tracks'],
  methods: {
    formatSinger,
    // 该方法将用于获取封面图片的URL
    async getData(albumId) {
      const data = await getCoverImgUrl(albumId);
      const { picUrl } = data.album;
      return picUrl;
    },
  },
  mounted() {
    // 这是一个极其不优雅的小布丁
    // 从搜索结果列表跳转到播放控制组件的时候，不会在this.$route.params里带上coverImgUrl
    // 因此需要先发请求请求到coverImgUrl，并写入this.$route.params
    this.tracks.forEach((item, index) => {
      this.picUrlList[index] = this.getData(item.album.id);
      // debugger;
    });
  },
};
</script>

<style scoped lang='less'>
.track-list {
  .track-item {
    .link-to-play-control {
      display: flex;
      align-items: center;
      height: 0.6rem;
      border-bottom: 1px solid #e4e4e4;
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
</style>
