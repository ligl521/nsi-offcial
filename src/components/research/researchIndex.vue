<template>
    <div class="researchIndex-com">
        <div class="banner text-center">
            <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/banner.jpg" alt="" class="img-responsive">
        </div>
        <div class="container courseContent">
            <div class="row">
                <div class="col-md-4 col-xs-6" style="text-align: center;">
                    <img src="../../images/onlineClass/1.jpg" alt="">
                    <p class="courseContent-p">站在校长的高度运营国际学校的战略和打造人才梯队。这里有摸透国际学校政策法规和搭建学术质量认证体系的不二法门。</p>
                    <router-link :to="{path:'/event/miniMba'}">
                        <button>更多详情</button>
                    </router-link>
                </div>
                <div class="col-md-4 col-xs-6" style="text-align: center;">
                    <img src="../../images/onlineClass/2.jpg" alt="">
                    <p class="courseContent-p">教你一招玩转招生，这是扩校增员的必备课程。市场招生不仅是销售的艺术，更是一场市场营销和品宣推广。</p>
                    <router-link :to="{path:'/research/mac2020'}">
                        <button>更多详情</button>
                    </router-link>
                </div>
                <div class="col-md-4 col-xs-6" style="text-align: center;">
                    <img src="../../images/onlineClass/3.jpg" alt="">
                    <p class="courseContent-p">人才不是学校的核心竞争力，对人才的管理才是核心竞争力。通过精准招聘和KPI绩效考核，锻造具有全球胜任力的人才。</p>
                    <router-link :to="{path:'/research/humanResources'}">
                        <button>更多详情</button>
                    </router-link>
                </div>
            </div>
            <!-- 研究成果 -->
            <div class="row">
                <div class="col-md-12">
                    <h3 class="text-center research-title titleBg01">研究成果</h3>
                </div>
            </div>
            <div class="row pt30">
                <div class="col-md-3 col-xs-6 text-center reportlist">
                    <router-link :to="{path:'/research/report'}">
                        <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/report01.jpg" alt="" class="reportImg">
                    </router-link>
                </div>
                <div class="col-md-3 col-xs-6 text-center reportlist">
                    <router-link :to="{path:'/research/periodical'}">
                        <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/report02.jpg" alt="" class="reportImg">
                    </router-link>
                </div>
                <div class="col-md-3 col-xs-6 text-center reportlist reportItem">
                    <router-link :to="{path:'/research/report'}">
                        <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/report03.jpg" alt="" class="reportImg">
                    </router-link>
                </div>
                <div class="col-md-3 col-xs-6 text-center reportlist">
                    <router-link :to="{path:'/research/report'}">
                        <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/report04.jpg" alt="" class="reportImg">
                    </router-link>
                </div>
            </div>
            <!-- 研究成果 END-->
            <!-- 新学说四库全书 -->
            <div class="row">
                <div class="col-md-12">
                    <h3 class="text-center research-title titleBg03">新学说<span>四库全书</span></h3>
                </div>
            </div>
            <div class="row pt30">
                <div class="col-md-3 col-xs-6 reportlist classList">
                    <a href="http://data.xinxueshuo.cn/nsi/school/school.html" target="_blank">
                        <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/classPic01.jpg" alt="">
                    </a>
                    <p class="subItem-title">国际学校库</p>
                    <p class="subItem-desc">国际学校数据库，为国际学校提供科学的行业数据分析。掌握行业的发展态势，了解自身的成长阶段</p>
                </div>
                <div class="col-md-3 col-xs-6 reportlist classList">
                    <a href="http://data.xinxueshuo.cn/nsi/company/company.html" target="_blank">
                        <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/classPic03.jpg" alt="">
                    </a>
                    <p class="subItem-title">国际学校服务机构库</p>
                    <p class="subItem-desc">国际教育机构数据库提供与国际学校国际教育相关的各类服务机构和服务提供商的详细信息</p>
                </div>
                <div class="col-md-3 col-xs-6 reportlist classList">
                    <a href="http://data.xinxueshuo.cn/nsi/talent/talent.html" target="_blank">
                        <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/classPic02.jpg" alt="">
                    </a>
                    <p class="subItem-title">国际学校人才库</p>
                    <p class="subItem-desc">国际教育人才数据为内部数据库，上传个人简历，进入国际教育人才储备库，获得更多的展示自己的机会</p>
                </div>
                <div class="col-md-3 col-xs-6 reportlist classList">
                    <a href="http://data.xinxueshuo.cn/nsi/project/project.html" target="_blank">
                        <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/classPic04.jpg" alt="">
                    </a>
                    <p class="subItem-title">国际学校项目库</p>
                    <p class="subItem-desc">新学说国际学校四库全书，为学校，机构，和从业者提供最权威的行业数据，最先进的行业服务</p>
                </div>
            </div>
            <!-- 新学说四库全书 END-->
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .researchIndex-com{
       .courseContent{
        @media (max-width:768px) {
            width:100%;
        }
        button{
            width: 120px;
            height: 40px;
            line-height: 40px;
            margin: 0 auto 30px;
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
        .courseContent-p{
           color: rgb(84, 84, 84);
           text-align: left;
           margin: 20px 0;
           font-size: 16px;
           padding: 0 20px;
           line-height: 26px;
           height: 80px;
        }
    }
       padding-bottom: 50px;
       .pt30{
           padding-top: 30px;
       }
       .banner{
           padding-bottom: 50px;
       }
       .reportImg{
           box-shadow: 0 5px 20px rgb(190, 190, 190);
       }
       .subItem-title{
            font-weight: 700;
            margin-top: 10px;
            color: #202020;
            margin-bottom: 0;
            font-size: 15px;
        }
        .subItem-desc{
            line-height: 25px;
            color: rgb(126, 126, 126);
            font-size: 14px;
            margin-bottom: 5px;
        }

        // 研究成果
        .research-title{
            height: 70px;
            line-height: 70px;
            background-size: 100%;
            background-repeat: no-repeat;
            color: #FFF;
            letter-spacing: 1px;
            font-size: 28px;
            span{
                color: #dcb36b;
            }
            @media (max-width: 768px) {
                background-size: cover;
                background-position: center center;
            }
            // border-radius: 10px;
        }
        .titleBg01{
            background-image: url('https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/title03.png')
        }
        .titleBg02{
            background-image: url('https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/title01.png')
        }
        .titleBg03{
            background-image: url('https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/title02.png')
        }
        .reportItem{
            img{
                @media (max-width: 768px) {
                    display: inline-block;
                    height: 240px;
                }
            }
        }
        .reportlist{
            margin-bottom: 15px;
            min-height: 242px;
            .class-desc{
                margin-top: 10px;
                color: #333;
                text-align: left;
            }
            .class-time{
                color: rgb(82, 82, 82);
            }
        }
        .classList{
            min-height: 260px;
        }
        .class-title{
            font-weight: 700;
            color: #444;
            font-size: 20px;
        }
        .class-info{
            font-size: 16px;
            color: rgb(114, 114, 114);
            line-height: 30px;
        }
        .class-apply{
            a{
                display: inline-block;
                margin-top: 10px;
                background-color:#dcb36b;
                color: #FFF;
                padding: 5px 15px;
                border-radius: 20px;
                &:hover{
                    text-decoration: none;
                }
            }
        }
    }
</style>
