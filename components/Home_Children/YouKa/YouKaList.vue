<template>
    <div class="youKa">
        <Header></Header>
        <div class="mui-card" v-for="item in msg" :key="item.id" @click="details()">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell Hlist-2">
                    <div>
                        <img src="../../../assets/images/search/little.png"/>
                    </div>
                    <div class="Hlist-3">
                        <div class="Hlist-3-1">
                            <div>
                                <span>折扣：</span>
                                <span>{{item.num}}</span>
                            </div>
                            <div>
                                <img src="../../../assets/images/icon/eye.png"/>
                                <span>{{item.see}}</span>
                            </div>
                        </div>
                        <div>
                            <span>手机：</span>
                            <span>{{item.phone}}</span>
                        </div>
                        <div>
                            <span>地址：</span>
                            <div>{{item.addr}}</div>
                        </div>
                        <div>
                            <div>
                                <img src="../../../assets/images/icon/ok.png" v-if="item.ok"/>
                                <img src="../../../assets/images/icon/notok.png" v-if="item.notok"/>  
                            </div>
                            <div>
                                <img src="../../../assets/images/icon/right.png"/>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Header from '../../sub/Theader'
    export default{
        data(){
            return {
                msg:[
                    {id:1,vip:false,num:"7折",see:46276,phone:"1371032334",addr:"广州市白云区太和镇平方物流园",ok:true,notok:false},
                    {id:2,vip:true,num:"7折",see:46276,phone:"1371032334",addr:"广州市白云区太和镇平方物流园",ok:true,notok:false},
                    {id:3,vip:false,num:"7折",see:46276,phone:"1371032334",addr:"广州市白云区太和镇平方物流园",ok:false,notok:true}
                ]
            }
        },
        components:{
            Header
        },
        methods:{
            details(){
                this.$router.push('/home/YouKa/details')
            }
        }
    }
</script>
<style scoped>
  .mui-card{
	background-color: #ffffff;
	box-shadow: 0px 0px 35px 0px 
		rgba(209, 209, 209, 0.35);
	border-radius: 8px;
    margin: 24px 20px;
  }
  .mui-table-view{
      height:200px;
      padding:11px 0px;
  }
 .Hlist-2{
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .Hlist-2>div:first-child>img{
	width: 217px;
	height: 146px;
	background-color: #ffffff;
	box-shadow: 0px 0px 35px 0px 
		rgba(209, 209, 209, 0.35);
	border-radius: 8px;
    margin-right:20px;
  }
  .Hlist-3{
	  height: 160px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: flex-start;
  }
  .Hlist-3-1{
      width:400px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .Hlist-3-1>div{
      display: flex;
      justify-content: start;
      align-items: center;
  }
  .Hlist-3-1>div:first-child{
      width:240px;
  }
  .Hlist-3-1>div:first-child>span:first-child{
	font-family: PingFang-SC-Medium;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 24px;
	letter-spacing: 0px;
    word-break: keep-all;
	color: #666464;
  }
  .Hlist-3-1>div:first-child>span:nth-child(2){
	font-family: PingFang-SC-Medium;
	font-size: 28px;
	font-weight: normal;
	letter-spacing: 0px;
	color: #000000;
  }
  .Hlist-3-1>div:nth-child(2){
      width:110px;
  }
  .Hlist-3-1>div:nth-child(2)>img{
      width: 32px;
	  height: 20px;
      margin-right:14px;
  }
  
  .Hlist-3-1>div:nth-child(2)>span{
	font-family: PingFang-SC-Medium;
	font-size: 22px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
    word-break: keep-all;
	color: #000000;
  }
  .Hlist-3>div:nth-child(2),.Hlist-3>div:nth-child(3){
      width:450px;
      display: flex;
      justify-content:start;
      align-items: center;
  }
  .Hlist-3>div:nth-child(2)>span:first-child,.Hlist-3>div:nth-child(3)>span:first-child{
	font-family: PingFang-SC-Medium;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 32px;
	letter-spacing: 0px;
    word-break: keep-all;
	color: #666464;
  }
  .Hlist-3>div:nth-child(2)>span:nth-child(2),.Hlist-3>div:nth-child(3)>div:nth-child(2){
    width:280px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 32px;
	font-family: PingFang-SC-Medium;
	font-size: 28px;
	font-weight: normal;
	letter-spacing: 0px;
	color: #000000;
  }
  .Hlist-3>div:last-child{
      width:410px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .Hlist-3>div:last-child>div:first-child>img{
	width: 103px;
	height: 37px;
	border-radius: 8px;
  }
  .Hlist-3>div:last-child>div:nth-child(2)>img{
	width: 27px;
	height: 25px;
  }
</style>