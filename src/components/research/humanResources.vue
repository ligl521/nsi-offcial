<template>
    <div>
        <div class="banner">
            <div class="bannerContent">
                <div class="buyNow" @click="centerDialogVisible = true">
                    <p >立即报名</p>
                </div>
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
        <div class="introduce">
            <div class="container containerBox">
                <div class="row">
                    <div class="col-md-6 col-xs-6 enrollmentTargetBox">
                        <div class="enrollmentTarget">
                            <img src="../../images/人力资源课/1.png" alt="">
                            <p class="enrollmentTargetTitle">招生对象</p>
                            <p class="enrollmentTargetContent">学校及集团<br>人力资源管理者</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-6 enrollmentTargetBox">
                        <div class="enrollmentTarget">
                            <img src="../../images/人力资源课/2.png" alt="">
                            <p class="enrollmentTargetTitle">培养目标</p>
                            <p class="enrollmentTargetContent">国际化学校<br>复合型管理人才</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="courseContent">
            <div class="index-title">
                <p class="text-center chinese-title">
                    <span class="lecturerLine"></span>
                    课程内容
                    <span class="lecturerLine"></span>
                </p>    
                <p class="text-center english-title"><small>COURSE CONTENT</small></p>
            </div>
            <div class="courseBox">
                <div class="leftImg">
                    <img src="../../images/人力资源课/1.jpg" alt="">
                </div>
                <div class="rightContent">
                    <span class="courseLine"></span>
                    <span class="courseTitle">组织管理模块</span>
                    <p>从OD视角分析如何提升国际学校组织管理效能 - 邱颖</p>
                    <p>如何构建学校人才梯队 - 徐涛</p>
                </div>
                <div class="clear"></div>
            </div>
            <div class="courseBox">
                <div class="rightImg">
                    <img src="../../images/人力资源课/2.jpg" alt="">
                </div>
                <div class="leftContent">
                    <span class="courseTitle">人才管理模块</span>
                    <span class="courseLine"></span>
                    <p>人才管理之岗位设计与胜任力模型搭建 - 金&nbsp;&nbsp;&nbsp;赟</p>
                    <p>人才管理之有效人才评估 - 王常泰</p>
                    <p>人才管理之如何提升雇主品牌 - 金&nbsp;&nbsp;&nbsp;赟</p>
                    <p>人才管理之留住好老师是谁的事 - 吴真真</p>
                </div>
                <div class="clear"></div>
            </div>
            <div class="courseBox">
                <div class="leftImg">
                    <img src="../../images/人力资源课/3.jpg" alt="">
                </div>
                <div class="rightContent">
                    <span class="courseLine"></span>
                    <span class="courseTitle">招聘模块</span>
                    <p>结构国际化学校人才招聘全过程 - 邱颖</p>
                    <p>详解招聘实务中的那些坑 - 高美华</p>
                </div>
                <div class="clear"></div>

            </div>
             <div class="courseBox">
                <div class="rightImg">
                    <img src="../../images/人力资源课/4.jpg" alt="">
                </div>
                <div class="leftContent">
                    <span class="courseTitle">薪酬福利模块</span>
                    <span class="courseLine"></span>
                    <p>从零到一搭建K-12国际化学校薪酬福利体系 - 刘&nbsp;&nbsp;&nbsp;&nbsp;慧</p>
                    <p>国际化学校劳动合同制定技巧与劳动纠纷案实例分享 - 陈&nbsp;&nbsp;&nbsp;&nbsp;亮</p>
                </div>
                <div class="clear"></div>
            </div>
            <div class="courseBox">
                <div class="leftImg">
                    <img src="../../images/人力资源课/5.jpg" alt="">
                </div>
                <div class="rightContent">
                    <span class="courseLine"></span>
                    <span class="courseTitle">绩效考核模块</span>
                    <p>从零到一搭建K-12国际化学校绩效考核体系 - 王常泰</p>
                    <p>高效辅导如何助力绩效管理提升 - 周宪明</p>
                </div>
                <div class="clear"></div>

            </div>
            <!-- <div class="enterButton">
                <p @click="enterCourse">进入课程</p>
            </div> -->
        </div>
        <div class="lecturer">
            <div class="index-title">
                <p class="text-center chinese-title">
                    <span class="lecturerLine"></span>
                    课程讲师
                    <span class="lecturerLine"></span>
                </p>    
                <p class="text-center english-title"><small>THE COURSE INSTRUCTOR</small></p>
            </div>
            <div class="aboutLecturer">
                <div class="container containerBox">
                    <div class="row">
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/人力资源课/嘉宾/邱颖.jpg">
                                <p class="lecturerName">邱颖</p>
                                <p class="lecturerPost">北京海淀凯文学校<br>运营总监</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/人力资源课/嘉宾/徐涛.jpg">
                                <p class="lecturerName">徐涛</p>
                                <p class="lecturerPost">北京市朝阳凯文学校<br>校长</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/人力资源课/嘉宾/金赟.jpg">
                                <p class="lecturerName">金赟</p>
                                <p class="lecturerPost">新加坡伊顿国际教育<br>中国区人事行政总监</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/人力资源课/嘉宾/王常泰.jpg">
                                <p class="lecturerName">王常泰</p>
                                <p class="lecturerPost">雅力教育集团<br>人力总经理</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/人力资源课/嘉宾/吴真真.jpg">
                                <p class="lecturerName">吴真真</p>
                                <p class="lecturerPost">长沙玮希国际学校<br>执行校长</p>
                            </div>
                        </div>
                         <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/人力资源课/嘉宾/高美华.jpg">
                                <p class="lecturerName">高美华</p>
                                <p class="lecturerPost">前重庆耀中国际学校<br>人力资源部负责人</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/人力资源课/嘉宾/刘慧.jpg">
                                <p class="lecturerName">刘慧</p>
                                <p class="lecturerPost">成都成实外教育国际部人力资源经理</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/人力资源课/嘉宾/陈亮.jpg">
                                <p class="lecturerName">陈亮</p>
                                <p class="lecturerPost">北京市京师律师事务所<br>律师</p>
                            </div>
                        </div>
                         <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/人力资源课/嘉宾/周宪明.jpg">
                                <p class="lecturerName">周宪明</p>
                                <p class="lecturerPost">北京中芯国际学校<br>执行董事</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
        <div class="courseArrangement">
            <div class="scan">
                <div class="leftContent">
                    <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/scan.png" alt="">
                    <p>扫码添加助教微信</p>
                </div>
                <div class="rightContent">
                    <div class="contentBox">
                        <div class="content">
                            <span class="titleLine"></span>
                            <span class="title">课程费用</span>
                            <p class="desc">¥3980/人</p>
                        </div>
                        <div class="content">
                            <span class="titleLine"></span>
                            <span class="title">联系方式</span>
                            <p class="desc">如有任何疑问，请联系助教小新电话：15010927730，或添加微信</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="scan-com">
                <div class="topContent">
                    <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/scan.png" alt="">
                    <p>扫码添加助教微信</p>
                </div>
                <div class="bottomContent">
                    <div class="contentBox">
                        <div class="content">
                            <span class="titleLine"></span>
                            <span class="title">课程费用</span>
                            <p class="desc">¥3980/人</p>
                        </div>
                        <div class="content">
                            <span class="titleLine"></span>
                            <span class="title">联系方式</span>
                            <p class="desc">如有任何疑问，请联系助教小新电话：15010927730，或添加微信</p>
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
    data() {
      return {
          centerDialogVisible: false,
          wxShareInfo: {
            title: "新学说 | 市场招生科学运营培训课",
            imgUrl:"https://data.xinxueshuo.cn/upImage/upInstitutionImg/100062/100062-logo.jpg",
            href: window.location.href,
            desc:"市场招生科学运营培训课，2020年国际化学校市场招生科学运营培训课。"
          },
      };
    },
    methods: {
      enterCourse(){
          this.$router.push({path:"./classCatalog"})
      },
      
    },
    beforeMount(){
         // 微信分享
        if(wxShareInit.isWeixinBrowser()){
            setTimeout(wxShareInit.wxReady(this.wxShareInfo),500)
        }
    }

}
</script>


