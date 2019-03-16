<template>
  <div class="my-collect">
    <Theader></Theader>
    <!-- 收藏的公司 -->
    <div v-for="item in company" :key="item.aid">
      <div class="collect-company-all" @click="show_delete(item.aid)">
        <div class="collect-company-top">
          <div class="vip-image-and-company">
            <img src="../assets/vip-icon.png" alt class="vip-image-all">
            <div class="collect-company-name">{{item.name}}</div>
          </div>
          <div class="see-and-see-number">
            <img src="../assets/see.png" alt class="see-eye-image">
            <div class="collect-company-see-number">{{item.see_number}}</div>
          </div>
        </div>

        <div class="collect-company-bottom">
          <img :src="item.image" alt class="set-company-image">
          <div class="collect-company-bottom-right">
            <div class="company-region-and-address">
              <p class="collect-company-region">{{item.region}}</p>
              <div class="collect-company-address">{{item.address}}</div>
            </div>

            <div class="collect-company-railway">
              <div class="collect-company-railway-title">专线：</div>
              <div class="collect-company-railway-text">{{item.special}}</div>
            </div>
            <div class="attestation-and-go">
              <img src="../assets/attestation.png" alt class="set-attestation-image">
              <img src="../assets/go.png" alt class="go-next-image">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 收藏的车主 -->
    <div v-for="item in carowner" @click="show_delete(item.bid)">
      <div class="carowner-infor-all">
        <img :src="item.img" alt class="set-carowner-image">

        <div class="carowner-infor-right">
          <div class="car-licence-and-see">
            <div class="car-licence-all">
              <div class="car-licence-title">车牌：</div>
              <div class="car-licence-text">{{item.licence}}</div>
            </div>
            <div class="see-image-and-number">
              <img src="../assets/see.png" alt class="see-eyes-image">
              <div class="see-number-text">{{item.see_number}}</div>
            </div>
          </div>

          <div class="carowner-phone-all">
            <div class="carowner-phone-title">手机：</div>
            <div class="carowner-phone-text">{{item.phone}}</div>
          </div>
          <div class="carowner-cartype-all">
            <div class="carowner-cartype-title">车型：</div>
            <div class="carowner-cartype-text">{{item.type}}</div>
          </div>
          <div class="gove-like-and-go">
            <div class="carowner-give-like">{{item.give_like}}赞</div>
            <img src="../assets/go.png" alt class="go-nexts-image">
          </div>
        </div>
      </div>
    </div>

    <!-- 删除图标 -->
    <img src="../assets/delete.png" alt="" class="delete-image" v-if="this.delete==1"/>
  </div>
</template>

