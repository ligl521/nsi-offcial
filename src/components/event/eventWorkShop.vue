<template>
    <div class="isContruct-com">
        <div class="text-center">
            <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/yan.jpg" alt="" class="img-responsive">
        </div>
        <div class="container">
            <div class="row" style="margin-bottom: 40px;">
                <h2 class="title">专题研讨会</h2>
                <div class="col-md-6 col-xs-6 mb30" v-for="(list,index) in seminarList" :key="index">
                    <div class="row">
                      <div class="col-md-7 pl0 pr0">
                        <a class="event-list" :href="list.url" target="_blank">
                            <div v-if="isMobile" class="event-box" :style="{'background-image':'url('+list.imgSrcM+')'}">
                                <h3 class="event-box-title" :title="list.title">{{list.title}}</h3>
                            </div>
                            <div v-else class="event-box" :style="{'background-image':'url('+list.imgSrc+')'}">
                                <h3 class="event-box-title" :title="list.title">{{list.title}}</h3>
                            </div>
                        </a>
                      </div>
                      <div class="col-md-5 pr0">
                        <div class="researchInfo">
                            <h5 class="research-title">{{list.title}}</h5>
                            <p class="apply-time">{{list.time}}</p>
                            <a :href="list.url" target="_blank" class="toApply">了解详情</a>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <h2 class="title">地区研讨会</h2>
                <div class="col-md-6 col-xs-6 mb30" v-for="(list,index) in areaList" :key="index">
                    <div class="row">
                      <div class="col-md-7 pl0 pr0">
                        <a class="event-list" :href="list.url" target="_blank">
                            <div v-if="isMobile" class="event-box" :style="{'background-image':'url('+list.imgSrcM+')'}">
                                <h3 class="event-box-title" :title="list.title">{{list.title}}</h3>
                            </div>
                            <div v-else class="event-box" :style="{'background-image':'url('+list.imgSrc+')'}">
                                <h3 class="event-box-title" :title="list.title">{{list.title}}</h3>
                            </div>
                        </a>
                      </div>
                      <div class="col-md-5 pr0">
                        <div class="researchInfo">
                            <h5 class="research-title">{{list.title}}</h5>
                            <p class="apply-time">{{list.time}}</p>
                            <a :href="list.url" target="_blank" class="toApply">了解详情</a>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>

        


    </div>
</template>

<script>
export default {
     data(){
        return{
            addMoreHtml:"加载更多",
            isMobile:false,
            areaList:[
                {
                   title:"西北地区国际教育高峰论坛",
                   imgSrc:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/西安.jpg",
                   imgSrcM:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/西安.jpg",
                   url:"https://mp.weixin.qq.com/s?__biz=MzA4MDg0Mzc0Mw==&mid=2651365294&idx=1&sn=50dd1de8296c02b70b4b479b042e90bc&chksm=8462391eb315b0080ef4006057d116529abf26467dd64c6cf80a356bf75fe4af595d8f576773&mpshare=1&scene=1&srcid=0113gXAjA5qFrefWoywD4P1k&sharer_sharetime=1578910530635&sharer_shareid=01b9ebf75bc29b8fa1658e0fbeef188c&key=7c352ecdd99aea7296a1b04b593bdf2569404d235869bbc222e1cd93bf79727e53c2b0f0a6e66fd8fc2fa05544db716c9bac32bdbc320119d7ae916c441aebce4e01e3feb6317f22f249b58535523661&ascene=1&uin=MTE1ODcxOTgzOQ%3D%3D&devicetype=Windows+10&version=62070158&lang=zh_CN&exportkey=Aw7AFIMiqZ15%2FTANKaotKL0%3D&pass_ticket=%2FwAqckXKJCteowTJV9pC3SCujhu1rFPiM%2Bun6kkQvwGZ%2Bli5QirYeFhh6LOYU%2FJc",
                   time:"2019.07.19"
                },{
                    title:"浙江研讨会",
                    imgSrc:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/浙江.jpg",
                    imgSrcM:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/浙江.jpg",
                    url:"https://mp.weixin.qq.com/s/iPgWVA-d2Xg3sg4-4bHxkA",
                    time:"2018.09.14"
                },{
                   title:"山东研讨会",
                   imgSrc:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/山东.jpg",
                   imgSrcM:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/山东.jpg",
                   url:"https://mp.weixin.qq.com/s/rZa04-7XYiCdwqErc9XurA",
                   time:"2018.02.02"
                },{
                   title:"上海研讨会",
                   imgSrc:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/上海.jpg",
                   imgSrcM:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/上海.jpg",
                   url:"https://mp.weixin.qq.com/s/jbGQhcNt0mLRp_IKa9OOtA",
                   time:"2018.05.26"
                },{
                   title:"江苏研讨会",
                   imgSrc:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/江苏.jpg",
                   imgSrcM:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/江苏.jpg",
                   url:"https://mp.weixin.qq.com/s/wTjFOWGbdgOeMhPzAN35Tw",
                   time:"2018.07.13"
                },{
                   title:"湖北研讨会",
                   imgSrc:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/湖北.jpg",
                   imgSrcM:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/湖北.jpg",
                   url:"https://mp.weixin.qq.com/s/UXPIiaWl0sqWN7BlvdjLEw",
                   time:"2018.03.23"
                }
            ],
            seminarList:[
                {
                    title:"市场招生研讨会",
                    imgSrc:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/市场招生.jpg",
                    imgSrcM:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/市场招生.jpg",
                    url:"https://mp.weixin.qq.com/s/PIKw-Tr3hOE1ViIATmruxg",
                    time:"2019.01.12"
                },{
                    title:"教师发展研讨会",
                    imgSrc:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/教师发展.jpg",
                    imgSrcM:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/教师发展.jpg",
                    url:"https://mp.weixin.qq.com/s/VgxYZVxXDHpOTT0OkXad0A",
                    time:"2017.07.28"
                },{
                    title:"HR研讨会",
                    imgSrc:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/hr.jpg",
                    imgSrcM:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/hr.jpg",
                    url:"https://mp.weixin.qq.com/s/pTdPIpR8VQ7cMHzwb5PGeg",
                    time:"2018.07.06—07.07"
                },{
                    title:"幼教新政线上研讨会",
                    imgSrc:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/幼教新政.jpg",
                    imgSrcM:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/幼教新政.jpg",
                    url:"https://mp.weixin.qq.com/s/Pst_Y-RtpRsozyBH8eS4XQ",
                    time:"2018.11.17"
                },{
                    title:"《民促法》意见公告线上研讨会",
                    imgSrc:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/民促法.jpg",
                    imgSrcM:"http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/地区专题研讨会/民促法.jpg",
                    url:"https://mp.weixin.qq.com/s/98sVbjgcjfw1cAigCI2sZA",
                    time:"2018.04.21-04.24"
                },
            ]
        }
    },
    methods:{
        getDetail(){
            this.$router.push({name:"eventDetail"})
        },
        addMore(){
            console.log("加载更多")
        }
    },
    created(){
        if(window.innerWidth<769){
            this.isMobile=true
        }else{
            this.isMobile=false
        }
    }
}
</script>

