<template>
    <div class="msg">
        <div class="forbid"></div>
        <div class="box">
            <div class="top">
                温馨提示
                <div class="x" @click="x">
                    <img src="../../assets/images/icon/x1.png"/>
                </div>
            </div>
            <div class="mid">
                <span>登录后才可进行操作</span>
            </div>
            <div class="down">
                <mt-button @click="x">取消</mt-button>
                <mt-button style="color:#008a77;" @click="toLogin">登录</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                val:0
            }
        },
        methods:{
            x(){
                this.$emit("listen")  /* 通知父组件关掉MsgBox */
            },
            toLogin(){
                this.$router.push('/login')
            }
        }
    }
</script>
<style scoped>
  .box{
    z-index:2008;
    position: absolute;
    margin:auto;
    top:0;
    left:0;
    right:0;
    bottom:0;
	width: 579px;
	height: 324px;
	background-color: #ffffff;
	box-shadow: 0px 0px 40px 0px 
		rgba(199, 199, 199, 0.3);
	border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .top{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
	width: 100%;
	height: 80px;
	background-color: #008a77;
	font-family: PingFang-SC-Medium;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #ffffff;
  }
  .x{
      position:absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      right:0;
      height: 100%;
      width: 80px;
  }
  .x>img{
      width:23px;
      height:23px;
  }
  .mid{
      padding:47px 57px;
  }
  .mid span{
	font-family: PingFang-SC-Medium;
	font-size: 26px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 4px;
	color: #000000;
  }
  .down{
      width:100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .down>button{
      height:80px;
      width:50%;
	  background-color: #ffffff;
      padding:24px 93px;
  }
.forbid{
  position: fixed;
  z-index: 2007;
  top:80px;
  height:100%;
  width: 100%;
  background: #000000;
  opacity: 0.3;
}
.show{
  display: none;
}
</style>