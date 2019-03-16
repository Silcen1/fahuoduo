<template>
  <div class="app-car">
    <!-- 顶部 -->
    <!-- <div class="top">
      <span>车辆查询资料</span>
    </div> -->

    <Theader></Theader>
   <form action="">
    <div class="all">
      <!-- 左边横条  -->
      <div class="car">
        <div class="left"></div>
        <span>司机信息</span>
      </div>

      <!-- 司机信息 -->
      <div class="driver">
        <div class="mui-input-row">
          <label>司&nbsp;&nbsp;&nbsp;&nbsp;机:</label>
          <input type="text" class="mui-input-clear" placeholder="请输入司机名称" v-model="dirver">
        </div>
        <div class="mui-input-row">
          <label>手&nbsp;&nbsp;&nbsp;&nbsp;机:</label>
          <input type="text" class="mui-input-clear" placeholder="请输入手机号码" v-model="phone">
        </div>
      </div>
    </div>
    <div class="all2">
      <!-- 左边横条  -->
      <div class="car">
        <div class="left"></div>
        <span>车辆信息</span>
      </div>

      <!-- 车辆信息 -->
      <div class="driver">
        <div class="mui-input-row">
          <label>车&nbsp;&nbsp;牌&nbsp;&nbsp;号:</label>
          <input type="text" class="mui-input-clear" placeholder="请输入车牌号码" v-model="number">
        </div>
        <div class="mui-input-row">
          <label>车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:</label>
          <input type="text" class="mui-input-clear" placeholder="请选择车型号" v-model="type">
        </div>
        <div class="mui-input-row">
          <label>车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长:</label>
          <input type="text" class="mui-input-clear" placeholder="请选择车长" v-model="long">
        </div>
        <div class="mui-input-row">
          <label>载&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重:</label>
          <input type="text" class="mui-input-clear" placeholder="请输入车总载重量" v-model="heary">
        </div>
      </div>
    </div>
    <div class="all3">
      <!-- 左边横条  -->
      <div class="car">
        <div class="left"></div>
        <span>地址信息</span>
      </div>

      <!-- 地址信息 -->
      <div class="dress">
        <div class="mui-input-row">
          <label>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址:</label>
          <input type="text" class="mui-input-clear" placeholder="请输入车辆地址" v-model="addr">
        </div>
        <div class="mui-input-row">
          <label>可跑范围:</label>
          <input type="text" class="mui-input-clear" placeholder="请输入可跑范围" v-model="range">
        </div>
      </div>
    </div>
      <!-- 上传图片 -->
        <Upload></Upload>
       <!-- 确定按钮 -->
    <div class="sure">
       <button @click="go3">确定</button>
    </div>
    </form>
  </div>
</template>

<script>
import Theader from '@/components/sub/Theader.vue'
import Upload from '@/components/top/Upload.vue'

export default {
  data() {
    return {
         dirver:"",
         phone:"",
         number:"",
         type:"",
         long:"",
         heary:"",
         addr:"",
         range:""
    };
  },
   components:{
   Theader,Upload
  },
  methods:{
     go3(){
       if(this.addr.replace(/\s+/g,"").length==''){
        this.$toast({
          message:"司机名称不能为空",
          position:3000
        });
        return false;
      }
       if(this.phone.replace(/\s+/g, '').length==0){
        this.$toast({
          message: '手机不能为空',
          position: 'middle',
          duration: 3000
        });
        return false;
      }
      var phone_test=/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
      if(phone_test.test(this.phone)==false){
        this.$toast({
          message: '手机格式不正确',
          position: 'middle',
          duration: 3000
        });
        return false;
      }
      if(this.number.replace(/\s+/g,"").length==''){
        this.$toast({
          message:"车牌号不能为空",
          position:3000
        });
        return false;
      }
      if(this.type.replace(/\s+/g,"").length==''){
        this.$toast({
          message:"车型不能为空",
          position:3000
        });
        return false;
      }
      if(this.long.replace(/\s+/g,"").length==''){
        this.$toast({
          message:"车长不能为空",
          position:3000
        });
        return false;
      }
      if(this.heary.replace(/\s+/g,"").length==''){
        this.$toast({
          message:"载重量称不能为空",
          position:3000
        });
        return false;
      }
      if(this.addr.replace(/\s+/g,"").length==''){
        this.$toast({
          message:"地址不能为空",
          position:3000
        });
        return false;
      }
      if(this.range.replace(/\s+/g,"").length==''){
        this.$toast({
          message:"可跑范围不能为空",
          position:3000
        });
        return false;
      }
      this.$router.push('/success')
     }
  }
};
</script>

<style scoped>
/* 顶部 */
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
  padding-left: 286px;
}
.all {
  height: 246px;
  width: 702px;
  background-color: #ffffff;
  margin-left: 23px;
}
.all2 {
  height: 420px;
  width: 702px;
  background-color: #ffffff;
  margin-left: 23px;
}
.all3{
  height: 246px;
  width: 702px;
  background-color: #ffffff;
  margin-left: 23px;
}
/* 左边横条 */
.left {
  width: 4px;
  height: 40px;
  background-color: #06ccb1;
  margin-left: 20px;
  margin-top: 30px;
}
.car {
  position: relative;
  margin-top:20px;          /*修改*/
  padding-top:3px;          /*修改*/
}
.car span {
  width: 170px;
  height: 40px;
  font-family: PingFang-SC-Bold;
  font-size: 42px;
  font-weight: 500;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #000000;
  position: absolute;
  top: 8px;
  left: 50px;
  padding-top:30px;       /*修改*/
}
/* 司机信息 */
.driver,
.dress {
  /* margin-top:30px;
    margin-left:30px; */
  margin: 30px 0 0 30px;
}
.mui-input-row {
  padding-bottom: 30px;
}
.mui-input-row input {
  margin-top: 7px;
}
.driver .mui-input-row label,
.dress .mui-input-row label {
  font-size: 30px;
}
/* 去掉右边默认的眼睛  */
mui-icon mui-icon-eye {
  content: "";
}
/* 上传图片 */
.upload {
  height: 374px;
  width: 702px;
  background-color: #ffffff;
  margin:26px 0 0 24px;
}
.picture{
  position: relative;
}
.picture span{
  width: 210px;
	height: 40px;
  font-size: 42px;
  font-family: PingFang-SC-Bold;
  line-height: 40px;
  color: #000000;
  padding-left:30px;
  position: absolute;
  top:30px;
}
.bar{
  width: 4px;
  height: 40px;
  background-color: #06ccb1;
  position: absolute;
  top:30px;
}
/* 向下箭头 */
.u-arrow {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-top: 1px solid #999;
        border-right: 1px solid #999;
        /* margin-right:50px; */
        position: absolute;
        top:8px;
        left:560px;
    }
.u-arrow-right {
        transform: rotate(135deg);
    }
    .sure{
    width: 654px;
	height: 88px;
	background-color: #06ccb1;
	border-radius: 8px;
    margin:40px 0 50px 50px;
}
.sure button{
	font-family: PingFang-SC-Medium;
	font-size: 36px;
	line-height: 26px;
    background-color: #06ccb1;
    color:#ffffff;
    padding-left:300px;
    padding-top:27px;
}
</style>