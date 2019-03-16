<template>
    <div class="tb" v-if="`${$route.name}`=='Home'||`${$route.name}`=='Data'||`${$route.name}`=='Publish'||`${$route.name}`=='My'">
      <div class="nav">
        <div class="nav-item" @click="Home">
          <img src="../../assets/images/tab/home1.png" class="nav-first-img" v-if="`${$route.name}`!='Home'"/>
          <img src="../../assets/images/tab/home2.png" class="nav-first-img" v-if="`${$route.name}`=='Home'"/>
          <p :class="`${$route.name}`=='Home'?'color':''">首页</p>
        </div>
        <div class="nav-item" @click="RenZheng">
          <img src="../../assets/images/tab/biaoqian1.png" class="nav-two-img" v-if="`${$route.name}`!='Data'"/>
          <img src="../../assets/images/tab/biaoqian2.png" class="nav-two-img" v-if="`${$route.name}`=='Data'"/>
          <p :class="`${$route.name}`=='Data'?'color':''">认证资料</p>
        </div>
        <div class="nav-item" @click="FaBu">
          <img src="../../assets/images/tab/fabu1.png" class="nav-three-img" v-if="`${$route.name}`!='Publish'"/>
          <img src="../../assets/images/tab/fabu2.png" class="nav-three-img" v-if="`${$route.name}`=='Publish'"/>
          <p :class="`${$route.name}`=='Publish'?'color':''">我要发布</p>
        </div>
        <div class="nav-item" @click="Mine">
          <img src="../../assets/images/tab/mine1.png" class="nav-four-img" v-if="`${$route.name}`!='My'"/>
          <img src="../../assets/images/tab/mine2.png" class="nav-four-img" v-if="`${$route.name}`=='My'"/>
          <p :class="`${$route.name}`=='My'?'color':''">我的</p>
        </div>
      </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
            }
        },
        methods:{
          Home(){
            this.$router.push('/')
          },
          RenZheng(){
            /* 跳转到认证资料 */
            this.$router.push('/data')
          },
          FaBu(){
            /* 跳转到我要发布 */
            this.$router.push('/publish')
          },
          Mine(){
            /* 跳转到我的 */
            this.$router.push('/my')
          }
        }
    }
</script>
<style scoped>
 .nav{
   width:100%;
   background:#ffffff;
   display: flex;
   justify-content: space-between;
   align-items: center;
   height:98px;
	box-shadow: 0px -2px 2px 0px 
		rgba(211, 211, 211, 0.3);
    position: fixed;
    bottom:0;
    z-index: 2008;
    padding-top:14px;
 }
 .nav-item{
   display: flex;
   width: 25%;
   height:100%;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
 }
 .nav-item p{
	font-family: PingFang-SC-Medium;
	font-size: 22px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: -1px;
	color: #000000;
 }
 .nav-first-img{
   width:46px;
   height:39px;
 }
 .nav-two-img{
   width: 34px;
   height: 42px;
 }
 .nav-three-img{
   width: 37px;
   height:37px;
 }
 .nav-four-img{
   width:36px;
   height:38px;
 }
 .color{
	color: #008a77!important;
 }
</style>