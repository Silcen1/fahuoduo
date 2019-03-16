<template>
  <div class="app-success">
    <!-- 顶部 -->
    <!-- <div class="top">
      <span>资料上传成功</span>
    </div> -->

<div class="head">
    <mt-header :title="`${this.$route.meta.title}`" class="HeadT">
        <mt-button slot="left" class="mui-icon mui-icon-back" @click="back()"></mt-button>
        
        <!-- <mt-button slot="right" class="tright" @click="share()">
          <img src="../../assets/images/share.png"/>
        </mt-button> -->
    </mt-header>
</div>
    <!-- 中间文字 -->
    <div class="middle">
      <img src="../../assets/images/bgm.png" alt>
      <span>上传成功</span>
      <p class="font1">认证成功后将会在前台完全展示</p>
      <p class="font2">拨打下方电话联系平台进行资料认证</p>
    </div>
    <!-- 联系我们 -->
    <div class="contact">
      <span>联&nbsp;系&nbsp;我&nbsp;们:</span>
    </div>
<!-- 拨打电话 -->
     <div class="mobble">
          <img src="../../assets/images/search.jpg" alt="">
          <span>13710731234</span>
           <p @click="Bo">拨打</p>
      </div> 
      <div class="phone">
          <img src="../../assets/images/search.jpg" alt="">
          <span>13710731234</span>
           <p @click="Bo2">拨打</p>
      </div> 
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    back(){
            this.$router.go(-1)
      },
      Bo(){
        this.$router.push('/line')
      },
      Bo2(){
        this.$router.push('/line')
      }
    }
};
</script>

<style scoped>
/* 顶部信息 */
/* .top {
  width: 750px;
  height: 128px;
  background-color: #ffffff;
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
  color: #000000;
  padding-left: 300px;
} */
.head .HeadT{
  font-size: 36px;
  color:#000000;
}
.head .Config{
  margin-right:45px;
}
.head .mint-header{
  background-color:#ffffff;
  height:100px;
}
/* 中间文字 */
.middle {
  position: relative;
}
.middle span {
  position: absolute;
  top: 380px;
  left: 280px;
  font-size: 42px;
}
.font1,
.font2 {
  position: absolute;
  font-size: 30px;
  color: #000000;
}
.font1 {
  top: 460px;
  left: 180px;
}
.font2 {
  top: 530px;
  left: 152px;
}
.middle img {
  height: 100%;
  width: 100%;
}
/* 联系我们 */
.contact {
  position: relative;
}
.contact span {
  position: absolute;
  top: -530px;
  left: 120px;
  font-size: 35px;
  font-weight: 600;
}
/* 拨打手机 */
.mobble{
    position: relative;
    top:-400px;
}
.mobble span{
    font-size:30px;
    position: absolute;
    top:20px;
    left:240px;
}
.mobble p{
    position: absolute;
    top:10px;
    left:520px;
    width:100px;
    height:55px;
    line-height: 55px;
    text-align: center;
    color: #f26c60;
     border-radius: 10px;
    border:1px solid #f26c60; 
}
.mobble img{
    width:60px;
    height:60px;
    position: absolute;
    left:120px;
}
/* 拨打电话 */
.phone{
    position: relative;
    top:-300px;
}
.phone span{
    font-size:30px;
    position: absolute;
    top:20px;
    left:240px;
}
.phone p{
    position: absolute;
    top:10px;
    left:520px;
    width:100px;
    height:55px;
    line-height: 55px;
    text-align: center;
    color: #f26c60;
    border-radius: 10px;
    border:1px solid #f26c60; 
}
.phone img{
    width:60px;
    height:60px;
    position: absolute;
    left:120px;
}
</style>