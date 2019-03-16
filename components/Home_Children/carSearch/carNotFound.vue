<template>
    <div class="carnotfound">
        <Header></Header>
        <div class="select">
            <div class="city">
                <div>城市：</div>
                <select class="mui-btn mui-btn-block">
                <option value="item-1">item-1</option>
                <option value="item-2">item-2</option>
                <option value="item-3">item-3</option>
                <option value="item-4">item-4</option>
                <option value="item-5">item-5</option>
            </select>
            </div>
            <div class="city">
                <div>车型：</div>
                <select class="mui-btn mui-btn-block">
                <option value="item-1">item-1</option>
                <option value="item-2">item-2</option>
                <option value="item-3">item-3</option>
                <option value="item-4">item-4</option>
                <option value="item-5">item-5</option>
            </select>
            </div>
            <div class="city">
                <div>车长：</div>
                <select class="mui-btn mui-btn-block">
                <option value="item-1">item-1</option>
                <option value="item-2">item-2</option>
                <option value="item-3">item-3</option>
                <option value="item-4">item-4</option>
                <option value="item-5">item-5</option>
            </select>
            </div>
        </div>
        <div class="notfound">暂无查询结果</div>
    </div>
</template>
<script>
import Header from '../../sub/Theader'
    export default{
        data(){
            return {
            }
        },
        components:{
            Header
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
.carnotfound .notfound{
    position: absolute;
    margin:auto;
    top:50%;
    bottom:0;
    left:0;
    right:0;
    text-align: center;
	font-family: PingFang-SC-Medium;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 24px;
	letter-spacing: 0px;
	color: #666464;
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
</style>