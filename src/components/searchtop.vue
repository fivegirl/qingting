<!--
 * @Author: your name
 * @Date: 2019-11-09 10:51:33
 * @LastEditTime: 2019-11-12 16:17:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\pages\playpage.vue
 -->
<template>
    <div class="box">
        <div class="top">
            <div class="sear">
     <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        全部<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" class="menu">
        <el-dropdown-item>全部</el-dropdown-item>
        <el-dropdown-item >小说</el-dropdown-item>
        <el-dropdown-item>精品</el-dropdown-item>
        <el-dropdown-item>脱口秀</el-dropdown-item>
        <el-dropdown-item>相声小品</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
        <input type="text">
            </div>
            <span>取消</span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'newpers',
  data () {
    return {
      
    }
  }
}
</script>
<style scoped>
    .box{
        width:100%;
    }
    .top{
        width:100%;
        height:.37rem;
        /* background-color:blueviolet; */
        text-align:center;
        /* overflow:hidden; */
        margin-top:.13rem;
    }
    .top .sear{
        width:3.09rem;
        height:.37rem;
        background-color:#f2f2f2;
        border-radius:.19rem;
        float:left;
        margin-left:.08rem;
    }
    .sear input{
        width:2.44rem;
        height:.37rem;
        border:none;
        outline:0;
        background-color:#F2F2F2;
        border-radius:.19rem;
        /* padding-left:.02rem; */
    }
    .top span{
        line-height:.37rem;
        font-size:14px;
        display:inline-block;
        margin-left:.12rem;
        color:#636363;
        /* margin-top:.12rem; */
    }
    .menu{
        width:100%;
        color:#636363;
    }
</style>