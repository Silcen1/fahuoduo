import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Scraper from '@/components/message/Scraper'
import Top from '@/components/son/Top'
import Car from '@/components/message/Car'
import Carriage from '@/components/message/Carriage'
import Stalls from '@/components/message/Stalls'
import Banking from '@/components/message/Banking'
import Transport from '@/components/message/Transport'
import Logistics from '@/components/message/Logistics'
import Business from '@/components/message/Business'
import Recruit from '@/components/message/Recruit'
import Card from '@/components/message/Card'
import Line from '@/components/message/Line'
import Major from '@/components/message/Major'
import Data from '@/components/message/Data'
import Success from '@/components/message/Success'
import Header from '@/components/top/Header'
import Theader from '@/components/sub/Theader'
import Theader1 from '@/components/top/Theader1'
import Upload from '@/components/top/Upload'
import Map from '@/components/son/Map'
import Proving from '@/components/top/Proving'
import Endcity from '@/components/son/Endcity'

// 个人中心 and 我要发布
import My  from '@/components/My'
import Complete_information from '@/components/Complete_information'
import My_authentication from '@/components/my_authentication'
import My_collect from '@/components/my_collect'
import About_us from '@/components/About_us'
import Amend_password from '@/components/Amend_password'
import Publish from '@/components/Publish'

//首页部分
import Details from '@/components/Home_Children/Banner/detail'
import LineDetails from '@/components/Home_Children/Banner/line_details'
import OnlyLine from '@/components/Home_Children/zxSearch/onlyLine'
import StartCity from '@/components/Home_Children/zxSearch/startCity'
import EndCity from '@/components/Home_Children/zxSearch/endCity'
import Search from '@/components/Home_Children/zxSearch/search'
import NotSearch from '@/components/Home_Children/zxSearch/searchNotFound'
import CarSearch from '@/components/Home_Children/carSearch/carSearch'
import CarNotSearch from '@/components/Home_Children/carSearch/carNotFound'
import CarDetails from '@/components/Home_Children/carSearch/carDetails'
import SpecialList from '@/components/Home_Children/special/specialList'
import SpecialDetails from '@/components/Home_Children/special/specialDetails'
import WuLiuYuanXiangQing from '@/components/Home_Children/WuLiuYuan/details'
import ZhuanRang from '@/components/Home_Children/DangKou/DangKouList'
import ZhaoPin from '@/components/Home_Children/ZhaoPin/ZhaoPinList'
import YouKa from '@/components/Home_Children/YouKa/YouKaList'

//注册登录
import Login from '@/components/Login/login'
import Reset from '@/components/Login/reset'
import Register from '@/components/Login/register'

Vue.use(Router)

