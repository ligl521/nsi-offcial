<template>
  <!-- banner -->
  <div class="swiper-container indexBannerTop" id="indexBannerTop">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(bannerInfos,item) in bannerInfo" :key="item" v-if="item>=6&&item<9">
                <img style="height: 172px;width:100%" :src="bannerInfos.content01" alt="" class="img-responsive" @click="linkTo(bannerInfos.content02)">
            </div>
        </div>
  </div>
</template>

<script>
export default {
    props:{
        bannerInfo:{},
    },
    methods:{
        linkTo(href){
            window.open(href,"_")
        }
    },
}
</script>

<style lang="scss">
    .indexBannerTop{
        background-color: #eee;
    }
</style>
