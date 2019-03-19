import * as api from '../api/PlayControl/PlayControl';
import * as Types from './mutation-types';

export default {
/*   async getThenSetMusicUrl({ commit }, musicId) {
    try {
      const res = await api.getMusicUrl(musicId);
      const musicUrl = res.data[0].url;
      commit(Types.SET_MUSIC_URL, musicUrl);
    } catch (e) {
      console.log(e);
    }
  },
  getThenSetCoverImgUrl({ commit }, coverImgUrl) {
    commit(Types.SET_COVER_IMG_URL, coverImgUrl);
  }, */
  async getThenSetSongInfo({ commit }, songData) {
    try {
      const res = await api.getMusicUrl(songData.id);
      const musicUrl = res.data[0].url;
      commit(Types.SET_SONG_INFO, { ...songData, musicUrl });
    } catch (e) {
      console.log(e);
    }
  },
  getThenSetDuration({ commit }, duration) {
    commit(Types.SET_DURATION, duration);
  },
  getThenSetIsPlaying({ commit }, isPlaying) {
    commit(Types.SET_IS_PLAYING, isPlaying);
  },
  getThenSetCurrentTime({ commit }, currentTime) {
    commit(Types.SET_CURRENT_TIME, currentTime);
  },
};
