# 高仿移动端网易云音乐 Vue前端项目

## 技术栈

Vue + Vue-Router + Vuex + Webpack + Axios



## 现在就克隆下来看看吧！

Github地址： https://github.com/cat-walk/music-player-in-vue

项目部署地址： http://meiyun.info

如果你发现该项目有问题，建议先看看本文底部的**项目已知问题**，里面可能会有说明，如果没有，欢迎issue或留言，谢谢～

### 前端部分

1. 安装依赖

```node
npm install
```

2. 起项目

```node
npm run serve
```

### 后端部分

Github地址：https://github.com/Binaryify/NeteaseCloudMusicApi

后端操作见文档。

</br>

</br>

## 界面和功能展示

### 首页展示banner、推荐歌单，点击可进入排行榜

**歌曲播放界面支持播放进度同步、收藏或取消收藏当前歌曲**

banner、排行榜左边的三个按钮点击没有效果( ´▽｀) ，没时间写那些啦...

| <img src="http://dogfun.oss-cn-beijing.aliyuncs.com/blog/2019-04-02-127.0.0.1_3001_-iPhone%206_7_8-%20-1-.png" width="375" /> | <img src="http://dogfun.oss-cn-beijing.aliyuncs.com/blog/2019-04-02-127.0.0.1_3001_-iPhone%206_7_8-%20-2-.png" width="375" /> | <img src="http://dogfun.oss-cn-beijing.aliyuncs.com/blog/2019-04-02-127.0.0.1_3001_-iPhone%206_7_8-%20-3-.png" width="375" /> |
| :----------------------------------------------------------: | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <img src="http://dogfun.oss-cn-beijing.aliyuncs.com/blog/2019-04-02-127.0.0.1_3001_-iPhone%206_7_8-%20-4-.png" width="375" /> | <img src="http://dogfun.oss-cn-beijing.aliyuncs.com/blog/2019-04-02-127.0.0.1_3001_-iPhone%206_7_8-%20-5-.png" width="375" /> | <img src="http://dogfun.oss-cn-beijing.aliyuncs.com/blog/2019-04-02-127.0.0.1_3001_-iPhone%206_7_8-%20-6-.png" width="375" /> |

</br>

</br>


### 实现了登录功能

登录后展示头像和昵称，且可进入个人中心页面，可查看收藏的音乐和最近播放过的音乐。


| <img src="http://dogfun.oss-cn-beijing.aliyuncs.com/blog/2019-04-02-127.0.0.1_3001_-iPhone%206_7_8-%20-12-.png" width="375" /> | <img src="http://dogfun.oss-cn-beijing.aliyuncs.com/blog/2019-04-02-127.0.0.1_3001_-iPhone%206_7_8-%20-13-.png" width="375" /> | <img src="http://dogfun.oss-cn-beijing.aliyuncs.com/blog/2019-04-02-127.0.0.1_3001_-iPhone%206_7_8-%20-14-.png" width="375" /> |
| :----------------------------------------------------------: | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <img src="http://dogfun.oss-cn-beijing.aliyuncs.com/blog/2019-04-02-127.0.0.1_3001_-iPhone%206_7_8-%20-15-.png" width="375" /> | <img src="http://dogfun.oss-cn-beijing.aliyuncs.com/blog/2019-04-02-127.0.0.1_3001_-iPhone%206_7_8-%20-16-.png" width="375" /> | <img src="http://dogfun.oss-cn-beijing.aliyuncs.com/blog/2019-04-02-127.0.0.1_3001_-iPhone%206_7_8-%20-17-.png" width="375" /> |

</br>

</br>

### 搜索模块：热门搜索、搜索历史、搜索建议


| <img src="http://dogfun.oss-cn-beijing.aliyuncs.com/blog/2019-04-02-127.0.0.1_3001_-iPhone%206_7_8-%20-8-.png" width="375" /> | <img src="http://dogfun.oss-cn-beijing.aliyuncs.com/blog/2019-04-02-127.0.0.1_3001_-iPhone%206_7_8-%20-9-.png" width="375" /> |
| :----------------------------------------------------------: | ------------------------------------------------------------ |
| <img src="http://dogfun.oss-cn-beijing.aliyuncs.com/blog/2019-04-02-127.0.0.1_3001_-iPhone%206_7_8-%20-10-.png" width="375" /> | <img src="http://dogfun.oss-cn-beijing.aliyuncs.com/blog/2019-04-02-127.0.0.1_3001_-iPhone%206_7_8-%20-11-.png" width="375" /> |

</br>

</br>

## 项目结构

PS：

1. 打勾的为已完成的内容，现在本项目除个人信息修改以外，其他功能都已完成。

2. 字体加粗的部分为一个组件，第二次使用同一组件（即组件复用）时不再加粗，以做标识。

- [x] **1. 侧边栏模块**
  - [x] 个人信息展示（头像、昵称）
    - [ ] 个人信息修改
  - [x] 登录按钮
    - [x] **登录模块**
