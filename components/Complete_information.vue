<template>
  <div class="complete_information">
    <Theader></Theader>
    <My_top v-bind:if_register="if_register" v-bind:if_information="if_information"></My_top>
    <!-- 基本信息 -->
    <div class="essential-information-title">基本信息{{this.$route.meta.title}}</div>
    <ul class="essential-information-content">
        <li>
            <div class="essential-information-left">姓&nbsp;&nbsp;&nbsp;&nbsp;名：</div>
            <input type="text" placeholder="请输入你的名字" class="input-name" v-model="name">
        </li>
        <li>
            <div class="essential-information-left">手&nbsp;&nbsp;&nbsp;&nbsp;机：</div>
            <input type="number" placeholder="请输入你的手机" class="input-name" v-model="phone">
        </li>

        <li>
            <div class="essential-information-left">名&nbsp;&nbsp;&nbsp;&nbsp;称：</div>
            <input type="text" placeholder="请输入公司名称" class="input-name" v-model="nickname">
        </li>
        <li>
            <div class="essential-information-left">地&nbsp;&nbsp;&nbsp;&nbsp;址：</div>
            <input type="text" placeholder="请输入详细地址" class="input-name" v-model="address">
        </li>
        <li>
            <div class="essential-information-left">身份证：</div>
            <input type="text" placeholder="请输入有效证件号" class="input-name" v-model="identity_card">
        </li>
    </ul>
    <!-- 上传身份证 -->
    <div class="upload-identity-title">上传身份证照片</div>
    <div class="upload-identity-all">
        <div class="upload-left-image">
          <img src="../assets/frontage.jpg" alt="" class="in-upload-left-image">
        </div>
        <div class="upload-add-image">
          <img src="../assets/add.png" alt="" class="in-upload-add-image">
        </div>
        <div class="upload-rights-image">
          <img src="../assets/reverse.jpg" alt="" class="in-upload-rights-image">
        </div>
    </div>
    <!-- 提交 -->
    <div class="submit-all" @click="submit()">提交</div>
  </div>
</template>

<script>
import Theader from "./sub/Theader";
import My_top from "./sub/My_top";
import Tabbar from "./sub/Tabbar";

export default {
  data() {
    return {
      if_register: 0, //0代表未注册个人资料  1代表已注册个人资料
      if_information: 1,//0代表我的首页  1代表我的个人信息
      name:"",
      phone:"",     
      nickname:"",
      address:"",
      identity_card:""   
    };
  },
  methods: {
    submit:function(){
      if(this.name.replace(/\s+/g, '').length==0){
        this.$toast({
          message: '姓名不能为空',
          position: 'middle',
          duration: 3000
        });
        return false;
      };
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
      if(this.nickname.replace(/\s+/g, '').length==0){
        this.$toast({
          message: '请输入公司名字',
          position: 'middle',
          duration: 3000
        });    
        return false;   
      }
      if(this.address.replace(/\s+/g, '').length==0){
        this.$toast({
          message: '请输入详细地址',
          position: 'middle',
          duration: 3000
        });    
        return false;   
      }
      if(this.identity_card.replace(/\s+/g, '').length==0){
        this.$toast({
          message: '请输入身份证号码',
          position: 'middle',
          duration: 3000
        });    
        return false;   
      }
      var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if(reg.test(this.identity_card)==false){
        this.$toast({
          message: '身份证格式不正确',
          position: 'middle',
          duration: 3000
        });    
        return false;  
      }
    }
  },
  components: {
    Theader,
    My_top,
    Tabbar
  }
};
</script>
<style scoped>
/* 基本信息 */
.essential-information-title {
  font-size: 36px;
  margin-top: 28px;
  margin-left: 48px;
}
.essential-information-content {
  width: 654px;
  height: 400px;
  background-color: #ffffff;
  box-shadow: 0px 0px 35px 0px rgba(209, 209, 209, 0.35);
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 33px;
  padding-left: 24px;
  padding-right: 24px;
}
.essential-information-left {
  font-size: 32px;
}

.input-name::-webkit-input-placeholder {
  color: red;
  color: #999999;
}
.input-name::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: red;
  color: #999999;
}
.input-name:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: red;
  color: #999999;
}
.input-name:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: red;
  color: #999999;
}
.input-name {
  margin-left: 80px;
  width: 400px;
  border: none;
  outline: none;
  /* color: #999999; */
}
.essential-information-content li {
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
}

/* 上传身份证 */
.upload-identity-title{
    font-size: 36px;
    margin-left: 48px;
    margin-top: 48px;
}
.in-upload-add-image{
  width: 38px;
  margin-left: 17px;
  margin-right: 17px;
}
.in-upload-left-image{
	width: 289px;
	height: 178px;
}
.in-upload-rights-image{
	width: 289px;
  height: 178px;
}
.upload-identity-all{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 40px;
}
.submit-all{
  width: 654px;
	height: 80px;
	background-color: #06ccb1;
	border-radius: 8px;
  margin: 0 auto;
  margin-top: 30px;
  color: #ffffff;
	font-size: 36px;
  text-align: center;
  line-height: 80px;
}
.complete_information{
  overflow: scroll;
  padding-bottom: 46px;
}
</style>