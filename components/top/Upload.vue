<template>
  <div class="app-upload">
    <!-- 上传图片 -->
    <div class="picture">
      <div class="bar"></div>
      <span>上传图片</span>
    </div>
    <div class="upload">
      <!-- <div class="bar"></div>
      <span>上传图片</span>-->
      <el-form>
        <el-form-item label="点击添加详情图" class="add">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt>
          </el-dialog>
        </el-form-item>
      </el-form>
    </div>
    <!-- 确定按钮 -->
    <!-- <div class="sure">
       <button @click="go">确定</button>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
         dialogImageUrl:'',
         dialogVisible:false
    }
  },
  methods:{
       handleRemove(file,fileList){
      console.log(file,fileList);
    },
    handlePictureCardPreview(file){
      this.dialogImageUrl=file.url;
      this.dialogVisible=true;
    },
    // handle(){
    //   this.$router.push('/major')
    // },
     
  }
};
</script>

<style scoped>
/* 上传图片 */
.upload {
  height: 320px;
  width: 702px;
  background-color: #ffffff;
  margin: 23px 0 0 24px;
  padding-top: 100px;
  /* padding-left:180px; */
}
.picture {
  position: relative;
}
.picture span {
  width: 210px;
  height: 40px;
  font-size: 42px;
  font-family: PingFang-SC-Bold;
  line-height: 40px;
  color: #000000;
  padding-left: 30px;
  position: absolute;
  top: 30px;
}
.bar {
  width: 4px;
  height: 40px;
  background-color: #06ccb1;
  position: absolute;
  top: 30px;
}
.sure{
    width: 654px;
	height: 88px;
	background-color: #06ccb1;
	border-radius: 8px;
    margin:40px 0 50px 50px;
}
.sure button{
	font-family: PingFang-SC-Medium;
	font-size: 36px;
	line-height: 26px;
    background-color: #06ccb1;
    color:#ffffff;
    padding-left:300px;
    padding-top:27px;
}
</style>