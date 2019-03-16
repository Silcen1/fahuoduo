<template>
  <div class="my"> 
        <Header></Header>
        <My_top v-bind:if_register="if_register" v-bind:if_information="if_information"></My_top>
        <!-- 信息 -->
      <div class="information-content-all">
        <div class="information-content-item" @click="go_information">
            <div class="information-content-left">
                <div class="icon-image">
                    <img src="../assets/my-icon-1.png" alt="" class="in-icon-image">
                </div>
                <div class="information-content-text">个人信息</div>
            </div>
            <div class="next-image">
                <img src="../assets/next.png" alt="" class="in-next-image"> 
            </div>
        </div>

        <div class="information-content-item" @click="go_amend_password">
            <div class="information-content-left">
                <div class="icon-image">
                    <img src="../assets/my-icon-2.png" alt="" class="in-icon-image">
                </div>
                <div class="information-content-text">修改密码</div>
            </div>
            <div class="next-image">
                <img src="../assets/next.png" alt="" class="in-next-image"> 
            </div>
        </div>

        <div class="information-content-item" @click="go_my_collect">
            <div class="information-content-left">
                <div class="icon-image">
                    <img src="../assets/my-icon-3.png" alt="" class="in-icon-image">
                </div>
                <div class="information-content-text">我的收藏</div>
            </div>
            <div class="next-image">
                <img src="../assets/next.png" alt="" class="in-next-image"> 
            </div>
        </div>

        <div class="information-content-item" @click="go_my_authentication">
            <div class="information-content-left">
                <div class="icon-image">
                    <img src="../assets/my-icon-4.png" alt="" class="in-icon-image">
                </div>
                <div class="information-content-text">我的认证</div>
            </div>
            <div class="next-image">
                <img src="../assets/next.png" alt="" class="in-next-image"> 
            </div>
        </div>

        <div class="information-content-item" @click="go_about_us">
            <div class="information-content-left">
                <div class="icon-image">
                    <img src="../assets/my-icon-5.png" alt="" class="in-icon-image">
                </div>
                <div class="information-content-text">关于我们</div>
            </div>
            <div class="next-image">
                <img src="../assets/next.png" alt="" class="in-next-image"> 
            </div>
        </div>
      </div>

      <div class="quit-all-text">退出</div>

      <Tabbar></Tabbar>
  </div>

</template>

<script>
import Header from './sub/Header'
import My_top from './sub/My_top'
import Tabbar from './sub/Tabbar'
export default {
    data(){
        return{
            if_register:0,//0代表未注册个人资料  1代表已注册个人资料
            if_information:0//0代表我的首页  1代表我的个人信息
        }
    },
    methods:{
        go_information:function(){
            this.$router.push('./Complete_information');
        },
        go_my_authentication:function(){
            this.$router.push('./My_authentication');
        },
        go_my_collect:function(){
            this.$router.push('./My_collect');
        },
        go_about_us:function(){
            this.$router.push('./About_us');
        },
        go_amend_password:function(){
            this.$router.push('./Amend_password');
        }
    },
    components:{
        Tabbar,
        Header,
        My_top
    }
}

</script>
<style scoped>
/* 信息 */
.information-content-all{
    width: 606px;
	height: 503px;
	background-color: #ffffff;
	box-shadow: 0px 0px 35px 0px 
		rgba(209, 209, 209, 0.35);
	border-radius: 16px;
    margin: 0 auto;
    margin-top: 79px;
    padding-left: 24px;
    padding-right: 24px;
}
.in-icon-image{
    width:33px; 
}
.information-content-text{
    font-size: 36px;
    margin-left: 42px;
}
.in-next-image{
    width: 15px;
}
.information-content-item{
    display: flex;
    height: 99px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e3e3e3;
    justify-content: space-between;
}
.information-content-left{
    display: flex;
}
.quit-all-text{
    width: 654px;
	height: 80px;
	background-color: #06ccb1;
	border-radius: 8px;
    margin: 0 auto;
    margin-top: 74px;
    color: #ffffff;
    font-size: 36px;
    text-align: center;
    line-height: 80px;
}


</style>