<template>
  <div class="home">
    <Header></Header>
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in swiper" :key="item.id">
        <img :src="item.url" @click="details()"/>
      </mt-swipe-item>
    </mt-swipe>
    <div class="address">
          <span class="mui-icon mui-icon-location-filled"></span>
          <a>
            <div class="addr">广东省广州市白云区维也纳酒店</div>
          </a>
    </div>
    <div class="nav">
       <img src="../assets/images/home/zxSearch.png" class="zx" @click="search()"/>
       <div class="nav-li">
         <img v-for="item in nav1" :key="item.id" :src="item.url" @click="navone(item.id)"/>
       </div>
       <div class="nav-na">
         <img v-for="item in nav2" :key="item.id" :src="item.url" @click="navtwo(item.id)"/>
       </div>
       <div class="nav-na">
         <img v-for="item in nav3" :key="item.id" :src="item.url" @click="navthree(item.id)"/>
       </div>
    </div>
  </div>
</template>

<script>
import Header from './sub/Header'
export default {
  data () {
    return {
      swiper:[
        {id:1,url:require('../assets/images/home/BANNER.jpg')},
        {id:2,url:require('../assets/images/home/BANNER.jpg')},
        {id:3,url:require('../assets/images/home/BANNER.jpg')},
        {id:4,url:require('../assets/images/home/BANNER.jpg')}
      ],
      nav1:[
        {id:1,url:require('../assets/images/home/clSearch.png'),name:"车辆查询"},
        {id:2,url:require('../assets/images/home/zyCar.png'),name:"专业调车"},
        {id:3,url:require('../assets/images/home/onLoad.png'),name:"特种运输"},
        {id:4,url:require('../assets/images/home/gkAddr.png'),name:"物流园招商"}
      ],
      nav2:[
        {id:1,url:require('../assets/images/home/wuliu.png'),name:"物流搬运"},
        {id:2,url:require('../assets/images/home/dangkou.png'),name:"档口转让"},
        {id:3,url:require('../assets/images/home/zhaopin.png'),name:"物流招聘"},
        {id:4,url:require('../assets/images/home/yinshua.png'),name:"印刷服务"}
      ],
      nav3:[
        {id:1,url:require('../assets/images/home/jinrong.png'),name:"金融服务"},
        {id:2,url:require('../assets/images/home/youka.png'),name:"油卡出售"},
        {id:3,url:require('../assets/images/home/chexiang.png'),name:"车厢定制"},
        {id:4,url:require('../assets/images/home/chache.png'),name:"叉车出售"}
      ]
    }
  },
  methods: {
    details(){
      this.$router.push('/home/details')
    },
    search(){
      this.$router.push('/home/onlyline')
    },
    navone(item){
      if(item==1){
        if(sessionStorage.id==1){
            sessionStorage.setItem("name", 1);
            sessionStorage.name=1
            this.$router.push('/home/carsearch')
            sessionStorage.id=0;
        }else{
            this.$router.push('/home/carNotsearch')
            sessionStorage.id=1;
        }
      }else if(item==2){
            this.$router.push('/home/professional')
      }else if(item==3){
            this.$router.push('/home/speciallist')
      }else if(item==4){
            this.$router.push('/home/wuliuyuan')
      }
    },
    navtwo(item){
      if(item==1){
        this.$router.push('/home/BanYun')
      }else if(item==2){
        this.$router.push('/home/ZhuanRang')
      }else if(item==3){
        this.$router.push('/home/ZhaoPin')
      }else if(item==4){
        this.$router.push('/home/YinShua')
      }
    },
    navthree(item){
      if(item==1){
        this.$router.push('/home/JinRong')
      }else if(item==2){
        this.$router.push('/home/YouKa')
      }else if(item==3){
        this.$router.push('/home/CheXiang')
      }else if(item==4){
        this.$router.push('/home/ChaChe')
      }
    }
  },
  components:{
    Header
  },
  created(){
  },
  mounted(){
  }
}
</script>

<style scoped>
.home{
  height:1340px;
  background:#ffffff;
}
.home .mint-swipe{
  width:100%;
  height:302px;
}
.home .mint-swipe img{
  width:100%;
  height:100%;
}
.home .mint-swipe-items{
  width:100%;
  height:200px;
}
.home .address{
  margin-top:23px;
  display: flex;
  justify-content: center;
}
.home .address>span{
  color:#06ccb1;
}
.home .addr{
  width:420px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  line-height: 30px;
	font-size: 26px;
  color:#000000;
}
.home .nav{
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
}
.home .nav .zx{
  width:702px;
  height:200px;
}
.home .nav .nav-li{
  width:100%;
  display:flex;
  flex-wrap: wrap;
  padding:0px 20px;
  margin-bottom: 10px;
  justify-content: space-around;
}
.home .nav .nav-li img{
  width:355px;
  height:140px;
}
.home .nav-na{
  width:100%;
  display:flex;
  padding:0px 20px;
  justify-content: space-around;
  margin-bottom: 23px;
}
.home .nav-na img{
  width:105px;
  height:125px;
}
</style>