<style lang="scss">
    .isContruct-com{
        @mixin transitionAnimate{
            -webkit-transition: all 0.3s ease 0s;
            -ms-transition: all 0.3s ease 0s;
            -o-transition: all 0.3s ease 0s;
            transition: all 0.3s ease 0s;
        }
        .pl0{
            padding-left: 0;
        }
        .pr0{
            padding-right: 0;
        }
        .mb15{
            margin-bottom: 15px;
        }
        .mb30{
            margin-bottom: 30px;
        }
        .mt20{
            margin-top: 20px;
        }
        background: #fafafa;
        margin-bottom: -50px;
        @media (max-width: 768px) {
            padding: 0 0 50px;
        }
        .title{
            // display: inline-block;
            font-family: PingFangSC-Semibold;
            font-size: 48px;
            color: #c8c8c8;
            letter-spacing: 10px;
            line-height: 48px;
            height: 50px;
            position: relative;
            margin: 40px 0;
            @media (max-width: 768px) {
                font-size: 30px;
                margin-bottom: 20px;
            }
            .hot{
                position: absolute;
                right:-12px;
                top: 48px;
                font-size: 20px;
                color: #e4e4e4;
                letter-spacing: 0;
                line-height: 20px;
                @media (max-width: 768px) {
                    top: 40px;
                }
            }
        }
        .event-list{
            color: #000;
            display: block;
            padding: 10px;
            width: 100%;
            opacity: 1;
            border-radius: 2px;
            @include transitionAnimate;
            background: #FFF;
            position: relative;
            &:hover{
                background: #FFF;
                box-shadow: 0 15px 15px 0 rgba(15, 37, 64, 0.20);
                color: #44638a;
                text-decoration: none;
                z-index: 2;
            }
            .event-box{
                position: relative;
                width: 100%;
                height: 185px;
                background-size: cover;
                background-position: center;
                border-radius: 2px;
                @media (max-width: 768px) {
                    height: 150px;
                }
            &::before{
                    display: block;
                    content: "";
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    background: rgba(0, 0, 0, 0);
                    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0.05) 2%, rgba(0, 0, 0, 0.3) 100%);
                    @include transitionAnimate;
                    @media (max-width: 768px) {
                        height: 150px;
                    }
                }
                &:hover::before{
                        opacity: .2;
                }
                &:hover .event-box-title{
                    opacity:1;
                }
            }
            .event-box-title{
                position: absolute;
                left: 15px;
                bottom: 15px;
                margin-top: 10px;
                font-family: PingFangSC-Semibold;
                color: #FFF;
                font-weight: 700;
                font-size: 25px;
                letter-spacing: 0;
                line-height: 34px;
                overflow: hidden;
                text-overflow: -o-ellipsis-lastline;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                min-height: 34px;
                max-height: 34px;
                margin-bottom: 2px;
                text-shadow: 0 4px 8px rgba(7, 17, 27, 0.8);
                opacity: 0;
                @include transitionAnimate;
                @media (max-width: 768px) {
                    opacity:1;
                    font-size: 16px;
                    padding-right: 15px;
                    left: 15px;
                    bottom: 15px;
                    display:none;
                }
            }
        }
        .researchInfo{
            position: relative;
            padding-top: 20px;
            @media (max-width: 768px) {
              padding-top: 0;
            }
            .research-title{
                font-weight: 700;
                font-size: 17px;
                margin-bottom: 20px;
                color: #4d555d;
                min-height: 39px;
                @media (max-width: 768px) {
                    margin-bottom: 10px;
                }
            }
        }
        .toApply{
            display: inline-block;
            background: #3c7ac6;
            box-shadow: 0 4px 8px 0 rgba(28, 31, 33, 0.2);
            border-radius: 24px;
            font-size: 14px;
            font-weight: 200;
            color: #fff;
            padding: 10px 25px;
            text-align: center;
            margin-top:20px;
            &:link{
              text-decoration: none;
            }
            &:hover{
              text-decoration: none;
              background-color:#215089;
            }
        }
        .apply-time{
            font-size: 16px;
            margin-bottom: 15px;
            color: #666;
            @media (max-width: 768px) {
                margin-bottom: 10px;
            }
        }
    }
</style>
