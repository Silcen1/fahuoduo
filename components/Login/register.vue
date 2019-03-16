<template>
    <div class="reg">
        <Header></Header>
        <div class="type">
            <div>类型：</div>
            <div class="type-select" v-for="(item,index) in head" :key="index" @click="select(item)">
                <div class="select" :class="item==val?'color':''"></div>
                <div>{{item}}</div>
            </div>
        </div>
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
        <div class="promise">
            <div  class="select" :class="ok==1?'color':''" @click="promise"></div>
            <div>我已同意遵守<span>《用户协议》</span></div>
        </div>
        <mt-button class="submit" @click="submit">注册</mt-button>
    </div>
</template>
<script>
import Header from '../sub/Theader'
import {Toast} from 'mint-ui'
    export default{
        data(){
            return {
                head:["司机","货主","物流公司","其它"],
                val:"司机",
                phone:"",
                code:"",
                password:"",
                password2:"",
                ok:0
            }
        },
        components:{
            Header
        },
        methods:{
            select(data){
                this.val=data
            },
            getCode(){
                /* 点击获取验证码 */
            },
            promise(){
                if(this.ok==0){
                    this.ok=1
                }else{
                    this.ok=0
                }
            },
            submit(){
                Toast('注册成功！')
            }
        }
    }
</script>
<style scoped>
.type{
    width:100%;
    height:80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:0 24px;
    background: #ffffff;
}
.type-select{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.select{
	width: 30px;
	height: 30px;
    margin-right:16px;
    border-radius: 50%;
    border:1px solid #000000;
}
.color{
	background-color: #06ccb1;
    border:none!important;
}
.reset-inp{
    position: absolute;
    margin: auto;
    left:0;
    right:0;
    margin-top:24px;
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
.promise{
    position:absolute;
    margin: auto;
    left: 0;
    right: 0;
    top:600px;
    width:100%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left:49px;
	font-family: PingFang-SC-Medium;
	font-size: 24px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 24px;
	letter-spacing: 0px;
	color: #666464;
}
.promise span{
    color: #008a77;
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