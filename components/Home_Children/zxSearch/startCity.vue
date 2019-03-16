<template>
    <div class="start">
        <Header></Header>
        <div class="usual">常用城市</div>
        <div class="usualcity">
            <mt-button @click="choose($event.target.innerText)">深圳</mt-button>
            <mt-button @click="choose($event.target.innerText)">上海</mt-button>
            <mt-button @click="choose($event.target.innerText)">东莞</mt-button>
        </div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell" v-for="item in list" :key="item.id" @click="choose(item.city)">
                    <span>{{item.city}}</span>
                    <span>{{item.letter}}</span>
				</li>
			</ul>
    </div>
</template>
<script>
import Header from '../../sub/Theader'
    export default{
        data(){
            return {
                list:[
                    {id:1,city:"北京",letter:"A"},
                    {id:2,city:"上海",letter:"B"},
                    {id:3,city:"广州",letter:"C"},
                    {id:4,city:"深圳",letter:"D"},
                    {id:5,city:"四川",letter:"E"},
                    {id:6,city:"湖北",letter:"F"},
                    {id:7,city:"湖南",letter:"G"}
                ]
            }
        },
        components:{
            Header
        },
        methods:{
            choose(data){
                if(this.$route.params.id=="专线查询"){
                   this.$store.commit('zxStart',data);
                }else if(this.$route.params.id=="专业调车"){
                   this.$store.commit('dcStart',data);
                }
                this.$router.go(-1)
            }
        }
    }
</script>
<style scoped>
  .start{
      background: #ffffff;
      height:1330px;
  }
  .usual{
	font-family: PingFang-SC-Medium;
	font-size: 30px;
	line-height: 24px;
	color: #000000;
    padding:22px 23px;
  }
  .usualcity{
      display: flex;
      justify-content: start;
      align-items: center;
  }
  .usualcity button{
	width: 152px;
	height: 69px;
    text-align: center;
    line-height: 69px;
	background-color: #008a77;
	font-family: PingFang-SC-Medium;
	font-size: 37px;
	color: #ffffff;
    margin: 15px 17.5px;
  }
  .mui-table-view{
      padding:0 30px;
  }
  .mui-table-view-cell{
      height:100px;
      line-height: 100px;
      border-bottom:1px solid #e5e5e5;
      padding:0 23px;
      vertical-align: middle;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .mui-table-view-cell span:first-child{
	font-family: PingFang-SC-Medium;
	font-size: 36px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #000000;
  }
  .mui-table-view-cell span:last-child{
	font-family: PingFang-SC-Medium;
	font-size: 26px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #666464;
  }
</style>