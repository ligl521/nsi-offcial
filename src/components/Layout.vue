<template>
    <div class="layout-com">
        <div class="header">
            <!-- logo -->
            <div class="container-fluid">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 noPl15">
                            <div class="logoContainer">
                                <a href="javascript:;"><img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/logo.png" alt="" width="220" height="45" class="logo"></a>
                                <div class="selectLang">
                                    <a href="javascript:;" title="搜索"><span class="iconfont icon-sousuo search" @click="searchResult"></span></a>
                                    <el-dropdown @command="handleCommand" placement="top" trigger="click">
                                        <span class="el-dropdown-link">
                                          <img class="activelogo" :src="logoActive" alt="" width="40"><span style="display:inline-block;margin-top:2px;">&nbsp;{{countryActive}}</span><i class="el-icon-arrow-down el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item v-for="(logo,index) in logos" :key="index" :command="logo">
                                              <img :src="logo.logoImg" alt="" width="30"><span>&nbsp;{{logo.country}}</span>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- nav -->

            <!-- PC端导航 -->
            <div class="nav-bg searchBar isFixed navPC" id="searchBar">
                <div class="container plpr0 navContainer ">
                    <div class="row">
                        <div class="col-xs-12 plpr0 navWidth">
                            <nav class="navbar navbar-default">
                                <div class="container-fluid">
                                    <!-- Brand and toggle get grouped for better mobile display -->
                                    <div class="navbar-header">
                                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                            <span class="sr-only">Toggle navigation</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                    </div>

                                    <!-- Collect the nav links, forms, and other content for toggling -->
                                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                        <ul class="nav navbar-nav navbar-center">
                                            <li><router-link :to="{path:'/'}">{{$t('layoutNav.index')}}</router-link><span class="sr-only">(current)</span></li>
                                            <li class="dropdown hasSubmenu">
                                                <!-- <router-link :to="{path:'/about'}">{{$t('layoutNav.aboutus')}}</router-link> -->
                                                <el-dropdown placement="top">
                                                    <span class="el-dropdown-link">
                                                        <router-link :to="{path:'/about'}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t('layoutNav.aboutus')}}<span class="caret"></span></router-link>
                                                    </span>
                                                    <el-dropdown-menu slot="dropdown">
                                                        <el-dropdown-item>
                                                            <router-link :to="{path:'/about/joinus'}">{{$t('layoutNav.aboutusChild.joinUs')}}</router-link>
                                                            <!-- <a href="http://data.xinxueshuo.cn/nsi-class/admin/activity/meeting/vis2018.html" target="_blank">{{$t('layoutNav.aboutusChild.joinUs')}}</a> -->
                                                        </el-dropdown-item>
                                                        <el-dropdown-item>
                                                            <!-- <router-link :to="{path:'/event/lotus'}">&nbsp;<span class="iconfont icon-huiyi1 logoFont"></span>{{$t('layoutNav.eventChild.lotus')}}</router-link> -->
                                                        </el-dropdown-item>
                                                        <el-dropdown-item>
                                                            <router-link :to="{path:'/about/connectus'}">{{$t('layoutNav.aboutusChild.connectUs')}}</router-link>
                                                        </el-dropdown-item>
                                                        <el-dropdown-item>
                                                            <!-- <router-link :to="{path:'/event/apply'}">&nbsp;<span class="iconfont icon-baoming logoFont"></span>{{$t('layoutNav.eventChild.apply')}}</router-link> -->
                                                        </el-dropdown-item>
                                                    </el-dropdown-menu>
                                                </el-dropdown>
                                            </li>
                                            <!-- <li><router-link :to="{path:'/news'}">{{$t('layoutNav.information')}}<span class="iconfont icon-Newx theNew"></span></router-link></li> -->
                                            <li><router-link :to="{path:'/news'}">{{$t('layoutNav.information')}}<span class="theNew"></span></router-link></li>
                                            <li class="hasSubmenu">
                                                <!-- <router-link :to="{path:'/event'}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t('layoutNav.event')}}<span class="caret"></span></router-link> -->
                                                <el-dropdown placement="top">
                                                    <span class="el-dropdown-link">
                                                        <router-link :to="{path:'/event/latest'}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t('layoutNav.event')}}<span class="caret"></span></router-link>
                                                    </span>
                                                    <el-dropdown-menu slot="dropdown">
                                                        <el-dropdown-item>
                                                            <a href="https://www.xinxueshuo.cn/event/2020Vis-activity/index.html" target="_blank"><img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/vis2018.png" width="35" alt="">&nbsp;{{$t('layoutNav.eventChild.vis')}}</a>
                                                        </el-dropdown-item>
                                                        <el-dropdown-item>
                                                            <!-- <router-link :to="{path:'/event/lotus'}">&nbsp;<span class="iconfont icon-huiyi1 logoFont"></span>{{$t('layoutNav.eventChild.lotus')}}</router-link> -->
                                                        </el-dropdown-item>
                                                        <el-dropdown-item>
                                                            <!-- <router-link :to="{path:'/event/subject'}">&nbsp;<span class="iconfont icon-zhuanti logoFont"></span>{{$t('layoutNav.eventChild.subject')}}</router-link> -->
                                                        </el-dropdown-item>
                                                        
                                                        <!-- <el-dropdown-item>
                                                            <router-link :to="{path:'/event/skyClass'}">&nbsp;<span class="iconfont icon-zhuanti logoFont"></span>{{$t('layoutNav.eventChild.skyClass')}}</router-link>
                                                        </el-dropdown-item> -->
                                                        <!-- <el-dropdown-item>
                                                            <router-link :to="{path:'/event/videoList'}">&nbsp;<span class="iconfont icon-bofang1 logoFont"></span>{{$t('layoutNav.eventChild.videoList')}}</router-link>
                                                        </el-dropdown-item> -->
                                                         <el-dropdown-item>
                                                            <router-link :to="{path:'/event/fit'}">&nbsp;<span class="iconfont icon-bofang1 logoFont"></span>{{$t('layoutNav.eventChild.fit')}}</router-link>
                                                        </el-dropdown-item>
                                                         <!-- <el-dropdown-item>
                                                            <router-link :to="{path:'/event/videoList'}"><img :src="imgSrc" width="32" height="18" alt="">&nbsp;&nbsp;{{$t('layoutNav.eventChild.videoList')}}</router-link>
                                                        </el-dropdown-item> -->
                                                        <!-- <el-dropdown-item>
                                                            <router-link :to="{path:'/event/school'}">&nbsp;<span class="iconfont icon-bofang1 logoFont"></span>{{$t('layoutNav.eventChild.school')}}</router-link>
                                                        </el-dropdown-item> -->
                                                    </el-dropdown-menu>
                                                </el-dropdown>
                                            </li>
                                            <li class="hasSubmenu">
                                                <el-dropdown placement="top">
                                                    <span class="el-dropdown-link">
                                                        <router-link :to="{path:'/event/miniMba'}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t('layoutNav.research')}}<span class="caret"></span></router-link>
                                                    </span>
                                                    <el-dropdown-menu slot="dropdown">
                                                        <el-dropdown-item>
                                                            <router-link :to="{path:'/event/miniMba'}">{{$t('layoutNav.eventChild.miniMba')}}</router-link>
                                                        </el-dropdown-item>
                                                        <!-- <el-dropdown-item>
                                                            <router-link :to="{path:'/research/ipa'}">{{$t('layoutNav.researchChild.ipa')}}</router-link>
                                                        </el-dropdown-item> -->
                                                        <el-dropdown-item>
                                                             <router-link :to="{path:'/event/onlineClass'}">{{$t('layoutNav.researchChild.classOnline')}}</router-link>
                                                        </el-dropdown-item>
                                                        <el-dropdown-item>
                                                            <router-link :to="{path:'/research/report'}">{{$t('layoutNav.researchChild.report')}}</router-link>
                                                        </el-dropdown-item>
                                                        <el-dropdown-item>
                                                            <router-link :to="{path:'/research/periodical'}">{{$t('layoutNav.researchChild.magazine')}}</router-link>
                                                        </el-dropdown-item>
                                                        <el-dropdown-item>
                                                            <!-- <router-link :to="{path:'/research/apply'}">{{$t('layoutNav.researchChild.apply')}}</router-link> -->
                                                        </el-dropdown-item>
                                                         <el-dropdown-item>
                                                            <router-link :to="{path:'/research/experts'}">{{$t('layoutNav.researchChild.experts')}}</router-link>
                                                        </el-dropdown-item>
                                                        <!-- <el-dropdown-item>
                                                            <router-link :to="{path:'/research/mac2020'}">{{$t('layoutNav.researchChild.mac2020')}}</router-link>
                                                        </el-dropdown-item> -->
                                                        <!-- <el-dropdown-item>
                                                            <router-link :to="{path:'/research/videoList'}">{{$t('layoutNav.researchChild.videoList')}}</router-link>
                                                        </el-dropdown-item> -->
                                                    </el-dropdown-menu>
                                                </el-dropdown>
                                            </li>
                                            <li><router-link :to="{path:'/consulting'}">{{$t('layoutNav.consult')}}</router-link></li>
                                            <!-- <li class="dropdown">
                                                <router-link :to="{path:'/ges'}">{{$t('layoutNav.ges')}}</router-link>
                                            </li> -->
                                            <li class="dropdown">
                                                <router-link :to="{path:'/vip'}">{{$t('layoutNav.vip')}}</router-link>
                                            </li>
                                            <li><a href="http://www.xinxueshuo.cn/data/dist/index.html" target="_blank">{{$t('layoutFooter.database')}}</a></li>
                                            <!-- <li><a href="https://data.xinxueshuo.cn/nsi-class/index.html" target="_blank">{{$t('layoutFooter.classOnline')}}</a></li> -->
                                            
                                            <li class="hasSubmenu">
                                                <el-dropdown placement="top">
                                                    <!-- <span class="el-dropdown-link"> -->
                                                    <span class="el-dropdown-link">
                                                        <router-link :to="{path:'/event/onlineClass'}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t('layoutFooter.classOnline')}}<span class="caret"></span></router-link>
                                                    </span>
                                                        <!-- <a href="https://data.xinxueshuo.cn/nsi-class/index.html" target="_blank" >{{$t('layoutFooter.classOnline')}}<span class="caret"></span></a> -->
                                                        <!-- <i class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></i> -->
                                                    <!-- </span> -->
                                                    <el-dropdown-menu slot="dropdown">
                                                        <el-dropdown-item>
                                                            <router-link :to="{path:'/event/miniMba'}">{{$t('layoutNav.eventChild.miniMba')}}</router-link>
                                                        </el-dropdown-item>
                                                        <el-dropdown-item>
                                                            <router-link :to="{path:'/research/mac2020'}">{{$t('layoutNav.researchChild.mac2020')}}</router-link>
                                                        </el-dropdown-item>
                                                        <el-dropdown-item>
                                                            <router-link :to="{path:'/research/humanResources'}">{{$t('layoutNav.researchChild.humanResources')}}</router-link>
                                                        </el-dropdown-item>
                                                    </el-dropdown-menu>
                                                </el-dropdown>
                                            </li>
                                        </ul>
                                    </div><!-- /.navbar-collapse -->
                                </div><!-- /.container-fluid -->
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 移动端导航 -->
            <nav-m class="showInMobile"></nav-m>
        </div>
        <div class="content">
            <!-- <keep-alive> -->
              <!-- <transition name="slide-fade"> -->
                <router-view></router-view>
              <!-- </transition> -->
            <!-- </keep-alive> -->
        </div>
        <div class="footer mt50">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <h4 class="contact">联系我们&nbsp;<span>Contact Us：</span></h4>
                <ul class="contact-info">
                  <li>{{$t('layoutFooter.tel')}}</li>
                  <li>{{$t('layoutFooter.email')}}</li>
                  <li>{{$t('layoutFooter.phone')}}</li>
                  <li>{{$t('layoutFooter.address')}}</li>
                </ul>
              </div>
              <div class="col-md-8">
                  <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-12">
                                    <h4 class="blogroll">链接 <span>Links：</span></h4>
                                    <div class="shareHref">
                                        <a href="https://www.xinxueshuo.cn/data/dist/index.html#/" target="_blank"><img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/database.png" alt=""></a>
                                        <!-- <a href="http://class.xinxueshuo.cn" target="_blank"><img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/class.png" alt=""></a> -->
                                        <router-link :to="{path:'/event/onlineClass'}">
                                           <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/class.png" alt="">
                                        </router-link>
                                        <!-- <a href="http://data.xinxueshuo.cn" target="_blank">{{$t('layoutFooter.database')}}</a>
                                        <a href="http://class.xinxueshuo.cn" target="_blank">{{$t('layoutFooter.classOnline')}}</a> -->
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="logoShare">
                                        <!-- 搜狐 -->
                                        <a href="http://mp.sohu.com/profile?xpt=cHBhZzc3MzAzZjExYTE3ZUBzb2h1LmNvbQ==&_f=index_pagemp_2" target="_blank">
                                            <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/shareIcon/souhu.png" alt="" width="35">
                                        </a>
                                        <!-- 头条 -->
                                        <a href="https://www.toutiao.com/c/user/6030021946/#mid=6033071476" target="_blank">
                                            <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/shareIcon/toutiao.png" alt="" width="35">
                                        </a>
                                        <!-- 微博 -->
                                         <a href="https://weibo.com/u/5786464903?refer_flag=1001030101_&is_hot=1" target="_blank">
                                            <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/shareIcon/weibo.png" alt="" width="35">
                                        </a>
                                        <!-- 知乎 -->
                                        <a href="https://www.zhihu.com/org/xin-xue-shuo-chuan-mei-74/activities" target="_blank">
                                            <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/shareIcon/zhihu.png" alt="" width="35">
                                        </a>
                                        <!-- link -->
                                        <a href="https://www.linkedin.com/in/newschool-insight-b96319139" target="_blank">
                                            <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/shareIcon/linked.png" alt="" width="35">
                                        </a>
                                        <!-- 推特 -->
                                        <a href="https://mobile.twitter.com/nsi_media;" target="_blank">
                                            <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/shareIcon/twitter.png" alt="" width="35">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="col-md-2 col-xs-2 col-md-offset-1 text-center noPr15">
                            <div class="wechatBox">
                                <h4 class="aboutUs">{{this.$t('layoutFooter.weChat')}}</h4>
                                <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/wechat_QR.png" alt="" width="110" height="110">
                            </div>
                        </div>
                        <div class="col-md-2 col-xs-2 col-xs-offset-1 text-center noPr15">
                            <div class="wechatBox weiboBox">
                                <h4 class="aboutUs">{{this.$t('layoutFooter.weibo')}}</h4>
                                <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/shop.jpg" alt="" width="110" height="110">
                            </div>
                        </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <span class="footer-company">新学说文化传媒有限公司</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="footer-company company-en">NEWSCHOOL INSIGHT MEDIA</span>
              </div>
              <div class="col-md-12 text-center">
                <div class="copyright">
                  <p>Copyright © 2018 xinxueshuo.cn All Rights Reserved 
                     <a href="http://beian.miit.gov.cn" target="_blank" class="jingNumber">京ICP备 16031987号-1</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import navM from '../components/common/nav-M'
