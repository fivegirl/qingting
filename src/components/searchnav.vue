<!--
 * @Author: your name
 * @Date: 2019-11-09 10:51:33
 * @LastEditTime: 2019-11-14 23:58:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\pages\playpage.vue
 -->
<template>
    <div class="box">
        <div class="nav">
            <a href="#">
                全部
                <span></span>
            </a>
            <a href="#">专辑</a>
            <a href="#">主播</a>
            <a href="#">广播</a>
            <a href="#">节目</a>
        </div>
        <div class="det" v-for="(content,index) in contents" :key="index">
            <div class="left">
                <img :src="content.goodImg">
            </div>
            <div class="right">
                <p>{{content.goodName}}</p>
                <p>{{content.goodIntro}}</p>
                <p class="icon">
                    <i class="el-icon-caret-right"></i>
                    <span>{{content.goodPoint}}</span>
                    <i class="el-icon-date"></i>
                    <span>{{content.goodDate}}</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'newpers',
  data () {
    return {
        contents:[]
    }
  },
  created(){
      fetch('/api/ct')
      .then(res=>{
          return res.json();
      })
      .then(data=>{
          this.contents = data;
      })
      .catch(err=>{
          console.log(err);
      })
  }
}
</script>
<style scoped>
.box{
    width:100%;
}
.nav{
    width:100%;
    height:.57rem;
    /* background-color:coral; */
    display:flex;
    justify-content: space-around;
    align-items: center;
    border-bottom:2px solid #f3f4f6;
}
nav span:nth-of-type(1){
    border:1px solid red;
}
.det{   
    width:100%;
    height:.83rem;
    /* background-color:coral; */
    border-bottom:1px solid #f5f5f5;
}
.left{
    margin-top:.12rem;
    margin-left:.16rem;
    float:left;
}
.left img{
    width:.56rem;
    height:.56rem;
}
.right{
    float:left;
    margin-top:.12rem;
    margin-left:.12rem;
}
.right p:nth-of-type(2){
    color:#828282;
    font-size:13px;
    line-height:14px;
    margin-top:.06rem;
    /* margin-bottom:.02rem; */
}
.icon span{
    font-size:12px;
    color:#828282;
}
.icon i{
    font-size:12px;
    color:#828282;
}
</style>