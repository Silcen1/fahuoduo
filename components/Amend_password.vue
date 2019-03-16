<template>
  <div class="amend-password">
      <Theader></Theader>
      <div class="amend-password-all">
        <div class="amend-item">
          <div class="amend-left">手机号:</div>
          <input type="number" placeholder="请输入手机号码" v-model="phone">
        </div>

        <div class="amend-item">
          <div class="amend-left">验证码:</div>
          <input type="number" placeholder="请输入验证码" v-model="code">
          <div class="get-code">获取验证码</div>
        </div>

        <div class="amend-item">
          <div class="amend-left">密码:</div>
          <input type="text" placeholder="请设置密码" v-model="password1">
        </div>

        <div class="amend-item">
          <div class="amend-left">确认密码:</div>
          <input type="text" placeholder="再次确认密码" v-model="password2">
        </div>
      </div>
      <div class="submit-text" @click="submit()">提交</div>
  </div>
</template>

<script>
import Theader from './sub/Theader'
export default {
  data(){
    return{ 
      phone:"",
      code:"",
      password1:"",
      password2:""
    }
  },
  methods:{
    submit:function(){
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
      if(this.code.replace(/\s+/g, '').length==0){
        this.$toast({
          message: '验证码不能为空',
          position: 'middle',
          duration: 3000
        });
        return false;
      }
      if(this.password1.replace(/\s+/g, '').length==0){
        this.$toast({
          message: '密码不能为空',
          position: 'middle',
          duration: 3000
        });
        return false;
      }
      if(this.password2.replace(/\s+/g, '').length==0){
        this.$toast({
          message: '请再次输入密码',
          position: 'middle',
          duration: 3000
        });
        return false;
      }
      if(this.password1.replace(/\s+/g, '')!=this.password2.replace(/\s+/g, '')){
        this.$toast({
          message: '两次密码不一致',
          position: 'middle',
          duration: 3000
        });
        return false;
      }

    }
  },
  components:{
    Theader
  }
}

</script>
<style scoped>
.amend-password-all{
  width: 682px;
	height: 344px;
	background-color: #ffffff;
	box-shadow: 0px 0px 40px 0px 
		rgba(199, 199, 199, 0.3);
  margin: 0 auto;
  margin-top: 25px;
  padding-top: 2px;
  padding-left: 20px;
  padding-bottom: 23px;
  position: relative;
}
.amend-left{
  font-size: 26px;
}
.amend-item{
  height: 84px;
  display: flex;
  /* background: red; */
  align-items: center;
}
input{
  height: 82px;
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  margin-left: 62px;
  outline: none;
  position: absolute;
  left: 160px;
  width: 433px;
}
input::-webkit-input-placeholder{
    color:#999999;
}
input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#999999;
}
input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#999999;
}
input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
    color:#999999;
}
.get-code{
  position: absolute;
  border-radius: 10px;
  width: 146px;
  height: 52px;
  border:2px solid #008b78;
  color: #008b78;
  text-align: center;
  line-height: 52px;
  right:45px;
  top: 102px;
}
.submit-text{
  width: 653px;
  height: 78px;
  background: #06ccb1;
  margin: 0 auto;
  margin-top: 256px;
  font-size: 29px;
  text-align: center;
  line-height: 78px;
  color: white;
}
</style>