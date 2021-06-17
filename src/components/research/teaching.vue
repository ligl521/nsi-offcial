<template>
    <div>
        <div class="banner">
            <div class="bannerContent">
                <div class="buyNow" @click="centerDialogVisible = true">
                    <p>立即报名</p>
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
                            <img src="../../images/教学管理/1.jpg" alt="">
                            <div style="margin-top:4px">
                                <p class="enrollmentTargetContent">招生对象</p>
                                <p class="enrollmentTargetContent">国际学校骨干教师、<br>年级组长、学科组长、学术（副）校长</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-6 enrollmentTargetBox">
                        <div class="enrollmentTarget">
                            <img src="../../images/教学管理/2.jpg" alt="">
                            <div style="margin-top:4px">
                                <p class="enrollmentTargetContent">线上直播</p>
                                <p class="enrollmentTargetContent">2021年3月17日-4月29日<br>每周三、四晚7:00-8:30</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="courseContent">
            <div class="index-title">
                <p class="text-center chinese-title">
                  <span class="lecturerLine"></span>教学管理专业能力<span class="lecturerLine"></span>
                </p>    
            </div>
            <div class="courseBox">
                <div class="rightImg">
                    <img src="../../images/教学管理/01.jpg" alt="">
                </div>
                <div class="rightContent">
                    <span class="courseTitle">课程设计</span>
                    <p>如何进行单学科的融合课程设计-理科————郑腾飞</p>
                    <p>如何进行单学科的融合课程设计-文科————潘筠</p>
                    <p>基于主题的跨学科课程融合设计————叶斌</p>
                    <p>如何利用概念驱动进行学校特色课程设计————徐涛</p>
                </div>
                <div class="clear"></div>
            </div>
            <div class="courseBox">
                <div class="leftImg">
                    <img src="../../images/教学管理/02.jpg" alt="">
                </div>
                <div class="leftContent">
                    <span class="courseTitle">教学管理与评估</span>
                    <p>如何进行分层教学的设标、施教、辅导与评估————沈建军</p>
                    <p>如何构建具有中国特色的走班制体系————何道明</p>
                    <p>如何运用数据与课程观察反馈改进教学质量————徐涛</p>
                </div>
                <div class="clear"></div>
            </div>
            <div class="courseBox">
                <div class="rightImg">
                    <img src="../../images/教学管理/03.jpg" alt="">
                </div>
                <div class="rightContent">
                    <span class="courseTitle">教师专业发展与教研</span>
                    <p>教学管理者如何计划与实施教师专业发展培训————陈泽芳</p>
                    <p>如何借助绩效管理推动教学团队战斗力————吴真真</p>
                    <p>教学管理者如何高效组织开展教学研究————万慧萍</p>
                </div>
                <div class="clear"></div>
            </div>
            <div class="index-title">
                <p class="text-center chinese-title">
                    <span class="lecturerLine"></span>
                    教学领导力培养
                    <span class="lecturerLine"></span>
                </p>    
            </div>
            <div class="courseBox">
                <div class="rightImg">
                    <img src="../../images/教学管理/04.jpg" alt="">
                </div>
                <div class="rightContent">
                    <p>教学领导力如何助力教学管理者打造领导梯队————陈泽芳</p>
                    <p>如何领导中外教学团队高效协作————周宪明</p>
                    <p>教学管理者高效锻造教练领导力三部曲————童晓白</p>
                    <p>非暴力沟通如何提升教学领导力————李夏</p>
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <div class="lecturer">
            <div class="index-title">
                <p class="text-center chinese-title">
                    <span class="lecturerLine"></span>
                    讲师团队
                    <span class="lecturerLine"></span>
                </p>    
            </div>
            <div class="aboutLecturer">
                <div class="container containerBox">
                    <div class="row">
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/教学管理/郑腾飞.png">
                                <p class="lecturerName">郑腾飞</p>
                                <p class="lecturerPost">上海平和教育课程中心副总监<br>上海筑桥实验小学副校长</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/教学管理/潘筠.png">
                                <p class="lecturerName">潘筠</p>
                                <p class="lecturerPost">上海浦东新区惠立学校<br>初中语文老师</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/教学管理/叶斌.png">
                                <p class="lecturerName">叶斌</p>
                                <p class="lecturerPost">宁波华茂国际学校校长</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/教学管理/徐涛.png">
                                <p class="lecturerName">徐涛</p>
                                <p class="lecturerPost">北京朝阳凯文学校执行校长</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/教学管理/沈建军.png">
                                <p class="lecturerName">沈建军</p>
                                <p class="lecturerPost">长沙康礼·克雷格学校总校长</p>
                            </div>
                        </div>
                         <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/教学管理/何道明.png">
                                <p class="lecturerName">何道明</p>
                                <p class="lecturerPost">清华附中稻香湖校区<br>外籍校长</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/教学管理/陈泽芳.png">
                                <p class="lecturerName">陈泽芳</p>
                                <p class="lecturerPost">华樱教育集团荣耀总校长</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/教学管理/吴真真.png">
                                <p class="lecturerName">吴真真</p>
                                <p class="lecturerPost">长沙玮希国际学校<br>长沙县玮思学校执行校长</p>
                            </div>
                        </div>
                         <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/教学管理/万慧萍.png">
                                <p class="lecturerName">万慧萍</p>
                                <p class="lecturerPost">清华附中国际学校<br>小学部副校长</p>
                            </div>
                        </div>
                         <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/教学管理/周宪明.png">
                                <p class="lecturerName">周宪明</p>
                                <p class="lecturerPost">北京中芯国际学校<br>执行董事</p>
                            </div>
                        </div>
                         <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/教学管理/童晓白.png">
                                <p class="lecturerName">童晓白</p>
                                <p class="lecturerPost">前义格教育集团及学校<br>市场招生负责人</p>
                            </div>
                        </div>
                         <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="../../images/教学管理/李夏.png">
                                <p class="lecturerName">李夏</p>
                                <p class="lecturerPost">非暴力沟通无错区游戏认证<br>领航人导师</p>
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
                           <span class="title">报名流程</span>
                            <p class="desc">添加助教微信 → 填写报名表 → 线上面试 → 接收录取通知书 → 成功缴费 → 报名完成</p>
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
                            <span class="title">报名流程</span>
                            <p class="desc">添加助教微信 → 填写报名表 → 线上面试 → 接收录取通知书 → 成功缴费 → 报名完成</p>
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
    background-image: url("../../images/教学管理/banner.jpg");
    background-position: center center;
    background-size: cover;
    position: relative;
    @media (max-width:768px) {
        height: 220px;
        width: 100%;
        background-repeat: no-repeat;
        background-position:initial
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
                display: flex;
                margin: 0 auto;
                padding: 20px 0 20px 20px;
                border-radius:8px;
                box-shadow:0px 0px 20px rgba(0,0,0,0.1);
                @media (max-width: 768px) {
                    display: block;
                    padding: 10px 5px;
                }
                img{
                    height:80px;
                    vertical-align: middle;
                    border-radius: 4px;
                    @media (max-width: 768px) {
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
                    font-size:17px;
                    font-weight:400;
                    color:#333;
                    text-align: left;
                    margin-bottom: 0;
                    margin-left: 20px;
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
    .index-title {
        padding:30px 0;
        @media (max-width: 768px) {
             padding:15px 0;
        }
        .chinese-title{
            font-size:26px;
            font-weight:600;
            color:rgb(253, 253, 253);
            padding:12px 20px;
            margin: 0 auto;
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
        width: 59%;
        margin:0 auto 20px;
        border-radius: 8px;
        padding:10px;
        position:relative;
        @media (max-width: 768px) {
            width:95%;
            height:220px;
            box-sizing: border-box;
            margin: 0;
        }
        .leftImg{
            float:left;
            height:230px;
            width:400px;
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
                height:230px;
                width:400px;
            }
        }
        .rightContent{
            width: 680px;
            height: 230px;
            position: absolute;
            background:#fff;
            padding: 26px 60px;
            @media (max-width: 768px) {
                width: 100%;
                padding: 10px;
                height: 180px;
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
            height:230px;
            width:400px;
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
                height:230px;
                width:400px;
            }
        }
        .leftContent{
            width: 680px;
            height: 230px;
            position: absolute;
            background:#fff;
            padding: 26px 80px;
            right: 0;
            @media (max-width: 768px) {
                width: 100%;
                padding: 10px;
                height: 180px;
                left: 10px;
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