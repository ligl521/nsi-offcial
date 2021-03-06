import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/IndexPage.vue'
import aboutusPage from '../pages/aboutusPage.vue'
import gesPage from '../pages/gesPage.vue'
import InformationPage from '../pages/InformationPage.vue'
import eventPage from "../pages/eventPage.vue"
import researchPage from '../pages/researchPage.vue'
import consultingPage from '../pages/consulting.vue'
import lotusPage from '../pages/lotusPage.vue'
import searchPage from '../pages/searchPage'
import vipPage from '../pages/vipPage.vue'

import newestList from '../components/information/newList.vue'
import original from '../components/information/original.vue'
import visitschool from '../components/information/visitSchool.vue'
import policy from '../components/information/policy.vue'
import detailnews from '../components/information/newsDetail.vue'
import interview from '../components/information/interview.vue'
import historyNews from '../components/information/histroy.vue'
import historydetail from '../components/information/historyDetail.vue'

import eventWorkShop from '../components/event/eventWorkShop.vue'
import eventLatest from '../components/event/eventLatest.vue'
import eventDetail from '../components/event/eventDetail.vue'
import eventLotus from '../components/event/eventLotus.vue'
import eventApply from '../components/event/eventApply.vue'
import videoList from '../components/event/videoList.vue'
import video from '../components/event/video.vue'
import fit from '../components/event/fit.vue'
import skyClass from '../components/event/skyClass'
import miniMBA from '../components/event/miniMBA'
import onlineClass from '../components/event/onlineClass'
import school from '../components/event/school.vue'


import periodical from '../components/research/periodical.vue'
import report from '../components/research/report.vue'
import visPptDownload from '../components/research/visPptDownload.vue'
import download from '../components/research/download.vue'
import ncdownload from '../components/research/ncdownload.vue'
import advancedClass from '../components/research/advancedClass.vue'
import researchApply from '../components/research/researchApply.vue'
import researchIndex from '../components/research/researchIndex.vue'
import experts from '../components/research/experts.vue'
import mac2020 from '../components/research/mac2020.vue'
import humanResources from '../components/research/humanResources.vue'
import classCatalog from '../components/research/classCatalog.vue'
import teaching from '../components/research/teaching.vue'


import consultOne from '../components/consulting/consultOne.vue'
import consultTwo from '../components/consulting/consultTwo.vue'
import consultThree from '../components/consulting/consultThree.vue'
import consultFour from '../components/consulting/consultFour.vue'
import consultFive from '../components/consulting/consultFive.vue'
import consultMob from '../components/consulting/consultMob.vue'

import notFondPage from '../components/common/notFondPage.vue'

// nullPage
import applyTalent from '../components/nullPage/apply.vue'

//关于我们,加入我们
import joinUs from '../components/aboutUs/joinUs.vue'
import connectUs from '../components/aboutUs/connectUs.vue'
import aboutusIndex from '../components/aboutUs/aboutusIndex.vue'

Vue.use(Router)

const routes = [{
        path: "/",
        component: IndexPage
    }, {
        path: "/news",
        redirect: "/news/latest",
        component: InformationPage,
        children: [{
                path: "latest",
                component: newestList
            },
            {
                path: "original",
                component: original
            },
            {
                path: "visitSchool",
                component: visitschool
            },
            {
                path: "policy",
                component: policy
            },
            {
                path: "interview",
                component: interview
            },
            {
                path: "histroy",
                component: historyNews
            }
        ]
    }, {
        path: "/news/detailnews/:id",
        name: "detailNews",
        component: detailnews
    },
    {
        path: "/news/historydetail/:id",
        name: "historydetail",
        component: historydetail
    },
    {
        path: "/event",
        component: eventPage,
        redirect: '/event/latest',
        children: [{
                path: 'latest',
                component: eventLatest
            },
            {
                path: 'subject',
                component: eventWorkShop
            }, {
                path: 'lotus',
                component: eventLotus
            },{
                path: 'miniMBA',
                component:miniMBA
            }, {
                path: 'apply',
                component: eventApply
            }, {
                path: "detail",
                name: "eventDetail",
                component: eventDetail
            },{
                path: 'videoList',
                component:videoList
            },{
                path: 'video',
                component:video
            },{
                path: 'fit',
                component:fit
            },{
                path: 'skyClass',
                component:skyClass
            },{
                path: 'onlineClass',
                component:onlineClass
            },{
                path:'school',
                component:school
            }
        ]
    }, {
        path: "/about",
        component: aboutusPage,
        redirect: '/about/index',
        children: [{
                path: 'index',
                component: aboutusIndex
            }, {
                path: 'joinus',
                component: joinUs
            },
            {
                path: 'connectus',
                component: connectUs
            }
        ]
    }, {
        path: "/ges",
        component: gesPage
    }, {
        path: "/research",
        component: researchPage,
        redirect: '/research/info',
        children: [{
                path: 'info',
                component: researchIndex
            },
            {
                path: 'periodical',
                component: periodical
            }, {
                path: 'report',
                component: report,
            },{
                path: 'visPptDownload',
                component: visPptDownload,
            },{
                path: 'download',
                component: download
            },,{
                path: 'ncdownload',
                component: ncdownload
            },{
                path: 'ipa',
                component: advancedClass
            }, {
                path: 'apply',
                component: researchApply
            }, {
                path: 'experts',
                component: experts
            }, {
                path: 'mac2020',
                component:mac2020
            },{
                path: 'humanResources',
                component:humanResources
            },{
                path: 'classCatalog',
                component:classCatalog

            },{
                path: 'teaching',
                component:teaching

            }
        ]
    }, {
        path: "/consulting",
        component: consultingPage,
        redirect: '/consulting/consultOne',
        children: [{
            path: '/consulting/consultMob',
            component: consultMob
        }, {
            path: '/consulting/consultOne',
            component: consultOne
        }, {
            path: '/consulting/consultTwo',
            component: consultTwo
        }, {
            path: '/consulting/consultThree',
            component: consultThree
        }, {
            path: '/consulting/consultFour',
            component: consultFour
        }, {
            path: '/consulting/consultFive',
            component: consultFive
        }]
    }, {
        path: "/lotus",
        component: lotusPage
    }, {
        path: "/lotus/shanghai",
        component: notFondPage
    }, {
        path: "/lotus/beijing",
        component: notFondPage
    }, {
        path: "/vip",
        component: vipPage
    }, {
        path: '/apply',
        component: applyTalent
    }, {
        path: '/search',
        component: searchPage
    }
]

const router = new Router({
    // mode: "history",
    routes
})

export default router;