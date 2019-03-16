<template>
    <div class="search">
        <Header></Header>
        <div class="tt">
            <span>当前搜索：</span>
            <div class="tt1">
                <span>广州</span>
                <span>→</span>
                <span>福田区</span>
            </div>
            <div class="tt2">太和</div>
            <div class="tt2">石井</div>
        </div>
        <div class="mui-card" v-for="item in msg" :key="item.id" @click="detail()">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell Hlist">
                        <div>
                            <img src="../../../assets/images/icon/vip.png" v-if="item.vip"/>
                            <span :class="{'vip':item.vip === true}">{{item.name}}</span>
                        </div>
                        <div>
                            <img src="../../../assets/images/icon/eye.png"/>
                            <span>{{item.see}}</span>
                        </div>
                    </li>
                    <li class="mui-table-view-cell Hlist-2">
                        <div>
                            <img src="../../../assets/images/search/little.png"/>
                        </div>
                        <div class="Hlist-3">
                            <div>
                                <div v-if="item.c1" class="red">{{item.c1}}</div>
                                <div v-if="item.c2" class="green">{{item.c2}}</div>
                                <p>{{item.addr}}</p>
                            </div>
                            <div>
                                <span>专线：</span>
                                <span>{{item.line}}</span>
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
                    {id:1,vip:false,name:"广州市欣欣物流有限公司",see:46276,c1:"太和",c2:"",addr:"广州市白云区太和镇平方物流园",line:"广州、深圳、北京",ok:true,notok:false},
                    {id:2,vip:true,name:"广州市欣欣物流有限公司",see:46276,c1:"太和",c2:"石井",addr:"广州市白云区太和镇平方物流园",line:"广州、深圳、北京",ok:true,notok:false},
                    {id:3,vip:false,name:"广州市欣欣物流有限公司",see:46276,c1:"",c2:"石井",addr:"广州市白云区太和镇平方物流园",line:"广州、深圳、北京",ok:false,notok:true}
                ]
            }
        },
        components:{
            Header
        },
        methods:{
            detail(){
                if(sessionStorage.id==1){
                    sessionStorage.setItem("name", 1);
                    sessionStorage.name=1
                    if(this.$route.meta.title=="专线查询结果"){
                         this.$router.push('/home/details/linedetails')
                    }else if(this.$route.meta.title=="调车结果查询"){
                         this.$router.push('/home/carlist/details')
                    }
                    sessionStorage.id=0;
                }else{
                    this.$router.push('/home/onlyline/notsearch')
                    sessionStorage.id=1;
                }
            }
        },
        created(){
            sessionStorage.setItem("id", 1);
        }
    }
</script>
<style scoped>
  .search{
      background: #fbfbfb;
      height:1330px;
  }
  .tt{
      display:flex;
      justify-content: space-between;
      align-items: center;
      background:#06ccb1;
      height:80px;
      padding:0 23px;
  }
  .tt>span,.tt1 span{
	font-family: PingFang-SC-Medium;
	font-size: 38px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #ffffff;
    margin-right: 10px;
  }
  .tt1{
      display: flex;
      width:325px;
      justify-content: start;
      align-items: center;
  }
  .tt2{
	width: 79px;
	height: 41px;
	line-height: 33px;
    text-align: center;
	border-radius: 8px;
	border:2px solid #ffffff;
	font-family: PingFang-SC-Medium;
	font-size: 32px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #ffffff;
  }
  .search .mui-card{
      margin:24px;
  }
  .mui-table-view{
      height:257px;
      padding:11px 23px;
  }
  .Hlist{
      height:78px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom:2px solid #e3e3e3;
      padding:15px 0;

  }
  .Hlist>div{
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .Hlist>div:first-child>img{
      width: 54px;
	  height: 50px;
      margin-right:20px;
  }
  .lineH{
      padding:15px 0;
  }
  .Hlist>div:first-child>span{
	font-family: PingFang-SC-Medium;
	font-size: 30px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #000000;
  }
  .Hlist>div:nth-child(2)>img{
      width: 32px;
	  height: 20px;
      margin-right:14px;
  }
  .Hlist>div:nth-child(2)>span{
	font-family: PingFang-SC-Medium;
	font-size: 22px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #000000;
  }
  .Hlist-2{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top:8px;
  }
  .Hlist-2>div:first-child>img{
	width: 218px;
	height: 127px;
	box-shadow: 0px 0px 35px 0px rgba(143, 97, 97, 0.35);
	border-radius: 8px;
    margin-right:20px;
  }
  .Hlist-3{
	  height: 127px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: flex-start;
  }
  .Hlist-3>div:first-child{
      width:450px;
      display: flex;
      justify-content:space-between;
      align-items: center;
  }
  .red{
	width: 61px;
	height: 31px;
    line-height: 32px;
    text-align: center;
	background-color: #f26c60;
	border-radius: 8px;
  }
  .green{
	width: 61px;
	height: 31px;
    line-height: 32px;
    text-align: center;
	background-color: #008a77;
	border-radius: 8px;
  }
  .Hlist-3>div:first-child>p{
    width:300px;
    overflow: hidden;
    white-space:nowrap; 
    text-overflow: ellipsis;
	font-family: PingFang-SC-Medium;
	font-size: 28px;
    line-height: 32px;
	font-weight: normal;
	color: #000000;
  }
  .Hlist-3>div:nth-child(2){
      width:450px;
      display: flex;
      justify-content:start;
      align-items: center;
  }
  .Hlist-3>div:nth-child(2)>span:first-child{
	font-family: PingFang-SC-Medium;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 24px;
	letter-spacing: 0px;
	color: #666464;
  }
  .Hlist-3>div:nth-child(2)>span:nth-child(2){
	font-family: PingFang-SC-Medium;
	font-size: 28px;
	font-weight: normal;
	letter-spacing: 0px;
	color: #000000;
  }
  .Hlist-3>div:last-child{
      width:400px;
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