- [x] **2. 音乐推荐模块**（主页)
  - [x] **轮播图banner模块**
  - [x] 排行榜入口
    - [x] **排行榜模块**
      - [x] **歌单详情模块**
        - [x] **播放控制模块：实现了收藏/取消收藏歌曲的功能，实现了添加到最近播放歌曲的功能**
  - [x] **推荐歌单模块**
    - [x] 歌单详情模块
      - [x] 播放控制模块：实现了收藏/取消收藏歌曲的功能，实现了添加到最近播放歌曲的功能

- [x] **3. 个人中心模块**
  - [x] 最近播放歌曲入口
    - [x] **最近播放歌曲展示模块**
      - [x] 播放控制模块：实现了收藏/取消收藏歌曲的功能，实现了添加到最近播放歌曲的功能
  - [x] 我的收藏入口
    - [x] 歌单详情模块
      - [x] 播放控制模块：实现了收藏/取消收藏歌曲的功能，实现了添加到最近播放歌曲的功能
- [x] **4. 搜索模块**
  - [x] **搜索框模块**
    - [x] **搜索结果模块**
      - [x] 播放控制模块：实现了收藏/取消收藏歌曲的功能，实现了添加到最近播放歌曲的功能
  - [x] **热门搜索模块**
    - [x] 搜索结果模块
      - [x] 播放控制模块：实现了收藏/取消收藏歌曲的功能，实现了添加到最近播放歌曲的功能
  - [x] 搜索历史模块（与热门搜索模块公用一个组件）
    - [x] 搜索结果模块
      - [x] 播放控制模块：实现了收藏/取消收藏歌曲的功能，实现了添加到最近播放歌曲的功能

</br>

</br>

## 代码规范

使用EsLint, lint规范采用airbnb 的js 代码规范

[在VSCode里配置 ESLint + Airbnb + Vue](https://catwalk.red/2019/03/04/%E5%9C%A8VSCode%E9%87%8C%E9%85%8D%E7%BD%AE%20ESLint%20+%20Airbnb%20+%20Vue/)

</br>

</br>

## 技术方案
- 项目目录结构

  参考 [优雅的 Vue 项目目录结构设计](https://juejin.im/entry/5abd80fa518825558a06b7ce)

- 移动适配方案

  基于[amfe-flexible](https://github.com/amfe/lib-flexible)，进行了符合自己使用习惯的修改

  示例：

  - 根目录字体大小：100px，即1rem = 100px。

  - 设计稿上75px = 75/100 = 0.75rem。

- ~~统一不同浏览器的默认样式: Normalize.css~~现已改用[minireset.css](https://github.com/jgthms/minireset.css)

  Normalize.css：参考 [normalize.css与reset.css的不同](https://www.jianshu.com/p/ad64c21e899a) [normalize.css的使用](https://cnodejs.org/topic/57f3846e83a4d9176a71da82)

- 侧边栏实现：[vue-slideout](https://github.com/vouill/vue-slideout)

- 轮播图实现：[在Vue中使用Swiper](https://github.com/surmon-china/vue-awesome-swiper)

</br>

</br>

## 项目已知问题

**收藏歌曲功能**

1. 点击收藏歌曲按钮后，有时会有一定的延迟（0.5s～5s，视网络情况）收藏才会成功。

   该问题可能是后台对网易云的数据做了缓存导致的。（这个思考并没有动脑子，咳咳( ´▽｀)

2. 由于尚未做节流和防抖，过于密集地点击收藏按钮时，可能会导致收藏/取消收藏功能不生效。



**播放歌曲页面**

1. 由于一系列复杂的问题，通过搜索界面进入歌曲控制页面的话，没有封面图片，只有懒加载的默认图片
2. 播放音乐时，旋转的封面图片有时会出现闪动
3. **如果你打开某一首歌无法播放，那可能这首歌是要付费才能播放的，换一首即可。**有时间会优化需要付费才能播放的提示。



**侧边栏（Vue-Slideout插件实现，=====>甩锅:) ）**

1. 在"个人中心”页面下（还有部分其他页面），呼出侧边栏的按钮无法点击

2. 在一些不需要侧边栏功能的页面，尚未禁用呼出侧边栏功能

3. **侧边栏暂时只能通过左滑操作来关闭**，尚未实现点击空白处关闭侧边栏



**ios端**

1. 由于**iOS下规定audio标签不能自动播放**，因此，**iOS环境下，第一次播放音乐时，需要点击暂停后再点击播放按钮**，如此即可。
2. 点击底部音乐控制面板后，有时会重新开始播放



</br>

**写这个项目的经验和收获将在整理后发到我的Github上，应该不会鸽**

</br>

</br>

## 致谢

**非常感谢后台提供者[Binaryify](https://github.com/Binaryify/NeteaseCloudMusicApi)，接口很稳定，文档很完善**

**非常感谢[CaiJinyc](https://github.com/CaiJinyc/vue-music-webapp)，我从ta的项目里学到了不少**

1. https://github.com/CaiJinyc/vue-music-webapp
2. https://github.com/Binaryify/NeteaseCloudMusicApi