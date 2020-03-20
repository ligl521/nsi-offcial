<template>
    <div class="periodical-com">
        <div class="container">
            <div class="row show_PC">
                <div class="col-md-6 col-xs-12">
                    <div class="col-md-12">
                    <div class="internal">
                        <h1 class="title">《越谈》直播回放</h1>
                    </div>
                    </div>
                    <div class="col-md-12 col-xs-12 internalRefer" v-for="(list,index) in yuetanList" :key="index">
                        <div @click="videoBtn(list.id)" class="internalRefer-book">
                            <h3>{{list.vidioTitile}}</h3>
                            <div class="internalRefer-felx">
                                <h4>嘉宾：{{list.guest}}</h4>
                                <h4  class="playback">直播回放</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xs-12">
                    <div class="col-md-12">
                        <div class="internal">
                            <h1 class="title">《越姐麻辣说》直播回放</h1>
                        </div>
                    </div>
                    <div class="col-md-12 col-xs-12 internalRefer" v-for="(list,index) in yuejieList" :key="index">
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
            <div class="row show_M">
                <div class="col-md-6 col-xs-6 title_M">
                   <span v-bind:class="{current: num == 1}" v-on:click="change(1)">《越谈》</span>
                </div>
                <div class="col-md-6 col-xs-6 title_M">
                    <span v-bind:class="{current: num==2}" v-on:click="change(2)">《越姐麻辣说》</span>
                </div>
            </div>
            <div class="content show_M">
                <transition name="fade">
                  <div v-show="num == 1">
                      <div class="col-md-12 col-xs-12 internalRefer" v-for="(list,index) in yuetanList" :key="index">
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
                <transition name="fade">
                  <div v-show="num == 2">
                      <div class="col-md-12 col-xs-12 internalRefer" v-for="(list,index) in yuejieList" :key="index">
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
</template>

<script>
export default {
    data(){
        return{
            pageNum:1,
            yuetanList:[], // 越谈直播回放
            yuejieList:[], // 越姐麻辣说直播回放
            num: 1
        } 
    },
    methods:{
       videoBtn(id){
           this.$router.push({path: './video',query:{id:id}})
       },
       change: function(index) {
         this.num = index
       }
    },
    beforeMount(){
        this.axios({
             method: 'get',
             url: '/playback/list.do?pageNum='+this.pageNum+'&pageSize=10'+'&courseType=越谈',
        }).then((res)=>{ 
            console.log(res.data.data.list)
            this.yuetanList=res.data.data.list
        })
        this.axios({
             method: 'get',
             url: '/playback/list.do?pageNum='+this.pageNum+'&pageSize=10'+'&courseType=越姐麻辣说',
        }).then((res)=>{ 
            console.log(res.data.data.list)
            this.yuejieList=res.data.data.list
        })
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
    }
    @media (max-width:768px) {
        .title_M{
            text-align: center;
            font-size: 22px;
            height: 40px;
            line-height: 40px;
            border:1px solid #eee;
            margin: 10px 0;
        }
        .show_M{
            display: block;
        }
       .show_PC{
            display: none;
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
                    font-size: 22px;
                }
            }
        }
      }             
    }
.current {
  color: #215089
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
