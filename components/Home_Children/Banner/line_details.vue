<template>
    <div class="line">
        <Header @toFather="FromShare"></Header>
        <div class="banner">
           <img src="../../../assets/images/banner/banner1.png"/>
        </div>
        <div class="list">
            <ul class="mui-table-view">
                <li class="mui-table-view-divider">{{msg.company}}</li>
                <li class="mui-table-view-cell">
                    <span>联系人:</span>
                    <p>{{msg.who}}</p>
                    <img src="../../../assets/images/icon/like.png"/>
                </li>
                <li class="mui-table-view-cell">
                    <span>手机:</span>
                    <p>{{msg.phone}}</p>
                    <img src="../../../assets/images/icon/tphone.png" @click="call(msg.phone)"/>
                </li>
                <li class="mui-table-view-cell">
                    <span>电话:</span>
                    <p>{{msg.tel}}</p>
                    <img src="../../../assets/images/icon/phone.png" @click="check(msg.tel)"/>
                </li>
                <li class="mui-table-view-cell">
                    <span>地址:</span>
                    <p>{{msg.addr|HideAddr1}}</p>
                    <img src="../../../assets/images/icon/addr.png"/>
                </li>
                <li class="mui-table-view-cell">
                    <span>直达:</span>
                    <p>{{msg.target}}</p>
                </li>
                <li class="mui-table-view-cell">
                    <span>覆盖:</span>
                    <p>{{msg.com}}</p>
                </li>
                <li class="mui-table-view-cell">
                    <span>返回路线:</span>
                    <p>{{msg.back}}</p>
                </li>
            </ul>
        </div>
        <div class="push">
            <img src="../../../assets/images/icon/down.png"/>
            <span>卸货网点</span>
            <img src="../../../assets/images/icon/up.png"/>
        </div>
        <div class="addr">
            <ul class="mui-table-view" v-for="item in msg.list" :key="item.id">
            <li class="mui-table-view-divider">{{item.addr}}:</li>
				 <li class="mui-table-view-cell">
                    <span>电话:</span>
                    <p>{{item.phone}}</p>
                 </li>
		         <li class="mui-table-view-cell" v-if="item.tphone">
                    <span>手机:</span>
                    <p>{{item.tphone}}</p>
                 </li>
		         <li class="mui-table-view-cell">
                    <span>地址:</span>
                    <p>{{item.detail}}</p>
                 </li>
			</ul>
        </div>
        <MsgBox :class="{'visable':hide}" :int="[int,id,tip]" @listen="showListen"></MsgBox>
    </div>
</template>
<script>
import Header from '../../sub/Theader1'
import MsgBox from '../../sub/MsgBox'
    export default{
        data(){
            return {
                msg:{
                    company:"广州市欣欣物流有限公司",
                    who:"李力",
                    phone:"13710731247",
                    tel:"020-12345678",
                    addr:"白云区太和镇奇骏南物流园112档",
                    target:"深圳、东莞、佛山",
                    com:"深圳、东莞、佛山全境",
                    back:"广州-东莞-惠州-深圳-佛山",
                    list:[
                        {id:1,addr:"深圳网点",phone:"020-45641234",tphone:"13316221234",detail:"金鹏物流园北区11-12号"},
                        {id:2,addr:"东莞网点",phone:"020-45641234",tphone:"",detail:"金鹏物流园北区11-12号"}
                    ]
                },
                hide:true,
                int:0,
                tip:'',
                id:0
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
            check(data){
                if(this.$store.state.isLogin=="未登录"){
                    if(this.hide==true){  /* 如果MsgBox正在隐藏 */
                        this.hide=false;  /* 显示MsgBox */
                        this.stop()       /* 调用禁用滑动事件 */
                        this.int=data        /* 向子组件MsgBox传递数值 */
                    }

                }else if(this.$store.state.isLogin=="已登录"){
                if(this.hide==true){  /* 如果MsgBox正在隐藏 */
                    this.hide=false;  /* 显示MsgBox */
                    this.stop()       /* 调用禁用滑动事件 */
                    this.int=data        /* 向子组件MsgBox传递数值 */
                    this.id=1
                    this.tip="请拨打下方电话联系平台进行资料认证，认证通过后将显示完整内容"
                }
                }
            },
            showListen(data){
                this.hide=true;
                this.move();
                this.id=0;
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
                var a = this.$options.filters.hidephone(this.msg.phone);
                var b = this.$options.filters.hidephone(this.msg.tel);
                var c = this.$options.filters.HideAddr2(this.msg.addr);
                this.msg.phone=a;
                this.msg.tel=b;
                this.msg.addr=c;
                for(var key in this.msg.list){
                    var list_phone=this.$options.filters.hidephone(this.msg.list[key].phone);
                    var list_tphone=this.$options.filters.hidephone(this.msg.list[key].tphone);
                    var list_detail=this.$options.filters.HideAddr1(this.msg.list[key].detail);
                    this.msg.list[key].phone=list_phone;
                    this.msg.list[key].tphone=list_tphone;
                    this.msg.list[key].detail=list_detail;
                }
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
     background: #f9f9f9;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
 }
 .addr .mui-table-view{
     width:705px;
     margin-bottom:50px;
     border-radius: 16px;
     padding:0 48px;
 }
 .addr .mui-table-view .mui-table-view-divider{
	font-family: PingFang-SC-Medium;
	font-size: 36px;
    color:#000000;
    padding: 40px 0;
    background:#ffffff;
 }
 .addr .mui-table-view-cell{
     height:80px;
     border-bottom:1px solid #e5e5e5;
     line-height: 80px;
     display: flex;
     justify-content: space-between;
     align-items: center;
 }
 .addr .mui-table-view .mui-table-view-cell>span:first-child{
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
 .addr .mui-table-view .mui-table-view-cell>p:nth-child(2){
    width:495px;
	font-family: PingFang-SC-Medium;
	font-size: 32px;
    color:#000000;
    text-align: left;
    padding-left:55px;
    word-wrap: break-word;
    line-height: 40px;
 }
.visable{
  display: none;
}
</style>
