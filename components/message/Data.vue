<template>
  <div class="app-data">
    <!-- 顶部 -->
    <!-- <div class="top">
      <span>发货多</span>
    </div> -->

<Header></Header>

    <div class="means">
      <div class="all" v-for="item in list" :key="item.id" @click="jump(item.id)">
          <img :src="item.url">
          <span class="data">{{item.data}}</span>
           <i class="u-arrow u-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/sub/Header.vue'
export default {
  data() {
    return {
        list:[
            {id:1,url:require('../../assets/images/search.jpg'),data:"专线查询资料"},
            {id:2,url:require('../../assets/images/search.jpg'),data:"车辆查询资料"},
            {id:3,url:require('../../assets/images/search.jpg'),data:"物流园招商资料"},
            {id:4,url:require('../../assets/images/search.jpg'),data:"专业调车资料"},
            {id:5,url:require('../../assets/images/search.jpg'),data:"特种运输资料"},
            {id:6,url:require('../../assets/images/search.jpg'),data:"油卡出售资料"},
            {id:7,url:require('../../assets/images/search.jpg'),data:"叉车出售资料"},
            {id:8,url:require('../../assets/images/search.jpg'),data:"档口转让资料"},
            {id:9,url:require('../../assets/images/search.jpg'),data:"车厢定制资料"},
            {id:10,url:require('../../assets/images/search.jpg'),data:"物流搬运资料"},
            {id:11,url:require('../../assets/images/search.jpg'),data:"物流招聘资料"},
            {id:12,url:require('../../assets/images/search.jpg'),data:"金融服务资料"}
        ]
    }
  },
  methods:{
    jump(item){
      if(item==1){
        this.$router.push('/line')
      }else if(item==2){
        this.$router.push('/car')
      }else if(item==3){
        this.$router.push('/business')
      }else if(item==4){
        this.$router.push('/major')
      }else if(item==5){
        this.$router.push('/transport')
      }else if(item==6){
        this.$router.push('/card')
      }else if(item==7){
        this.$router.push('/scraper')
      }else if(item==8){
        this.$router.push('/stalls')
      }else if(item==9){
        this.$router.push('/carriage')
      }else if(item==10){
        this.$router.push('/logistics')
      }else if(item==11){
        this.$router.push('/recruit')
      }else if(item==12){
        this.$router.push('/banking')
      }
    }
  },
  components:{
    Header
  }
};
</script>

<style scoped>
.app-data{
    background-color: #ffffff;
}
.all{
    position: relative;
}
.all span{
    font-size:30px;
    position: absolute;
    top:20px;
    left:130px;
}
.all i{
    position: absolute;
    top:20px;
    left:660px;
}
/* 顶部信息 */
.top {
  width: 750px;
  height: 128px;
  background-color: #06ccb1;
  line-height: 128px;
  box-shadow: 0px 0px 16px 0px rgba(202, 202, 202, 0.17);
}
.top span {
  width: 213px;
  height: 34px;
  font-family: PingFang-SC-Medium;
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 36px;
  color: #ffffff;
  padding-left: 320px;
}
.means img{
  width:60px;
  height:60px;
  margin-left:40px;
}
.means .all{
    margin-top:40px;
}
/* 向右箭头 */
.u-arrow {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-top: 1px solid #999;
        border-right: 1px solid #999;
        margin-right:50px;
    }
.u-arrow-right {
        transform: rotate(45deg);  
    }
</style>