<template>
    <div class="head">
    <mt-header :title="`${this.$route.meta.title}`" class="HeadT">
        <mt-button slot="left" @click="back()" class="back">
          <img src="../../assets/images/icon/back.png"/>
        </mt-button>
        
        <mt-button slot="right" class="tright" @click="share()">
          <img src="../../assets/images/icon/share.png"/>
        </mt-button>
    </mt-header>
    <div class="actionsheet" :class="{'move':hide==1}">
      <div class="a-1">
        <div>
          <img src="../../assets/images/icon/QQ.png"/>
          <p>QQ</p>
        </div>
        <div>
          <img src="../../assets/images/icon/friend.png"/>
          <p>微信朋友圈</p>
        </div>
        <div>
          <img src="../../assets/images/icon/wechat.png"/>
          <p>微信</p>
        </div>
      </div>
      <div class="a-2" @click="share()">
        <img src="../../assets/images/icon/x.png"/>
      </div>
    </div>
    <div class="forbid" :class="{'show':hide==0}" @click="share()"></div>
    </div>
</template>
<script>
  export default{
    data(){
      return{
        hide:0
      }
    },
    methods:{
      back(){
            this.$router.go(-1)
      },
      share(){
        if(this.hide==0){
          this.hide=1
        }else{
          this.hide=0
        }
      }
    }
  }    
</script>

<style scoped>
.head{
  position: fixed;
  width:100%;
  z-index: 2007;
  top:0;
}
.head .HeadT{
  font-size: 36px!important;
}
.back{
  padding:0 15px;
}
.back img{
  width:27px;
  height:33px;
}
.head .Config{
  margin-right:45px;
}
.head .mint-header{
  background-color: #06ccb1;
  height:80px;
}
.tright{
  margin-right:20px;
}
.tright img{
  width: 42px;
	height: 36px;
}
.move{
  transition: all 0.5s;
  transform: translatey(-400px)
}
.show{
  display: none;
}
.forbid{
  position: fixed;
  top:80px;
  height:100%;
  width: 100%;
  z-index: 2005;
  background: #000000;
  opacity: 0.3;
}
.actionsheet{
  position: fixed;
  z-index: 2007;
  bottom:-400px;
	width: 100%;
	height: 400px;
	background-color:#ffffff;
	box-shadow: 0px 0px 40px 0px 
		rgba(199, 199, 199, 0.3);
  padding:27px 24px;
  transition: all 0.5s;
}
.a-1{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:234px;
  box-sizing: border-box;
  padding:32px 57px;
  padding-bottom:54px;
}
.a-1>div{
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.a-1>div>img{
  width:88px;
  height: 88px;
}
.a-1>div>p{
	font-family: PingFang-SC-Medium;
	font-size: 30px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #000000;
}
.a-2{
  height:166px;
  display: flex;
  justify-content:center;
  align-items: center;
}
.a-2>img{
  width:30px;
  height:30px;
 
}
</style>