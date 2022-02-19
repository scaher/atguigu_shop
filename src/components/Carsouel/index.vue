<template>
  <div class="floorBanner">
    <div class="swiper-container" id="floor1Swiper" ref="cur">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
          <img :src="carousel.imgUrl" />
        </div>
        <!-- 轮播图 -->
        <!-- <div class="swiper-slide">
                      <img src="./images/floor-1-b02.png">
                    </div>
                    <div class="swiper-slide">
                      <img src="./images/floor-1-b03.png">
                    </div> -->
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: "Carsouel",
  props: ["list"],
  watch: {
    list: {
      // 不管数据是否变化，立即监听一次
      immediate: true,
      handler() {
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.cur, {
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            // 如果需要前进后退按钮

            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>