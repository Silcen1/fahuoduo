<template>
  <div class="app-major">
    <!-- 顶部 -->
    <!-- <div class="top">
      <span>专业调车资料</span>
    </div> -->

    <Theader></Theader>
<form action="">
    <div class="mj">
      <!-- 左边横条  -->
      <div class="car">
        <div class="left"></div>
        <span>调车信息</span>
      </div>
      <!-- 公司信息 -->
      <div class="major">
        <div class="mui-input-row">
          <label>公&nbsp;司&nbsp;名&nbsp;称:</label>
          <input type="text" class="mui-input-clear" placeholder="请输入公司名称" v-model="comm">
        </div>
        <div class="mui-input-row">
          <label>联&nbsp;&nbsp;&nbsp;系&nbsp;&nbsp;&nbsp;人:</label>
          <input type="text" class="mui-input-clear" placeholder="请输入联系人姓名" v-model="concat">
        </div>
        <div class="mui-input-row">
          <label>手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机:</label>
          <input type="text" class="mui-input-clear" placeholder="请输入手机号码" v-model="phone">
        </div>
        <div class="mui-input-row">
          <label>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话:</label>
          <input type="text" class="mui-input-clear" placeholder="请输入公司电话" v-model="tel">
        </div>
        <div class="mui-input-row">
          <label>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址:</label>
          <input type="text" class="mui-input-clear" placeholder="请输入公司地址" v-model="addr">
        </div>
      </div>
    </div>
    <!-- 调车资料 -->
    <div class="shunt">
      <!-- 左边横条  -->
      <div class="car">
        <div class="left"></div>
        <span>调车资料</span>
      </div>
      <div class="shunting">
        <div class="mui-input-row">
          <label>车&nbsp;&nbsp;&nbsp;牌&nbsp;&nbsp;&nbsp;号:</label>
          <input type="text" class="mui-input-clear" placeholder="请输入车牌号码" v-model="number">
        </div>
        <div class="mui-input-row">
          <label>出&nbsp;发&nbsp;城&nbsp;市:</label>
          <input type="text" class="mui-input-clear" placeholder="请选择出发城市" v-model="city">
          <i class="u-arrow u-arrow-right" @click=jump1 :v-model="goCity"></i>
        </div>
        <div class="mui-input-row">
          <label>调&nbsp;车&nbsp;范&nbsp;围:</label>
          <input type="text" class="mui-input-clear" placeholder="请输入调车范围" v-model="range">
        </div>
        <div class="mui-input-row">
          <label>自&nbsp;备&nbsp;车&nbsp;型:</label>
          <input type="text" class="mui-input-clear" placeholder="请输入车型" v-model="type">
        </div>
      </div>
    </div>
    <!-- 上传图片 -->
  
    <Upload></Upload>
    <!-- 确定按钮 -->
    <div class="sure">
       <button @click="go8">确定</button>
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
      comm:"",
      concat:"",
      phone:"",
      tel:"",
      addr:"",
      number:"",
      city:"",
      range:"",
      type:"",
      goCity:""
      // dvjasvg:""
    }
  },
  components:{
       Theader,Upload
  },
  mounted(){
     this.changeCity()
  },
  methods:{
    go8(){
       if(this.comm .replace(/\s+/g,"").length==''){
        this.$toast({
          message:"公司名称不能为空",
          position:3000
        });
        return false;
      }
      if(this.concat.replace(/\s+/g,"").length==''){
        this.$toast({
          message:"联系人姓名不能为空",
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
      if(this.tel.replace(/\s+/g, '').length==0){
        this.$toast({
          message: '固话不能为空',
          position: 'middle',
          duration: 3000
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
      if(this.number .replace(/\s+/g,"").length==''){
        this.$toast({
          message:"车牌号不能为空",
          position:3000
        });
        return false;
      }
      if(this.city .replace(/\s+/g,"").length==''){
        this.$toast({
          message:"出发城市不能为空",
          position:3000
        });
        return false;
      }
      if(this.range .replace(/\s+/g,"").length==''){
        this.$toast({
          message:"调车范围不能为空",
          position:3000
        });
        return false;
      }
      if(this.type .replace(/\s+/g,"").length==''){
        this.$toast({
          message:"车型不能为空",
          position:3000
        });
        return false;
      }
      this.$router.push('/success')
    },
    jump1(){
      this.$router.push('/endcity')
    },
      changeCity(){
       this.city=this.$store.state.goCity
     }
  }
};
</script>

<style scoped>
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
  padding-left: 290px;
}
/* 左边横条 */
.left {
  width: 5px;
  height: 40px;
  background-color: #06ccb1;
  /* margin:30px 0 0 20px; */
  position: relative;
  top: 12px;
}
.car {
  position: relative;
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
  padding-top: 10px;
  position: absolute;
  top: 8px;
  left: 50px;
}
.mj {
  height: 500px;
  width: 702px;
  background-color: #ffffff;
  margin-top: 20px;
  margin-left: 23px;
}
.shunt {
  height: 400px;
  width: 702px;
  background-color: #ffffff;
  margin-top: 20px;
  margin-left: 23px;
}
/* 调车信息 */
.major,
.shunting
 {
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
.major .mui-input-row label,
.shunting .mui-input-row label {
  font-size: 30px;
}
/* 去掉右边默认的眼睛  */
mui-icon mui-icon-eye {
  content: "";
}
/* 备注 */
.remarks {
  position: relative;
}
.remarks label {
  width: 129px;
  height: 28px;
  font-family: PingFang-SC-Medium;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #000000;
  position: absolute;
  left: 40px;
}
.remarks textarea {
  width: 463px;
  height: 164px;
  border-radius: 8px;
  border: solid 1px #e3e3e3;
  position: absolute;
  top: 4px;
  left: 220px;
}
/* 上传图片 */
.upload {
  height: 374px;
  width: 702px;
  background-color: #ffffff;
  margin:20px 0 0 24px;
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