<script>
import Theader from "./sub/Theader";
export default {
  data() {
    return {
      delete:0,
      company: [
        {
          aid: 0,
          name: "广州市欣欣物流有限公司1",
          region: "太和和和",
          address: "广州市白云区太和镇平方白云区太和镇平方白云区太和镇平方",
          see_number: "46276",
          special: "广州、深圳、北京",
          image: require("../assets/logistics.png")
        },
        {
          aid: 1,
          name: "广州市欣欣物流有限公司2",
          region: "太和",
          address: "广州天河区太和镇平方白云区太和镇平方白云区太和镇平方",
          see_number: "4676",
          special: "深圳、北京",
          image: require("../assets/logistics.png")
        }
      ],
      carowner: [
        {
          bid:3,
          licence: "粤A13234",
          see_number:46276,
          phone:13820205436,
          type:'厢车',
          give_like:4512,
          img:require('../assets/car-owner.png')
        },
        {
          bid:4,
          licence: "粤A13234",
          see_number:46276,
          phone:13820205436,
          type:'厢车',
          give_like:4512,
          img:require('../assets/car-owner.png')
        },
        {
          bid:5,
          licence: "湘西A13234",
          see_number:462,
          phone:15820208436,
          type:'小车',
          give_like:451520,
          img:require('../assets/car-owner.png')
        }
      ]
    };
  },
  methods: {
    show_delete(id){
      console.log(id);
      this.delete=1;
    }
  },
  components: {
    Theader
  }
};
</script>
<style scoped>
/* 收藏的公司 */
.collect-company-all {
  width: 662px;
  height: 256px;
  background-color: #ffffff;
  box-shadow: 0px 0px 40px 0px rgba(199, 199, 199, 0.3);
  margin: 0 auto;
  margin-top: 24px;
  padding-left: 16px;
  padding-right: 24px;
}
.vip-image-all {
  width: 54px;
  height: 50px;
}
.collect-company-name {
  color: #f26c60;
  font-size: 30px;
  margin-left: 21px;
}
.see-eye-image {
  width: 32px;
  height: 20px;
}
.collect-company-see-number {
  font-size: 22px;
  margin-left: 14px;
}
.collect-company-top {
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e3e3e3;
}
.vip-image-and-company {
  display: flex;
  align-items: center;
}
.see-and-see-number {
  display: flex;
  justify-content: flex-end;
}
.set-company-image {
  width: 218px;
  height: 127px;
}
.collect-company-region {
  height: 31px;
  background-color: #f26c60;
  border-radius: 8px;
  font-size: 26px;
  color: #ffffff;
  padding: 3px 6px;
}
.collect-company-address {
  font-size: 28px;
  width: 296px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 25px;
}
.collect-company-railway-title {
  color: #666464;
  font-size: 28px;
}
.collect-company-railway-text {
  font-size: 28px;
}
.collect-company-railway {
  display: flex;
  margin-top: 21px;
}
.set-attestation-image {
  width: 103px;
  height: 37px;
}
.go-next-image {
  width: 27px;
  height: 25px;
}
.collect-company-bottom {
  display: flex;
  align-items: center;
  height: 176px;
}
.company-region-and-address {
  display: flex;
  align-items: center;
}
.collect-company-bottom-right {
  margin-left: 23px;
  width: 420px;
}
.attestation-and-go {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
/* 收藏的车主 */
.carowner-infor-all {
  width: 662px;
  height: 173px;
  background-color: #ffffff;
  box-shadow: 0px 0px 35px 0px rgba(209, 209, 209, 0.35);
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 24px;
  display: flex;
  padding: 24px;
}
.set-carowner-image {
  width: 278px;
  height: 173px;
}
.car-licence-title {
  color: #666464;
  font-size: 28px;
}
.car-licence-text {
  font-size: 28px;
}
.car-licence-all {
  display: flex;
}
.carowner-phone-title {
  color: #666464;
  font-size: 28px;
}
.carowner-phone-text {
  font-size: 28px;
}
.carowner-phone-all {
  display: flex;
  margin-top: 13px;
}
.carowner-cartype-title {
  color: #666464;
  font-size: 28px;
}
.carowner-cartype-text {
  font-size: 28px;
}
.carowner-cartype-all {
  display: flex;
  margin-top: 13px;
}
.carowner-give-like {
  color: #f26c60;
  font-size: 28px;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}
.go-nexts-image {
  width: 27px;
  height: 25px;
  position: relative;
  top: 15px;
}
.carowner-infor-right {
  margin-left: 29px;
  position: relative;
  width: 352px;
}
.give-like-and-go {
  display: flex;
}
.see-eyes-image {
  width: 32px;
  height: 20px;
}
.see-number-text {
  font-size: 22px;
  margin-left: 14px;
}
.see-image-and-number {
  display: flex;
}
.car-licence-and-see {
  display: flex;
  justify-content: space-between;
}
.gove-like-and-go {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.my-collect{
    padding-bottom: 100px;
}
/* 删除图标 */
.delete-image{
	width: 36px;
	height: 34px;
  position: fixed;
  top: 23px;
  right: 50px;
}
</style>