<!-- The ref attr used to find the swiper instance -->
<template>
  <!-- 用v-if做一下判定，以解决vue-awesome-swiper的loop=true不生效的bug，原理未知 -->
  <swiper v-if="banners.length>1" :options="swiperOption" ref="mySwiper" class="swiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in banners" :key="index" class="swiper-slide">
      <div class="img-wrap">
        <img class="banner-img" v-lazy="item.imageUrl" alt>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { getBanner } from '../../api/Home/Home';

export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
      },
      banners: [],
    };
  },
  methods: {
    getData() {
      getBanner().then((data) => {
        this.banners = data.banners;
      });
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    this.getData();
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style lang="less" scoped>
img[lazy=loading]{
  width: 100%;
  height: 1.4rem;
}

.swiper {
  .swiper-slide {
    .img-wrap {
      margin: 0 auto; // 实现轮播图水平居中
      width: 96%;
      .banner-img {
        width: 100%;
        border-radius: 0.05rem;
      }
    }
  }
}
</style>
