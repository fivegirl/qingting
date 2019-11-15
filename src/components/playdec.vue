<!--
 * @Author: your name
 * @Date: 2019-11-09 14:19:01
 * @LastEditTime: 2019-11-14 23:49:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\components\playdec.vue
 -->
<template>
    <div class="box">
        <p>{{this.dec[0].goodName}}</p>
        <p class="info">
            <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        倍速<i class="el-icon-caret-bottom"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">1.00</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">1.25</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus-outline">1.5</el-dropdown-item>
        <el-dropdown-item icon="el-icon-check">1.75</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-check">2.00</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
            <span><i class="el-icon-caret-right"></i>{{this.dec[0].goodPoint}}</span>
        </p>
    </div>
</template>
<script>
export default {
    name:'playdec',
    data(){
        return {
            dec:[],
            // goodName:"",
            // goodPoint:""
        }
    },
    created(){
        fetch('/api/et')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            this.dec = data;
            // console.log(data)
            // console.log(this.dec)
            console.log(this.dec)
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
       height:.68rem;
       /* background-color:blueviolet; */
   }
   .box p:nth-of-type(1){
       text-align:center;
       line-height:.08rem;
       padding-top:.31rem;
   }
   .info{
       text-align:center;
       margin-top:.12rem;
       color:#aaaaaa;
      
   }
   .info span:nth-of-type(1){
       display:inline-block;
       width:.44rem;
       height:.19rem;
       border-radius:.7rem;
       border:1px solid #b2b2b2;
       font-size:12px;
       line-height:.19rem;
       margin-right:.31rem;
       color:#b2b2b2;
   }

   .info span:nth-of-type(2){
       font-size:14px;
        vertical-align: middle;
   }
</style>