export default new Router({
  routes: [
    // {path: '/',name: 'Home',component: Home},
    {path:'/scraper',name:'Scraper',component:Scraper,meta:{title:'叉车出售资料'}},
    {path:'/top',name:'Top',component:Top},
    {path:'/car',name:'Car',component:Car,meta:{title:'车辆查询资料'}},
    {path:'/carriage',name:'Carriage',component:Carriage,meta:{title:'车厢定制资料'}},
    {path:'/stalls',name:'Stalls',component:Stalls,meta:{title:'档口转让资料'}},
    {path:'/banking',name:'Banking',component:Banking,meta:{title:'金融服务'}},
    {path:'/transport',name:'Transport',component:Transport,meta:{title:'特种运输资料'}},
    {path:'/logistics',name:'Logistics',component:Logistics,meta:{title:'物流搬运资料'}},
    {path:'/business',name:'Business',component: Business,meta:{title:'物流园招商资料'}},
    {path:'/recruit',name:'Recruit',component: Recruit,meta:{title:'物流招聘资料'}},
    {path:'/card',name:'Card',component: Card,meta:{title:'油卡出售资料'}},
    {path:'/line',name:'Line',component: Line,meta:{title:'专线查询资料'}},
    {path:'/major',name:'Major',component: Major,meta:{title:'专业调车资料'}},
    {path:'/data',name:'Data',component: Data,meta:{title:'发货多'}},
    {path:'/success',name:'Success',component: Success,meta:{title:'资料上传成功'}},
    {path:'/header',name:'Header',component: Header},
    {path:'/theader',name:'Theader',component: Theader},
    {path:'/theader1',name:'Theader1',component: Theader1},
    {path:'/upload',name:'Upload',component: Upload},
    {path:'/map',name:'Map',component: Map},
    {path:'/proving',name:'Proving',component: Proving},
    {path:'/endcity',name:'Endcity',component: Endcity,meta:{title:'选择城市'}},

    // 个人中心 and 我要发布
{
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        title:"发货多"
      }
    },
    {
      path: '/My',
      name: 'My',
      component: My,
      meta:{
        title:"我的"
      }
    },
    {
      path: '/Complete_information',
      name: 'Complete_information',
      component: Complete_information,
      meta:{
        title:"完善信息"
      }
    },
    {
      path: '/My_authentication',
      name: 'My_authentication',
      component: My_authentication,
      meta:{
        title:"我的资料"
      }
    },
    {
      path:'/My_collect',
      name:'My_collect',
      component:My_collect,
      meta:{
        title:"我的收藏"
      }
    },
    {
      path:'/About_us',
      name:'About_us',
      component:About_us,
      meta:{
        title:"我的资料"
      }
    },
    {
      path:'/Amend_password',
      name:'Amend_password',
      component:Amend_password,
      meta:{
        title:"找回密码"
      }
    },
    {
      path:'/Publish',
      name:'Publish',
      component:Publish,
      meta:{
        title:"发货多"
      }
    },

    //首页部分路由
    {path: '*', redirect: '/home'},
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        keepAlive:false,
        title:"发货多"
      }
    },
    {
      path:'/home/details',
      name:'Details',
      component:Details,
      meta:{
        keepAlive:false,
        title:"发货多"
      }
    },
    {
      path:'/home/details/linedetails',
      name:'LineDetails',
      component:LineDetails,
      meta:{
        keepAlive:false,
        title:"专线详情"
      }
    },
    {
      path:'/home/onlyline',
      name:'OnlyLine',
      component:OnlyLine,
      meta:{
        keepAlive:false,
        title:"专线查询"
      }
    },
    {
      path:'/home/onlyline/startcity/:id',
      name:'StartCity',
      component:StartCity,
      meta:{
        keepAlive:false,
        title:"选择出发城市"
      }
    },
    {
      path:'/home/onlyline/endcity/:id',
      name:'EndCity',
      component:EndCity,
      meta:{
        keepAlive:false,
        title:"选择到达城市"
      }
    },
    {
      path:'/home/onlyline/search',
      name:'Search',
      component:Search,
      meta:{
        keepAlive:false,
        title:"专线查询结果"
      }
    },
    {
      path:'/home/onlyline/notsearch',
      name:'NotSearch',
      component:NotSearch,
      meta:{
        keepAlive:false,
        title:"专线查询结果"
      }
    },
    {
      path:'/home/carsearch',
      name:'CarSearch',
      component:CarSearch,
      meta:{
        keepAlive:false,
        title:"车辆查询"
      }
    },
    {
      path:'/home/carNotsearch',
      name:'CarNotSearch',
      component:CarNotSearch,
      meta:{
        keepAlive:false,
        title:"车辆查询"
      }
    },
    {
      path:'/home/carDetails',
      name:'CarDetails',
      component:CarDetails,
      meta:{
        keepAlive:false,
        title:"车辆详情"
      }
    },
    {
      path:'/home/professional',
      name:'Professional',
      component:OnlyLine,
      meta:{
        keepAlive:false,
        title:"专业调车"
      }
    },
    {
      path:'/home/carlist',
      name:'CarList',
      component:Search,
      meta:{
        keepAlive:false,
        title:"调车结果查询"
      }
    },
    {
      path:'/home/carlist/details',
      name:'DiaoCheXiangQing',
      component:WuLiuYuanXiangQing,
      meta:{
        keepAlive:false,
        title:"调车详情"
      }
    },
    {
      path:'/home/speciallist',
      name:'SpecialList',
      component:SpecialList,
      meta:{
        keepAlive:false,
        title:"特种运输"
      }
    },
    {
      path:'/home/speciallist/specialdetails',
      name:'SpecialDetails',
      component:SpecialDetails,
      meta:{
        keepAlive:false,
        title:"特种运输详情"
      }
    },
    {
      path:'/home/wuliuyuan',
      name:'WuLiuYuan',
      component:SpecialList,
      meta:{
        keepAlive:false,
        title:"物流园招商"
      }
    },
    {
      path:'/home/wuliuyuan/details',
      name:'WuLiuYuanXiangQing',
      component:WuLiuYuanXiangQing,
      meta:{
        keepAlive:false,
        title:"物流园详情"
      }
    },
    {
      path:'/home/BanYun',
      name:'BanYun',
      component:SpecialList,
      meta:{
        keepAlive:false,
        title:"物流搬运"
      }
    },
    {
      path:'/home/BanYun/details',
      name:'BanYunXiangQing',
      component:WuLiuYuanXiangQing,
      meta:{
        keepAlive:false,
        title:"物流搬运详情"
      }
    },
    {
      path:'/home/ZhuanRang',
      name:'ZhuanRang',
      component:ZhuanRang,
      meta:{
        keepAlive:false,
        title:"档口转让"
      }
    },
    {
      path:'/home/ZhuanRang/details',
      name:'DangKouXiangQing',
      component:WuLiuYuanXiangQing,
      meta:{
        keepAlive:false,
        title:"档口转让详情"
      }
    },
    {
      path:'/home/ZhaoPin',
      name:'ZhaoPin',
      component:ZhaoPin,
      meta:{
        keepAlive:false,
        title:"物流招聘"
      }
    },
    {
      path:'/home/ZhaoPin/details',
      name:'ZhaoPinXiangQing',
      component:WuLiuYuanXiangQing,
      meta:{
        keepAlive:false,
        title:"物流招聘详情"
      }
    },
    {
      path:'/home/JinRong',
      name:'JinRong',
      component:SpecialList,
      meta:{
        keepAlive:false,
        title:"金融服务"
      }
    },
    {
      path:'/home/JinRong/details',
      name:'JinRongXiangQing',
      component:WuLiuYuanXiangQing,
      meta:{
        keepAlive:false,
        title:"金融服务详情"
      }
    },
    {
      path:'/home/YinShua',
      name:'YinShua',
      component:WuLiuYuanXiangQing,
      meta:{
        keepAlive:false,
        title:"印刷服务"
      }
    },
    {
      path:'/home/YouKa',
      name:'YouKaList',
      component:YouKa,
      meta:{
        keepAlive:false,
        title:"油卡出售"
      }
    },
    {
      path:'/home/YouKa/details',
      name:'YouKaXiangQing',
      component:WuLiuYuanXiangQing,
      meta:{
        keepAlive:false,
        title:"油卡出售详情"
      }
    },
    {
      path:'/home/CheXiang',
      name:'CheXiang',
      component:SpecialList,
      meta:{
        keepAlive:false,
        title:"车厢定制"
      }
    },
    {
      path:'/home/CheXiang/details',
      name:'CheXiangXiangQing',
      component:WuLiuYuanXiangQing,
      meta:{
        keepAlive:false,
        title:"车厢定制详情"
      }
    },
    {
      path:'/home/ChaChe',
      name:'ChaChe',
      component:ZhuanRang,
      meta:{
        keepAlive:false,
        title:"叉车出售"
      }
    },
    {
      path:'/home/ChaChe/details',
      name:'ChaCheXiangQing',
      component:WuLiuYuanXiangQing,
      meta:{
        keepAlive:false,
        title:"叉车出售详情"
      }
    },

    //注册登录
    {
      path:'/login',
      name:'Login',
      component:Login,
      meta:{
        keepAlive:false,
        title:"登录"
      }
    },
    {
      path:'/reset',
      name:'Reset',
      component:Reset,
      meta:{
        keepAlive:false,
        title:"修改密码"
      }
    },
    {
      path:'/register',
      name:'Register',
      component:Register,
      meta:{
        keepAlive:false,
        title:"注册"
      }
    }
  ],
  mode:'history'
})
