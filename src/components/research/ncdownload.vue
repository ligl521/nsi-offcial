<template>
    <div class="download-com">
        <div class="container-father">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-xs-6 bookImg">
                        <img :src="list.imageUrl" alt="" class="img-responsive">
                    </div>
                    <div class="col-md-8 col-xs-6 bookContent">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/research/info' }">研究院</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/research/periodical' }">国际学校内参</el-breadcrumb-item>
                        </el-breadcrumb>
                        <h2>{{list.fileName}}</h2>
                        <button class="btn btn-primary" @click="toDownload(list.fileUrl)"><i class="iconfont icon-download"></i>下载</button>
                        <el-popover placement="right" title="打开微信 “扫一扫”" width="190" trigger="hover" content="微信二维码">
                            <el-button type="success" class="btn btn-success"  slot="reference"><i class="iconfont icon-fenxiang"></i>分享</el-button>
                            <div id="qrCode" ref="qrCodeUrl"></div>
                        </el-popover>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-xs-12">
                    <div class="splitLine"></div>
                    <h2 class="recommend-swiper">相关推荐</h2>
                </div>
            </div>
        </div>
        <div class="recommend-book">
            <div class="container">
                <div class="row">
                    <div class="col-xs-4" v-for="(item,index) in bookImgList" :key="index">
                        <img :src="item.imageUrl" alt="" @click="enterBook(item.id)">
                        <p @click="enterBook(item.id)">{{item.fileName}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-father">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item,index) in bookImgList" :key="index">
                                    <img :src="item.imageUrl" alt="" style="opacity:1" @click="enterBook(item.id)">
                                    <p @click="enterBook(item.id)">{{item.fileName}}</p>
                                </div>
                            </div>
                        </div>
                        <!-- 如果需要导航按钮 -->
                        <div class="swiper-button-prev swiper-button-black"></div>
                        <div class="swiper-button-next swiper-button-black"></div>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
</template>

<script>
import wxShareInit from '../../assets/js/weChatShare01'
import QRCode from 'qrcodejs2'
export default {
    data(){
        return{
            list:[],
            bookImgList:[],
            wxShareInfo:{
                title:"",
                imgUrl:"",
                href:window.location.href,
                desc:"国际学校行业专家打造的多边媒体平台，以新媒体为载体、以行业研究为核心、以行业服务为平台"
            },
        }
    },
    created(){
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
        detailList(){
            var that=this
            var Id = that.$route.query.id
            that.axios({
                method:"get",
                url: '/manager/resource/detail.do',
                params:{
                    id:Id
                }
            }).then((res)=>{
                that.list=res.data.data
                that.wxShareInfo.title= that.list.fileName
                that.wxShareInfo.imgUrl= that.list.imageUrl
                document.getElementById("qrCode").innerHTML = "";
                var qrcode = new QRCode(that.$refs.qrCodeUrl, {
                    text: 'http://www.xinxueshuo.cn/#/research/ncdownload?id='+that.list.id,
                    width: 150,
                    height: 150,
                })
            })
        },
        bookList(){
            const params = new URLSearchParams();
            params.append('pageNum', 1);
            params.append('pageSize', 30);
            params.append('type', '内参');
            this.axios({
                method: 'post',
                url: '/manager/resource/list.do',
                data:params
            }).then((res)=>{ 
                this.bookImgList=res.data.data.list
                this.$nextTick(()=>{
                    this.swiperInit()
                })
            })
        },
        swiperInit(){
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true,
                autoplay:5000,
                slidesPerView:5,//页面分组显示，这里显示为3组
                loopedSlides :10,
                // slidesPerGroup:3,//3个一组
                // spaceBetween:5,//slide间隙
                // centeredSlides:true , //页面居中
                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
	        })    
        },
        enterBook(id){
            let routeData= this.$router.resolve({path: 'download',query:{id:id}})
            window.open(routeData.href, '_blank');
        }
    },
    activated(){
        this.detailList()
        this.bookList()
    },
    beforeMount(){
         // 微信分享
        if(wxShareInit.isWeixinBrowser()){
            setTimeout(wxShareInit.wxReady(this.wxShareInfo),500)
        } 
    },

}
</script>

<style lang="scss" scoped>
.download-com{
    .container-father{
        .container{
            .bookImg{
                display:flex;
                justify-content: center;
                img{
                    width: 70%;
                    height: auto;
                    margin: 70px 0 0;
                    box-shadow: 0 5px 10px #ccc;
                    @media (max-width:768px) {
                        margin: 15px 0 0;
                        width: 100%;
                        height: 210px;
                    }
                }
                
            }
            .bookContent{
                .el-breadcrumb{
                    margin-top: 100px;
                    font-size: 16px;
                    @media (max-width:768px) {
                        display: none;
                    }
                }
                h2{
                    margin-top: 30px;
                    @media (max-width:768px) {
                        margin-top: 30px;
                        font-size: 18px;
                        line-height: 28px;
                    }
                }
                button{
                    width: 20%;
                    margin-top: 140px;
                    font-size: 24px;
                    @media (max-width:768px) {
                        margin-top: 50px;
                        width:70%;
                        font-size: 20px;
                    }
                    i{
                        font-size: 24px;
                        margin-right: 10px;
                        @media (max-width:768px) {
                            font-size: 20px;
                        }
                    }
                }
                
                .el-button{
                    margin-left:10px;
                    @media (max-width:768px) {
                        display: none;
                    }
                }
            }
        }
    }
    .splitLine{
        border:1px solid #eaeaea;
        margin:50px auto;
        @media (max-width:768px) {
            margin:15px 0;
            border: 2px solid #eaeaea;
        }
    }
    .recommend-swiper{
        margin-bottom:40px;
        @media (max-width:768px) {
            font-weight: bold;
            font-size: 16px;
            margin-bottom:15px;
        }
    }
    .recommend-book{
        display: none;
        @media (max-width:768px) {
            display: block;
        }
        img{
            width: 100%;
            margin: 10px auto 15px;
            display: inherit;
            box-shadow: 0 5px 10px #ccc;
            cursor: pointer;
        }
        p{
            font-size: 12px;
            margin: 0 auto 10px;
            cursor: pointer;
            max-height: 55px;
            min-height: 25px;
        }
    }
    .swiper-father{
        position: relative;
        margin:0px auto 110px;
        @media (max-width:768px) {
            display: none;
        }
        .swiper-container{
            width: 90%;
            margin-top:10px;
            .swiper-slide{
                text-align:center;
                img{
                    box-shadow: 0 5px 10px #ccc;
                    width: 80%;
                    height: auto;
                    cursor: pointer;
                }
                p{
                    font-size: 16px;
                    width: 80%;
                    margin: 15px auto;
                    cursor: pointer;
                }
            }
        }
    }
    
}
</style>
<style>
.el-popover__title{
    text-align: center;
}
</style>


