<template>
    <div class="periodical-com">
        <!-- 内参 -->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="internal">
                        <!-- <h1 class="title">内参<span class="year">2017</span></h1> -->
                        <h1 class="title">内参</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 col-xs-6" v-for="(list,index) in internalReferList" :key="index">
                    <div class="internalRefer-book">
                            <a href="javascript:;" @click="enterDownload(list.id)" class="internalRefer-box" slot="reference" :style="{'background-image':'url('+list.imageUrl+')'}">
                            </a>
                        <h4 :title="list.bookName" class="bookName" @click="enterDownload(list.id)">{{list.fileName.split(".")[0]}}</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="buyFullBook">
            <p @click="buyFull">购买完整版国际学校内参</p>
            <div class="erweima" :class="isShow ? 'show':'hide'">
                <span class="title">国际教育研究院</span>
                <span class="close"  @click="isShowBox">×</span>
                <img src="https://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/erweima.png" alt="" class="img-responsive">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
             pageNum:1,
            // 内参
            internalReferList:[],
            isShow:false
        } 
    },
    methods:{
        
        enterDownload(id){
           this.$router.push({path: './ncdownload',query:{id:id}})
       },
        buyFull(){
            window.open("https://www.xinxueshuo.cn/nsi-shop/dist/index.html#/", '_blank')
        },
        isShowBox(){
            this.isShow=false
        }
    },
    beforeMount(){
        const params = new URLSearchParams();
        params.append('pageNum', this.pageNum,);
        params.append('pageSize', 30);
        params.append('type', '内参');
        this.axios({
             method: 'post',
             url: '/manager/resource/list.do',
             data:params
        }).then((res)=>{
            this.internalReferList=res.data.data.list
        })
    }
}
</script>

<style lang="scss" scoped>
    .periodical-com{
        background-color: #fafafa;
        padding-bottom: 30px;
        @mixin transitionAnimate{
            -webkit-transition: all 0.3s ease 0s;
            -ms-transition: all 0.3s ease 0s;
            -o-transition: all 0.3s ease 0s;
            transition: all 0.3s ease 0s;
        }
        .internal{
            padding: 50px 0 20px;
            @media (max-width: 768px) {
                padding: 10px 0 5px;
            }
            .title{
                display: inline-block;
                font-family: PingFangSC-Semibold;
                font-size: 48px;
                color: #c8c8c8;
                letter-spacing: 10px;
                line-height: 48px;
                height: 50px;
                position: relative;
                margin-bottom: 40px;
                @media (max-width: 768px) {
                    font-size: 30px;
                    margin-bottom: 15px;
                    margin-top: 10px;
                }
                .year{
                    position: absolute;
                    right: -12px;
                    top: 48px;
                    font-size: 20px;
                    color: #d2d1d1;
                    letter-spacing: 0;
                    line-height: 20px;
                }
            }
        }
        .internalRefer-book{
            width: 100%;
            min-height: 345px;
            margin-bottom: 30px;
            @media (max-width: 768px) {
                min-height: 232px;
            }
            .bookName{
                color: #a3a3a3;
                font-size: 22px;
                margin-top: 15px;
                overflow: hidden;
                text-overflow: -o-ellipsis-lastline;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                min-height: 45px;
                max-height: 45px;

            }
            .internalRefer-box{
                display: inline-block;
                width: 100%;
                min-height: 345px;
                box-shadow: 0 5px 10px #ccc;
                @media (max-width: 768px) {
                    min-height: 250px;
                    box-shadow: 0 5px 10px #ccc;
                }
                background-color: #e4e4e4;
                background-size: 100% 100%;
                @include transitionAnimate;
                &:hover{
                    box-shadow: 0 15px 15px 0 rgba(15, 37, 64, 0.20);
                    text-decoration: none;
                    z-index: 2;
                }
            }
        }
        .buyFullBook{
            text-align: center;
            position: relative;
            p{
                color: #fff;
                background: #2c6daf;
                display: inline-block;
                padding: 10px 20px;
                font-size: 16px;
                letter-spacing: 2px;
                border-radius: 5px;
                    margin-bottom: 40px;
            }
            .erweima{
                position: absolute;
                right:43%;
                bottom: 90px;
                height: 330px;
                width: 280px;
                background-color: #fff;
                border-radius: 4px;
                box-shadow: 0 0 3px 1px rgba(0, 0, 0, .26);
                text-align: center;
                &:after{
                    content: ' ';
                    display: block;
                    position: absolute;
                    left: 47%;
                    bottom: -15px;
                    width: 30px;
                    height: 30px;
                    background: #ffffff;
                    -webkit-box-shadow: -2px -2px 4px -2px rgba(0, 0, 0, 0.5);
                    box-shadow: 2px -2px 4px -2px rgba(0, 0, 0, 0.5);
                    -webkit-transform: rotate(135deg);
                }
                .title{
                    position: relative;
                    top: 20px;
                    left: -58px;
                    font-size: 16px;
                }
                .close{
                    position: relative;
                    right: 20px;
                    top: 20px;
                    border: 1px solid;
                    border-radius: 50%;
                    width: 22px;
                    height: 22px;
                    line-height: 22px;
                    padding-right: 1px;
                }
                img{
                    width: 88%;
                    display: inline-block;
                    position: relative;
                    top: 36px;
                }
            }
        }
        
    }
</style>
