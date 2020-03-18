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
                <div class="col-md-6 col-xs-12 internalRefer" v-for="(list,index) in videoList" :key="index">
                    <div class="internalRefer-book">
                        <h3>{{list.vidioTitile}}</h3>
                        <div class="internalRefer-felx">
                            <h4>嘉宾：{{list.guest}}</h4>
                            <h4 @click="videoBtn(list.id)" class="playback">直播回放</h4>
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
            pageNum:1,
            videoList:[], // 直播回放
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
    }
}
</script>

<style lang="scss" scoped>
    .periodical-com{
        background-color: #fafafa;
        padding-bottom: 140px;
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
