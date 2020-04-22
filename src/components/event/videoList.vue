<template>
    <div>
        <div class="periodical-com">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-xs-4 title_M" v-bind:class="{current: num == 1}" v-on:click="change(1)">
                    <span >《越谈》</span>
                    </div>
                    <div class="col-md-4 col-xs-4 title_M" v-bind:class="{current: num == 2}" v-on:click="change(2)">
                    <span >《越姐麻辣说》</span>
                    </div>
                    <div class="col-md-4 col-xs-4 title_M" v-bind:class="{current: num == 3}" v-on:click="change(3)">
                    <span >《火龙果讲座》</span>
                    </div>
                </div>
                <div class="content">
                    <transition name="fade">
                    <div v-show="num == 1">
                        <div class="col-md-6 col-xs-12 internalRefer" v-for="(list,index) in yuetanList" :key="index">
                            <div @click="videoBtn(list.id)" class="internalRefer-book">
                                <h3>{{list.vidioTitile}}</h3>
                                <div class="internalRefer-felx">
                                    <h4>嘉宾：{{list.guest}}</h4>
                                    <h4  class="playback">直播回放</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 text-center" v-show="moreYuetan">
                            <a href="javascript:;" class="loadMore" @click="addYuetan">{{addMoreYuetan}}</a>
                        </div>
                    </div>
                    </transition>
                    <transition name="fade">
                    <div v-show="num == 2">
                        <div class="col-md-6 col-xs-12 internalRefer" v-for="(list,index) in yuejieList" :key="index">
                            <div @click="videoBtn(list.id)" class="internalRefer-book">
                                <h3>{{list.vidioTitile}}</h3>
                                <div class="internalRefer-felx">
                                    <h4>嘉宾：{{list.guest}}</h4>
                                    <h4  class="playback">直播回放</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 text-center"  v-show="moreYuejie">
                            <a href="javascript:;" class="loadMore" @click="addYuejie">{{addMoreYuejie}}</a>
                        </div>
                    </div>
                    </transition>
                    <transition name="fade">
                    <div v-show="num == 3">
                        <div class="col-md-6 col-xs-12 internalRefer" v-for="(list,index) in pitayaList" :key="index">
                            <div @click="videoBtn(list.id)" class="internalRefer-book">
                                <h3>{{list.vidioTitile}}</h3>
                                <div class="internalRefer-felx">
                                    <h4>嘉宾：{{list.guest}}</h4>
                                    <h4  class="playback">直播回放</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    </transition>
                </div>
            </div>
            
        </div>
    </div> 
</template>

<script>
import wxShareInit from '../../assets/js/weChatShare01'
export default {
    data(){
        return{
           wxShareInfo: {
                title: "【越谈】【越姐麻辣说】【火龙果系列讲座】| 直播回顾",
                imgUrl:"https://data.xinxueshuo.cn/upImage/upInstitutionImg/100062/100062-logo.jpg",
                href: window.location.href,
                desc:"《越谈》，面向国际学校从业者。《越姐麻辣说》，面向国际学校家长群体。《火龙果系列讲座》，火龙果国际教育论坛公益讲座。"
            },
            addMoreYuetan:"加载更多",
            addMoreYuejie:"加载更多",
            moreYuetan:true,
            moreYuejie:true,
            pageNum:1,
            videoList:[], // 直播回放
            yuetanList:[], // 越谈直播回放
            pitayaList:[], // 火龙果直播回放
            yuejieList:[], // 越姐麻辣说直播回放
            num: 1,
        } 
    },
    methods:{
       videoBtn(id){
           this.$router.push({path: './video',query:{id:id}})
       },
       change: function(index) {
            var that=this
            that.num = index
            that.pageNum=1
       },
       addYuetan(){
           var that=this
            that.addMoreYuetan="加载中..."
            that.pageNum++
            that.axios({
                method: 'get',
                url: '/playback/list.do?pageNum='+that.pageNum+'&pageSize=10'+'&courseType=越谈',
            }).then((res)=>{ 
                const msgTan=res.data.data.list
                // console.log(msg)
                for(let i=0;i<msgTan.length;i++){
                    that.yuetanList.push(msgTan[i])
                }
                console.log(that.yuetanList)
                if(msgTan.length<10){
                    that.moreYuetan=false
                }else{
                    that.addMoreYuetan="加载更多"
                }
            })
        },
        addYuejie(){
            this.addMoreYuejie="加载中..."
            this.pageNum++
            this.axios({
             method: 'get',
             url: '/playback/list.do?pageNum='+this.pageNum+'&pageSize=10'+'&courseType=越姐麻辣说',
            }).then((res)=>{ 
                const msgJie=res.data.data.list
                // console.log(msg)
                for(let i=0;i<msgJie.length;i++){
                    this.yuejieList.push(msgJie[i])
                }
                console.log(this.yuejieList)
                if(msgJie.length<10){
                    this.moreYuejie=false
                }else{
                    this.addMoreYuejie="加载更多"
                }
            })
        }
    },
    beforeMount(){
        this.axios({
             method: 'get',
             url: '/playback/list.do?pageNum='+this.pageNum+'&pageSize=10'+'&courseType=越谈',
        }).then((res)=>{ 
            const msgTan=res.data.data.list
            this.yuetanList=msgTan
        })
        this.axios({
             method: 'get',
             url: '/playback/list.do?pageNum='+this.pageNum+'&pageSize=10'+'&courseType=越姐麻辣说',
        }).then((res)=>{ 
            const msgJie=res.data.data.list
            this.yuejieList=msgJie
        })
        this.axios({
             method: 'get',
             url: '/playback/list.do?pageNum='+this.pageNum+'&pageSize=10'+'&courseType=火龙果讲座',
        }).then((res)=>{ 
            console.log(res.data.data.list)
            this.pitayaList=res.data.data.list
        })
         // 微信分享
        if(wxShareInit.isWeixinBrowser()){
            setTimeout(wxShareInit.wxReady(this.wxShareInfo),500)
        }
    }
}
</script>

