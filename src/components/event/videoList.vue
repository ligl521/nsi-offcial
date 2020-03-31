<template>
    <div class="periodical-com">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="internal">
                        <h1 class="title">《越谈》直播回放</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-xs-12 internalRefer" v-for="(list,index) in videoList" :key="index">
                    <div @click="videoBtn(list.id)" class="internalRefer-book">
                        <h3>{{list.vidioTitile}}</h3>
                        <div class="internalRefer-felx">
                            <h4>嘉宾：{{list.guest}}</h4>
                            <h4  class="playback">直播回放</h4>
                        </div>
                    </div>
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
            pageNum:1,
            videoList:[], // 直播回放
            wxShareInfo: {
                title: "【越谈】+【越姐麻辣说】| 直播回顾",
                imgUrl:"https://data.xinxueshuo.cn/upImage/upInstitutionImg/100062/100062-logo.jpg",
                href: window.location.href,
                desc:"《越谈》，面向国际学校从业者。《越姐麻辣说》，面向国际学校家长群体"
            },
        } 
    },
    methods:{
       videoBtn(id){
           this.$router.push({path: './video',query:{id:id}})
       }
    },
    beforeMount(){
        this.axios({
             method: 'get',
             url: '/playback/list.do?pageNum='+this.pageNum+'&pageSize=10'+'&courseType=越谈',
        }).then((res)=>{ 
            console.log(res.data.data.list)
            this.videoList=res.data.data.list
        })
         // 微信分享
        if(wxShareInit.isWeixinBrowser()){
            setTimeout(wxShareInit.wxReady(this.wxShareInfo),500)
        }
    }
}
</script>

<style lang="scss" scoped>
    .periodical-com{
        background-color: #fafafa;
        padding-bottom: 140px;
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
                    @media (max-width:768px) {
                        font-size:18px !important;
                    }
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
    }
    @media (max-width:768px) {
      .periodical-com{
         padding-bottom: 30px; 
      }             
    }
</style>