export default {
    components:{
        navM
    },
    data(){
        return{
            searchBarFixed:false,
            switchFlag:true,
            logoActive:"https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/zh.png",
            countryActive:"中文",
            logos:[{
                lang:"zh",
                logoImg:"https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/zh.png",
                country:"中文",
                switchFlag:true
            },{
                lang:"en",
                logoImg:"https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/en.png",
                country:"English",
                switchFlag:false
            }],
            layoutNav:[this.$t('layoutNav.index'),this.$t('layoutNav.aboutus'),this.$t('layoutNav.aboutusChild.joinUs'),this.$t('layoutNav.aboutusChild.connectUs'),this.$t('layoutNav.information'),this.$t('layoutNav.event'),this.$t('layoutNav.eventChild.vis'),this.$t('layoutNav.eventChild.subject'),,this.$t('layoutNav.eventChild.lotus'),this.$t('layoutNav.eventChild.apply'),this.$t('layoutNav.lotus'),this.$t('layoutNav.lotusChild.gunagzhou'),this.$t('layoutNav.lotusChild.shanghai'),this.$t('layoutNav.lotusChild.beijing'),this.$t('layoutNav.research'),this.$t('layoutNav.researchChild.magazine'),this.$t('layoutNav.researchChild.report'),this.$t('layoutNav.researchChild.pisom'),this.$t('layoutNav.researchChild.classOnline'),this.$t('layoutNav.researchChild.apply'),this.$t('layoutNav.researchChild.experts'),this.$t('layoutNav.consult')],
            layoutFooter:[this.$t('layoutFooter.tel'),this.$t('layoutFooter.email'),this.$t('layoutFooter.phone'),this.$t('layoutFooter.address'),this.$t('layoutFooter.weChat'),this.$t('layoutFooter.weibo'),this.$t('layoutFooter.database'),this.$t('layoutFooter.classOnline')]
        }
    },
   mounted(){
        window.addEventListener('scroll', this.handleScroll)
   },
   methods:{
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var searchTop = document.querySelector('#searchBar').offsetTop
          if(scrollTop>0){
            searchTop = 85 - Number(scrollTop);
            if(searchTop<=0){
              document.querySelector('#searchBar').style.opacity="0.9"
              document.querySelector('#searchBar').style.top ='0px';
            }else{
              document.querySelector('#searchBar').style.top = searchTop+'px';
            }
          }else{
            document.querySelector('#searchBar').style.opacity="1"
            document.querySelector('#searchBar').style.top = '85px';
          }
      },
      handleCommand(command) {
        switch(command.lang){
            case "zh":
                this.logoActive=this.logos[0].logoImg
                this.countryActive=this.logos[0].country
                break;
            case "en":
                this.logoActive=this.logos[1].logoImg
                this.countryActive=this.logos[1].country
                break;
        }
        this.$i18n.locale =command.lang
        // console.log(command)
      },
      searchResult(){
         this.$router.push({path:'/search'})
      }
   }
}
</script>

