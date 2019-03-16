<template>
    <div class="carDetails">
        <Header></Header>
        <div class="banner">
           <img src="../../../assets/images/banner/banner3.png" class="banner-img"/>
           <img src="../../../assets/images/icon/good.png" class="good" @click="good"/>
        </div>
        <div class="list">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                    <span>联系人:</span>
                    <p>李力</p>
                    <img src="../../../assets/images/icon/like.png"/>
                </li>
                <li class="mui-table-view-cell">
                    <span>手机:</span>
                    <p>{{Phone}}</p>
                    <img src="../../../assets/images/icon/tphone.png" @click="call(Phone)"/>
                </li>
                <li class="mui-table-view-cell">
                    <span>地址:</span>
                    <p>{{Addr}}</p>
                    <img src="../../../assets/images/icon/addr.png"/>
                </li>
                <li class="mui-table-view-cell">
                    <span>车牌号:</span>
                    <p>{{car}}</p>
                </li>
                <li class="mui-table-view-cell">
                    <span>车型:</span>
                    <p>厢车</p>
                </li>
                <li class="mui-table-view-cell">
                    <span>车长:</span>
                    <p>3米</p>
                </li>
                <li class="mui-table-view-cell">
                    <span>载重:</span>
                    <p>30吨</p>
                </li>
                <li class="mui-table-view-cell">
                    <span>可跑范围:</span>
                    <p>广州、深圳、佛山</p>
                </li>
            </ul>
        </div>
        <MsgBox :class="{'visable':hide}" :int="int" @listen="showListen"></MsgBox>
    </div>
</template>
<script>
import Header from '../../sub/Theader1'
import MsgBox from '../../sub/MsgBox'
import {Toast} from 'mint-ui'
    export default{
        data(){
            return {
                hide:true,
                int:0,
                Phone:"13710731247",
                Addr:"广州白云大道北",
                car:"粤A123456"
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
            },
            good(){
                Toast('谢谢点赞')
            }
        },
        created(){
            if(this.$store.state.isLogin=="未登录"){
                var a = this.$options.filters.hidephone(this.Phone);
                var b = this.$options.filters.HideAddr2(this.Addr);
                var c = this.$options.filters.HideAddr2(this.car);
                this.Phone=a;
                this.Addr=b;
                this.car=c;
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
 .banner-img{
     position:absolute;
     width:100%;
     bottom:0;
 }
 .banner .good{
     position: absolute;
     z-index: 200;
     bottom:15px;
     right:30px;
	 width: 52px;
	 height: 51px;

 }
 .list{
     padding:0 24px;
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
 .list .mui-table-view .mui-table-view-cell>p{
    width:495px;
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
 .visable{
     display:none
 }
</style>