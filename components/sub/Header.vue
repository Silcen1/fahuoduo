<template>
    <div class="head">
    <mt-header :title="`${this.$route.meta.title}`" class="HeadT">
        <mt-button slot="right">
          <img src="../../assets/images/icon/bread.png"/>
        </mt-button>
    </mt-header>
    </div>
</template>
<script>
    export default{}
</script>
<style scoped>
.head .HeadT{
  font-size: 36px!important;
}
.head .mint-header{
  background-color: #06ccb1;
  height:80px;
}
.mint-button img{
  width:38px;
  margin-right:45px;
}
</style>