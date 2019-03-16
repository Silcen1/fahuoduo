<template>
    <div class="carSearch">
        <Header></Header>
        <div class="select">
            <div class="city">
                <div>城市：</div>
                <select class="mui-btn mui-btn-block">
                <option :value="item" v-for="(item,index) in city" :key="index">{{item}}</option>
            </select>
            </div>
            <div class="city">
                <div>车型：</div>
                <select class="mui-btn mui-btn-block">
                <option :value="item" v-for="(item,index) in type" :key="index">{{item}}</option>
            </select>
            </div>
            <div class="city">
                <div>车长：</div>
                <select class="mui-btn mui-btn-block">
                <option :value="item" v-for="(item,index) in siji" :key="index">{{item}}</option>
            </select>
            </div>
        </div>
        <div class="mui-card" v-for="item in msg" :key="item.id" @click="details()">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell Hlist-2">
                    <div>
                        <img src="../../../assets/images/search/car.png"/>
                    </div>
                    <div class="Hlist-3">
                        <div class="Hlist-3-1">
                            <div>
                                <span>车牌：</span>
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
                            <span>车型：</span>
                            <span>{{item.type}}</span>
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
                    {id:1,vip:false,num:"粤A1234",see:46276,phone:"1371032334",type:"厢车",ok:true,notok:false},
                    {id:2,vip:true,num:"粤A1234",see:46276,phone:"1371032334",type:"厢车",ok:true,notok:false},
                    {id:3,vip:false,num:"粤A1234",see:46276,phone:"1371032334",type:"厢车",ok:false,notok:true}
                ],
                city:["广州","深圳","清远","北京","佛山","杭州"],
                type:["火车","坦克车","三轮车","货车","厢车"],
                siji:["张三","李四","王五"]
            }
        },
        components:{
            Header
        },
        methods:{
            details(){
                this.$router.push('/home/carDetails')
            }
        }
    }
</script>
<style scoped>
.select{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:24px 15px;
    padding-bottom: 0px;
}
.city{
    width:226px;
    height:60px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
	border-radius: 8px;
	border: solid 2px #008a77;
    background: #ffffff;
}
.city>div{
	font-family: PingFang-SC-Medium;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 60px;
	letter-spacing: 0px;
    word-break: keep-all;
	color: #008a77;
    box-sizing: border-box;
    padding:16px 6px;
    background: #ffffff;
}
 .mui-btn-block{
     width:156px;
     height: 60px;
     margin:0;
     padding:0;
	font-family: PingFang-SC-Medium;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #008a77;
 }
  .mui-card{
	background-color: #ffffff;
	box-shadow: 0px 0px 35px 0px 
		rgba(209, 209, 209, 0.35);
	border-radius: 8px;
    margin: 24px 20px;
  }
  .mui-table-view{
      height:221px;
      padding:11px 0px;
  }
 .Hlist-2{
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .Hlist-2>div:first-child>img{
	width: 278px;
	height: 173px;
	background-color: #ffffff;
	box-shadow: 0px 0px 35px 0px 
		rgba(209, 209, 209, 0.35);
	border-radius: 8px;
    margin-right:20px;
  }
  .Hlist-3{
	height: 173px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: flex-start;
  }
  .Hlist-3-1{
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
	line-height: 24px;
	letter-spacing: 0px;
	color: #666464;
  }
  .Hlist-3>div:nth-child(2)>span:nth-child(2),.Hlist-3>div:nth-child(3)>span:nth-child(2){
	font-family: PingFang-SC-Medium;
	font-size: 28px;
	font-weight: normal;
	letter-spacing: 0px;
	color: #000000;
  }
  .Hlist-3>div:last-child{
      width:360px;
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
  .vip{
	color: #f26c60!important;
  }
</style>