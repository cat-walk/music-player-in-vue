// TODO: 整理-引入vuex的原因：PlayControl组件想要拿到MyAudio组件的数据（播放、暂停的方法）,同时想传递音乐的URL给MyAudio组件，而这两组件既不是父子、兄弟组件，也不是只有两三层的祖先后代关系。
// 因此，引入vuex来简化数据传递的流程，虽然牺牲了一部分性能
// TODO: 但应该有别的更好的解决方案。比如说用display来控制PlayControl组件,而不是用路由来控制
// 此次引入vuex就先当练手
export default {
  duration: 0,
  isPlaying: false,
  currentTime: 0,
  songInfo: {
    id: '', // 此处是为了方便写对应的action而添加了id，实际不需要
    musicUrl: '',
    coverImgUrl: '',
    name: '',
    singers: '',
  },
  likelist: [],
  recentPlaylist: [],
  loginStatus: false,
};
