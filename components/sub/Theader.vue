<template>
    <div class="head">
    <mt-header :title="`${this.$route.meta.title}`" class="HeadT">
        <mt-button slot="left" @click="back()">
          <img src="../../assets/images/icon/back.png"/>
        </mt-button>
    </mt-header>
    </div>
</template>
<script>
  export default{
    data(){
      return{
        show:"false"
      }
    },
    methods:{
      back(){
        if(this.$route.meta.title=="专线查询"||this.$route.meta.title=="专业调车"){
          this.$router.push('/')
        }else{
        this.$router.go(-1)
        }
      }
    }
  }    
</script>

<style scoped>
.head{
  /* position: fixed; */
  width:100%;
  z-index: 2007;
  top:0;
}
.head .HeadT{
  font-size: 36px!important;
}
.head .Config{
  margin-right:45px;
}
.head .mint-header{
  background-color: #06ccb1;
  height:80px;
}
.head button{
  padding:0 15px;
}
.head img{
  width:27px;
  height:33px;
}
</style>