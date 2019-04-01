import * as Types from './mutation-types';

export default {
  /*   [Types.SET_MUSIC_URL](state, payload) {
    state.musicUrl = payload;
  },
  [Types.SET_COVER_IMG_URL](state, payload) {
    state.coverImgUrl = payload;
  }, */
  [Types.SET_SONG_INFO](state, payload) {
    state.songInfo = payload;
  },
  [Types.SET_DURATION](state, payload) {
    state.duration = payload;
  },
  [Types.SET_IS_PLAYING](state, payload) {
    state.isPlaying = payload;
  },
  [Types.SET_CURRENT_TIME](state, payload) {
    state.currentTime = payload;
  },
  [Types.SET_LIKE_LIST](state, payload) {
    state.likelist = payload;
  },
  [Types.UPDATE_RECENT_PLAYLIST](state, payload) {
    const { recentPlaylist } = state;
    if (recentPlaylist.indexOf(payload) === -1) recentPlaylist.push(payload);
  },
  [Types.UPDATE_LOGIN_STATUS](state, payload) {
    state.loginStatus = payload;
  },
};
