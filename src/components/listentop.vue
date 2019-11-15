<!--
 * @Author: your name
 * @Date: 2019-11-09 10:51:33
 * @LastEditTime: 2019-11-11 22:24:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\pages\playpage.vue
 -->
<template>
    <div class="box">
        <div class="mytit">
            <p>我听</p>
        </div>
        <div class="mylist">
            <div class="left">
                    <i class="el-icon-download"></i>
            </div>
            <div class="right">
                <span>我的下载</span>
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>
        <div class="mylist1">
            <div class="left">
                    <i class="el-icon-star-off"></i>
            </div>
            <div class="right">
                <span>我的收藏</span>
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>
        <div class="mylist1">
            <div class="left">
                    <i class="el-icon-time"></i>
            </div>
            <div class="right">
                <span>我的历史</span>
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>
        <div class="mylist1">
            <div class="left">
                    <i class="el-icon-shopping-cart-full"></i>
            </div>
            <div class="right">
                <span>我的已购</span>
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>
        <div class="mylist1">
            <div class="left">
                    <i class="el-icon-user"></i>
            </div>
            <div class="right">
                <span>关注的主播</span>
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'newpers',
  data () {
    return {
      
    }
  },
}
</script>
<style scoped>
.box{
    width:100%;
}
.mytit p{
    margin-top:.3rem;
    margin-left:.18rem;
    font-size:.26rem;
    font-weight:bold;
}
.mylist{
    margin-top:.51rem;
    margin-left:.25rem;
    /* background-color:orchid; */
    display:flex;
   
}
.mylist span{
    font-size:.16rem;
}
.mylist i{
    font-size:.23rem;
}
.left{
    width:.27rem;
    height:.5rem;
    font-size:.23rem;
    margin-right:.12rem;
    /* vertical-align: middle; */
    /* background-color:palegreen; */  
}
.left i{
    color:#e82929;
}
.right{
    width:3.31rem;
    height:.5rem;
    /* background-color:purple; */
    display:flex;
    justify-content: space-between;
    border-bottom:1px solid #f4f4f4;
}
.mylist1{
    margin-top:.25rem;
    margin-left:.25rem;
    /* background-color:orchid; */
    display:flex;
   
}
.mylist1 span{
    font-size:.16rem;
    /* font-weight:bold; */
}
.mylist1 i{
    font-size:.23rem;
}
</style>