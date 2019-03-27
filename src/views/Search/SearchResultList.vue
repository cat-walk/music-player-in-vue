<template>
  <ul class="track-list">
    <li class="track-item" v-for="(item, index) in tracks" :key="index">
      <router-link
        :to="{name: 'Song', query: {name: item.name, singers: formatSinger(item.artists), id:item.id, album: item.album.id}, params: {coverImgUrl: '/'}}"
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
// 出于提取公共组件的初衷，原本想加SearchResultList组件和PlayListDetail页面下的SongList组件封装成一个组件
// 但由于二者的api不同，取得的数据格式也不同，导致暂时封装失败
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
