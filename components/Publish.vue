<template>
  <div class="publish">
      <Header></Header>
      <div class="textarea-all"> 
        <textarea name="" id="" placeholder="请输入你要发布的内容：" maxlength="60" v-model="font_num" v-on:keyup="change_font"></textarea>
        <div class="textarea-font-num">{{font_number}}/60</div>
      </div>
      <p class="hint-all">温馨提示：信息发布成功后，只在平台保留<span class="hint-all-time">24小时</span></p>
      <div class="make-sure-publish" @click="sure_publish">确认发布</div>
  </div>
</template>

<script>
import Header from './sub/Header'
import { MessageBox } from 'mint-ui';
export default {
  data(){
    return{
      font_num:"",
      font_number:0,
    }
  },
  methods:{
    sure_publish:function(){
      if(this.font_num.replace(/\s+/g, '').length==0){
        this.$toast({
          message: '请输入发布内容',
          position: 'middle',
          duration: 3000
        });
      }else{
        MessageBox('提示', '操作成功');
      }
    },
    change_font:function(){
      this.font_number=this.font_num.length;
    }

  },
  components:{
    Header
  }
}

</script>
<style scoped>
.textarea-all{
  width: 677px;
  height: 303px;
  margin: 0 auto;
  display: block;
  position: relative;
}
textarea{
	box-shadow: 0px 0px 35px 0px 
		rgba(209, 209, 209, 0.35);
  width: 650px;
  height: 303px;
  border: none;
  outline: none;
  margin: 0 auto;
  margin-top: 30px;
  padding-left: 27px;
  padding-top: 27px;
  color: #999999;
}
textarea::-webkit-input-placeholder{
    color:#999999;
}
textarea::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#999999;
}
textarea:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#999999;
}
textarea:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
    color:#999999;
}
.textarea-font-num{
  color: #656565;
  position: absolute;
  right: 25px;
  top: 300px;
}
.hint-all{
  margin-top: 100px;
  text-align: center;
}
.hint-all-time{
  color: #018b77;
}
.make-sure-publish{
  width: 654px;
	height: 88px;
	background-color: #06ccb1;
	border-radius: 16px;
  text-align: center;
  line-height: 88px;
  color: #ffffff;
	font-size: 28px;
  position: fixed;
  bottom: 155px;
  left: 48px;
}
.mint-msgbox-wrapper{
  height: 400px!important;
  color: red!important;
}
.mint-msgbox{
  height: 400px!important;
  color: red!important;
}
.mint-msgbox-header{
  height: 400px!important;
  color: red!important;
}
</style>