<template>
    <div class="line">
        <Header></Header>
        <div class="banner">
           <img src="../../../assets/images/banner/banner1.png"/>
        </div>
        <div class="list">
            <ul class="mui-table-view">
                <li class="mui-table-view-divider">广州市欣欣物流有限公司</li>
                <li class="mui-table-view-cell">
                    <span>联系人:</span>
                    <p>李力</p>
                    <img src="../../../assets/images/icon/like.png"/>
                </li>
                <li class="mui-table-view-cell">
                    <span>手机:</span>
                    <p>{{phone}}</p>
                    <img src="../../../assets/images/icon/tphone.png"/>
                </li>
                <li class="mui-table-view-cell">
                    <span>电话:</span>
                    <p>{{tel}}</p>
                    <img src="../../../assets/images/icon/phone.png" @click="call()"/>
                </li>
                <li class="mui-table-view-cell">
                    <span>地址:</span>
                    <p>{{addr}}</p>
                    <img src="../../../assets/images/icon/addr.png"/>
                </li>
                <li class="mui-table-view-cell">
                    <span>直达:</span>
                    <p>深圳、东莞、佛山</p>
                </li>
                <li class="mui-table-view-cell">
                    <span>覆盖:</span>
                    <p>深圳、东莞、佛山全境</p>
                </li>
                <li class="mui-table-view-cell">
                    <span>公司介绍:</span>
                    <p>安全可靠，效率高</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Header from '../../sub/Theader1'
    export default{
        data(){
            return {
                list:[
                    {id:1,addr:"深圳网点",phone:"020-45641234",tphone:"13316221234",detail:"金鹏物流园北区11-12号"},
                    {id:2,addr:"东莞网点",phone:"020-45641234",tphone:"",detail:"金鹏物流园北区11-12号"}
                ],
                phone:"13710731247",
                tel:"020-12345678",
                addr:"白云区太和镇奇骏南物流园112档"

            }
        },
        components:{
            Header
        },
        created(){
            if(this.$store.state.isLogin=="未登录"){
                var a = this.$options.filters.hidephone(this.phone);
                var b = this.$options.filters.hidephone(this.tel);
                var c = this.$options.filters.HideAddr2(this.addr);
                this.phone=a;
                this.tel=b;
                this.addr=c;
            }
        }
    }
</script>
<style scoped>
 .banner{
     width:100%;
     height:320px;
     overflow: hidden;
     position: relative;
 }
 .banner img{
     position:absolute;
     width:100%;
     top:-55px;
 }
 .list{
     padding:0 24px;
 }
 .list .mui-table-view-divider{
	font-family: PingFang-SC-Bold;
	font-size: 48px;
    color:#000000;
    text-align: center;
    padding:41px 0;
 }
 .list .mui-table-view{
     padding:0 48px;
 }
 .list .mui-table-view-cell{
     margin-top:15px;
     height:85px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     border-bottom:1px solid #e5e5e5;
     padding-bottom:25px;
 }
 .list .mui-table-view .mui-table-view-cell>span:first-child{
     width:105px;
	 font-family: PingFang-SC-Medium;
	 font-size: 32px;
     color: #666464;
     word-break:keep-all;
     line-height: 150%;
     text-align-last:justify;
     text-align:justify;
     text-justify:distribute-all-lines; 
 }
 .list .mui-table-view .mui-table-view-cell>p:nth-child(2){
    width:405px;
	font-family: PingFang-SC-Medium;
	font-size: 32px;
    color:#000000;
    text-align: left;
    padding-left:55px;
    word-wrap: break-word;
    line-height: 40px;
 }
 .list .mui-table-view .mui-table-view-cell img{
     border-left:1px solid #e4e4e4;
     padding-left:25px;
     width: 65px;
 }
 .list .mui-table-view>.mui-table-view-cell:nth-child(6)>p:nth-child(2),.mui-table-view>.mui-table-view-cell:nth-child(7)>p:nth-child(2),.mui-table-view>.mui-table-view-cell:nth-child(8)>p:nth-child(2){
     width:495px;
 }
</style>
