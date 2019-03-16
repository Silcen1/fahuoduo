<template>
    <div class="only">
        <Header></Header>
        <div class="banner">
           <img src="../../../assets/images/banner/banner2.png"/>
        </div>
        <div class="trval">
            <div @click="start()">
               <p>出发城市</p>
               <img src="../../../assets/images/icon/bottom.png"/>
            </div>
            <div @click="end()">
               <p>到达城市</p>
               <img src="../../../assets/images/icon/bottom.png"/>
            </div>
        </div>
        <div class="city">
            <div @click="start()"  v-text="this.$route.meta.title=='专线查询'? this.$store.state.zxStartCity:this.$store.state.dcStartCity"></div>
            <img src="../../../assets/images/icon/double.png"/>
            <div @click="end()" v-text="this.$route.meta.title=='专线查询'? this.$store.state.zxEndCity:this.$store.state.dcEndCity"></div>
        </div>
        <div class="btn">
            <mt-button type="danger" @click="search()">
            <img src="../../../assets/images/icon/search.png"/>
            <span>查询</span>
            </mt-button>
            <mt-button>
            <img src="../../../assets/images/icon/voice.png"/>
            <span>语音</span>
            </mt-button>
        </div>
        <div class="tip">
            <p>语音使用说明</p>
            <div class="tip1">
                <div class="tip1-1">语音示例：</div>
                <div class="tip1-2">
                    <div>广州到北京</div>
                    <div>广州至北京</div>
                    <div>广州市到北京市</div>
                </div>
                <div class="tip1-3">
                    <img src="../../../assets/images/icon/true.png"/>
                    <img src="../../../assets/images/icon/true.png"/>
                    <img src="../../../assets/images/icon/false.png"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../../sub/Theader'
    export default{
        data(){
            return {
                msg:"aasdfasfasfas"
            }
        },
        components:{
            Header
        },
        methods:{
            start(){
                if(this.$route.meta.title=="专线查询"){
                this.$router.push('/home/onlyline/startcity/专线查询')
                }else if(this.$route.meta.title=="专业调车"){
                this.$router.push('/home/onlyline/startcity/专业调车')
                }
            },
            end(){
                if(this.$route.meta.title=="专线查询"){
                this.$router.push({
                    path:'/home/onlyline/endcity/1'
                })
                }else if(this.$route.meta.title=="专业调车"){
                this.$router.push({
                    path:'/home/onlyline/endcity/2'
                })
                }
            },
            search(){
                if(this.$route.meta.title=="专线查询"){
                this.$router.push('/home/onlyline/search')
                }
                else if(this.$route.meta.title=="专业调车"){
                this.$router.push('/home/carlist')
                }
            }
        }
    }
</script>
<style scoped>
 .only{
     background:#ffffff;
     height:1335px;
 }
 .banner{
     width:100%;
     height:320px;
     overflow: hidden;
     position: relative;
 }
 .banner img{
     position:absolute;
     width:100%;
 }
 .trval{
     height:100px;
     width: 100%;
     display: flex;
     justify-content: space-between;
     align-items: center;
 }
 .trval>div{
     width:350px;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items: center;
     height: 80%;
 }
 .trval>div>p{
	font-family: PingFang-SC-Medium;
	font-size: 26px;
	color: #666464;
 }
 .trval>div>img{
	width: 28px;
	height: 14px;
 }
 .city{
     height:100px;
     width: 100%;
     display: flex;
     justify-content: space-around;
     align-items: center;
     padding:0 20px;
 }
 .city>img{
	width: 67px;
	height: 39px;
 }
 .city div{
    text-align: center;
    word-break: keep-all;
    white-space: nowrap;
    text-overflow:ellipsis;
	font-family: PingFang-SC-Bold;
	font-size: 62px;
	color: #f26c60;
 }
 .btn{
     margin-top:60px;
     width:100%;
     height:240px;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: center;
 }
 .btn>button{
     width:630px;
     height:100px;
     border-radius: 16px;
	font-family: PingFang-SC-Medium;
	font-size: 42px;
	color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
 }
 .btn>button img{
	width: 39px;
    margin-right:18px;
    vertical-align: middle;
 }
 .btn>button:nth-child(2){
     background: #06ccb1;
 }
 .tip>p{
     padding:66px 76px;
     font-size:32px;
     text-align: left;
     font-family:PingFang-SC-Medium;
     color:#000000;
 }
 .tip1{
     display:flex;
     justify-content: start;
     align-items: flex-start;
     padding:0 76px;
 }
 .tip1-1{
     font-size:32px;
     line-height: 37px;
     text-align: left;
     font-family:PingFang-SC-Medium;
     color:#000000;
 }
 .tip1-2{
     width:250px;
     height:170px;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content:space-between;
 }
 .tip1-2 div:first-child,.tip1-2 div:nth-child(2){
     font-size:32px;
     text-align: left;
     font-family:PingFang-SC-Medium;
     color:#008a77;
     line-height: 37px;
 }
 .tip1-2 div:last-child{
     font-size:32px;
     text-align: left;
     font-family:PingFang-SC-Medium;
     color:#666464;
     line-height: 37px;
 }
 .tip1-3{
     height:170px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content:space-between;
 }
 .tip1-3 img{
     width:37px;
 }
</style>