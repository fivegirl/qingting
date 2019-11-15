<!--
 * @Author: your name
 * @Date: 2019-11-09 10:51:47
 * @LastEditTime: 2019-11-15 09:52:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\components\playtop.vue
 -->
<template>
    <div class="box">
        <div class="left">
            <span> 
                <goback1></goback1>
            </span>
        </div>
        <div class="right">
            <span>免流量</span>
            <span>
                <i class="el-icon-share"></i>
            </span>
            <span>
                <i class="el-icon-more"></i>
            </span>  
        </div>
    </div>
</template>
<script>
import goback1 from "./goback1";
export default {
    name:"playtop",
    components:{
        goback1
    }
}
</script>
<style scoped>
    .box{
        width:100%;
        height:.19rem;
        /* background-color:blue; */
    }
    .right{
        margin-left:2.1rem;
        display:flex;
        justify-content: space-between;
        width:1.39rem;
    }
    .left{
        margin-left:.2rem;
        float:left;  
    }
    .left span{
        font-size:.19rem;
        line-height:.19rem;
    }
    .right span:nth-of-type(1){
        font-size:.1rem;
        color:#5d5d5d;
        line-height:.19rem;
    }
    .right span:nth-of-type(2){
         font-size:.19rem;
        line-height:.19rem;
    }
    .right span:nth-of-type(3){
        font-size:.19rem;
        line-height:.19rem;
    }
</style>