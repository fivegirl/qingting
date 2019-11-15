<!--
 * @Author: your name
 * @Date: 2019-11-09 14:19:01
 * @LastEditTime: 2019-11-09 21:03:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\components\playdec.vue
 -->
<template>
    <div class="box">
       <h3>相关推荐</h3>
        <div class="sqr">
            <span>单田芳</span>
            <span>隋唐</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .box{
        width:90%;
        height:.8rem;
        /* background-color:yellowgreen; */
        /* margin:0 auto; */
        margin-top:.19rem;
        margin-left:5%;
        
    }
    .sqr{
        margin-top:.18rem;
    }
    .sqr span:nth-of-type(1){
        display:inline-block;
        width:.6rem;
        height:.31rem;
        border:1px solid #c2c2c2;
        border-radius: .15rem;
        text-align:center;
        line-height:.31rem;
        color:#555555;
    }
    .sqr span:nth-of-type(2){
        display:inline-block;
        width:.46rem;
        height:.31rem;
          border:1px solid #c2c2c2;
        border-radius: .15rem;
        text-align:center;
        line-height:.31rem;
        color:#555555;
        margin-left:.09rem;
    }
</style>
