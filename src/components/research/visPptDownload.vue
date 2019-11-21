<template>
    <!-- ppt合集 -->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="ppt">
                        <h1 class="title">2019VIS国际学校发展大会PPT</h1>
                    </div>
                </div>
            </div>
            <div class="row titleList">
                <div class="col-md-5 col-xs-10"  v-for="(item,index) in pptList" :key="index">
                    <div class="row">
                        <div class="col-xs-8">
                            <span class="downloadTitle">{{item.fileName}}</span>
                        </div>
                        <div class="col-xs-4">
                            <span  @click="toDownload(item.fileUrl)" class="downloadBtn">下载</span>
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
            pptList:[],
            wxShareInfo:{
                title:"2019VIS国际学校发展大会嘉宾PPT下载",
                imgUrl:"https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/magazine/img/1574237098276.jpg",
                href:window.location.href,
                desc:"国际学校行业专家打造的多边媒体平台，以新媒体为载体、以行业研究为核心、以行业服务为平台"
            }
        }
    },
    methods:{
         // 判断微信浏览器
        isWechat(){
            var ua = navigator.userAgent.toLowerCase();
            if(ua.match(/MicroMessenger/i)=="micromessenger"){
                return true
            }
        },
        // 判断ios
        isIOS(){
            var u = navigator.userAgent,version = '';
            if(u.indexOf('Mac OS X') > -1){
                return true
            }
        },
        toDownload(url){
             // 为ios微信浏览器
            if(this.isWechat()&&this.isIOS()&&url.indexOf('.zip')>-1){
                const h = this.$createElement;
                this.$notify({
                    title: '温馨提示',
                    message: h('i', { style: 'color: #20528f'}, '请在Safari浏览器打开下载'),
                    offset: 150,
                    type:'info',
                    duration:3000
                });
            }else{
                window.open(url)
            }
        },
    },
    beforeMount(){
        // 微信分享
        if(wxShareInit.isWeixinBrowser()){
            setTimeout(wxShareInit.wxReady(this.wxShareInfo),500)
        }

        const pptAll = new URLSearchParams();
        pptAll.append('pageNum', this.pageNum,);
        pptAll.append('pageSize', 30);
        pptAll.append('type', 'vis2019');
        this.axios({
             method: 'post',
             url: '/manager/resource/list.do',
             data:pptAll
        }).then((res)=>{ 
            this.pptList=res.data.data.list
        })

    }

}
</script>

<style lang="scss">
    .ppt{
        padding: 50px 0 20px;
        @media (max-width: 768px) {
            padding: 10px 0 5px;
        }
        .title{
            display: inline-block;
            font-family: PingFangSC-Semibold;
            font-size: 40px;
            color: #c8c8c8;
            line-height: 48px;
            height: 50px;
            position: relative;
            margin-bottom: 40px;
            @media (max-width: 768px) {
                font-size: 25px;
                margin-bottom: 20px;
                margin-top: 10px;
            }
        }
    }
    .titleList{
            margin-bottom: 50px;
            @media (max-width: 768px) {
                margin-bottom: 20px;
            }
            .col-md-5{
                font-size: 18px;
                background:#efefef;
                margin-bottom:40px;
                // margin-left:80px;
                padding: 0px 0px;
                border-radius: 5px;
                &:nth-child(even){
                    margin-left:100px;
                }
                @media (max-width:768px) {
                    &:nth-child(even){
                        margin-left:30px;
                    }
                    margin-bottom:20px;
                    font-size: 14px;
                    margin-left:30px;
                }
                span.downloadTitle{
                    color: #9e9e9e;
                    padding: 0px 20px;
                    line-height: 45px;
                    height: 38px;
                    width: 400px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: inline-block;
                    white-space: nowrap;
                    @media(max-width: 768px) {
                        padding: 0px 10px;
                        width: 120%;
                        line-height: 43px;
                        height: 35px;
                    }
                }
                span.downloadBtn{
                    border-radius: 0 5px 5px 0;
                    font-size: 14px;
                    cursor: pointer;
                    float: right;
                    background: #3b77a9;
                    color: #fff;
                    padding: 12px 20px;
                    border-left: 1px solid #b7b7b7;
                    &:hover{
                        background: #215484;
                        color: #fff;
                    }
                    @media (max-width:768px) {
                        padding: 10px 15px;
                    }
                }
            }
        }
</style>
