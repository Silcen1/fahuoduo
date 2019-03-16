<template>
    <div class="details">
        <Header></Header>
        <div class="bd-details">
            <div class="bd-de" v-for="item in msg" :key="item.id" @click="details()">
                <div class="de-dd">
                    <span>{{item.start}}</span>
                    <img src="../../../assets/images/icon/tou.png"/>
                    <span>{{item.end}}</span>
                </div>
                <div class="dd-dt">
                    <span>{{item.com}}</span>
                </div>
                <div class=dt-dl>
                    <span>地址：{{item.addr}}</span>
                </div>
                <div class="dl-dw">
                    <span>电话：{{item.phone}}</span>
                </div>
            <div class="icon"></div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../../sub/Theader'
    export default{
        data(){
            return {
                msg:[
                    {id:1,start:"广州",end:"郑州",com:"广州德星物流有限公司",addr:"太和镇白云物流园B2栋106档",phone:"020-37312958"},
                    {id:2,start:"广州",end:"郑州",com:"广州德星物流有限公司",addr:"太和镇白云物流园B2栋106档",phone:"020-37312958"},
                    {id:3,start:"广州",end:"郑州",com:"广州德星物流有限公司",addr:"太和镇白云物流园B2栋106档",phone:"020-37312958"},
                    {id:4,start:"广州",end:"郑州",com:"广州德星物流有限公司",addr:"太和镇白云物流园B2栋106档",phone:"020-37312958"},
                    {id:5,start:"广州",end:"郑州",com:"广州德星物流有限公司",addr:"太和镇白云物流园B2栋106档",phone:"020-37312958"},
                    {id:6,start:"广州",end:"郑州",com:"广州德星物流有限公司",addr:"太和镇白云物流园B2栋106档",phone:"020-37312958"},
                    {id:7,start:"广州",end:"郑州",com:"广州德星物流有限公司",addr:"太和镇白云物流园B2栋106档",phone:"020-37312958"}
                ]
            }
        },
        components:{
            Header
        },
        methods:{
            details(){
                this.$router.push('/home/details/linedetails')
            }
        }
    }
</script>
<style scoped>
  .details{
      background:#f8f8f8;
      padding-bottom: 30px;
      box-sizing: border-box;
  }
  .bd-details{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
  }
  .bd-de{
      position: relative;
      margin-top:30px;
      width:700px;
      height: 268px;
      background: #ffffff;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      padding:12px 30px;
      box-sizing: border-box;
  }
  .de-dd{
      width:315px;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .de-dd span{
	font-family: FZXBSJW--GB1-0;
	font-size: 48px;
	color: #f26c60;
  }
  .dd-dt span{
	font-family: PingFang-SC-Bold;
	font-size: 32px;
	color: #000000;
  }
  .dt-dl span,.dl-dw span{
	font-family: PingFang-SC-Medium;
	font-size: 28px;
	color: #000000;
  }
  .icon{
      height:35px;
      width: 35px;
      right:24px;
      transform: rotate(45deg);
      position: absolute;
      border-top:3px solid #999999;
      border-right:3px solid #999999;
  }
</style>

