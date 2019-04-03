import * as playControlApi from '../api/PlayControl/PlayControl';
import * as myApi from '../api/My';
import * as loginRegisterApi from '../api/SideBar';

import * as Types from './mutation-types';

export default {
  async getThenSetSongInfo({ commit }, songData) {
    try {
      const songId = songData.id;
      const res = await playControlApi.getMusicUrl(songId);
      const musicUrl = res.data[0].url;

      // 同时将这首歌存入该用户的最近播放记录里
      commit(Types.UPDATE_RECENT_PLAYLIST, songId);

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
  async getThenSetLoginStatus({ commit }) {
    try {
      await loginRegisterApi.getLoginStatus();
      commit(Types.UPDATE_LOGIN_STATUS, true);
    } catch (e) {
      if (e.code === 301) {
        commit(Types.UPDATE_LOGIN_STATUS, false);
      } else {
        console.log(e);
      }
    }
  },
};
