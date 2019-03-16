<template>
    <div class="msg">
        <div class="forbid"></div>
        <div class="box" :class="this.int[1]==1?'mostHigh':''">
            <div class="top">
                联系商家
                <div class="x" @click="x">
                    <img src="../../assets/images/icon/x1.png"/>
                </div>
            </div>
            <div class="tip" v-if="this.int[1]==1">{{int[2]}}</div>
            <div class="mid">
                <span>电话：</span>
                <span>{{this.int[0].toString().replace(',','')}}</span>
            </div>
            <div class="down">
                <mt-button @click="x">取消</mt-button>
                <mt-button style="color:#f26c60;" @click="call">拨打</mt-button>
            </div>
        </div>
        <LoginBox :class="{'visable':hide}" @listen="showListen"></LoginBox>
    </div>
</template>
<script>
import LoginBox from './isLogin'
    export default{
        data(){
            return {
                val:0,
                hide:true,
            }
        },
        props:['int'],
        components:{
            LoginBox
        },
        methods:{
            x(){
                this.$emit("listen",this.val)  /* 通知父组件关掉MsgBox */
            },
            call(){
                if(this.$store.state.isLogin=="未登录"){
                    this.hide=false;
                    this.stop();
                }else if(this.$store.state.isLogin=="已登录"){
                    /* 这是登录以后，可以调用拨打电话硬件 */
                }
            },
            showListen(){
                this.hide=true;
                this.$emit("listen",this.val);
                this.move();
            },
            FromShare(data){
                if(this.hide==false){ /* 点击分享，子组件Header触发这个判断，如果MsgBox没有隐藏，则改成隐藏并禁止滑动 */
                    this.hide=true;
                    this.stop()
                }else if(data===1){  /* 如果子组件Header传来1，恢复滑动 */
                    this.move()
                }else if(data===0){  /* 如果子组件Header传来0，禁止滑动 */
                    this.stop()
                }
            },
            stop(){  /* 禁用滑动 */
                var mo=function(e){e.preventDefault();};
                document.body.style.overflow='hidden';
                document.addEventListener("touchmove",mo,false);
            },
            move(){ /* 启用滑动 */
                var mo=function(e){e.preventDefault();};
                document.body.style.overflow='';
                document.removeEventListener("touchmove",mo,false);
            }
        }
    }
</script>
<style scoped>
  .mostHigh{
      height:450px!important;
  }
  .tip{
	width: 455px;
	font-family: PingFang-SC-Medium;
	font-size: 26px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 48px;
	letter-spacing: 3px;
	color: #000000;
  }
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
	font-size: 36px;
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
.visable{
    display: none;
}
</style>