<template>
  <ul class="track-list">
    <li class="track-item" v-for="(item, index) in tracks" :key="index">
      <router-link
        :to="{name: 'Song', query: {name: item.name, singers: formatSinger(item.ar), id:item.id}, params: {coverImgUrl: item.al.picUrl}}"
        class="link-to-play-control"
      >
        <div class="track-rank">{{index + 1}}</div>
        <div class="track-info">
          <p class="track-title ellipsis">{{item.name}}</p>
          <p class="track-desc ellipsis">{{formatSinger(item.ar)}} - {{item.al.name}}</p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { formatSinger } from '../utils/utils';

export default {
  name: 'SongList',
  props: ['tracks'],
  methods: {
    formatSinger,
  },
};
</script>

<style scoped lang='less'>
.track-list {
  margin-bottom: 1rem;
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
</style>
