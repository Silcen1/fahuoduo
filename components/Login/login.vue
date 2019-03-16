<template>
    <div class="login">
      <div class="login-item">
          <span @click="close" v-if="`${this.$store.state.isLogin}=='未登录'`">关闭</span>
         <img src="../../assets/images/login/icon.png" class="icon"/>
         <div class="login-item-inp">
            <div class="inp">
                <img src="../../assets/images/login/icon-phone.png" class="phone"/>
                <input type="number" placeholder="输入手机号" v-model="phone">
            </div>
            <div class="inp">
                <img src="../../assets/images/login/icon-code.png" class="code"/>
                <input type="password" placeholder="输入密码" v-model="password">
            </div>
         </div>
         <div class="submit" @click="submit">登录</div>
         <div class="tip">
             <span @click="reset">忘记密码</span>
             <span>|</span>
             <span @click="reg">注册账号</span>
         </div>
      </div>  
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
    export default{
        data(){
            return {
                phone:"",
                password:""
            }
        },
        methods:{
            close(){
                    this.$router.go(-1);
            },
            submit(){
                console.log('手机号：'+this.phone+'and密码：'+this.password);
                Toast('登录成功！')
                this.$store.commit('Login',"已登录")
                this.$router.go(-1)
            },
            reset(){
                this.$router.push('/reset')
            },
            reg(){
                this.$router.push('/register')
            }
        }
    }
</script>
<style scoped>
.login{
	width:100%;
	height: 1334px;
    background-image:url('../../assets/images/login/background.png');
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:161px 73px 286px 73px;

}
.login-item{
    width:604px;
    height:887px;
    position: relative;
}
.icon{
    position: absolute;
    width:150px;
    height:150px;
    margin: auto;
    top:109px;
    left:0;
    right:0;
}
.login-item>span{
    position: absolute;
    top:0;
    right: 0;
    padding-right:18px;
	font-family: PingFang-SC-Medium;
	font-size: 24px;
    line-height: 32px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #666464;
}
.login-item-inp{
    width:604px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin: auto;
    top:336px;
    left:0;
    right:0;
}
.login-item-inp .inp{
    width:100%;
    height:130px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom:1px solid lightgray;
}
.phone{
	width: 27px;
	height: 43px;
    margin-right: 18px;
}
.code{
	width: 31px;
	height: 35px;
    margin-right: 18px;
}
.inp input{
    width:535px;
    height:95px;
    margin: 0;
    background: rgba(0, 0, 0,0);
	font-family: PingFang-SC-Medium;
	font-size: 32px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 36px;
	letter-spacing: 0px;
	color: #999999;
    outline: none;
    border: none;
}
.submit{
    position: absolute;
    margin: auto;
    left:0;
    right:0;
    bottom:90px;
	width: 452px;
	height: 90px;
	background-image: linear-gradient(90deg, 
		#61f3df 0%, 
		#25efd3 60%, 
		#18e4c8 100%);
	box-shadow: 0px 12px 13px 0px 
		rgba(6, 204, 177, 0.2);
	border-radius: 45px;
    text-align: center;
    line-height: 90px;
	font-family: PingFang-SC-Medium;
	font-size: 34px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #ffffff;
}
.tip{
    width:321px;
    position: absolute;
    margin: auto;
    left:0;
    right:0;
    bottom:25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.tip span{
	font-family: PingFang-SC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #000000;
}
</style>