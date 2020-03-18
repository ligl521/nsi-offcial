<template>
    <div class="periodical-com">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="internal">
                        <h1 class="title">越谈</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-xs-12 internalRefer">
                    <div class="internalRefer-book">
                        <video :src="videoMp4" style="width:100%"  autoplay  enable-danmu  controls></video>
                        <h3>{{vidioTitile}}</h3>
                        <div class="internalRefer-felx">
                            <h4>嘉宾：{{guest}}</h4>
                            <!-- <h4 @click="enterDownload(list.id)" class="playback">直播回放</h4> -->
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
    //  this.videoDetails(this.$route.query.id)
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
            that.videoMp4 =  res.data.data.mvAddress,
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
                    .playback{
                        padding: 6px 10px;
                        margin-top: 4px;
                        background-color: #215089;
                        border-radius: 8px;
                        cursor:pointer;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>
