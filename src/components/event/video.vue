<template>
    <div class="periodical-com">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="internal">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/research/videoList' }">《越谈》直播回放</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/research/video' }">{{vidioTitile}}</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-xs-12 internalRefer">
                    <div class="internalRefer-book">
                        <video :src="videoMp4" style="width:100%"  autoplay  enable-danmu  controls></video>
                        <h3>{{vidioTitile}}</h3>
                        <div class="internalRefer-felx">
                            <h4>嘉宾：{{guest}}</h4>
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
            videoMp4:'',
            vidioTitile:'',
            guest:''
        } 
    },
    created(){
    },
    methods:{
      videoDetails(){
          var that=this
          var ID =that.$route.query.id
          that.axios({
             method: 'get',
             url: '/playback/detail.do',
             params:{courseId:ID}
        }).then((res)=>{ 
            that.videoMp4 =  res.data.data.mvAddress.replace( "http://nsi-oss.xinxueshuo.cn","https://nsi.oss-cn-zhangjiakou.aliyuncs.com")
            that.vidioTitile =  res.data.data.vidioTitile,
            that.guest =  res.data.data.guest
            console.log(res.data.data)
        })
      }
    },
     activated(){
        this.videoDetails()
    },
}
</script>

<style lang="scss" scoped>
    .periodical-com{
        background-color: #fafafa;
        padding-bottom: 40px;
        .internal{
            margin-top: 40px;
            margin-bottom: 30px;
            .el-breadcrumb{
                font-size: 20px;
                @media (max-width:768px) {
                    display: none;
                }
            }
        }
        .internalRefer{
            margin-bottom: 20px;
            .internalRefer-book{
                width: 100%;
                padding:10px;
                background-color: #fff;
                border-radius: 10px;
                h3{
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
                }
            }
        }
    }
</style>
