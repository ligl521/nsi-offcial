<template>
  <div class="bg banner-com">
      <div class="container">
          <div class="row p7">
              <div class="col-xs-9 pr7 pl0">
                  <big-banner :bannerInfo="bannerInfoFa"/>
              </div>
              <div class="col-xs-3 pl0 pr0">
                <div @click='getUrl()'>
                    <img style="height: 172px;width:100%;margin-bottom:7px" src="../../images/教学管理/bg.jpg" alt="">
                </div>
                <small-banner-top class="bannerTop mb7" :bannerInfo="bannerInfoFa"/>
                <small-banner-bottom class="bannerBottom" :bannerInfo="bannerInfoFa"/>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
import BigBanner from './BigBanner'
import SmallBannerTop from './smallBannerTop'
import SmallBannerBottom from './smallBannerBottom' 
export default {
  components:{
    BigBanner,
    SmallBannerTop,  
    SmallBannerBottom
  },
  data () {
    return {
        bannerInfoFa:[]
    }
  },
  methods: {
      getBannerInfo(){
          this.axios({
              method: 'get',
              url: '/manager/official/list.do',
              params:{
                  type:"官网首页banner"
              }
          }).then((res)=>{
              const msg=res.data.data
              // console.log(msg)
              this.bannerInfoFa=msg
              this.$nextTick(()=>{
                  this.swiperInit()
              })
          })
      },
      swiperInit(){
          const self=this
          new Swiper('#indexBigBanner',{
            //   notNextTick: true,
              autoplay:3000,
              loop: true,
              effect : 'fade',
              speed:600,
            //   grabCursor : true,
              // 如果需要分页器
             pagination:  '.swiper-pagination',
             prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
          })
          new Swiper('#indexBannerTop', {
              notNextTick: true,
              autoplay:4000,
            loop: true,
            effect : 'fade',
            speed:600,
            grabCursor : true,
        })
      },
      getUrl(){
        let routeData = this.$router.resolve({ path: '/research/teaching' });
        window.open(routeData.href, '_blank');
      },
  },
  mounted(){
    this.getBannerInfo()
  }
}
</script>

<style lang="scss">
.banner-com{
  @media (max-width: 768px) {
    margin-top: 0;
    .bannerTop,
    .bannerBottom{
      display: none;
    }
  }
    .container{
      // position: relative;
        box-shadow: 0 0px 24px 0 rgba(7,17,27,.2);
        overflow: hidden;
        .pr0{
          padding-right: 0;
        }
        .pl0{
          padding-left: 0;
        }
        .pr7{
          padding-right: 7px;
        }
        .p7{
          padding: 7px;
        }
        .mb7{
          margin-bottom: 7px;
        }
  }
}
 @media(max-width: 789px){
      .bg{
          padding-left: 0;
          padding-right: 0;
      }
    }
</style>
