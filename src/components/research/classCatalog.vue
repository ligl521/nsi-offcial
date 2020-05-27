<template>
    <div>
        <div class="banner">
            <div class="bannerContent"  @click="centerDialogVisible = true">
                <p>
                    <span class="iconfont icon-gouwuche"></span><i>|</i><span>立即报名</span>
                </p>
            </div>
            <div class="dialogContent">
                <el-dialog
                    :visible.sync="centerDialogVisible"
                    title="提示"
                    center>
                    <div class="dialogBox">
                        <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/scan.png" alt="">
                        <p>请扫码添加助教微信<br>或联系小新：15010927730</p>
                    </div>
                </el-dialog>
            </div>
        </div>
        <div class="tabBox">
            <el-tabs v-model="activeName" @tab-click="handleClick" class="tabTitle" stretch>
                <el-tab-pane label="课程章节" name="first" class="list">
                    <h3><span class="listLine"></span>课程目录</h3>
                    <p class="divider"></p>
                    <div class="part">
                        <p class="number">第一章 市场招生策略篇</p>
                        <p>01 《新建校定位：市场定位、品牌定位、产品定位》- 李远</p>
                        <p>02 《如何科学管理市场目标：定目标、玩方法、抓过程、等结果》- 张南</p>
                        <p>03 《2020，信心胜过一切——新谈K12学校招生策略》- 陈泽芳</p>
                        <p>04 《疫情之下市场招生的坚守与变革》- 童晓白</p>
                    </div>
                    <p class="divider"></p>
                    <div class="part">
                        <p class="number">第二章 市场招生战略篇</p>
                        <p>01 《如何改变现有市场招生策略应对线上教育的崛起》- 乔拯克</p>
                        <p>02 《特殊时期如何开展有效招生推广》- 吴峥</p>
                        <p>03 《有限市场预算下的市场招生工作如何增效》- 乔拯克</p>
                        <p>04 《如何锻造市场招生队伍战斗力》- 许凌可</p>
                        <p>05 《国际化学校宣传中视频内容的策划与制作》- 许凌可</p>
                    </div>
                    <p class="divider"></p>
                    <div class="part">
                        <p class="number">第三章 品牌与公共关系篇</p>
                        <p>01 《集团化品牌管理的为与不为》- 童晓白</p>
                        <p>02 《策划自媒体话题性品牌推广》- 吴峥</p>
                        <p>03 《家校关系管理如何高效提升新招率和留存率》- 吴越</p>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="课程介绍" name="second">
                    <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/classInt.jpg" alt="" width="100%">
                </el-tab-pane>
                <el-tab-pane label="讲师介绍" name="third">
                    <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/lecturerInt.jpg" alt="" width="100%">
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        activeName: 'first',
        centerDialogVisible:false
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }

}
</script>

<style lang="scss" scoped>
.banner{
    width: 100%;
    height: 430px;
    background-image: url("http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/classBanner.jpg");
    background-position: center center;
    background-size: cover;
    position: relative;
    @media (max-width:768px){
        height:315px;
    }
    .bannerContent{
        position: absolute;
        bottom:10px;
        left: 50%;
        transform: translate(-50%,-50%);
        @media (max-width:768px){
            bottom:5px;
        }
        p{
            background: #F20D0D;
            box-shadow: 0 4px 8px 0 rgba(28, 31, 33, 0.2);
            border-radius: 24px;
            font-size: 16px;
            font-weight: 200;
            color: #fff;
            width: 180px;
            height: 50px;
            text-align: center;
            line-height:42px;
            cursor: pointer;
            @media (max-width:768px) {
                height: 45px;
                line-height: 37px;
            }
            i{
                font-style: normal;
                display: inline-block;
                margin: 0 10px;
            }
            span{
                &:first-child{
                    font-size: 25px;
                    position: relative;
                    top: 4px;
                }
            }
            
        }
    }
    .dialogContent{
        .dialogBox{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            p{
                text-align: center;
                font-weight: 600;
                margin:10px 0 0;
                font-size: 16px;
            }
        }
        
    }
}
.tabBox{
    width:55%;
    margin:0 auto 80px;
    @media (max-width: 768px) {
        width:100%;
    }
    .tabTitle{
        .list{
            margin:20px 0 50px;
            @media (max-width: 768px) {
                padding:0 10px;
            }
            .listLine{
                width: 3px;
                height: 20px;
                background: #caac80;
                opacity: 1;
                display: inline-block;
                position:relative;
                top:2px;
                margin-right:5px;
            }
            .divider{
                border-bottom:1px solid #eee;
                margin:20px 0;
            }
            .part{
                .number{
                    font-size:20px;
                    font-weight: 600;
                }
                p{
                    font-size:18px;
                    margin:30px 0; 
                    @media (max-width: 768px) {
                        margin:15px 0; 
                    }
                }
            }
        }
    }
}

</style>
<style lang="scss">
.el-dialog{
    width:300px !important;
    margin-top:30vh !important;
    height:340px !important;
    @media (max-width:768px) {
        width:70% !important;
        margin-top:15vh !important;
    }
    .el-dialog__body{
        padding-top:0px;
    }
}  
.el-tabs__item {
    font-size: 20px !important;
    font-weight: 600 !important;
}
</style>

