<template>
    <div class="special">
        <Header></Header>
        <div class="mui-card" v-for="item in msg" :key="item.id" @click="details()">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell Hlist">
                        <div>
                            <div style="width:400px">{{item.name}}</div>
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
                        <div class="Hlist-3" v-if="`${$route.meta.title}`=='物流搬运'||`${$route.meta.title}`=='物流园招商'||`${$route.meta.title}`=='特种运输'">
                            <div>
                                <span>地址：</span>
                                <div style="width:130px">{{item.addr}}</div>
                            </div>
                            <div>
                                <span>手机：</span>
                                <span>{{item.phone}}</span>
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
                        <div class="Hlist-3" v-if="`${$route.meta.title}`=='金融服务'||`${$route.meta.title}`=='车厢定制'">
                            <div>
                                <span>电话：</span>
                                <div>{{item.phone}}</div>
                            </div>
                            <div>
                                <span>地址：</span>
                                <div style="width:130px">{{item.addr}}</div>
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
                    {id:1,name:"【大件运输】广州市欣欣物流有限公司",phone:"13710732334",see:46276,addr:"广州市白云区太和镇平方物流园",ok:true,notok:false},
                    {id:2,name:"广州市欣欣物流有限公司",phone:"13710732334",see:46276,addr:"广州市白云区太和镇平方物流园",ok:true,notok:false},
                    {id:3,name:"广州市欣欣物流有限公司",phone:"13710732334",see:46276,addr:"广州市白云区太和镇平方物流园",ok:false,notok:true}
                ]
            }
        },
        components:{
            Header
        },
        methods:{
            details(){
                if(this.$route.meta.title=="特种运输"){
                   this.$router.push('/home/speciallist/specialdetails')
                }else if(this.$route.meta.title=="物流园招商"){
                   this.$router.push('/home/wuliuyuan/details')
                }else if(this.$route.meta.title=="物流搬运"){
                   this.$router.push('/home/BanYun/details')
                }else if(this.$route.meta.title=="金融服务"){
                   this.$router.push('/home/JinRong/details')
                }else if(this.$route.meta.title=="车厢定制"){
                   this.$router.push('/home/CheXiang/details')
                }
            }
        }
    }
</script>
<style scoped>
.special .mui-card{
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
      justify-content: start;
      align-items: center;
  }
  .Hlist>div:first-child{
      width: 451px;
  }
  .Hlist>div:first-child>div{
    white-space:nowrap;
    text-overflow:ellipsis;
	font-family: PingFang-SC-Medium;
	font-size: 32px;
	line-height: 32px;
	letter-spacing: 0px;
    overflow:hidden;
	color: #000000;

  }
  .Hlist>div:first-child>img{
      width: 54px;
	  height: 50px;
      margin-right:20px;
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
  .Hlist-3>div:nth-child(2),.Hlist-3>div:first-child{
      width:450px;
      display: flex;
      justify-content:start;
      align-items: center;
  }
  .Hlist-3>div:nth-child(2)>span:first-child,.Hlist-3>div:first-child>div:first-child{
	font-family: PingFang-SC-Medium;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 24px;
	letter-spacing: 0px;
    word-break: keep-all;
	color: #666464;
  }
  .Hlist-3>div:nth-child(2)>div:nth-child(2),.Hlist-3>:first-child>div:nth-child(2){
    overflow:hidden;
    text-overflow:ellipsis;
	font-family: PingFang-SC-Medium;
	font-size: 28px;
	line-height: 32px;
	font-weight: normal;
	letter-spacing: 0px;
    word-break: keep-all;
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
</style>