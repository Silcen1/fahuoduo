<template>
    <div class="line">
        <Header></Header>
        <div class="banner">
           <img src="../../../assets/images/banner/banner3.png"/>
        </div>
        <div class="list">
            <ul class="mui-table-view">
                <li class="mui-table-view-divider" v-if="`${this.$route.meta.title}`=='车厢定制详情'||`${this.$route.meta.title}`=='物流园详情'||`${this.$route.meta.title}`=='物流搬运详情'||`${this.$route.meta.title}`=='物流招聘详情'||`${this.$route.meta.title}`=='金融服务详情'||`${this.$route.meta.title}`=='印刷服务'">广州市欣欣物流有限公司</li>
                <li class="mui-table-view-cell">
                    <span>联系人：</span>
                    <p>李力</p>
                    <img src="../../../assets/images/icon/like.png"/>
                </li>
                <li class="mui-table-view-cell" v-if="`${this.$route.meta.title}`=='物流园详情'||`${this.$route.meta.title}`=='物流搬运详情'">
                    <span>招商手机：</span>
                    <p>{{ZhaoShangPhone}}</p>
                    <img src="../../../assets/images/icon/tphone.png" @click="call(ZhaoShangPhone)"/>
                </li>
                <li class="mui-table-view-cell" v-if="`${this.$route.meta.title}`=='调车详情'||`${this.$route.meta.title}`=='叉车出售详情'||`${this.$route.meta.title}`=='车厢定制详情'||`${this.$route.meta.title}`=='油卡出售详情'||`${this.$route.meta.title}`=='档口转让详情'||`${this.$route.meta.title}`=='物流招聘详情'||`${this.$route.meta.title}`=='金融服务详情'||`${this.$route.meta.title}`=='印刷服务'">
                    <span>手机：</span>
                    <p>{{Phone}}</p>
                    <img src="../../../assets/images/icon/tphone.png" @click="call(Phone)"/>
                </li>
                <li class="mui-table-view-cell" v-if="`${this.$route.meta.title}`=='调车详情'||`${this.$route.meta.title}`=='印刷服务'||`${this.$route.meta.title}`=='叉车出售详情'">
                    <span>电话：</span>
                    <p>{{Tel}}</p>
                    <img src="../../../assets/images/icon/phone.png" @click="call(Tel)"/>
                </li>
                <li class="mui-table-view-cell" v-if="`${this.$route.meta.title}`=='油卡出售详情'">
                    <span>类型：</span>
                    <p>中国石化加油卡</p>
                    <img src="../../../assets/images/icon/phone.png"/>
                </li>
                <li class="mui-table-view-cell" v-if="`${this.$route.meta.title}`=='物流招聘详情'">
                    <span>招聘职位：</span>
                    <p>司机</p>
                    <img src="../../../assets/images/icon/phone.png"/>
                </li>
                <li class="mui-table-view-cell" v-if="`${this.$route.meta.title}`=='物流园详情'||`${this.$route.meta.title}`=='物流搬运详情'">
                    <span>招商电话：</span>
                    <p>{{ZhaoShangTel}}</p>
                    <img src="../../../assets/images/icon/phone.png"  @click="call(ZhaoShangTel)"/>
                </li>
                <li class="mui-table-view-cell" v-if="`${this.$route.meta.title}`=='车厢定制详情'">
                    <span>车厢类型：</span>
                    <p>8米</p>
                </li>
                <li class="mui-table-view-cell">
                    <span>地址：</span>
                    <p>{{Addr}}</p>
                    <img src="../../../assets/images/icon/addr.png"/>
                </li>
                <li class="mui-table-view-cell" v-if="`${this.$route.meta.title}`=='调车详情'">
                    <span>调车范围：</span>
                    <p>深圳、东莞、佛山</p>
                </li>
                <li class="mui-table-view-cell" v-if="`${this.$route.meta.title}`=='调车详情'">
                    <span>自备车型：</span>
                    <p>面包车、小货车、三轮车、平板车</p>
                </li>
                <li class="mui-table-view-cell" v-if="`${this.$route.meta.title}`=='叉车出售详情'">
                    <span>出售范围：</span>
                    <p>广州北京</p>
                </li>
                <li class="mui-table-view-cell" v-if="`${this.$route.meta.title}`=='油卡出售详情'">
                    <span>折扣：</span>
                    <p>9折</p>
                </li>
                <li class="mui-table-view-cell" v-if="`${this.$route.meta.title}`=='物流园详情'">
                    <span>招商园区：</span>
                    <p>广州白云区物流园</p>
                </li>
                <li class="mui-table-view-cell" v-if="`${this.$route.meta.title}`=='物流搬运详情'">
                    <span>运输范围：</span>
                    <p>广州北京</p>
                </li>
                <li class="mui-table-view-cell" v-if="`${this.$route.meta.title}`=='叉车出售详情'||`${this.$route.meta.title}`=='档口转让详情'||`${this.$route.meta.title}`=='车厢定制详情'">
                </li>
            </ul>
        </div>
        <div class="push" v-if="`${this.$route.meta.title}`=='物流园详情'||`${this.$route.meta.title}`=='档口转让详情'||`${this.$route.meta.title}`=='印刷服务'||`${this.$route.meta.title}`=='油卡出售详情'">
            <img src="../../../assets/images/icon/down.png"/>
            <span>资料详情</span>
            <img src="../../../assets/images/icon/up.png"/>
        </div>
        <div class="push" v-if="`${this.$route.meta.title}`=='叉车出售详情'||`${this.$route.meta.title}`=='车厢定制详情'||`${this.$route.meta.title}`=='物流搬运详情'||`${this.$route.meta.title}`=='物流招聘详情'||`${this.$route.meta.title}`=='金融服务详情'">
            <img src="../../../assets/images/icon/down.png"/>
            <span>详情说明</span>
            <img src="../../../assets/images/icon/up.png"/>
        </div>
        <div class="addr">
            <ul class="mui-table-view" v-for="item in list" :key="item.id">
            <li class="mui-table-view-divider" v-if="`${$route.meta.title}`=='叉车出售详情'||`${$route.meta.title}`=='车厢定制详情'||`${$route.meta.title}`=='物流园详情'||`${$route.meta.title}`=='物流搬运详情'||`${$route.meta.title}`=='物流招聘详情'||`${$route.meta.title}`=='金融服务详情'||`${$route.meta.title}`=='档口转让详情'||`${$route.meta.title}`=='油卡出售详情'">
                <div>{{item.addr}}</div>
            </li>
			<li class="mui-table-view-divider" v-if="`${$route.meta.title}`=='印刷服务'">
                <img v-lazy="item.url"/>
            </li>
            </ul>
        </div>
        <MsgBox :class="{'visable':hide}" :int="int" @listen="showListen"></MsgBox>
    </div>
