<template>
    <div class="end">
        <Header></Header>
        <div class="select">
            <span>当前所选：</span>
            <div>
                <span :v-model="c1">{{c1}}</span>
                <span>-</span>
                <span :v-model="c2">{{c2}}</span>
                <span>-</span>
                <span :v-model="c3">{{c3}}</span>
            </div>
            <mt-button @click="submit()">确定</mt-button>
        </div>
        <div class="city">
            <div>
                <div class="city1" v-for="(item,index) in province" :key="index">
                    <div @click="choose(item)" :class="{'active':ind === item}">{{item.name}}</div>
                </div>
            </div>
            <div>
                <div class="city1" v-for="(item,index) in city" :key="index">
                    <div @click="choose2(item)" :class="{'active':ind2 === item}">{{item.name}}</div>
                </div>
                </div>
            <div>
                <div class="city1" v-for="(item,index) in area" :key="index">
                    <div @click="choose3(item)" :class="{'active':ind3 === item}">{{item}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../../sub/Theader'
 import { Toast } from 'mint-ui'
    export default{
        data(){
            return {
                ind:"",
                ind2:"",
                ind3:"",
                c1:"",
                c2:"",
                c3:"",
                province:[
                    {id:1,name:"广东",
                    city:[
                        {name:"清远",qu:["连州","清城区","清新县"]},
                        {name:"广州",qu:["越秀区","荔湾区","天河区","海珠区","白云区","番禺区"]},
                        {name:"佛山",qu:["禅城区","南海区"]}
                    ]
                    },
                    {id:1,name:"福建",
                    city:[
                        {name:"xxx",qu:["zz","qq","gg"]},
                        {name:"qqq",qu:["xx","rr","ll","bb"]},
                        {name:"ddd",qu:["cc","ff"]}
                    ]
                    },
                    {id:1,name:"上海",
                    city:[
                        {name:"xxx",qu:["zz","qq","gg"]},
                        {name:"qqq",qu:["xx","rr","ll","bb"]},
                        {name:"ddd",qu:["cc","ff"]}
                    ]
                    },
                    {id:1,name:"河北",
                    city:[
                        {name:"xxx",qu:["zz","qq","gg"]},
                        {name:"qqq",qu:["xx","rr","ll","bb"]},
                        {name:"ddd",qu:["cc","ff"]}
                    ]
                    },
                    {id:1,name:"吉林",
                    city:[
                        {name:"xxx",qu:["zz","qq","gg"]},
                        {name:"qqq",qu:["xx","rr","ll","bb"]},
                        {name:"ddd",qu:["cc","ff"]}
                    ]
                    }
                ],
                city:[],
                area:[]
            }
        },
        components:{
            Header
        },
        methods:{
            choose(item){
                this.ind=item;
                this.c1=item.name;
                this.city=[];
                this.area=[];
                for(var key in item.city){
                    this.city.push(item.city[key])
                }
            },
            choose2(item){
                this.ind2=item;
                this.c2=item.name;
                this.area=[];
                this.area=item.qu;
            },
            choose3(item){
                this.ind3=item;
                this.c3=item;
            },
            submit(){
                var end=this.c1+this.c2+this.c3;
                if(!this.c1||!this.c2||!this.c3){
                    Toast('请选择到达城市')
                }else{
                    if(this.$route.params.id==1){
                    this.$store.commit('zxEnd',end);
                    }else if(this.$route.params.id==2){
                    this.$store.commit('dcEnd',end);
                    }
                    this.$router.go(-1)
                }
            }
        }
    }
</script>
<style scoped>
  .end{
      background: #ffffff;
      height:1330px;
  }
  .select{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:16px 23px;
  }
  .select>span{
	font-family: PingFang-SC-Medium;
	font-size: 36px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #000000;
  }
  .select>div span{
	font-family: PingFang-SC-Medium;
	font-size: 36px;
	font-weight: normal;
	letter-spacing: 0px;
	color: #f26c60;
  }
  .select>button{
	width: 140px;
	height: 56px;
	background-color: #008a77;
	font-family: PingFang-SC-Medium;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #ffffff;
  }
  .city{
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      background: #ffffff;
  }
  .city>div{
      width:229px;
  }
  .city .city1:last-child{
      border-bottom:1px solid #e5e5e5;
  }
  .city1{
      display: flex;
      flex-direction: column;
      justify-content:start;
      align-items: center;
      width:240px;
      text-align: center;
      padding:18px 0;
      border-top:1px solid #e5e5e5;
      border-left: 1px solid #e5e5e5;
      border-right:1px solid #e5e5e5;
  }
  .city1>div{
	width: 214px;
	height: 66px;
    line-height: 66px;
	font-family: PingFang-SC-Medium;
	font-size: 36px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #000000;
  }
  .active{
      background: #008a77!important;
      color:#ffffff!important;
  }
</style>