<template>
    <div>
        <div class="banner"></div>
        <div class="descMBA">
           <p>面向国际学校校长及高级管理者，全面讲解国际学校运营关键板块，结合授课与访校，<br> 理论讲解与案例分析，使学员对国际学校的理解更加通透，管理更加自如。</p>
        </div>
        <div class="miniMBA">
            <div class="IPAname">
                <p>新学说2020年IPA Mini-MBA校长专业发展项目</p>
            </div>
            <img src="../../images/miniMBA/01.png" alt="">
        </div>
        <div class="courseList">
            <div class="title">
                <p>新学说2020年IPA Mini-MBA校长专业发展项目</p>
                <p>课程列表</p>
            </div>
            <div class="courseContent">
                <div class="secondCourse">
                    <div class="titleName">
                        <p class="name">线上培训36讲（必修课）</p>
                        <p class="hrline"></p>
                    </div>
                    <div class="listTwo">
                        <div class="contentTwo">
                            <h3>政策法规</h3>
                            <p>民办国际化学校行业全面政策法规解读（民促法、公民统招摇号等）- 范桂杰</p>
                            <p>民办国际化学校行业法务实操经验分享（公司及学校设立、合规性设计）- 范桂杰</p>
                        </div>
                    </div>
                </div>
                <div class="thirdCourse">
                    <div class="listThree">
                        <div class="contentThree">
                            <h3>战略与运营管理</h3>
                            <p>如何从零到一进行新建校战略定位与执行（上/下篇）- 陈泽芳</p>
                            <p>集团化办学如何制定战略定位与执行（上/下篇）- 李远</p>
                            <p>国内外学校品牌合作办学全攻略（上/下篇）- 杨飞</p>
                            <p>国际化学校品牌战略定位与建设方法论（上/下篇）- 许凌可</p>
                            <p>国际化学校信息化战略规划 - 杨秋实</p>
                            <p>校园安全案例解析与风险防控 - 陈亮</p>
                            <p>政府关系如何助力学校运营管理提升（上/下篇）- 赵新</p>
                            <p>如何全面保障学校校园安全（上/下篇）- 徐未华</p>
                        </div>
                    </div>
                </div>
                <div class="fourCourse">
                    <div class="listFour">
                        <div class="contentFour">
                            <h3>组织与人才管理</h3>
                            <p>集团化办学如何进行组织架构设计与管控 - 卢慧文</p>
                            <p>集团化办学如何构建业务流程标准化 - 卢慧文</p>
                            <p>集团化办学如何进行组织变革管理（上篇/下篇）- 杨飞</p>
                            <p>集团化办学如何打造高效能人才梯队（上/下篇）- 王金英</p>
                            <p>校长如何进行中外方团队跨文化高效协作（上/下篇）- 周宪明</p>
                        </div>
                    </div>
                </div>
                <div class="fiveCourse">
                    <div class="listFive">
                        <div class="contentFive">
                            <h3>学术管理</h3>
                            <p>如何通过IB课程认证提升学校学术质量保障（上/下篇）- 沈建军</p>
                            <p>如何通过学校管理认证提升学校学术质量保障（上/下篇）- 徐涛</p>
                            <p>如何从零到一设计双语融合课程（上篇）- 吴子健</p>
                            <p>如何从零到一设计双语融合课程（下篇）- 孙月梅</p>
                            <p>国际化学校双语融合课程新构建 - 滕珺</p>
                            <p>如何高效构建国际化学校的教师专业发展体系 - 赵健</p>
                            <p>教育科技工具如何赋能教务与教学管理（上/下篇）- Joyce Chen</p>
                        </div>
                    </div>
                </div>
                <div class="sixCourse">
                    <div class="listSix">
                        <div class="contentSix">
                            <h3>财务管理</h3>
                            <p>投资新建校你需要的一门财务实践课 - 杨飞</p>
                            <p>如何通过财务报表分析提升学校运营效率 - 杨飞</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="teacherList">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-xs-6 teacherBox" v-for="(item,index) in teacherList" :key="index">
                            <img :src="item.photo" alt="">
                            <p>{{item.name}}</p>
                            <p v-html="item.title"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chooseCourse">
                <div class="titleName">
                    <p class="name">两周线下访校研学与教研（选修课）</p>
                    <p class="hrline"></p>
                </div>
            </div>
        </div>
        <div class="deepUnderstand">
            <p class="text-center chinese-title">
                <span class="lecturerLine"></span>
                深入了解校长专业发展项目
                <span class="lecturerLine"></span>
            </p>  
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
                            <p class="desc">填写报名表 → 线上面试 → 接收录取通知书 → 成功缴费 → 报名完成</p>
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
                            <p class="desc">填写报名表 → 线上面试 → 接收录取通知书 → 成功缴费 → 报名完成</p>
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
            title: "新学说 | 新学说2020年IPA Mini-MBA校长专业发展项目",
            imgUrl:"https://data.xinxueshuo.cn/upImage/upInstitutionImg/100062/100062-logo.jpg",
            href: window.location.href,
            desc:"面向国际学校校长及高级管理者，全面讲解国际学校运营关键板块，使学员对国际学校的理解更加通透，管理更加自如。"
          },
          teacherList:[
              {
                photo:require("../../images/miniMBA/头像/范桂杰.png"),
                name:"范桂杰",
                title:"北京市京师（大连）<br/>律师事务所合伙人"
              },
              {
                photo:require("../../images/miniMBA/头像/陈泽芳.png"),
                name:"陈泽芳",
                title:"前华南师大附属外国语学校<br/>总校长"
              },
              {
                photo:require("../../images/miniMBA/头像/李远.png"),
                name:"李远",
                title:"雅力教育集团副总裁<br/>兼阿德科特总校长"
              },
              {
                photo:require("../../images/miniMBA/头像/杨飞.png"),
                name:"杨飞",
                title:"新学说联合发起人"
              },
              {
                photo:require("../../images/miniMBA/头像/许凌可.png"),
                name:"许凌可",
                title:"重庆德普外国语学校<br/>校长"
              },
              {
                photo:require("../../images/miniMBA/头像/杨秋实.png"),
                name:"杨秋实",
                title:"深圳曼彻斯通城堡学校<br/>IT负责人"
              },
              {
                photo:require("../../images/miniMBA/头像/陈亮.png"),
                name:"陈亮",
                title:"北京市京师侓师事务所<br/>律师"
              },
              {
                photo:require("../../images/miniMBA/头像/赵新.png"),
                name:"赵新",
                title:"北京哈罗英国学校助理校长<br/>亚洲管理集团公共事务总监"
              },
              {
                photo:require("../../images/miniMBA/头像/徐未华.png"),
                name:"徐未华",
                title:"宁波赫威斯肯特学校校长"
              },
              {
                photo:require("../../images/miniMBA/头像/卢惠文.png"),
                name:"卢慧文",
                title:"上海协和教育集团<br/>总校长"
              },
              {
                photo:require("../../images/miniMBA/头像/王金英.png"),
                name:"王金英",
                title:"海南枫叶教育大区<br/>首席执行官兼总校长"
              },
              {
                photo:require("../../images/miniMBA/头像/周宪明.png"),
                name:"周宪明",
                title:"北京市中芯学校执行校董"
              },
              {
                photo:require("../../images/miniMBA/头像/沈建军.png"),
                name:"沈建军",
                title:"长沙康礼克雷格学校总校长"
              },
              {
                photo:require("../../images/miniMBA/头像/徐涛.png"),
                name:"徐涛",
                title:"北京市朝阳凯文学校<br/>执行校长"
              },
              {
                photo:require("../../images/miniMBA/头像/吴子健.png"),
                name:"吴子健",
                title:"上海包玉刚实验学校<br/>校长"
              },
              {
                photo:require("../../images/miniMBA/头像/孙月梅.png"),
                name:"孙月梅",
                title:"南通诺德安达双语学校<br/>中方校长"
              },
              {
                photo:require("../../images/miniMBA/头像/腾珺.png"),
                name:"滕珺",
                title:"北京师范大学国际与比较教育研究院教授、副院长"
              },
              {
                photo:require("../../images/miniMBA/头像/joyce.png"),
                name:"Joyce Chen",
                title:"耀华国际学校CTO"
              },
              {
                photo:require("../../images/miniMBA/头像/赵健.png"),
                name:"赵健",
                title:"华东师范大学国际与比较教育研究所副研究员"
              },
          ]
      };
    },
    methods: {
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
    background-image: url("../../images/miniMBA/banner/banner.jpg");
    background-position: center center;
    background-size: cover;
    position: relative;
    @media (max-width:768px) {
        height: 120px;
    }
}
.miniMBA{
    width:70%;
    margin:0 auto;
    text-align: center;
    @media (max-width:768px) {
        width: 100%;
        padding:0 10px;
    }
    .IPAname{
        width: 800px;
        margin: 0 auto;
        @media (max-width:768px) {
            width: 100%;
        }
        p{
            background: #e6bc58;
            font-size: 35px;
            font-weight: bold;
            padding: 10px;
            border-radius: 10px;
            @media (max-width:768px) {
                font-size: 24px;
            }
        }
    }
    img{
        width:70%; 
        margin:50px 0;  
        @media (max-width:768px) {
            width:100%;
            margin:20px 0;
        } 
    }
}
.descMBA{
    width:70%;
    margin:40px auto;
    text-align: center;
    letter-spacing: 1px;
    @media (max-width:768px) {
        width: 100%;
        padding:0 10px;
        margin:20px auto;
    }
    p{
        font-size: 22px;
        @media (max-width:768px) {
            font-size: 14px;
        }
    }
}
.courseList{
    background:#223f61;
    padding-bottom:100px;
    @media (max-width:768px) {
        padding-bottom: 20px;
    }
    .title{
        color: #fff;
        font-size: 24px;
        padding: 60px 0;
        font-weight: bold;
        letter-spacing: 1px;
        text-align: center;
        @media (max-width:768px) {
            padding: 20px 0;
        }
        p{
            &:first-child{
                @media (max-width:768px) {
                    display:none;
                }
            }
        }
    }
    .courseContent{
        width:70%;
        margin:0 auto 50px;
        @media (max-width:768px) {
            width:100%;
        }
        .firstCourse{
            .titleName{
                width:300px;
                text-align: center;
                @media (max-width:768px) {
                    width:70%;
                    margin:0 auto;
                } 
                .name{
                    background: #e6bc58;
                    font-weight: bold;
                    padding: 10px;
                    font-size: 22px;
                    @media (max-width:768px) {
                        font-size: 18px;
                    } 
                }
                .hrline{
                    border-bottom: 3px solid #e6bc58;
                    width:93%;
                    margin: -6px 0 0 20px;
                }
            }
            .listOne{
                background-image: url("../../images/miniMBA/课程表/1.png");
                background-position: right;
                background-color: #fff;
                background-repeat: no-repeat;
                width: 90%;
                margin: 20px auto;
                height: 228px;
                color: #656565;
                @media (max-width:768px) {
                    background-image:none;
                    width:95%;
                    height:135px;
                }
                .contentOne{
                    float:left;
                    h3{
                        padding: 25px 40px;
                        font-size: 28px;
                        font-weight: bold;
                        @media (max-width:768px) {
                            font-size: 18px;
                            padding: 0px;
                            margin: 20px 10px;
                        }
                    }
                    p{
                        font-size: 24px;
                        padding:0px 50px;
                        @media (max-width:768px) {
                            font-size: 16px;
                            padding: 0px 20px;
                        }
                    }
                }
                img{
                    float:right;
                }
            }
        }
        .secondCourse{
            .titleName{
                width:300px;
                text-align: center;
                // margin-top:50px;
                @media (max-width:768px) {
                    width:70%;
                    margin:0 auto;
                } 
                .name{
                    background: #e6bc58;
                    font-weight: bold;
                    padding: 10px;
                    font-size: 22px;
                    @media (max-width:768px) {
                        font-size: 18px;
                    }
                }
                .hrline{
                    border-bottom: 3px solid #e6bc58;
                    width:93%;
                    margin: -6px 0 0 20px;
                }
            }
             .listTwo{
                background-image: url("../../images/miniMBA/课程表/5.png");
                background-position: right;
                background-color: #fff;
                background-repeat: no-repeat;
                width: 90%;
                margin: 20px auto;
                height: 228px;
                color: #656565;
                 @media (max-width:768px) {
                    background-image:none;
                    width:95%;
                    height:175px;
                }
                .contentTwo{
                    float:left;
                    h3{
                        padding: 25px 40px;
                        font-size: 28px;
                        font-weight: bold;
                        @media (max-width:768px) {
                            font-size: 18px;
                            padding: 0px;
                            margin: 20px 10px;
                        }
                    }
                    p{
                        font-size: 24px;
                        padding:0px 50px;
                        @media (max-width:768px) {
                            font-size: 16px;
                            padding: 0px 20px;
                        }
                    }
                }
            }
        }
        .thirdCourse{
             .listThree{
                background-image: url("../../images/miniMBA/课程表/6.png");
                background-position: right;
                background-color: #fff;
                background-repeat: no-repeat;
                width: 90%;
                margin: 20px auto;
                height: 470px;
                color: #656565;
                 @media (max-width:768px) {
                    background-image:none;
                    width:95%;
                    height:445px;
                }
                .contentThree{
                    float:left;
                    h3{
                        padding: 25px 40px;
                        font-size: 28px;
                        font-weight: bold;
                        @media (max-width:768px) {
                            font-size: 18px;
                            padding: 0px;
                            margin: 20px 10px;
                        }
                    }
                    p{
                        font-size: 24px;
                        padding:0px 50px;
                        @media (max-width:768px) {
                            font-size: 16px;
                            padding: 0px 20px;
                        }
                    }
                }
            }
        }
        .fourCourse{
             .listFour{
                background-image: url("../../images/miniMBA/课程表/2.png");
                background-position: right;
                background-color: #fff;
                background-repeat: no-repeat;
                width: 90%;
                margin: 20px auto;
                height: 378px;
                color: #656565;
                @media (max-width:768px) {
                    background-image:none;
                    width:95%;
                    height:335px;
                }
                .contentFour{
                    float:left;
                    h3{
                        padding: 25px 40px;
                        font-size: 28px;
                        font-weight: bold;
                        @media (max-width:768px) {
                            font-size: 18px;
                            padding: 0px;
                            margin: 20px 10px;
                        }
                    }
                    p{
                        font-size: 24px;
                        padding:0px 50px;
                        @media (max-width:768px) {
                            font-size: 16px;
                            padding: 0px 20px;
                        }
                    }
                }
            }
        }
        .fiveCourse{
             .listFive{
                background-image: url("../../images/miniMBA/课程表/3.png");
                background-position: right;
                background-color: #fff;
                background-repeat: no-repeat;
                width: 90%;
                margin: 20px auto;
                height: 426px;
                color: #656565;
                @media (max-width:768px) {
                    background-image:none;
                    width:95%;
                    height:390px;
                }
                .contentFive{
                    float:left;
                    h3{
                        padding: 25px 40px;
                        font-size: 28px;
                        font-weight: bold;
                        @media (max-width:768px) {
                            font-size: 18px;
                            padding: 0px;
                            margin: 20px 10px;
                        }
                    }
                    p{
                        font-size: 24px;
                        padding:0px 50px;
                        @media (max-width:768px) {
                            font-size: 16px;
                            padding: 0px 20px;
                        }
                    }
                }
            }
        }
        .sixCourse{
             .listSix{
                background-image: url("../../images/miniMBA/课程表/4.png");
                background-position: right;
                background-color: #fff;
                background-repeat: no-repeat;
                width: 90%;
                margin: 20px auto;
                height: 228px;
                color: #656565;
                @media (max-width:768px) {
                    background-image:none;
                    width:95%;
                    height:150px;
                }
                .contentSix{
                    float:left;
                    h3{
                        padding: 25px 40px;
                        font-size: 28px;
                        font-weight: bold;
                        @media (max-width:768px) {
                            font-size: 18px;
                            padding: 0px;
                            margin: 20px 10px;
                        }
                    }
                    p{
                        font-size: 24px;
                        padding:0px 50px;
                        @media (max-width:768px) {
                            font-size: 16px;
                            padding: 0px 20px;
                        }
                    }
                }
            }
        }
    }
    .teacherList{
        .teacherBox{
            text-align: center;
            color: #fff;
            margin:20px 0;
            @media (max-width:768px) {
                margin:10px 0;
            }
            img{
                width:120px;
            }
            p{
                &:first-of-type{
                    font-size: 22px;
                    margin: 10px 0;
                    // letter-spacing: 4px;
                    font-weight: bold;
                    @media (max-width:768px) {
                        font-size: 20px;
                        letter-spacing: 2px;
                    }
                }
                &:last-of-type{
                    font-size: 18px;
                    letter-spacing: 2px;
                    min-height: 60px;
                    max-height: 60px;
                    @media (max-width:768px) {
                        font-size: 16px;
                        letter-spacing: 0px;
                    }
                }
            }
        }
    }
    .chooseCourse{
        width:800px;
        margin:20px auto;
        @media (max-width:768px) {
            width:90%;
        }
        .titleName{
            text-align:center;
            .name{
                background: #e6bc58;
                padding: 10px;
                font-size: 30px;
                letter-spacing: 2px;
                @media (max-width:768px) {
                    font-size:20px;
                    letter-spacing:0;
                    padding:10px 5px;
                }
            }
            .hrline{
                border-bottom: 3px solid #e6bc58;
                width:98%;
                margin: -6px 0 0 20px;
                @media (max-width:768px) {
                    width:94%;
                }
            }
        }
    }
   
    
}
.deepUnderstand{
    width:60%;
    margin:50px auto;
    @media (max-width:768px) {
        width:90%;
        margin:20px auto;
    }
    p{
        font-size: 30px;
        @media (max-width:768px) {
            font-size: 20px;
        }
        .lecturerLine{
            display: inline-block;
            vertical-align: middle;
            width:150px;
            margin:0 5px;
            border:2px solid rgba(112,112,112,1);
            opacity:1;
            @media (max-width:768px) {
                width: 30px;
            }
        }
    }
}
.courseArrangement{
    padding-bottom:110px;
    @media (max-width: 768px) {
        padding-bottom:20px;
    }  
    .scan{
        width:60%;
        height:260px;
        margin:0 auto;
        box-shadow: 0px 8px 25px 6px #ccc;
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
                        font-size:20px;
                        font-weight:600;
                        @media (max-width: 768px) {
                            font-size:14px;
                        }
                    }
                    .desc{
                        font-size:18px;
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