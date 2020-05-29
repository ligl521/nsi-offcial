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
                            <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/招生对象.png" alt="">
                            <p class="enrollmentTargetTitle">招生对象</p>
                            <p class="enrollmentTargetContent">市场招生人员<br>校方运营高管</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-6 enrollmentTargetBox">
                        <div class="enrollmentTarget">
                            <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/培养目标.png" alt="">
                            <p class="enrollmentTargetTitle">培养目标</p>
                            <p class="enrollmentTargetContent">国际化学校<br>复合型管理人才</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="formIntroduce">
                <div class="container formOne">
                    <div class="row">
                        <div class="col-md-5 col-xs-7">国际化学校行业人才三维分类</div>
                        <div class="col-md-2 centerPart">f</div>
                        <div class="col-md-5 col-xs-5">课程培养层次</div>
                    </div>
                </div>
                <div class="container formTwo">
                    <div class="row">
                        <div class="col-md-5 col-xs-5">原生态</div>
                        <div class="col-md-2 col-xs-2 centerPart">阶段一</div>
                        <div class="col-md-5 col-xs-5">知识与技能</div>
                    </div>
                </div>
                <div class="container formThree">
                    <div class="row">
                        <div class="col-md-5 col-xs-5">见识过体系</div>
                        <div class="col-md-2 col-xs-2 centerPart">阶段二</div>
                        <div class="col-md-5 col-xs-5">体系方法论建立</div>
                    </div>
                </div>
                <div class="container formFour">
                    <div class="row">
                        <div class="col-md-5 col-xs-5">建立过体系</div>
                        <div class="col-md-2 col-xs-2 centerPart">阶段三</div>
                        <div class="col-md-5 col-xs-5">业务本质洞察</div>
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
                    <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/市场招生策略篇.png" alt="">
                </div>
                <div class="rightContent">
                    <span class="courseLine"></span>
                    <span class="courseTitle">市场招生战略篇</span>
                    <p>新建校定位：市场定位、品牌定位、产品定位 - 李远</p>
                    <p>如何科学管理市场目标：定目标、玩方法、抓过程、等结果 - 张南</p>
                    <p>2020，信心胜过一切——新谈K12学校招生策略 - 陈泽芳</p>
                    <p>如何让锻造市场招生队伍战斗力 - 许凌可</p>
                </div>
                <div class="clear"></div>
            </div>
            <div class="courseBox">
                <div class="rightImg">
                    <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/市场招生战略篇.png" alt="">
                </div>
                <div class="leftContent">
                    <span class="courseTitle">市场招生策略篇</span>
                    <span class="courseLine"></span>
                    <p>如何改变现有市场招生策略应对线上教育的崛起 - 乔拯克</p>
                    <p>K12学校品牌推广与自媒体运营 - 吴&nbsp;&nbsp;&nbsp;&nbsp;峥</p>
                    <p>市场部如何做好实用有效的营销方案 - 黄&nbsp;&nbsp;&nbsp;&nbsp;丹</p>
                    <p>有限市场预算下的市场招生工作如何增效 - 乔拯克</p>
                    <p>国际化学校宣传中视频内容的策划与制作 - 许凌可</p>
                </div>
                <div class="clear"></div>
            </div>
            <div class="courseBox">
                <div class="leftImg">
                    <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/品牌与公共关系篇.png" alt="">
                </div>
                <div class="rightContent">
                    <span class="courseLine"></span>
                    <span class="courseTitle">品牌与公共关系篇</span>
                    <p>如何构建市场招生业务标准化 - Cindy</p>
                    <p>新形势下的民办学校招生观 - 杨飞</p>
                    <p>国际学校学生的招与留 - 吴越</p>
                </div>
                <div class="clear"></div>

            </div>
            <div class="enterButton">
                <p @click="enterCourse">进入课程</p>
            </div>
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
                                <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/李远.png">
                                <p class="lecturerName">李远</p>
                                <p class="lecturerPost">雅力集团副总裁兼<br>阿德科特学校总校长</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/张南.png">
                                <p class="lecturerName">张南</p>
                                <p class="lecturerPost">雅力教育副总裁</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/陈泽芳.png">
                                <p class="lecturerName">陈泽芳</p>
                                <p class="lecturerPost">华南师范大学附属外国语<br>学校总校长</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/许凌可.png">
                                <p class="lecturerName">许凌可</p>
                                <p class="lecturerPost">重庆德普外国语学校副校长</p>
                            </div>
                        </div>
                         <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/乔拯克.png">
                                <p class="lecturerName">乔拯克</p>
                                <p class="lecturerPost">教育集团总经理助理</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/吴峥.png">
                                <p class="lecturerName">吴峥</p>
                                <p class="lecturerPost">建业教育集团副总裁</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="https://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/%E5%B8%82%E5%9C%BA%E6%8B%9B%E7%94%9F%E8%AF%BE/qiaozhenke.png">
                                <p class="lecturerName">黄丹</p>
                                <p class="lecturerPost">一思科技创始人</p>
                            </div>
                        </div>
                         <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="https://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/%E5%B8%82%E5%9C%BA%E6%8B%9B%E7%94%9F%E8%AF%BE/yangfei.png">
                                <p class="lecturerName">杨飞</p>
                                <p class="lecturerPost">新学说联合发起人</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="lecturerBox">
                                <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/吴越.png">
                                <p class="lecturerName">吴越</p>
                                <p class="lecturerPost">新学说 CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="courseArrangement">
            <!-- <div class="index-title">
                <p class="text-center chinese-title">
                    <span class="lecturerLine"></span>
                    课程安排
                    <span class="lecturerLine"></span>
                </p>    
                <p class="text-center english-title"><small>COURSE ARRANGEMENT</small></p>
            </div>
            <div class="aboutArrangement">
                <div class="container containerBox">
                    <div class="row">
                        <div class="col-md-4 col-xs-4 arrangementBox">
                            <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/课程时间.png" alt="">
                            <p>课程时间</p>
                            <p>2020.3.20-2020.4.25<br>每周五、六各一次</p>
                        </div>
                        <div class="col-md-4 col-xs-4 arrangementBox">
                            <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/授课形式.png" alt="">
                            <p>授课形式</p>
                            <p>线上视频直播<br>也可回放学习</p>
                        </div>
                        <div class="col-md-4 col-xs-4 arrangementBox">
                            <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/质量保证.png" alt="">
                            <p>质量保证</p>
                            <p>适量作业安排<br>颁发毕业证书</p>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="scan">
                <div class="leftContent">
                    <img src="http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/scan.png" alt="">
                    <p>扫码添加助教微信</p>
                </div>
                <div class="rightContent">
                    <div class="contentBox">
                        <!-- <div class="content">
                            <span class="titleLine"></span>
                            <span class="title">报名流程</span>
                            <p class="desc">添加助教微信 → 填写报名表 → 线上面试 → 接收录取通知书 → 成功缴费 → 报名完成</p>
                        </div> -->
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
                        <!-- <div class="content">
                            <span class="titleLine"></span>
                            <span class="title">报名流程</span>
                            <p class="desc">添加助教微信 → 填写报名表 → 线上面试 → 接收录取通知书 → 成功缴费 → 报名完成</p>
                        </div> -->
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
    height: 430px;
    background-image: url("http://nsi-official.oss-cn-zhangjiakou.aliyuncs.com/images/市场招生课/banner.jpg");
    background-position: center center;
    background-size: cover;
    position: relative;
    @media (max-width:768px) {
        height: 180px;
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
                height: 40px;
                line-height: 40px;
                font-size: 20px;
                text-align: center;
                background:linear-gradient(180deg,#ee342c 0%,#ea443d 100%);
                box-shadow:0px 2px 10px #19144e;
                border-radius:16px;
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
        width:40%;
        margin:0 auto;
        text-align: center;
        @media (max-width: 768px) {
            width:100%;
        }
        .enrollmentTargetBox{
            margin:50px 0 20px;
            .enrollmentTarget{
                width:180px;
                height:190px;
                margin:0 auto;
                border-radius:8px;
                box-shadow:0px 0px 20px rgba(0,0,0,0.1);
                @media (max-width: 768px) {
                    width:160px;
                    height:180px;
                }
                img{
                    height:80px;
                    margin:15px 0 10px;
                    @media (max-width: 768px) {
                        height:70px;
                    }
                }
                .enrollmentTargetTitle{
                    font-size:18px;
                    font-weight:600;
                    color:#000;
                    margin-bottom:5px;
                    @media (max-width: 768px) {
                        margin-bottom:5px;
                    }
                }
                .enrollmentTargetContent{
                    font-size:16px;
                    font-weight:400;
                    color:#333;
                    @media (max-width: 768px) {
                        font-size:14px;
                    }
                }
            }
            
        }
    }
    .formIntroduce{
        width:50%;
        height:160px;
        margin:0 auto;
        text-align: center;
        @media (max-width: 768px) {
            width:100%;
        }
        .formOne{
            width:100%;
            height:40px;
            line-height:40px;
            border-radius: 8px 8px 0 0;
            background: #175081;
            color:#fff;
            @media  (max-width: 768px) {
                border-radius:0px;
            }
            .col-xs-7{
                @media (max-width: 768px) {
                    padding:0 !important;
                }
            }
            .centerPart{
                background:#1C5F9A;
                color:#1C5F9A;
                @media (max-width: 768px) {
                    display:none;
                }
            }
        }
        .formTwo{
            width:100%;
            height:40px;
            line-height:40px;
            background: #6A97C4;
            color:#fff;
            .centerPart{
                background:#2D7CBF;
                @media (max-width: 768px) {
                    padding:0 !important;
                }
            }
        }
        .formThree{
            width:100%;
            height:40px;
            line-height:40px;
            background: #337AB7;
            color:#fff;
            .centerPart{
                background:#1A5F9B;
                @media (max-width: 768px) {
                    padding:0 !important;
                }
            }
        }
        .formFour{
            width:100%;
            height:40px;
            line-height:40px;
            border-radius: 0 0 8px 8px;
            background: #6A97C4;
            color:#fff;
            @media  (max-width: 768px) {
                border-radius:0px;
            }
            .centerPart{
                background:#2889DD;
                @media (max-width: 768px) {
                    padding:0 !important;
                }
            }
        }
    }
}
.courseContent{
    margin-top:20px;
    padding-bottom:20px;
    background:linear-gradient(180deg,rgba(67,103,172,1) 0%,rgba(63,97,162,1) 100%);
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
            left: 220px;
            top: 50%;
            transform: translateY(-50%);
            @media (max-width: 768px) {
                width: 100%;
                left: 5px;
            }
            .courseLine{
                width: 3px;
                height: 16px;
                background: #000;
                opacity: 1;
                display: inline-block;
                margin-left:6px;
                position: relative;
                top: 2px;
            }
            .courseTitle{
                font-size:18px;
                font-weight:600;
                color:#000;
                margin-bottom:10px;
                display:inline-block;
            }
            p{
                font-size:16px;
                font-weight:400;
                color:#333;
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
            right: 230px;
            top: 50%;
            transform: translateY(-50%);
            text-align: right;
            @media (max-width: 768px) {
                width: 100%;
                right: 5px;
            }
            .courseLine{
                width: 3px;
                height: 16px;
                background: #000;
                opacity: 1;
                display: inline-block;
                position:relative;
                top:2px;
            }
            .courseTitle{
                font-size:18px;
                font-weight:600;
                color:#000;
                margin-bottom:10px;
                display:inline-block;
            }
            p{
                font-size:16px;
                font-weight:400;
                color:#333;
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
                height:100px;
            }
            .lecturerName{
                font-size:18px;
                font-weight:600;
                color:rgba(0,0,0,1);
                margin-bottom:5px;
            }
            .lecturerPost{
                font-size:16px;
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
    padding-bottom:60px;
    @media (max-width: 768px) {
        padding-bottom:20px;
    }
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
    .aboutArrangement{
        margin-bottom:20px;
        .containerBox{
            width:60%;
            @media (max-width: 768px) {
                width:100%;
            }
            .arrangementBox{
                text-align: center;
                margin-bottom:20px;
                @media (max-width: 768px) {
                    margin-bottom:0px;
                }
                img{
                    padding-bottom:20px;
                    height:120px;
                    @media (max-width: 768px) {
                        height:80px;
                    }
                }
                p{
                    &:first-of-type{
                        font-size:18px;
                        font-weight:600;
                        color:rgba(0,0,0,1);
                        margin-bottom:5px;
                    }
                    &:last-of-type{
                        font-size:16px;
                        font-weight:400;
                        color:rgba(51,51,51,1);
                        @media (max-width: 768px) {
                            font-size:14px;
                        }
                    }
                }

            }
        }

    }
    .scan{
        width:60%;
        height:260px;
        margin:0 auto;
        padding-top:20px;
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
                border:1px solid rgba(102,102,102,1);
                border-radius:8px;
                width: 150px;
                height: 30px;
                line-height: 30px;
                margin: 0 auto;
                font-size:12px;
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