<style lang="scss" scoped>
    .show_M{
            display: none;
    }
    .periodical-com{
        background-color: #fafafa;
        padding-bottom: 140px;
        .title_M{
            text-align: center;
            font-size: 24px;
            padding: 15px 0;
            margin: 40px 48px;
            border-radius: 5px;
            width: 25%;
            background:#f1f1f1;
            &:hover{
                cursor: pointer;
            }
            @media (max-width:768px) {
                background:#fafafa;
                border-bottom:1px solid #eee;
                font-size: 14px;
                padding: 0px;
                margin: 10px 0px;
                border-radius: 0px;
                width: 33.333333%;
            }
        }
        .changeColor{
            background: #215089 !important;
        }
        .internal{
            margin-top: 40px;
            margin-bottom: 30px;
        }
        .internalRefer{
            margin-bottom: 30px;
            .internalRefer-book{
                width: 100%;    
                padding:20px;
                background-color: #fff;
                border-radius: 10px;
                cursor:pointer;
                h3{
                    margin-top: 0;
                    margin-bottom: 20px;
                    height: 70px;
                    line-height: 34px;
                    overflow: hidden;
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    line-clamp: 2;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .internalRefer-felx{
                    display: flex;
                    justify-content: space-between;
                    color: rgb(131, 131, 131);
                    h4{
                        margin: 0;
                    }
                    .playback{
                        padding: 6px 10px;
                        background-color: #215089;
                        border-radius: 8px;
                        cursor:pointer;
                        color: #fff;
                        font-size: 16px;
                        margin-top: -6px;
                    }
                }
            }
        }
        .loadMore{
            margin-top:30px;
            display: inline-block;
            border-radius: 20px;
            height: 44px;
            line-height: 44px;
            text-align: center;
            padding: 0 40px;
            color: #FFF;
            border: 1px solid #4790E5;
            -webkit-transition: all 0.1s ease 0s;
            -ms-transition: all 0.1s ease 0s;
            -o-transition: all 0.1s ease 0s;
            transition: all 0.1s ease 0s;
            background-image: linear-gradient(-180deg, #4790E5 0%, #52A5F4 100%);
            box-shadow: 0 5px 30px #ccc;
            &:hover,
            &:link{
                text-decoration: none;
            }
            &:active{
                text-decoration: none;
                transform: scale(0.9);
                color: #FFF;
                border: #52A5F4;
                background-image: linear-gradient(-180deg, rgb(64, 135, 216) 0%, rgb(64, 131, 194) 100%);
                box-shadow: 0 5px 30px #52A5F4
            }
        }
    }
    @media (max-width:320px){
        .internalRefer-felx{
            h4{
                &:first-of-type{
                    max-width: 180px !important;
                }
            }
        }   
    }
    @media (max-width:768px) {
        .internalRefer-felx{
            h4{
                &:first-of-type{
                    font-size: 16px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    max-width: 230px;
                }
            }
            .playback{
                font-size: 14px;
            }
        }            
        .title_M{
            text-align: center;
            font-size: 22px;
            height: 40px;
            line-height: 40px;
            margin: 10px 0;
        }
      .periodical-com{
         padding-bottom: 20px; 
         .internal{
            margin-top: 30px;
            margin-bottom:20px;
        }
         .title{
             font-size: 28px;
             color: rgb(131, 131, 131);
        }
        .internalRefer{
            margin-bottom: 10px;
            padding: 0;
            .internalRefer-book{
                width: 100%;    
                padding:10px;
                background-color: #fff;
                h3{
                    margin-bottom: 10px;
                    font-size: 18px;
                }
            }
        }
      }             
    }
.current {
  background:#6296d5 !important;
  color:#fff;
  @media (max-width:768px) {
    background:#fafafa !important;
    color: #215089;
    border-bottom: 3px solid #215089 !important;
  }
}
 
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
 
.fade-enter,
.fade-leave-to
  {
  opacity: 0;
}
 
.move-enter,
.move-leave-to {
  transform: translateY(10px) rotate(360deg)
}
 
.move-enter-active,
.move-leave-acitve {
  transition: all 1s
}
</style>
