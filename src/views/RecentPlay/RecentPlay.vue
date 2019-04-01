<template>
  <section>
    <back-header color="red" title="最近播放"></back-header>
    <song-list v-if="tracks.length" :tracks="tracks" class="song-list"></song-list>
    <p v-else class="empty-remind">你最近没有放过歌噢！</p>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import BackHeader from '../../components/BackHeader.vue';
import SongList from '../../components/SongList.vue';
import { getSongDetail } from '../../api/RecentPlay';

export default {
  data() {
    return {
      tracks: [],
    };
  },
  computed: {
    ...mapGetters(['recentPlaylist']),
  },
  watch: {
    async recentPlaylist(newList) {
      if (newList.length) {
        try {
          const res = await getSongDetail(this.recentPlaylist.toString());
          this.tracks = res.songs;
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
  components: {
    BackHeader,
    SongList,
  },
};
</script>

<style scoped lang='less'>
.song-list {
  padding-top: 0.44rem;
}
.empty-remind {
  text-align: center;
  padding: 1rem 0.1rem;
  font-size: 16px;
}
</style>
