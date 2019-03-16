<template>
  <div class="app-business">
    <!-- 顶部 -->
    <!-- <div class="top">
      <span>物流园招商资料</span>
    </div> -->
    <Theader></Theader>
  <form action="">
    <div class="all">
      <!-- 左边横条  -->
      <div class="car">
        <div class="left"></div>
        <span>招商信息</span>
      </div>

      <!-- 招商信息 -->
      <div class="business">
        <div class="mui-input-row">
          <label>联&nbsp;&nbsp;&nbsp;系&nbsp;&nbsp;&nbsp;人:</label>
          <input type="text" class="mui-input-clear" placeholder="请输入负责人姓名" v-model="concat">
        </div>
        <div class="mui-input-row">
          <label>招&nbsp;商&nbsp;电&nbsp;话:</label>
          <input type="text" class="mui-input-clear" placeholder="请输入固话号码" v-model="tel">
        </div>
        <div class="mui-input-row">
          <label>招&nbsp;商&nbsp;手&nbsp;机:</label>
          <input type="text" class="mui-input-clear" placeholder="请输入手机号码" v-model="phone">
        </div>
        <div class="mui-input-row">
          <label>档&nbsp;口&nbsp;地&nbsp;址:</label>
          <input type="text" class="mui-input-clear" placeholder="请输入档口地址" v-model="addr">
        </div>
      </div>
    </div>
    <!-- 备注 -->
    <div class="remarks">
      <label>备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注:</label>
      <textarea rows="5" cols="10" placeholder="请输入需要备注的简述"></textarea>
    </div>
    <!-- 上传图片 -->
    <!-- <div class="upload">
      <div class="picture">
        <div class="bar"></div>
        <span>上传图片</span>
      </div>
    </div> -->
    <Upload></Upload>
    <!-- 确定按钮 -->
    <div class="sure">
       <button @click="go2">确定</button>
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
      concat:"",
      tel:"",
      phone:"",
      addr:""
    };
  },
  components:{
   Theader,Upload
  },
  methods:{
    go2(){
      if(this.tel.replace(/\s+/g, '').length==0){
        this.$toast({
          message: '固话不能为空',
          position: 'middle',
          duration: 3000
        });
        return false;
      }
      if(this.concat.replace(/\s+/g,"").length==''){
        this.$toast({
          message:"联系人不能为空",
          position:3000
        });
        return false;
      }
      var tel_test=/\d{3}-\d{8}/;
      if(tel_test.test(this.tel)==false){
        this.$toast({
          message: '固话格式不正确',
          position: 'middle',
          duration: 3000
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
       if(this.addr.replace(/\s+/g,"").length==''){
        this.$toast({
          message:"档口地址不能为空",
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
.all{
  height:430px;
  width:702px;
  background-color: #ffffff;
  margin-left:23px;
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
/* 物流信息 */
.business {
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
.business .mui-input-row label {
  font-size: 30px;
}
/* 去掉右边默认的眼睛  */
mui-icon mui-icon-eye {
  content: "";
}
/* 备注 */
.remarks {
  position: relative;
  margin-top:20px;   /*修改*/
  margin-bottom:230px;
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
/* 清除浮动 */
/* .remarks:after
{
    display:block;
    clear:both;content:"";
    visibility:hidden;
    height:0
    } */
/* 上传图片 */
.upload {
  height: 374px;
  width: 702px;
  background-color: #ffffff;
  margin:230px 0 0 24px;
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