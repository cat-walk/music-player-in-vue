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
    // 可能有误：payload和isPlaying不一样的情况下，才去更新isPlaying，防止“isPlaying为true时再设置isPlaying为true，导致audio标签从头开始播放的问题”
    if (state.isPlaying !== payload) state.isPlaying = payload;
  },
  [Types.SET_CURRENT_TIME](state, payload) {
    state.currentTime = payload;
  },
  [Types.SET_LIKE_LIST](state, payload) {
    state.likelist = payload;
  },
  [Types.UPDATE_RECENT_PLAYLIST](state, payload) {
    const { recentPlaylist } = state;
    const strPayload = `${payload}`; // 统一转成字符串
    if (recentPlaylist.indexOf(strPayload) === -1) recentPlaylist.push(strPayload);
  },
  [Types.UPDATE_LOGIN_STATUS](state, payload) {
    state.loginStatus = payload;
  },
};
