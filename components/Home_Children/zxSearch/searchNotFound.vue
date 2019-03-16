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
        },
    }
</script>
<style scoped>
  .search{
      background: #ffffff;
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
  .search .notfound{
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
</style>