</template>
<script>
import Header from '../../sub/Theader1'
import MsgBox from '../../sub/MsgBox'
    export default{
        data(){
            return {
                ZhaoShangPhone:"13710731247",
                Phone:"13710731247",
                Tel:"020-12345678",
                ZhaoShangTel:"020-12345678",
                Addr:"白云区太和镇奇骏南物流园112档",
                list:[
                    {id:1,addr:"a档口100㎡出售、b档口50㎡转租",url:require('../../../assets/images/banner/banner4.png')}
                ],
                hide:true,
                int:0
            }
        },
        components:{
            Header,MsgBox
        },
        methods:{
            call(data){
                if(this.hide==true){  /* 如果MsgBox正在隐藏 */
                    this.hide=false;  /* 显示MsgBox */
                    this.stop()       /* 调用禁用滑动事件 */
                    this.int=data        /* 向子组件MsgBox传递数值 */
                }
            },
            showListen(data){
                this.hide=true
                this.move()
            },
            FromShare(data){
                if(this.hide==false){ /* 点击分享，子组件Header触发这个判断，如果MsgBox没有隐藏，则改成隐藏并禁止滑动 */
                    this.hide=true;
                    this.stop()
                }else if(data===1){  /* 如果子组件Header传来1，恢复滑动 */
                    this.move()
                }else if(data===0){  /* 如果子组件Header传来0，禁止滑动 */
                    this.stop()
                }
            },
            stop(){  /* 禁用滑动 */
                var mo=function(e){e.preventDefault();};
                document.body.style.overflow='hidden';
                document.addEventListener("touchmove",mo,false);
            },
            move(){ /* 启用滑动 */
                var mo=function(e){e.preventDefault();};
                document.body.style.overflow='';
                document.removeEventListener("touchmove",mo,false);
            }
        },
        created(){
            if(this.$store.state.isLogin=="未登录"){
                var a = this.$options.filters.hidephone(this.ZhaoShangPhone);
                var b = this.$options.filters.hidephone(this.Phone);
                var c = this.$options.filters.hidephone(this.Tel);
                var d = this.$options.filters.hidephone(this.ZhaoShangTel);
                var e = this.$options.filters.HideAddr2(this.Addr);
                this.ZhaoShangPhone=a;
                this.Phone=b;
                this.Tel=c;
                this.ZhaoShangTel=d;
                this.Addr=e;
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
     bottom:0;
 }
 .list{
     overflow: hidden;
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
     padding:0 24px;
 }
 .list .mui-table-view-cell{
     margin-top:15px;
     height:85px;
     display: flex;
     justify-content: start;
     align-items: center;
     border-bottom:1px solid #e5e5e5;
     padding-bottom:25px;
 }
 .list .mui-table-view .mui-table-view-cell>span:first-child{
     width:150px;
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
    width:414px;
	font-family: PingFang-SC-Medium;
	font-size: 32px;
    color:#000000;
    text-align: left;
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
 .push{
     height:80px;
     width:100%;
     background: #06ccb1;
     display:flex;
     justify-content: space-around;
     align-items: center;
 }
 .push img{
     width:21px;
     height:32px;
 }
 .push span{
	font-family: PingFang-SC-Bold;
	font-size: 36px;
    color:#ffffff;
 } 
 .addr{
     width:100%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
 }
 .addr .mui-table-view{
     width:705px;
     margin-bottom:50px;
     border-radius:0 0 16px 16px;
     overflow: hidden;
 }
 .addr .mui-table-view .mui-table-view-divider>img{
     width: 100%;
 }
 .addr .mui-table-view .mui-table-view-divider>div{
	font-family: PingFang-SC-Medium;
	font-size: 32px;
    color:#000000;
    line-height:45px;
    padding: 40px 48px;
    background:#ffffff;
 }
 .visable{
     display:none;
 }
</style>
