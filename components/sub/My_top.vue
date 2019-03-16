<template>
  <div class="my-head">
    <!-- 头部 -->
      <div class="my-top-all">
        <div class="people-image">
            <img src="../../assets/login-register.png" alt="" class="in-people-image" v-if="if_register==0">
            <img src="../../assets/people.png" alt="" class="in-people-image" v-if="if_register==1">
        </div>
        <div class="people-phone login-register" v-if="if_register==0&&if_information==0">登录/注册</div>
        <div class="people-phone login-register login-register-1" v-if="if_register==0&&if_information==1">登录/注册</div>
        <div class="people-phone" v-if="if_register==1&&if_information==0">13445678912</div>
        <div class="people-phone people-phone-1" v-if="if_register==1&&if_information==1">13445678912</div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            set_image:false//true代表已经认证     false代表未认证
        }
    },
    props:{
        if_register:{

        },
        if_information:{

        }
    }
}

</script>
<style scoped>
/* 头部 */
.my-top-all{
    height: 272px;
    width:100%;
    background:url('../../assets/my-bg.png') no-repeat 0 0;
    background-size: 100% 100%;
}
.in-people-image{
    width: 136px;
    height: 136px;
    border-radius: 68px;
    margin-left: 58px;
    padding-top: 70px;
}
.people-phone{
    font-size: 28px;
    margin-top: 115px;
    margin-left: 27px;
}
.my-top-all{
    display: flex;
}
.login-register{
    font-size: 36px;
}
.login-register-1{
    color: white;
}
.people-phone-1{
    color: white;
}


</style>