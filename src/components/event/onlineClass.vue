<template>
    <div>
        <div class="banner"></div>
        <div class="courseList">
            <div class="courseContent">
                <div class="row">
                    <div class="col-md-4 col-xs-6" style="text-align: center;">
                        <img src="../../images/onlineClass/1.jpg" alt="">
                        <p>站在校长的高度运营国际学校的战略和打造人才梯队。这里有摸透国际学校政策法规和搭建学术质量认证体系的不二法门。</p>
                        <router-link :to="{path:'/event/miniMba'}">
                          <button>更多详情</button>
                        </router-link>
                    </div>
                    <div class="col-md-4 col-xs-6" style="text-align: center;">
                        <img src="../../images/onlineClass/2.jpg" alt="">
                        <p>教你一招玩转招生，这是扩校增员的必备课程。市场招生不仅是销售的艺术，更是一场市场营销和品宣推广。</p>
                        <router-link :to="{path:'/research/mac2020'}">
                          <button>更多详情</button>
                        </router-link>
                    </div>
                    <div class="col-md-4 col-xs-6" style="text-align: center;">
                        <img src="../../images/onlineClass/3.jpg" alt="">
                        <p>人才不是学校的核心竞争力，对人才的管理才是核心竞争力。通过精准招聘和KPI绩效考核，锻造具有全球胜任力的人才。</p>
                        <router-link :to="{path:'/research/humanResources'}">
                          <button>更多详情</button>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="teacherList">
                <div class="deepUnderstand">
                    <p class="text-center chinese-title">
                        <span class="lecturerLine"></span>
                        部分明星讲师
                        <span class="lecturerLine"></span>
                        <br>
                        <span style="font-size: 16px;display: block;">（以下按姓氏首字母排序）</span>
                    </p>  
                </div>
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
        </div>
        <div style="background: #eee;padding: 20px 0;">
            <div class="deepUnderstand">
                <p class="text-center chinese-title">
                    <span class="lecturerLine"></span>
                    课程形式
                    <span class="lecturerLine"></span>
                </p> 
                <div class="container conter">
                    <div class="row">
                        <div class="col-md-6 col-xs-6 colMd">
                           <img src="../../images/onlineClass/授课方式.jpg" alt="">
                           <div class="colMdbox">
                               <p style="font-size: 24px;">授课方式</p>
                               <P style="font-size: 15px;color: #666;">线上视频直播<br>也可回放学习</P>
                           </div>
                        </div>
                        <div class="col-md-6 col-xs-6 colMd">
                           <img src="../../images/onlineClass/质量保证.jpg" alt="">
                           <div class="colMdbox">
                               <p style="font-size: 24px;">质量保证</p>
                               <P style="font-size: 15px;color: #666;">行业老兵授课<br>解决疑难杂症</P>
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
                                <p class="desc">如有任何疑问，请联系助教小新电话：15010927730</p>
                            </div>
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
            title: "新学说 | 新学说2020年新学说在线课堂",
            imgUrl:"https://data.xinxueshuo.cn/upImage/upInstitutionImg/100062/100062-logo.jpg",
            href: window.location.href,
            desc:"面向国际学校校长及高级管理者"
          },
          teacherList:[
              {
                photo:require("../../images/onlineClass/陈泽芳.png"),
                name:"陈泽芳",
                title:"前华南师大附属外国语学校<br/>总校长"
              },
              {
                photo:require("../../images/onlineClass/李远.png"),
                name:"李远",
                title:"雅力教育集团副总裁<br/>兼阿德科特总校长"
              },
              {
                photo:require("../../images/onlineClass/卢慧文.png"),
                name:"卢慧文",
                title:"上海协和教育集团<br/>总校长"
              },
              {
                photo:require("../../images/onlineClass/沈建军.png"),
                name:"沈建军",
                title:"长沙康礼克雷格学校<br/>总校长"
              },
              {
                photo:require("../../images/onlineClass/孙月梅.png"),
                name:"孙月梅",
                title:"南通诺德安达双语学校<br/>中方校长"
              },
              {
                photo:require("../../images/onlineClass/王金英.png"),
                name:"王金英",
                title:"海南枫叶教育大区<br/>首席执行官兼总校长"
              },
              {
                photo:require("../../images/onlineClass/吴真真.png"),
                name:"吴真真",
                title:"长沙玮希国际学校<br/>执行校长"
              },
              {
                photo:require("../../images/onlineClass/吴子健.png"),
                name:"吴子健",
                title:"上海包玉刚实验学校<br/>校长"
              },
              {
                photo:require("../../images/onlineClass/许凌可.png"),
                name:"许凌可",
                title:"重庆德普外国语学校<br/>校长"
              },
              {
                photo:require("../../images/onlineClass/徐涛.png"),
                name:"徐涛",
                title:"北京市朝阳凯文学校<br/>执行校长"
              },
              {
                photo:require("../../images/onlineClass/徐未华.png"),
                name:"徐未华",
                title:"宁波赫威斯肯特学校<br/>校长"
              },
              {
                photo:require("../../images/onlineClass/周宪明.png"),
                name:"周宪明",
                title:"北京市中芯学校<br/>执行校董"
              }
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
    background-image: url("../../images/onlineClass/banner.jpg");
    background-position: center center;
    background-size: cover;
    position: relative;
    @media (max-width:768px) {
        height: 120px;
    }
}
.courseList{
    background:#fff;
    padding-bottom:70px;
    @media (max-width:768px) {
        padding-bottom: 20px;
    }
    .courseContent{
        width:70%;
        margin:60px auto ;
        @media (max-width:768px) {
            width:100%;
        }
        button{
            width: 120px;
            height: 40px;
            line-height: 40px;
            margin: 0 auto;
            background: -webkit-gradient(linear, left top, left bottom, from(#deb16c), to(#b99153));
            background: linear-gradient(180deg, #deb16c 0%, #b99153 100%);
            -webkit-box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.24);
            box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.24);
            border-radius: 34px;
            color: #fff;
            text-align: center;
            cursor: pointer;
            border: none;
        }
        img{
          width: 100%;
          height: auto;
          border-radius: 10px;
        }
        p{
           color: rgb(84, 84, 84);
           text-align: left;
           margin: 40px 0 20px;
           font-size: 16px;
           padding: 0 20px;
           line-height: 26px;
           height: 80px;
        }
    }
    .teacherList{
        .teacherBox{
            text-align: center;
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
    .conter{
      margin: 60px 0;
      .colMd{
         text-align: center
      }
      img{
          width:200px;
          height:200px;
          border-radius: 50%
      }
      .colMdbox{
          display: inline-block;
          vertical-align: middle;
          margin-left: 30px
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
   
}
</style>