<style lang="scss" scoped>
.banner{
    height: 480px;
    background-image: url("../../images/人力资源课/banner.jpg");
    background-position: center center;
    background-size: cover;
    position: relative;
    @media (max-width:768px) {
        height: 120px;
    }
    .bannerContent{
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        @media (max-width:768px) {
            bottom:0px;
        }
        .buyNow{
            p{
                width: 150px;
                height: 50px;
                line-height: 50px;
                font-size: 20px;
                text-align: center;
                // background:#b7933b;
                background:linear-gradient(180deg,#dbab69 0%,#cea261 100%);
                // box-shadow:0px 2px 10px #19144e;
                border-radius:30px;
                color:#fff;
                font-weight: 600;
                letter-spacing: 1px;
                cursor: pointer;
                @media (max-width:768px) {
                    font-size: 12px;
                    width: 80px;
                    height: 26px;
                    line-height: 26px;
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
.introduce{
    .containerBox{
        width:60%;
        margin:0 auto;
        text-align: center;
        @media (max-width: 768px) {
            width:100%;
        }
        .enrollmentTargetBox{
            margin:50px 0 20px;
            @media (max-width: 768px) {
                margin:30px 0 10px;
            }
            .enrollmentTarget{
                width:300px;
                height:205px;
                margin:0 auto;
                border-radius:8px;
                box-shadow:0px 0px 20px rgba(0,0,0,0.1);
                @media (max-width: 768px) {
                    width:160px;
                    height:180px;
                }
                img{
                    height:80px;
                    margin:20px 0 10px;
                    @media (max-width: 768px) {
                        height:70px;
                    }
                }
                .enrollmentTargetTitle{
                    font-size:20px;
                    font-weight:600;
                    color:#000;
                    margin-bottom:5px;
                    @media (max-width: 768px) {
                        margin-bottom:5px;
                    }
                }
                .enrollmentTargetContent{
                    font-size:18px;
                    font-weight:400;
                    color:#333;
                    @media (max-width: 768px) {
                        font-size:14px;
                    }
                }
            }
            
        }
    }
}
.courseContent{
    margin-top:20px;
    padding-bottom:20px;
    background:#07396a;
    // background:linear-gradient(180deg,rgba(67,103,172,1) 0%,rgba(63,97,162,1) 100%);
    .index-title {
        padding:30px 0;
        @media (max-width: 768px) {
             padding:15px 0;
        }
        .chinese-title{
            font-size:24px;
            font-weight:600;
            color:#fff;
            margin-bottom:0px;
        }
        .english-title{
            font-size:20px;
            font-weight:400;
            color:#fff;
        }
        .lecturerLine {
            display: inline-block;
            vertical-align: middle;
            width:30px;
            margin:0 5px;
            border:1px solid #fff;
            opacity:1;
        }    
    } 
    .courseBox{
        width:50%;
        margin:0 auto 20px;
        background:#fff;
        border-radius: 8px;
        padding:10px;
        position:relative;
        @media (max-width: 768px) {
            width:95%;
            height:220px;
        }
        .leftImg{
            float:left;
            height:200px;
            width:200px;
            @media (max-width: 768px) {
                display:none;
            }
            img{
                position: relative;
                left:50%;
                top:50%;
                transform: translate(-50%,-50%);
                max-height:100%;
                max-width: 100%;
                height: 200px;
                width: 200px;
            }
        }
        .rightContent{
            position: absolute;
            left: 230px;
            top: 20px;
            // transform: translateY(-50%);
            @media (max-width: 768px) {
                width: 100%;
                left: 5px;
            }
            .courseLine{
                width: 3px;
                height: 19px;
                background: #000;
                opacity: 1;
                display: inline-block;
                margin-left:6px;
                position: relative;
                top: 2px;
            }
            .courseTitle{
                font-size:20px;
                font-weight:600;
                color:#000;
                margin-bottom:10px;
                display:inline-block;
            }
            p{
                font-size:18px;
                font-weight:400;
                color:#333;
                letter-spacing: 1px;
                @media (max-width: 768px) {
                    font-size: 14px;
                }
            }
        }
        .rightImg{
            float:right;
            height:200px;
            width:200px;
            @media (max-width: 768px) {
                display:none;
            }
            img{
                 position: relative;
                left:50%;
                top:50%;
                transform: translate(-50%,-50%);
                max-height:100%;
                max-width:100%;
                height:200px;
                width:200px;
            }
        }
        .leftContent{
            position: absolute;
            right: 240px;
            top: 20px;
            // transform: translateY(-50%);
            text-align: right;
            @media (max-width: 768px) {
                width: 100%;
                right: 5px;
            }
            .courseLine{
                width: 3px;
                height: 19px;
                background: #000;
                opacity: 1;
                display: inline-block;
                position:relative;
                top:2px;
            }
            .courseTitle{
                font-size:20px;
                font-weight:600;
                color:#000;
                margin-bottom:10px;
                display:inline-block;
            }
            p{
                font-size:18px;
                font-weight:400;
                color:#333;
                letter-spacing: 1px;
                @media (max-width: 768px) {
                    font-size: 14px;
                }
            }
        }
        .clear{
            clear:both;
        }
    }
    .enterButton{
        p{
            width:120px;
            height:40px;
            line-height:40px;
            margin:0 auto;
            background:linear-gradient(180deg,rgba(222,177,108,1) 0%,rgba(185,145,83,1) 100%);
            box-shadow:0px 3px 10px rgba(0,0,0,0.24);
            border-radius:34px;
            color:#fff;
            text-align:center;
            cursor: pointer;
        }
    }
}
.lecturer{
    background:#fff;
    .index-title {
        padding:30px 0;
        @media (max-width: 768px) {
             padding:15px 0;
        }
        .chinese-title{
            font-size:24px;
            font-weight:600;
            color:rgba(0,0,0,1);
            margin-bottom:0px;
        }
        .english-title{
            font-size:20px;
            font-weight:400;
            color:rgba(102,102,102,1);
        }
        .lecturerLine {
            display: inline-block;
            vertical-align: middle;
            width:30px;
            margin:0 5px;
            border:1px solid rgba(112,112,112,1);
            opacity:1;
        }    
    }  
    .aboutLecturer{
        .containerBox{
            width:60%;
            @media (max-width: 768px) {
                width:100%;
            }
        }
        .lecturerBox{
            text-align: center;
            margin-bottom:20px;
            @media (max-width: 768px) {
                margin-bottom:10px;
            }
            img{
                padding-bottom:20px;
                height:120px;
            }
            .lecturerName{
                font-size:20px;
                font-weight:600;
                color:rgba(0,0,0,1);
                margin-bottom:5px;
            }
            .lecturerPost{
                font-size:18px;
                font-weight:400;
                color:rgba(51,51,51,1);
                max-height: 70px;
                height: 50px;
                @media (max-width: 768px) {
                    font-size:14px;
                    height:40px;
                }
            }
        }
    }  
}
.courseArrangement{
    background:rgba(244,244,244,1);
    padding: 25px 0 50px;
    @media (max-width: 768px) {
        padding-bottom:20px;
    }
    .scan{
        width:60%;
        height:260px;
        margin:0 auto;
        @media (max-width: 768px) {
            display:none;
        }
        .leftContent{
            width:25%;
            height:260px;
            float:left;
            background:#fff;
            text-align:center;
            border-radius: 8px 0 0 8px;
             @media (max-width: 768px) {
                height:180px;
                width:40%;
            }
            img{
                margin: 20px 0 0px;
                height: 190px;
                @media (max-width: 768px) {
                    height:140px;
                }
            }
            p{
                border: 2px solid #666666;
                border-radius: 15px;
                width: 150px;
                height: 30px;
                line-height: 26px;
                margin: 0 auto;
                font-size: 14px;
                @media (max-width: 768px) {
                    width: 112px;
                    height: 24px;
                    line-height: 24px;
                    font-size:12px;
                }
            }
        }
        .rightContent{
            width:75%;
            height:260px;
            float:right;
            background:#133E79;
            color:#fff;
            border-radius: 0 8px 8px 0;
            @media (max-width: 768px) {
                height:180px;
                width:60%;
            }
            .contentBox{
                padding-left: 35px;
                position: relative;
                top: 50%;
                transform: translateY(-50%);
                @media (max-width: 768px) {
                    padding:5px;
                }
                .content{
                    margin-bottom:30px;
                    .titleLine{
                        width: 3px;
                        height: 16px;
                        background: white;
                        opacity: 1;
                        display: inline-block;
                        position:relative;
                        top:2px;
                        @media (max-width: 768px) {
                            height:12px;
                        }
                    }
                    .title{
                        font-size:18px;
                        font-weight:600;
                        @media (max-width: 768px) {
                            font-size:14px;
                        }
                    }
                    .desc{
                        font-size:16px;
                        font-weight:400;
                        margin-left:7px;
                        margin-top:3px;
                        @media (max-width: 768px) {
                            font-size:12px;
                            margin-bottom:0;
                        }
                    }
                }
            }
        }
    }
    .scan-com{
        display:none;
        width:100%;
        @media (max-width: 768px) {
            display:block;
        }
        .topContent{
            text-align: center;
            padding-top:20px;
            img{
                width:50%;
                margin:0 auto;
            }
            p{
                border: 1px solid #666666;
                border-radius: 8px;
                width: 166px;
                height: 34px;
                line-height: 34px;
                margin: 10px auto;
                font-size: 16px;
            }
        }
        .bottomContent{
            background:#133E79;
            color:#fff;
            margin-top:20px; 
            .contentBox{
                padding:15px;
                .content{
                    .titleLine{
                        width: 3px;
                        height: 15px;
                        background: white;
                        opacity: 1;
                        display: inline-block;
                        position:relative;
                        top:1px;
                    }
                    .title{
                        font-size:16px;
                        font-weight:600;
                    }
                    .desc{
                        font-size:14px;
                        font-weight:400;
                        margin:3px 0 5px 7px;
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
        padding-top:0px !important;
    }
}
</style>
