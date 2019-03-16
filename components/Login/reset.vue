<template>
    <div calss="reset">
        <Header></Header>
        <div class="reset-inp">
            <div class="reset-inp-item">
                <div class="inp-title">手机号</div>:
                <div class="inp">
                    <input type="number" placeholder="请输入手机号码" v-model="phone">
                </div>
            </div>
            <div class="reset-inp-item">
                <div class="inp-title">验证码</div>:
                <div class="yan">
                    <input type="text" placeholder="请输入验证码" v-model="code">
                    <div class="code" @click="getCode">获取验证码</div>
                </div>
            </div>
            <div class="reset-inp-item">
                <div class="inp-title">密码</div>:
                <div class="inp">
                    <input type="password" placeholder="请设置密码" v-model="password">
                </div>
            </div>
            <div class="reset-inp-item">
                <div class="inp-title">确认密码</div>:
                <div class="inp">
                    <input type="password" placeholder="再次确认密码" v-model="password2">
                </div>
            </div>
        </div>
        <mt-button class="submit" @click="submit">提交</mt-button>
    </div>
</template>
<script>
import Header from '../sub/Theader'
    export default{
        data(){
            return {
                phone:"",
                code:"",
                password:"",
                password2:""
            }
        },
        components:{
            Header
        },
        methods:{
            getCode(){
                /* 点击获取验证码 */
            },
            submit(){
                alert('手机：'+this.phone+"|"+'验证码：'+this.code+"|"+'密码：'+this.password+"|"+'确认密码：'+this.password2)
            }
        }
    }
</script>
<style scoped>
.reset-inp{
    position: absolute;
    margin: auto;
    left:0;
    right:0;
    margin-top:104px;
    width: 702px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom:24px;
    background:#ffffff;
	box-shadow: 0px 0px 35px 0px 
		rgba(209, 209, 209, 0.35);
	border-radius: 8px;
}
.reset-inp-item{
    width:100%;
    height:90px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.yan{
    width: 463px;
    margin-left:20px;
    border-bottom:1px solid lightgray;
    display:flex;
    justify-content: space-between;
}
.yan input{
    height:100%;
    margin:none;
    border:none;
    background:rgba(0,0,0,0);
	font-family: PingFang-SC-Medium;
	font-size: 24px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 90px;
    padding-bottom:0;
	letter-spacing: 0px;
	color: #999999;
}
.code{
	width: 148px;
	height: 54px;
    padding:15px 15px;
	border-radius: 8px;
	border:2px solid #008a77;
    margin-bottom:13px;
	font-family: PingFang-SC-Medium;
	font-size: 24px;
	font-weight: normal;
	font-stretch: normal;
    white-space: nowrap;
	letter-spacing: 0px;
	color: #008a77;
}
.inp{
    width:463px;
    margin-left:20px;
    border-bottom:1px solid lightgray;
}
.inp input{
    height:100%;
    margin:none;
    border:none;
    background:rgba(0,0,0,0);
	font-family: PingFang-SC-Medium;
	font-size: 24px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 90px;
    padding-bottom:0;
	letter-spacing: 0px;
	color: #999999;
}
.inp-title{
    width:129px;
     text-align-last:justify;
	font-family: PingFang-SC-Medium;
	font-size: 30px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 2px;
    white-space: nowrap;
	color: #000000;
}
.submit{
    position: absolute;
    margin: auto;
    left:0;
    right: 0;
	width: 654px;
	height: 80px;
	background-color: #06ccb1;
	border-radius: 8px;
	font-family: PingFang-SC-Medium;
	font-size: 32px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 80px;
	letter-spacing: 0px;
	color: #ffffff;
    text-align: center;
    bottom:500px;
}
</style>