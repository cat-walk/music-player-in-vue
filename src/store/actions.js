import * as playControlApi from '../api/PlayControl/PlayControl';
import * as myApi from '../api/My';
import * as Types from './mutation-types';

export default {
  async getThenSetSongInfo({ commit }, songData) {
    try {
      const res = await playControlApi.getMusicUrl(songData.id);
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
  async getThenSetLikelist({ commit }, uid) {
    try {
      const res = await myApi.getUserLikelist(uid);
      const likelistIds = res.ids;
      commit(Types.SET_LIKE_LIST, likelistIds);
    } catch (e) {
      console.log(e);
    }
  },
};
