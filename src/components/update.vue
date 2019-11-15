<template>
  <div class="box">

    <div class="content">
      <div class="top">
        <p >修改头像</p>
        <div class="right" @click="show">
           <span class="img"><i class="iconfont icon-touxiang"></i></span>
          <em><i class="iconfont icon-dayuhao"></i></em>
        </div>
    </div>
    <mt-popup v-model="popupVisible"  position="middle" class="cover">
        <!-- <h1>拍摄照片</h1>
        <h1>选择手机中的照片</h1> -->
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
           <h1>选择手机中的照片</h1>
        </el-upload>
    </mt-popup>

   <div class="bottom">
     <div class="top top2">
         <p class="p1">昵称</p>
         <div class="right">
            <span class="img img1">{{this. value}}</span>
            <em><i class="iconfont icon-dayuhao"></i></em>
         </div>
     </div>
     <div class="top top2">
         <p class="p1">性别</p>
         <div class="right">
            <span class="img img1">保密</span>
            <em><i class="iconfont icon-dayuhao"></i></em>
         </div>
     </div>
     <div class="top top2">
         <p class="p1">生日</p>
         <div class="right" @click="this.startTime">
            <span class="img img1">去填写吧</span>
            <em><i class="iconfont icon-dayuhao"></i></em>
         </div>
     </div>
    <mt-datetime-picker ref="pickerStartTime" type="datetime" v-model="pickerValueStartTime" @confirm="this.handleConfirmStartTime"></mt-datetime-picker>
   
     <div class="top top2">
         <p class="p1">地区</p>
         <div class="right">
            <span class="img img1">去填写</span>
            <em><i class="iconfont icon-dayuhao"></i></em>
         </div>
     </div>
     <div class="top top2">
         <p class="p1">简介</p>
         <div class="right">
            <span class="img img1">介绍一下自己吧</span>
            <em><i class="iconfont icon-dayuhao"></i></em>
         </div>
     </div>
   </div>
   <div class="footer">
       <h6 @click="retre">退出登录</h6>
   </div>
</div>


</div>
</template>
<script>
 import { Popup } from 'mint-ui';
export default{
	name:'update',
	//从后端获取轮播图的图片（动态的数据）
      data(){
        return{
        value:'',
        popupVisible:false,
         imageUrl: '',
         pickerValueStartTime: ''
        }
      },
      methods:{
        retre(){
            window.localStorage.clear();
           // window.localStorage.setItem("userName","");
        },
         handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
              },
              beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                  this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                  this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
              },

        show(){
        	this.popupVisible=true
        },
        hiddenShare(){
        	this.popupVisible=false
        },
        startTime () {
          this.$refs.pickerStartTime.open()
        },
        handleConfirmStartTime () {
          console.log(this.pickerValueStartTime)
        }
      },
      components:{
       Popup
      },
      created(){
        this. value=JSON.parse(localStorage.getItem('userName'));
        console.log(this. value);

      }
  }

</script>
<style scoped>
  .avatar-uploader{
    width:100%;
    margin:0 auto;
    text-align: center;

  }
  .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
    position: relative;
      overflow: hidden;
     width:.78rem;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      margin-top:5px;
      background:#f1f1f1;
      border:1px solid #f3f0f0;
      display: inline-block;
      font-size: 28px;
      color: #8c939d;
      width: .78rem;
      height: .78rem;
      line-height: .78rem;
      text-align: center;

    }
    .avatar {
      width: .78rem;
      height: .78rem;
      display: block;
    }
  .cover{
    width:2.94rem;
    height:1.32rem;
    border-radius: .1rem;
  }
h1{
   font-weight: normal;
  font-size:.17rem ;
  height:0.46rem;
  color:#6c6c6c;
  width:100%;
  text-align: center;
  line-height:.46rem ;
}
  .footer{
    margin-top:.16rem;
    background: #fff;
    width:100%;
    height:.55rem;

  }
  h6{
    font-weight: normal;
    width:100%;
    height:100%;
    text-align: center;
    line-height:.55rem;
    color:#eb5856;
    font-size:.15rem;
  }

.box{
  width:100%;
  height:100%;

border-top:1px solid #dedede;
}
.content{

  width:100%;
  margin:0 auto;
}
.top{
 padding:0 .26rem;
  width:3.3rem;
  height:.55rem;
  line-height: .55rem;
  background: #fff;
}
p{
  color:#404040;
  font-size:.16rem;
  text-align: center;
  line-height:.55rem;
  font-weight: bold;
  float: left;
  display: inline-block;
}
.right{
  display: inline-block;
  float: right;
}
.img{
  display: inline-block;
height:100%;
}
.iconfont{
  color:16px;
  font-size:16px;
color:#989898;
  display: inline-block;
}
.img img{
  width:.22rem;
  height:.3rem;
}
.label img{
   display: inline-block;
   width:16px;
   height:20px;
}
.bottom{
  width:100%;
margin-top:.1rem;
}
.top2{
  line-height: .53rem;
  height:.53rem;
}
.p1{
  color:#8f8f8f;
  font-size:.16rem;
  text-align: center;
  line-height:.53rem;
  font-weight: bold;
  float: left;
  display: inline-block;
}
.label1{
  height:100%;
  line-height: .53rem;
}
.label1 img{
  line-height: .53rem;
  }

.icon-touxiang{
  font-size:.22rem;
  color:#e6e6e6;
}

</style>
