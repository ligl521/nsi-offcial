<template>
    <div class="fit">
        <div class="introduce">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xs-12">
                        <img src="../../images/fit/logoPic.jpg" alt="">
                    </div>
                    <div class="col-md-6 col-xs-12 introduceDetail">
                        <h2>2020FIT国际教师风采大赛</h2>
                        <p>2020FIT第二届国际教师风采大赛通过自身展示以及系统培训，多角度展现国际学校教师的教学风采的同时，挖掘国际教育行业的“明星教师”。大赛自三月启幕，吸引了近百所国际学校教师的积极参与。由组委会举办的三次线上教师培训也受到国际学校教师们的广泛好评，为教师职业发展带来更多启发与思考。历时近5个月，两轮角逐21位教师脱颖而出晋级决赛，FIT国际教师风采大赛终于迎来了决赛赛程。</p>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="repecharge">
            <div class="title">
                <span class="lineLeft"></span>
                <span class="titleName">2020FIT决赛选手</span>
                <span class="lineRight"></span>
            </div>
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-xs-6" v-for="(item,index) in repechargeList" :key="index">
                            <div class="memberDetail">
                                <img :src="item.img" alt="">
                                <div class="message">
                                    <p>{{item.name}}</p>
                                    <p class="hrline"></p>
                                    <p>{{item.schoolName}}</p>
                                    <div class="detail" @click="toDetail(item.id)">
                                        <span class="iconfont icon-xiangqing-"></span>
                                        <span>复赛作品</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="judgingPanel" style="margin-bottom:90px">
            <div class="title">
                <span class="lineLeft"></span>
                <span class="titleName">2020FIT决赛评审团</span>
                <span class="lineRight"></span>
            </div>
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-xs-6" v-for="(item,index) in finalsList" :key="index">
                            <img :src="item.img" alt="">
                            <p>{{item.name}}</p>
                            <p>{{item.title}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="judgingPanel">
            <div class="title">
                <span class="lineLeft"></span>
                <span class="titleName">2020FIT复赛评审团</span>
                <span class="lineRight"></span>
            </div>
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-xs-6" v-for="(item,index) in judgeList" :key="index">
                            <img :src="item.img" alt="">
                            <p>{{item.name}}</p>
                            <p>{{item.title}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div class="review">
            <div class="title">
                <span class="lineLeft"></span>
                <span class="titleName">2019FIT大赛回顾</span>
                <span class="lineRight"></span>
            </div>
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-xs-12">
                            <div class="picFrame">
                                <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-event/FIT2019/zhaoyangyang.jpg" alt="">
                                <span class="iconfont icon-bofang toPlay" @click="toPlay" data-toggle="modal" data-target="#myModal01"></span>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="myModal01" tabindex="-1" role="dialog" aria-labelledby="myModalLabel01">
                                <div class="modal-dialog modal-lg" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" @click="close" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                            <h4 class="modal-title" id="myModalLabel01">邀请你看《FIT大赛，赵扬扬》</h4>
                                        </div>
                                        <div class="modal-body">
                                            <iframe frameborder="0" src="" allowFullScreen="true"></iframe>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" @click="close" class="btn btn-default" data-dismiss="modal">关闭</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-12 rightList">
                            <div class="rightContent">
                                <div class="row" @click="openVideo1">
                                    <div class="col-md-4 col-xs-4">
                                        <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-event/FIT2019/chenqiuling.jpg" alt="">
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                        <span>陈秋玲-广东碧桂园学校,荣获第一届FIT国际教师风采大赛明星教师奖称号。国际教育圈子是透明的，希望有更多的命题报道和关注。</span> 
                                    </div>
                                </div>
                                <div class="row" @click="openVideo2">
                                    <div class="col-md-4 col-xs-4">
                                        <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-event/FIT2019/zhangqian.jpg" alt="">
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                        <span>张倩—宁波鄞州赫德实验学校,荣获第一届FIT国际教师风采大赛明星教师奖称号。教好音乐学科是远远不够的，要从音乐教师转变为人师。</span> 
                                    </div>
                                </div>
                                <div class="row" @click="openVideo3">
                                    <div class="col-md-4 col-xs-4">
                                        <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-event/FIT2019/jiangfan.jpg" alt="">
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                        <span>江帆—香港德勤教育集团,荣获第一届FIT国际教师风采大赛精英教师奖称号。成就他人同样可以实现价值。</span> 
                                    </div>
                                </div>
                                <div class="row" @click="openVideo4">
                                    <div class="col-md-4 col-xs-4">
                                        <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-event/FIT2019/wanyi.jpg" alt="">
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                        <span>万一—句容碧桂园学校,荣获第一届FIT国际教师风采大赛精英教师奖称号。有创意才能活下去，做学生还是老师都同样要找对方法。</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="thirdMember">
            <div class="title">
                <span class="lineLeft"></span>
                <span class="titleName">2019FIT明星教师</span>
                <span class="lineRight"></span>
            </div>
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-xs-4 memberPic">
                            <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-event/FIT2019/zhaoyangyang.jpg" alt="">
                        </div>
                        <div class="col-md-8 col-xs-8">
                            <p class="memberTitle">赵扬扬</p>
                            <p class="memberContent">荣获第一届FIT国际教师风采大赛明星教师奖称号，她坚信要做一位“看见孩子需要”的老师，用自己的生命去影响孩子的生命。纵然有风雨，但要相信云上有太阳。</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-xs-4 memberPic">
                            <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-event/FIT2019/chenqiuling.jpg" alt="">
                        </div>
                        <div class="col-md-8 col-xs-8">
                            <p class="memberTitle">陈秋玲</p>
                            <p class="memberContent">荣获第一届FIT国际教师风采大赛明星教师奖称号。在大赛中，陈秋玲表示国际教育圈子是透明的，希望有更多的命题报道和关注。并向我们抛出一个问题：国际教育中的中国教师该如何找准身份认同？</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-xs-4 memberPic">
                            <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-event/FIT2019/zhangqian.jpg" alt="">
                        </div>
                        <div class="col-md-8 col-xs-8">
                            <p class="memberTitle">张倩</p>
                            <p class="memberContent">荣获第一届FIT国际教师风采大赛明星教师奖称号。她提出教好音乐学科是远远不够的，要从音乐教师转变为人师。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
    export default{
        data(){
            return{
                judgeList:[
                    {
                        img:require("../../images/fit/常玮琪.jpg"),
                        name:"常玮琪",
                        title:"诺德安达中国区教学发展主任-中方"
                    },
                    {
                        img:require("../../images/fit/陈杰妮.jpg"),
                        name:"陈杰妮",
                        title:"上海协和双语高级中学校长"
                    },
                    {
                        img:require("../../images/fit/韩菲.jpg"),
                        name:"韩菲",
                        title:"珠海德威国际高中中方校长"
                    },
                    {
                        img:require("../../images/fit/何道明.jpg"),
                        name:"何道明",
                        title:"深圳厚德书院院长"
                    },
                    {
                        img:require("../../images/fit/沈建军.jpg"),
                        name:"沈建军",
                        title:"长沙康礼•克雷格学校总校长"
                    },
                    {
                        img:require("../../images/fit/许凌可.jpg"),
                        name:"许凌可",
                        title:"重庆德普外国语学校校长"
                    },
                    {
                        img:require("../../images/fit/俞珉.jpg"),
                        name:"俞珉",
                        title:"上海耀中浦东校区中方校长"
                    },
                    {
                        img:require("../../images/fit/张晔.jpg"),
                        name:"张晔",
                        title:"北京致知学校总校长"
                    },
                    {
                        img:require("../../images/fit/张婧.jpg"),
                        name:"张婧",
                        title:"广东实验中学AP国际课程校区主管"
                    },
                ],
                finalsList:[
                    {
                        img:require("../../images/fit/决赛评委/陈文国.png"),
                        name:"陈文国",
                        title:"上海宏润博源学校总校长"
                    },
                    {
                        img:require("../../images/fit/决赛评委/高旭.png"),
                        name:"高旭",
                        title:"湖南广益实验中学国际部创始校长"
                    },
                    {
                        img:require("../../images/fit/决赛评委/胡军.png"),
                        name:"胡军",
                        title:"贵阳一中普瑞国际学校执行校长"
                    },
                    {
                        img:require("../../images/fit/决赛评委/李争志.png"),
                        name:"李争志",
                        title:"深圳瑞得福国际学校中方校长"
                    },
                    {
                        img:require("../../images/fit/决赛评委/历晶.png"),
                        name:"历晶",
                        title:"长春师范大学国际教师教育学院副院长"
                    },
                    {
                        img:require("../../images/fit/决赛评委/刘莉.png"),
                        name:"刘莉",
                        title:"西安梁家滩国际学校校长"
                    },
                    {
                        img:require("../../images/fit/决赛评委/曲珍伊.png"),
                        name:"曲珍伊",
                        title:"新加坡伊顿国际教育集团山东区总校长"
                    },
                    {
                        img:require("../../images/fit/决赛评委/唐毅婷.png"),
                        name:"唐毅婷",
                        title:"青岛梅尔顿学校执行校长"
                    },
                    {
                        img:require("../../images/fit/决赛评委/万明珠.png"),
                        name:"万明珠",
                        title:"浙中阿德科特学校执行校长"
                    },
                    {
                        img:require("../../images/fit/决赛评委/王殿军.png"),
                        name:"王殿军",
                        title:"清华附中校长"
                    },
                    {
                        img:require("../../images/fit/决赛评委/吴真真.png"),
                        name:"吴真真",
                        title:"长沙玮希国际学校执行校长"
                    },
                    {
                        img:require("../../images/fit/决赛评委/夏美辉.png"),
                        name:"夏美辉",
                        title:"北京青苗学校海淀校区小学中方校长"
                    },
                    {
                        img:require("../../images/fit/决赛评委/闫潞霞.png"),
                        name:"闫潞霞",
                        title:"加拿大国际教育集团总校长及学术总监"
                    },
                    {
                        img:require("../../images/fit/决赛评委/杨洋.png"),
                        name:"杨洋",
                        title:"天津惠灵顿国际学校校长"
                    },
                    {
                        img:require("../../images/fit/决赛评委/叶斌.png"),
                        name:"叶斌",
                        title:"宁波华茂国际学校校长"
                    },
                    {
                        img:require("../../images/fit/决赛评委/叶延武.png"),
                        name:"叶延武",
                        title:"天润国际教育集团总校长"
                    },
                    {
                        img:require("../../images/fit/决赛评委/余海燕.png"),
                        name:"余海燕",
                        title:"合肥安生托马斯学校总校长"
                    },
                    {
                        img:require("../../images/fit/决赛评委/张桂元.png"),
                        name:"张桂元",
                        title:"法拉古特学校天津校区校长"
                    },
                    {
                        img:require("../../images/fit/决赛评委/张恒.png"),
                        name:"张恒",
                        title:"PGA中国总校长"
                    },
                    {
                        img:require("../../images/fit/决赛评委/周宪明.png"),
                        name:"周宪明",
                        title:"北京市中芯学校执行校董"
                    },
                    {
                        img:require("../../images/fit/决赛评委/庄胜利.png"),
                        name:"庄胜利",
                        title:"华东康桥国际学校校长"
                    },
                ],
                repechargeList:[
                    {   id:"0",
                        img:require("../../images/fit/复赛选手/李梦阳.jpg"),
                        name:"李梦阳",
                        schoolName:"清澜山学校",
                        href:"https://url.cn/jzLzJ6fD?sf=uri"
                    },
                    {
                        id:"1",
                        img:require("../../images/fit/复赛选手/于思琪.jpg"),
                        name:"于思琦",
                        schoolName:"贵阳一中普瑞国际学校",
                        href:"https://url.cn/R5ZmSrch?sf=uri"
                    },
                    {
                        id:"2",
                        img:require("../../images/fit/复赛选手/徐海蓉.jpg"),
                        name:"徐海蓉",
                        schoolName:"重庆德普外国语学校",
                        href:"https://url.cn/M2bxlqnU?sf=uri"
                    },
                    {
                        id:"3",
                        img:require("../../images/fit/复赛选手/王子堰.jpg"),
                        name:"王子堰",
                        schoolName:"法拉古特国际学校天津校区",
                        href:"https://url.cn/JRGBRmiI?sf=uri"
                    },
                    {
                        id:"4",
                        img:require("../../images/fit/复赛选手/聂君.jpg"),
                        name:"聂君",
                        schoolName:"武汉海淀外国语实验学校",
                        href:"https://url.cn/Vba8QFHr?sf=uri"
                    },
                    {
                        id:"5",
                        img:require("../../images/fit/复赛选手/李乃欣.jpg"),
                        name:"李乃欣",
                        schoolName:"重庆巴蜀常春藤学校博物馆式小学",
                        href:"https://url.cn/Miksac8h?sf=uri"
                    },
                    {
                        id:"6",
                        img:require("../../images/fit/复赛选手/邓晨.jpg"),
                        name:"邓晨",
                        schoolName:"北京爱迪国际学校",
                        href:"https://url.cn/mXsUaGj1?sf=uri"
                    },
                    {
                        id:"7",
                        img:require("../../images/fit/复赛选手/刘洪波.jpg"),
                        name:"刘洪波",
                        schoolName:"清澜山学校",
                        href:"https://url.cn/3MiNALhp?sf=uri"
                    },
                    {
                        id:"8",
                        img:require("../../images/fit/复赛选手/赵扬扬.jpg"),
                        name:"赵扬扬",
                        schoolName:"北京市中芯学校",
                        href:"https://url.cn/zuzsyzVD?sf=uri"
                    },
                    {
                        id:"9",
                        img:require("../../images/fit/复赛选手/刘芳.jpg"),
                        name:"刘芳",
                        schoolName:"北京市中芯学校",
                        href:"https://url.cn/cEL7LOpl?sf=uri"
                    },
                    {
                        id:"10",
                        img:require("../../images/fit/复赛选手/李瑞.jpg"),
                        name:"李瑞",
                        schoolName:"巴川量子中学",
                        href:"https://url.cn/AdAaC9yV?sf=uri"
                    },
                    {
                        id:"11",
                        img:require("../../images/fit/复赛选手/刘嘉敏.jpg"),
                        name:"刘嘉敏",
                        schoolName:"人大附中英国国王杭州学校",
                        href:"https://url.cn/O8NXawA5?sf=uri"
                    },
                    {
                        id:"12",
                        img:require("../../images/fit/复赛选手/湛沛洁.jpg"),
                        name:"湛沛洁",
                        schoolName:"慈溪市安琪儿幼稚园",
                        href:"https://url.cn/yOJWeHC5?sf=uri"
                    },
                    {
                        id:"13",
                        img:require("../../images/fit/复赛选手/陈玉婷.jpg"),
                        name:"陈玉婷",
                        schoolName:"深圳实验承翰学校",
                        href:"https://url.cn/uRiF2Nr1?sf=uri"
                    },
                    {
                        id:"14",
                        img:require("../../images/fit/复赛选手/钱杨.jpg"),
                        name:"钱杨",
                        schoolName:"合肥润安公学",
                        href:"https://url.cn/TMRmuFpb?sf=uri"
                    },
                    {
                        id:"15",
                        img:require("../../images/fit/复赛选手/欧敬贤.jpg"),
                        name:"欧敬贤",
                        schoolName:"天津英华国际学校东丽校区",
                        href:"https://url.cn/XRmDLaIT?sf=uri"
                    },
                    {
                        id:"16",
                        img:require("../../images/fit/复赛选手/冉博狄.jpg"),
                        name:"冉博狄",
                        schoolName:"清澜山学校",
                        href:"https://url.cn/047SKleQ?sf=uri"
                    },
                    {
                        id:"17",
                        img:require("../../images/fit/复赛选手/朱梁.jpg"),
                        name:"朱梁",
                        schoolName:"南京泰晤士学校",
                        href:"https://url.cn/bRHFWrzB?sf=uri"
                    },
                    {
                        id:"18",
                        img:require("../../images/fit/复赛选手/张铭格.jpg"),
                        name:"张铭格",
                        schoolName:"北京海淀凯文学校",
                        href:"https://url.cn/herrby6Z?sf=uri"
                    },
                    {
                        id:"19",
                        img:require("../../images/fit/复赛选手/韦超.jpg"),
                        name:"韦超",
                        schoolName:"合肥市第六中学国际部北美中心",
                        href:"https://url.cn/bWr3Oja7?sf=uri"
                    },
                    {
                        id:"20",
                        img:require("../../images/fit/复赛选手/仇琦.jpg"),
                        name:"仇琦",
                        schoolName:"句容碧桂园学校",
                        href:"https://url.cn/J5gNbDdR?sf=uri"
                    },
                ]
            }
        },
        methods:{
            toPlay(){
                $(".modal-body").find("iframe").attr("src","https://v.qq.com/txp/iframe/player.html?vid=x09271gnuew");
            },
            close(){
                $(".modal-body").find("iframe").removeAttr("src");
            },
            openVideo1(){
                window.open("https://v.qq.com/txp/iframe/player.html?vid=g0927al717g")
            },
            openVideo2(){
                window.open("https://v.qq.com/txp/iframe/player.html?vid=l092780x7a2")
            },
            openVideo3(){
                window.open("https://v.qq.com/txp/iframe/player.html?vid=s0927axzgsw")
            },
            openVideo4(){
                window.open("https://v.qq.com/txp/iframe/player.html?vid=h0927h895p5")
            },
            toDetail(id){
                window.open(this.repechargeList[id].href)
            }
        }
    }
</script>
<style lang="scss" scoped>
.fit{
    // width:65%;
    min-width:1200px;
    max-width:1200px;
    margin:0 auto;
    @media (max-width:768px) {
        min-width:100%;
        max-width:100%;
    }
    .introduce{
        margin-top:30px;
         @media (max-width:768px) {
            margin-top:10px;
        }
        .container{
            width:100%;
            position:relative;
            img{
                width:100%;
                height:auto;
            }
            .introduceDetail{
                text-align: center;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 0;
                @media (max-width:768px) {
                    position: static;
                    top: 0;
                    transform: translateY(0);
                }   
                h2{
                    margin:20px 0;
                    @media (max-width:768px) {
                        margin:10px 0;
                        font-size: 24px;
                        font-weight: 600;
                    }
                }
                p{
                    font-size:20px;
                    text-align: left;
                    line-height:2;
                    @media (max-width:768px) {
                        font-size:16px;
                        line-height:20px;
                    }
                }
            }
        }
    }
    .review{
        .title{
            text-align: center;
            margin:50px 0;
            font-size: 20px;
            @media (max-width:768px) {
                margin:20px 0;
            }
            .lineLeft{
                width: 30%;
                display:inline-block;
                vertical-align: middle;
                border-bottom:4px dotted #ccc;
                @media (max-width:768px) {
                    width:10%;
                }
            }
            .titleName{
                display:inline-block;
                margin:0 20px;
                font-size: 24px;
                vertical-align: middle;
            }
            .lineRight{
                width:30%;
                display:inline-block;
                vertical-align: middle;
                border-bottom:4px dotted #ccc;
                @media (max-width:768px) {
                    width:10%;
                }
            }
        }
        .content{
            background-image: url("../../images/fit/videoBg.jpg");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding:15px 0;
            // min-width:1180px;
            @media (max-width:768px) {
                min-width:100%;
            }
            .container{
                width:100%;
                position: relative;
                .picFrame {
                    position: relative;
                    img {
                        display: inline-block;
                        max-width: 100%;
                        height: auto;
                    }
                    .toPlay {
                        position: absolute;
                        left: 50%;
                        margin-left: -35px;
                        top: 50%;
                        margin-top: -50px;
                        font-size: 70px;
                        color: #e0e0e0;
                        opacity: .9;
                    }
                }
                .modal{
                    z-index: 99999;
                    margin-top:30px;
                    .modal-body iframe{
                        width: 100%;
                        height: 450px;
                    }
                }
                .rightList{
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    @media (max-width:768px) {
                        position: static;
                        top: 0;
                        transform: translateY(0);
                    }
                    .rightContent{
                        color:#fff;
                        .row{
                            padding:16px 0;
                            @media (max-width:768px) {
                                margin-top:15px;
                                padding:0;
                            }
                        }
                        img{
                            height:auto;
                            width:125px;
                            @media (max-width:768px) {
                                height:80px;
                                width:110px;
                            }
                        }
                        span{
                            display:inline-block;
                            margin-left:10px;
                        }
                    }
                }
            }
            
        }
    }
    .repecharge{
        .title{
            text-align: center;
            margin:50px 0;
            font-size: 20px;
            @media (max-width:768px) {
                margin:20px 0;
            }
            .lineLeft{
                width: 30%;
                display:inline-block;
                vertical-align: middle;
                border-bottom:4px dotted #ccc;
                @media (max-width:768px) {
                    width: 10%;
                }
            }
            .titleName{
                display:inline-block;
                margin:0 20px;
                font-size: 24px;
                vertical-align: middle;
            }
            .lineRight{
                width: 30%;
                display:inline-block;
                vertical-align: middle;
                border-bottom:4px dotted #ccc;
                @media (max-width:768px) {
                    width: 10%;
                }
            }
        }
        .content{
            .container{
                width:100%;
                .memberDetail{
                    text-align: center;
                    img{
                        width:150px;
                        height:auto;
                        @media (max-width:768px) {
                            width:135px;
                        }
                    }
                    .message{
                        width:150px;
                        margin:0 auto;
                        @media (max-width:768px) {
                            width:135px;
                        }
                        .hrline{
                            border-bottom:2px solid #ccc;
                        }
                        p{
                            margin:5px 0;
                            text-align: left;
                            &:first-of-type{
                                font-size: 20px;
                                font-weight: 600;
                            }
                            &:last-of-type{
                                font-size: 16px;
                                height:35px;
                                // width: 155px;
                                // overflow: hidden;
                                // text-overflow: ellipsis;
                                // white-space: nowrap;
                            }
                        }
                        .detail{
                            float:right;
                            margin:5px 0 20px;
                            cursor:pointer;
                        }
                    }
                    
                }
            }
            
            
        }
    }
    .judgingPanel{
        background-image: url("../../images/fit/judgeBg.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-top:20px;
        @media (max-width:768px) {
            min-width:100%;
        }
        .title{
            text-align: center;
            padding:40px 0;
            font-size: 20px;
            color:#fff;
            @media (max-width:768px) {
                padding:20px 0;
            }
            .lineLeft{
                width: 30%;
                display:inline-block;
                vertical-align: middle;
                border-bottom:4px dotted #ccc;
                @media (max-width:768px) {
                    width:10%;
                }
            }
            .titleName{
                display:inline-block;
                margin:0 20px;
                font-size: 24px;
                vertical-align: middle;
            }
            .lineRight{
                width:30%;
                display:inline-block;
                vertical-align: middle;
                border-bottom:4px dotted #ccc;
                @media (max-width:768px) {
                    width:10%;
                }
            }
        }
        .content{
            text-align: center;
            .container{
                width:100%;
                img{
                    width:120px;
                    height:120px;
                    border-radius: 50%;
                    @media (max-width:768px) {
                        width:100px;
                        height:100px;
                    }
                }
                p{
                    margin:10px 0;
                    color:#fff;
                    &:first-of-type{
                        font-size: 20px;
                    }
                    &:last-of-type{
                        margin-bottom:25px;
                        font-size:16px;
                        height:30px;
                    }
                }
            }
            
        }
    }
    .thirdMember{
        .title{
            text-align: center;
            margin:50px 0;
            font-size: 20px;
            @media (max-width:768px) {
                margin:20px 0;
            }
            .lineLeft{
                width: 30%;
                display:inline-block;
                vertical-align: middle;
                border-bottom:4px dotted #ccc;
                @media (max-width:768px) {
                    display:none;
                }
            }
            .titleName{
                display:inline-block;
                margin:0 20px;
                font-size: 24px;
                vertical-align: middle;
            }
            .lineRight{
                width:30%;
                display:inline-block;
                vertical-align: middle;
                border-bottom:4px dotted #ccc;
                @media (max-width:768px) {
                    display:none;
                }
            }
        }
        .content{
            .container{
                width:100%;
                .row{
                    margin-top:30px;
                    @media (max-width:768px) {
                        margin-top:15px;
                    }
                }
                .memberPic{
                    text-align: center;
                    img{
                        width:80%;
                        height:auto;
                        @media (max-width:768px) {
                            width:105px;
                        }
                    }
                }
                .memberTitle{
                    font-size: 24px;
                    font-weight: 600;
                    @media (max-width:768px) {
                        font-size: 18px;
                    }
                }
                .memberContent{
                    font-size:20px;
                    @media (max-width:768px) {
                        font-size: 14px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 2;
                        line-clamp: 2;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                    }
                }
                .detail{
                    float:right;
                    font-size:20px;
                    @media (max-width:768px) {
                        display:none;
                    }
                }
            }
            
           
        }
    }
}
    
</style>