<style lang="scss">
    $official-color: #20528f;
    $official-hoverColor:#0e3361;
    $official-footerColor:#2c6daf;
    $official-footerFontColor:#699bda;
    $official-otherColor:#8fb8fb;
    // nationalDay
    $nationDay-Color:#ce1922;
    $nationDay-hoverColor:#a01f24;
    $nationDay-footerColor:#ce343c;
    $nationDay-footerFontColor:#db7378;
    $nationDay-otherColor:#d3656a;
    .jingNumber{
        color: #337ab7;
        &:hover{
            color:#fff;
        }
    }
    .fontLogo{
        font-size: 25px !important;
        position: relative;
        top: 5px;
        // margin-right: 10px;
    }
    .layout-com{
      .hideInM{
        display: block;
        @media (max-width: 768px) {
          display: none;
        }
      }
        // 国庆
        .header{
            // background-image: url('../assets/img/NationalDay/body-bg.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            @media (max-width: 768px) {
                 background-image: none;
            }
        }
        .nationDay{
            position: absolute;
            right: 155px;
            top: 9px;
        }
        .nationDayFont{
            position: absolute;
            right: 110px;
            top: 70px;
            z-index: 999999;
        }
        // 国庆end
      .slide-fade-enter-active {
        transition: all .5s ease;
      }
      .slide-fade-leave-active {
        transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
      }
      .slide-fade-enter, .slide-fade-leave-to
      {
        opacity: 0;
      }
      .otherPorduct{
          position: absolute;
          right: 150px;
          top: 30px;
          a{
              color: #808080;
              margin-right: 10px;
              &:hover{
                  color: $official-color;
                  text-decoration: none;
              }
          }
          @media (max-width: 768px) {
              display: none;
          }
      }
      .theNew{
            // position: absolute;
            // top: -1px;
            // color: #fff;
            // font-size: 16px;
            // right: -10px;
            // text-shadow: 0 5px 10px #050935;
            // z-index: 999;
            position: absolute;
            // top: -1px;
            background-color: #faf807;
            width: 6px;
            height: 6px;
            border-radius: 50%;
      }
    }
    .logoFont{
        font-size: 25px;
        margin-right: 10px;
        position: relative;
        top: 4px;
    }
    .mt50{
        margin-top: 26px;
    }
    .noPr15{
        padding-right: 0;
    }
    .searchBar{
        transition: opacity .3s;
        box-shadow: 0 4px 8px rgba(0, 0, 0, .28);
    }
    .plpr0{
        padding-left: 0;
        padding-right: 0;
    }
    .logoContainer{
        padding: 20px 0;
        @media (max-width: 768px) {
            padding: 8px 0 0;
        }
        .logo{
            margin-left: -25px;
        }
    }
    .navWidth{
        min-width:1100px !important;
    }
    .nav-bg{
        // background-color: $official-color;
        background-color: rgb(33,80,137);
    // border-color: #20528f;
        // background-image: url('../assets/img/NationalDay/nav-bg.jpg');
        z-index: 999;
        position: relative;
        width: 100%;
    }
    .navbar{
        margin-bottom: 0;
        background-color: rgb(33,80,137);
        // background-color: $official-color;
        // background-image: url('../assets/img/NationalDay/nav-bg.jpg');
        border-color: rgb(33,80,137);
        // border-color: $nationDay-Color;
    }
    .navbar-default .navbar-nav li a{
        color: #fff;
        transition: all .2s;
        font-size: 16px;
        // font-weight: 600;
        letter-spacing: 1px;
        // height: 52px;
        // line-height: 26px;
        display: inline-block;
        padding: 0;
    }
    .navbar-default .navbar-nav>li{
        transition: all .3s;
    }
    .navbar-default .navbar-nav>li>a:hover {
        color: #fff;
        background-color: transparent;
    }
    .navbar-default .navbar-nav .active a, .navbar-default .navbar-nav .active a:focus, .navbar-default .navbar-nav .active:hover {
        color: #fff;
        background-color: $official-hoverColor;
    }
    .navbar-default .navbar-nav li:focus, .navbar-default .navbar-nav li:hover {
        color: #fff;
        background-color: $official-hoverColor;
    }
    .navbar-default .navbar-nav .open a, .navbar-default .navbar-nav .open a:focus, .navbar-default .navbar-nav .open a:hover {
        color: #fff;
        background-color: $official-color;
    }
    .navbar-default .navbar-toggle {
        border-color: #fff;
        right: 15px;
    }
    .navbar-default .navbar-toggle .icon-bar {
        background-color: #fff;
    }

    .navbar-default .navbar-toggle:hover {
        background-color: #fff;
    }
    .navbar-default .navbar-toggle:focus{
         background-color: $official-hoverColor;
    }

    .navbar-nav {
        margin: 0 -15px;
        position: relative;
    }
    .hasSubmenu a{
        display: inline-block;
        padding: 15px;
    }
    .hasSubmenu a:hover,
    .hasSubmenu a:link{
        text-decoration: none !important;
    }
    .el-dropdown-menu a{
        display: block;
        text-decoration: none !important;
        color: $official-footerColor;
        font-weight: 600;
    }
    .navbar-default .navbar-nav>li>a:focus, .navbar-default .navbar-nav>li>a:hover {
        color: #fff;
        background-color: transparent;
    }
    @media (min-width: 768px){
        .navbar-nav>li {
            float: left;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 52px;
            padding: 15px;
        }
    }
    /* 选择语言*/
    .selectLang{
        position: absolute;
        right: 0px;
        top: 12px;
        .search{
            font-size: 30px;
            position: relative;
            right: 5px;
            top: 8px;
            display: inline-block;
            width: 45px;
            height: 45px;
            line-height: 45px;
            text-align: center;
            @media (max-width: 768px) {
                display: none;
            }
            &:hover{
                background: #eee;
                border-radius: 50%;
            }
        }
        @media (max-width:768px) {
            top: 10px;
            border: 1px solid #ddd;
            padding: 4px 6px;
            border-radius: 5px;
        }
        a{
            color: #777;
        }
        .activelogo{
            border: none;
            border-radius: 50%;
            margin-right:2px;
            margin-top:-2px;
            width: 25px;
            height: 25px;
        }
        // span{
        //     display:inline-block;
        //     margin-top:3px;
        // }
        .el-icon--right {
            vertical-align: middle;
        }
    }
    .el-dropdown-menu{
        z-index: 10000 !important;
    }
    /* 判断吸顶 */

    .isFixed{
        position:fixed;
        top:85px;
        z-index:9999;
        width: 100%;
        // opacity: .9;
    }

    /* footer */
    .footer{
      padding: 20px 0;
      background-color:rgb(33,80,137);
    }
    .footer{
      color: #FFF;
      position: relative;
      z-index: 99;
    }
    .footer>.container{
      padding-left: 0;
      padding-left: 0;
    }
    .footer .contact{
      margin-bottom: 25px;
    }
    .footer .contact>span{
      font-weight: normal;
      font-size: 14px;
      letter-spacing: 1px;
    }
    .contact-info{
      padding-left: 0;
      list-style: none;
    }
    .contact-info>li{
      line-height: 2;
      color: #fff;
    }
    .footer-bottom{
      padding: 15px 0;
      position: relative;
      border-top: 1px solid #959fa8;
      background-color: rgb(33,80,137);
      @media (max-width:768px) {
          margin-top: 20px;
      }
    }
    .footer-bottom>.container{
        padding-left: 0;
        padding-right:0;
    }
    .footer-company{
      font-size: 16px;
      color: #fff;
    }
    .company-en{
      font-size: 14px;
    }
    .copyright{
        padding-top: 10px;
        font-size: 14px;
        color: #fff;
      p{
        margin-bottom: 0;
      }
    }
    .aboutUs{
        font-size: 18px;
        margin-bottom: 25px;
    }
   .aboutUs-info>li>a{
        color: $official-footerFontColor;
    }
    .aboutUs-info{
        padding-left: 0;
    }
    .aboutUs-info>li{
        list-style: none;
        line-height:2.3;
    }
    .wechatBox{
        display: inline-block;
        padding-left: 40px;
        h6{
        margin-bottom: 15px;
      }
    }
    .weiboBox{
      padding-left: 10px;
      h6{
        margin-bottom: 15px;
      }
    }
    .blogroll{
      margin-bottom: 25px;
      span{
          font-size: 14px;
          letter-spacing: 1px;
      }
      @media (max-width: 768px) {
          margin: 10px 0 10px 0;
      }
    }
    .shareHref{
        margin-bottom: 30px;
        @media (max-width:768px) {
            margin-bottom: 10px;
        }
        a{
            color: #8fb8fb;
            margin-right:5px;
        }
        a:hover{
            text-decoration: none;
            color: #c1dcff;
        }
    }
    .logoShare{
        a{
            display: inline-block;
            color: #FFF;
            background-color: #FFF;
            margin-right:22px ;
            margin-bottom: 13px;
            border-radius: 10px;
            box-shadow: 2px 2px 2px #4a4a4a;
            @media (max-width: 768px) {
                margin-right: 15px;
            }
            i{
                font-size: 25px;
            }
        }
         a:hover{
            text-decoration: none;
            color: #c1dcff;
        }
    }
    .showInMobile{
        display: none ;
        @media (max-width: 768px) {
            display: block;
        }
    }
    @media (max-width: 768px){
    // PC导航隐藏
    .navPC{
        display: none !important;
    }
    .noPl15{
      padding-left: 0;
      .logo{
        width: 200px;
        @media (max-width: 768px) {
            height: 35px;
            width: 135px;
            position: relative;
            left: 20px;
            top:2px;
        }
      }
    }
    .navbar-default .navbar-nav .open .dropdown-menu>li>a {
          color: #fff
      }

     .nav-bg{
        background-color: $official-color;
        z-index: 999;
        position: fixed;
        width: 100%;
    }
    .navContainer{
        padding-left: 15px;
        padding-right: 1px;
    }
    
    .content{
        padding-top: 52px;
        @media (max-width:768px) {
            padding-top: 0;
        }
    }
    .footer>.container,
    .footer-bottom>.container{
        padding-left: 15px;
        padding-right:15px;
    }
    .footer{
        display: none;
    }
    .footer-company{
        font-size: 14px;
        display: inline-block;
    }
    .copyright{
        font-size: 12px;
    }
}
</style>
