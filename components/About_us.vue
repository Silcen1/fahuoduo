<template>
  <div class="about-us">
      <Theader></Theader>
      <p class="company-introduce-title">公司介绍</p>
      <div class="company-introduce-content">我们是一家专注于物流（公司）、物流园、智慧管理软件服务商平台服务--物流专线、物流园、发货人、汽车司机我们为线下助力，为每个合作商家</div>
       <!-- 联系我们 -->
      <div class="contant-us-title-all">
        <div class="contant-us-title">联系我们：</div>
        <div class="telephone-all">
            <div class="telephone-left">
            <img src="../assets/phone.png" alt class="telephone-all-image">
            <div class="telephone-number">{{phone}}</div>
            </div>
            <div class="telephone-dial">拨打</div>
        </div>
        <div class="telephone-all">
            <div class="telephone-left">
            <img src="../assets/tele-phone.png" alt class="phone-all-image">
            <div class="telephone-number">{{tele_phone}}</div>
            </div>
            <div class="telephone-dial">拨打</div>
        </div>
      </div>
  </div>
</template>

<script>
import Theader from './sub/Theader'
export default {
    data(){
        return{
            phone: 13710731234,
            tele_phone: "020-45612812",
        }
    },
    methods:{

    },
    components:{
        Theader
    },
    created:function(){
      
      //  this.$axios({
      //   method: 'post',
      //   url:'http://localhost:8081/#/About_us',
      //   headers:{
      //       'Content-type': 'application/x-www-form-urlencoded'
      //      },
      //   data:{
          
      //   },
      //   }).then((res)=>{
      //       console.log(res)
      //  });



    }
}

</script>
<style scoped>
.company-introduce-title{
    font-size: 42px;
    text-align: center;
    margin-top: 82px;
}
.company-introduce-content{
    width: 652px;
    margin: 0 auto;
    margin-top: 38px;
    font-size: 28px;
    line-height: 48px;
    text-indent: 2em;
}

/* 联系我们 */
.contant-us-title-all{
    position: fixed;
    bottom: 168px;
    left: 48px;
}
.contant-us-title {
  font-size: 30px;
  margin-top: 47px;
  margin-left: 46px;
}
.telephone-all {
  width: 654px;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0px 0px 35px 0px rgba(209, 209, 209, 0.35);
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 40px;
}
.telephone-all-image {
  width: 32px;
  height: 42px;
  margin-left: 17px;
}
.telephone-number {
  font-size: 26px;
  margin-left: 30px;
}
.telephone-dial {
  color: #f26c60;
  font-size: 26px;
  width: 121px;
  height: 45px;
  border-radius: 8px;
  border: solid 2px #f26c60;
  text-align: center;
  line-height: 45px;
  margin-right: 24px;
}
.telephone-all {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.telephone-left {
  display: flex;
  align-items: center;
}
.phone-all-image {
  width: 38px;
  height: 30px;
  margin-left: 19px;
}
</style>