# music-player-in-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## 代码规范

使用eslint, lint规范采用airbnb 的js 代码规范

[在VSCode里配置 ESLint + Airbnb + Vue](https://catwalk.red/2019/03/04/%E5%9C%A8VSCode%E9%87%8C%E9%85%8D%E7%BD%AE%20ESLint%20+%20Airbnb%20+%20Vue/)

## 技术方案
### 项目目录结构
参考 [优雅的 Vue 项目目录结构设计](https://juejin.im/entry/5abd80fa518825558a06b7ce)
### 移动适配方案
1. [flexible.js 移动端自适应方案]( https://www.jianshu.com/p/04efb4a1d2f8)

2. [flexible.js 布局详解](http://caibaojian.com/flexible-js.html)

根目录字体大小：100px，即1rem = 100px。

设计稿上75px = 75/100 = 0.75rem。

### 统一不同浏览器的默认样式: Normalize.css

Normalize.css：参考 [normalize.css与reset.css的不同](https://www.jianshu.com/p/ad64c21e899a) [normalize.css的使用](https://cnodejs.org/topic/57f3846e83a4d9176a71da82)

### 侧边栏实现：[vue-slideout](https://github.com/vouill/vue-slideout)

### 轮播图实现：[在Vue中使用Swiper](https://github.com/surmon-china/vue-awesome-swiper)



## 致谢
1. https://github.com/CaiJinyc/vue-music-webapp
2. https://github.com/Binaryify/NeteaseCloudMusicApi