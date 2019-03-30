<template>
  <section>
    <back-header color="red" title="最近播放"></back-header>
    <song-list :tracks="tracks" class='song-list'></song-list>
  </section>
</template>

<script>
import BackHeader from '../../components/BackHeader.vue';
import SongList from '../../components/SongList.vue';

export default {
  computed: {
    // 对数据做了一下处理，使其可以共用一个组件
    tracks() {
      return this.$route.params.data.weekData.map(item => item.song);
    },
  },
  components: {
    BackHeader,
    SongList,
  },
};
</script>

<style scoped lang='less'>
.song-list{
  padding-top: .44rem;
}
</style>
