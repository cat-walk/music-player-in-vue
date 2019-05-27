<!-- The ref attr used to find the swiper instance -->
<template>
  <!-- 用v-if做一下判定，以解决vue-awesome-swiper的loop=true不生效的bug，原理未知 -->
  <swiper v-if="banners.length>1" :options="swiperOption" ref="mySwiper" class="swiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in banners" :key="index" class="swiper-slide">
      <div class="img-wrap">
        <img class="banner-img swiper-lazy" :data-src="item.imageUrl" alt>
        <div class="swiper-lazy-preloader"></div>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { getBanner } from "../../api/Home/Home";

export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        autoplay: {
          disableOnInteraction: false // 用户操作swiper后，不停止自动播放
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        lazy: {
          loadPrevNext: true // 同时预加载前一个和后一个元素
        }
      },
      banners: []
    };
  },
  methods: {
    getData() {
      getBanner().then(data => {
        this.banners = data.banners;
      });
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.getData();
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style lang="less" scoped>
.swiper {
  .swiper-slide {
    .img-wrap {
      margin: 0 auto; // 实现轮播图水平居中
      width: 96%;
      height: 1.4rem;
      .banner-img {
        width: 100%;
        border-radius: 0.05rem;
      }
    }
  }
}
</style>
