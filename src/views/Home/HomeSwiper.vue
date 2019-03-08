<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" class="swiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in banners" :key="index" class="swiper-slide">
      <div class="img-box">
        <img class="banner-img" :src="item.imageUrl" alt>
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
      banners: null,
    };
  },
  methods: {
    getData() {
      getBanner().then((data) => {
        console.log(data);
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
.swiper {
  .swiper-slide {
    .img-box {
      margin: 0 auto; // 实现轮播图水平居中
      width: 3.6rem;
      .banner-img {
        width: 100%;
        border-radius: 0.05rem;
      }
    }
  }
}
</style>
