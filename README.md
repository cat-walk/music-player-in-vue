# 高仿网易云音乐 Vue前端项目

## 现在就克隆下来看看吧！

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



## 界面和功能展示

### 首页展示banner、推荐歌单，点击可进入排行榜

**歌曲播放界面支持播放进度同步、收藏或取消收藏当前歌曲**

banner、排行榜左边的三个按钮点击没有效果( ´▽｀) ，没时间写那些啦...



<figure class="half">
  <img src="https://ws1.sinaimg.cn/large/006tKfTcly1g1nvniaitlj30ku112e3r.jpg" width="375" />
  <img src="https://ws1.sinaimg.cn/large/006tKfTcly1g1nvnggnfwj30ku112476.jpg" width="375" />
  <img src="https://ws3.sinaimg.cn/large/006tKfTcly1g1nvnfmjmtj30ku112qd8.jpg" width="375" />
  <img src="https://ws4.sinaimg.cn/large/006tKfTcly1g1nvneh5fcj30ku112tes.jpg" width="375" />
  <img src="https://ws2.sinaimg.cn/large/006tKfTcly1g1nvndlwtaj30ku1127bn.jpg" style="zoom:33%" />
  <img src="https://ws2.sinaimg.cn/large/006tKfTcly1g1nvnce5e0j30ku112njf.jpg" style="zoom:33%" />
</figure>




### 实现了登录功能

登录后展示头像和昵称，且可进入个人中心即“我的”页面，可查看收藏的音乐和最近播放过的音乐。

<figure class="half">
  <img src="https://ws2.sinaimg.cn/large/006tKfTcly1g1nvn3o98jj30ku112gqm.jpg" style="zoom:35%" />
  <img src="https://ws2.sinaimg.cn/large/006tKfTcly1g1nvn34sgmj30ku112jt4.jpg" style="zoom:35%" />
  <img src="https://ws4.sinaimg.cn/large/006tKfTcly1g1nvn2sn6zj30ku112dhl.jpg" style="zoom:35%" />
  <img src="https://ws3.sinaimg.cn/large/006tKfTcly1g1nvn2bx81j30ku11244b.jpg" style="zoom:35%" />
  <img src="https://ws4.sinaimg.cn/large/006tKfTcly1g1nvy9paiaj30ku112wg5.jpg" style="zoom:35%" />
  <img src="https://ws2.sinaimg.cn/large/006tKfTcly1g1nvyay1i0j30ku112wrf.jpg" style="zoom:35%" />
</figure>





### 搜索模块：热门搜索、搜索历史、搜索建议

<figure class="half">
  <img src="https://ws3.sinaimg.cn/large/006tKfTcly1g1nvn6c8n5j30ku112wgw.jpg" style="zoom:33%" />
  <img src="https://ws3.sinaimg.cn/large/006tKfTcly1g1nvn5r15mj30ku11242t.jpg" style="zoom:33%" />
  <img src="https://ws2.sinaimg.cn/large/006tKfTcly1g1nvn569iej30ku112dkd.jpg" style="zoom:33%" />
  <img src="https://ws3.sinaimg.cn/large/006tKfTcly1g1nvn4ggqij30ku112412.jpg" style="zoom:33%" />
</figure>






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





## 代码规范

使用EsLint, lint规范采用airbnb 的js 代码规范

[在VSCode里配置 ESLint + Airbnb + Vue](https://catwalk.red/2019/03/04/%E5%9C%A8VSCode%E9%87%8C%E9%85%8D%E7%BD%AE%20ESLint%20+%20Airbnb%20+%20Vue/)



## 技术方案
- 项目目录结构

  参考 [优雅的 Vue 项目目录结构设计](https://juejin.im/entry/5abd80fa518825558a06b7ce)

- 移动适配方案
  - [flexible.js 移动端自适应方案]( https://www.jianshu.com/p/04efb4a1d2f8)
  - [flexible.js 布局详解](http://caibaojian.com/flexible-js.html)

  根目录字体大小：100px，即1rem = 100px。

  设计稿上75px = 75/100 = 0.75rem。

- 统一不同浏览器的默认样式: Normalize.css

  Normalize.css：参考 [normalize.css与reset.css的不同](https://www.jianshu.com/p/ad64c21e899a) [normalize.css的使用](https://cnodejs.org/topic/57f3846e83a4d9176a71da82)

- 侧边栏实现：[vue-slideout](https://github.com/vouill/vue-slideout)

- 轮播图实现：[在Vue中使用Swiper](https://github.com/surmon-china/vue-awesome-swiper)



## 项目已知问题

1. 点击收藏歌曲按钮后，会有一定的延迟（0.5s～5s）收藏才会成功。
2. 频繁点击收藏按钮会导致收藏/取消收藏功能不生效。

**问题1、2可能是后台对网易云的数据做了缓存导致的。**（这个思考并没有动脑子，咳咳( ´▽｀)

3. 打开侧边栏的按钮有时会失效（侧边栏使用了vue-slideout插件        =====>甩锅:)
4. 由于一系列复杂的问题，通过搜索界面进入歌曲控制页面的话，没有封面图片，只有懒加载的默认图片



**写这个项目的经验和收获将在整理后发到我的Github上，应该不会鸽**



## 致谢

**非常感谢后台提供者[Binaryify](https://github.com/Binaryify/NeteaseCloudMusicApi)，接口很稳定，文档很完善**

**非常感谢[CaiJinyc](https://github.com/CaiJinyc/vue-music-webapp)，我从ta的项目里学到了不少**

1. https://github.com/CaiJinyc/vue-music-webapp
2. https://github.com/Binaryify/NeteaseCloudMusicApi