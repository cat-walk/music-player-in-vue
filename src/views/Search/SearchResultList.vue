<template>
  <ul class="track-list">
    <li class="track-item" v-for="(item, index) in tracks" :key="index">
      <router-link
        :to="{name: 'song', query: {name: item.name, singers: formatSinger(item.artists), id:item.id, album: item.album.id}, params: {coverImgUrl: '/'}}"
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

export default {
  props: ['tracks'],
  methods: {
    formatSinger,
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
