<template>
  <div class="my_authentication">
    <Theader></Theader>
    <div class="if-authentication-title">
      <div
        class="no-authentication-text"
        v-bind:class="[show==0?'active':'']"
        @click="change_color()"
      >已认证</div>
      <div class="if-authentication-hr"></div>
      <div
        class="no-authentication-text"
        v-bind:class="[show==1?'active':'']"
        @click="change_color1()"
      >未认证</div>
    </div>

    <!-- 已认证的内容 -->
    <!-- <div v-for="item in yes_authentication" v-bind:key='item.id'>  -->
    <div class="yes-authentication-page" v-if="show==0">
      <div v-for="item in yes_logistics" :key="item.id">
        <div class="yes-authentication-all">
          <div class="yes-authentication-top">
            <div class="yes-authentication-company-name">{{item.company_name}}</div>
            <div class="logistics-recruitment-all">
              <div class="logistics-recruitment">{{item.type}}</div>
              <div class="set-see-image">
                <img src="../assets/see.png" alt class="in-set-see-image">
              </div>
              <div class="yes-authentication-see-num">{{item.see_number}}</div>
            </div>
          </div>
          <div class="middle-hr"></div>
          <div class="yes-authentication-bottom">
            <div class="set-logistics-image">
              <img :src="item.img" alt class="in-set-logistics-image">
            </div>
            <div class="yes-authentication-bottom-right">
              <div class="logistics-address-text">地址：{{item.address}}</div>
              <div class="logistics-phone-all">手机：{{item.phone}}</div>

              <div class="attestation-and-go">
                <div class="set-attestation-image">
                  <img src="../assets/attestation.png" alt class="in-set-attestation-image">
                </div>
                <div class="set-go-image">
                  <img src="../assets/go.png" alt class="in-set-go-image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-for="item in yes_person">
        <div class="no-authentication-all">
          <img :src="item.img" alt class="my-attestation-image">
          <div class="no-authentication-middle">
            <div class="no-authentication-name">姓名：{{item.name}}</div>
            <div class="no-authentication-phone">
              <div class="no-authentication-phone-tile">手机：</div>
              <div class="no-authentication-phone-number">{{item.phone}}</div>
            </div>
            <div class="no-authentication-address">地址：{{item.address}}</div>
            <img src="../assets/attestation.png" alt class="no-attestation-image">
          </div>
          <div class="no-authentication-right">
            <div class="no-authentication-enquiries">{{item.type}}</div>
            <img src="../assets/go.png" alt class="go_next-image">
          </div>
        </div>
      </div>
    </div>

    <!-- 未认证的内容 -->
    <div class="no-authentication-page" v-if="show==1">
      <div v-for="item in no_logistics" :key="item.id">
        <div class="yes-authentication-all">
          <div class="yes-authentication-top">
            <div class="yes-authentication-company-name">{{item.company_name}}</div>
            <div class="logistics-recruitment-all">
              <div class="logistics-recruitment">{{item.type}}</div>
              <div class="set-see-image">
                <img src="../assets/see.png" alt class="in-set-see-image">
              </div>
              <div class="yes-authentication-see-num">{{item.see_number}}</div>
            </div>
          </div>
          <div class="middle-hr"></div>
          <div class="yes-authentication-bottom">
            <div class="set-logistics-image">
              <img :src="item.img" alt class="in-set-logistics-image">
            </div>

            <div class="yes-authentication-bottom-right">
              <div class="logistics-address-text">地址：{{item.address}}</div>
              <div class="logistics-phone-all">手机：{{item.phone}}</div>

              <div class="attestation-and-go">
                <div class="set-attestation-image">
                  <img src="../assets/no-attestation.png" alt class="in-set-attestation-image">
                </div>
                <div class="set-go-image">
                  <img src="../assets/go.png" alt class="in-set-go-image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-for="item in no_person">
        <div class="no-authentication-all">
          <img :src="item.img" alt class="my-attestation-image">
          <div class="no-authentication-middle">
            <div class="no-authentication-name">姓名：{{item.name}}</div>
            <div class="no-authentication-phone">
              <div class="no-authentication-phone-tile">手机：</div>
              <div class="no-authentication-phone-number">{{item.phone}}</div>
            </div>
            <div class="no-authentication-address">地址：{{item.address}}</div>
            <img src="../assets/no-attestation.png" alt class="no-attestation-image">
          </div>
          <div class="no-authentication-right">
            <div class="no-authentication-enquiries">{{item.type}}</div>
            <img src="../assets/go.png" alt class="go_next-image">
          </div>
        </div>
      </div>

      <!-- 温馨提示 -->
      <div class="warm-prompt-all">温馨提示：未认证的内容在前台无法完整显示内容，联系平台进行认证</div>
      <!-- 联系我们 -->
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
import Theader from "./sub/Theader";
export default {
  data() {
    return {
      show: 0,
      phone: 13710731234,
      tele_phone: "020-45612812",
      no_logistics: [
        {
          id: 1,
          imgUrl: "../assets/go.png",
          company_name: "未认证广州市物流搬运公司1",
          type: "物流招娉1",
          see_number: "552188",
          address: "111广州市广州市广州市广州市广州市广州市广州市广州市",
          phone: 15820205763,
          img:require('../assets/logistics.png')
        },
        {
          id: 2,
          company_name: "广州市物流搬运公司2",
          type: "物流招娉2",
          see_number: "5541122",
          address: "222广州市广州市广州市广州市广州市广州市广州市广州市",
          phone: 155122222,
          img:require('../assets/logistics.png')
        },
        {
          id: 3,
          company_name: "广州市物流搬运公司3",
          type: "物流招娉3",
          see_number: "98561",
          address: "333广州市广州市广州市广州市广州市广州市广州市广州市",
          phone: 1144556566,
          img:require('../assets/logistics.png')
        }
      ],
      yes_logistics: [
        {
          id: 1,
          imgUrl: "../assets/go.png",
          company_name: "已认证广州市物流搬运公司1",
          type: "物流招娉1",
          see_number: "552188",
          address: "111广州市广州市广州市广州市广州市广州市广州市广州市",
          phone: 15820205763,
          img:require('../assets/logistics.png')
        },
        {
          id: 2,
          company_name: "广州市物流搬运公司2",
          type: "物流招娉2",
          see_number: "5541122",
          address: "222广州市广州市广州市广州市广州市广州市广州市广州市",
          phone: 155122222,
          img:require('../assets/logistics.png')
        },
        {
          id: 3,
          company_name: "广州市物流搬运公司3",
          type: "物流招娉3",
          see_number: "98561",
          address: "333广州市广州市广州市广州市广州市广州市广州市广州市",
          phone: 1144556566,
          img:require('../assets/logistics.png')
        }
      ],
      no_person: [
        {
          id: 1,
          name: "未认证张三",
          phone: 15820205736,
          address: "广州广州广州广州广州广州广州广州广州广州",
          type: "专线查询",
          img:require('../assets/my_attestation.jpg')
        },
        {
          id: 2,
          name: "李四",
          phone: 13956235685,
          address: "广州广州广州广州广州广州广州广州广州广州",
          type: "物流招聘",
          img:require('../assets/my_attestation.jpg')
        },
        {
          id: 3,
          name: "王五",
          phone: 145235859522,
          address: "广州广州广州广州广州广州广州广州广州广州",
          type: "专线查询",
          img:require('../assets/my_attestation.jpg')
        }
      ],
      yes_person: [
        {
          id: 1,
          name: "已认证张三",
          phone: 15820205736,
          address: "广州广州广州广州广州广州广州广州广州广州",
          type: "专线查询",
          img:require('../assets/my_attestation.jpg')
        },
        {
          id: 2,
          name: "李四",
          phone: 13956235685,
          address: "广州广州广州广州广州广州广州广州广州广州",
          type: "物流招聘",
          img:require('../assets/my_attestation.jpg')
        },
        {
          id: 3,
          name: "王五",
          phone: 145235859522,
          address: "广州广州广州广州广州广州广州广州广州广州",
          type: "专线查询",
          img:require('../assets/my_attestation.jpg')
        }
      ]
    };
  },
  methods: {
    change_color: function() {
      this.show = 0;
      console.log(this.show);
    },
    change_color1: function() {
      this.show = 1;
      console.log(this.show);
    }
  },
  components: {
    Theader
  }
};
</script>
<style scoped>
.my_authentication {
  padding-bottom: 252px;
}
/* 顶部标题 */
.if-authentication-title {
  width: 750px;
  height: 80px;
  box-shadow: 0px 2px 2px 0px rgba(209, 209, 209, 0.35);
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-around;
}
.if-authentication-title .active {
  color: #008a77;
  border-bottom: #008a77 1px solid;
}
.no-authentication-text {
  font-size: 28px;
  /* background: red; */
  height: 77px;
  line-height: 77px;
}
.if-authentication-hr {
  width: 3px;
  height: 50px;
  background-color: #e3e3e3;
}
/* 已认证的内容 */
.yes-authentication-all {
  width: 702px;
  height: 256px;
  background-color: #ffffff;
  box-shadow: 0px 0px 40px 0px rgba(199, 199, 199, 0.3);
  margin: 0 auto;
  margin-top: 24px;
}
.yes-authentication-company-name {
  font-size: 28px;
  margin-left: 2px;
}
.logistics-recruitment {
  color: #149381;
  font-size: 22px;
}
.in-set-see-image {
  width: 32px;
  margin-left: 29px;
}
.yes-authentication-see-num {
  font-size: 22px;
  margin-left: 14px;
  margin-right: 23px;
}
.yes-authentication-top {
  display: flex;
  justify-content: space-between;
  padding-top: 27px;
}
.logistics-recruitment-all {
  display: flex;
}
.middle-hr {
  width: 654px;
  height: 2px;
  background-color: #e3e3e3;
  border-radius: 1px;
  margin: 0 auto;
  margin-top: 28px;
}
.in-set-logistics-image {
  width: 218px;
  height: 127px;
  border-radius: 8px;
}
.logistics-address-text {
  color: #666464;
  font-size: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 440px;
}
.logistics-phone-all {
  color: #666464;
  font-size: 28px;
}
.in-set-attestation-image {
  width: 103px;
  height: 37px;
}
.in-set-go-image {
  width: 27px;
  margin-right: 24px;
}
.attestation-and-go {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.yes-authentication-bottom {
  display: flex;
  padding-top: 22px;
  margin-left: 14px;
}
.yes-authentication-bottom-right {
  margin-left: 24px;
}
.logistics-phone-all {
  margin-top: 22px;
}

/* 未认证的内容 */
.no-authentication-all {
  width: 710px;
  height: 173px;
  background-color: #ffffff;
  box-shadow: 0px 0px 35px 0px rgba(209, 209, 209, 0.35);
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  align-items: center;
}
.my-attestation-image {
  width: 177px;
  height: 173px;
  margin-left: 24px;
  border-radius: 8px;
}
.no-authentication-name {
  font-size: 26px;
}
.no-authentication-phone-tile {
  font-size: 26px;
}
.no-authentication-phone-number {
  font-size: 26px;
  color: #666666;
}
.no-authentication-phone {
  display: flex;
  margin-top: 14px;
}
.no-authentication-address {
  font-size: 26px;
  color: #000000;
  margin-top: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 360px;
}
.no-attestation-image {
  width: 103px;
  height: 37px;
  margin-top: 25px;
}
.no-authentication-enquiries {
  color: #008a77;
  font-size: 22px;
  padding-top: 23px;
}
.go_next-image {
  width: 27px;
  height: 25px;
  margin-bottom: 30px;
}
.no-authentication-middle {
  margin-left: 23px;
}
.no-authentication-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 221px;
  align-items: flex-end;
  margin-right: 24px;
}
/* 温馨提示 */
.warm-prompt-all {
  color: #999999;
  font-size: 24px;
  width: 670px;
  margin: 0 auto;
  margin-top: 22px;
  line-height: 30px;
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