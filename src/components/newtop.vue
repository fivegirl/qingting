<!--
 * @Author: your name
 * @Date: 2019-11-09 10:51:33
 * @LastEditTime: 2019-11-15 00:43:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\pages\playpage.vue
 -->
<template>
    <div class="box">
        <div class="top">
            <div class="icon">
                <goback1></goback1>
            </div>
            <div class="tit">
                <h2>经典评书</h2>
                <p>蜻蜓精心挑选，送给新到的你</p>
            </div>
        </div>
    </div>
</template>
<script>
import goback1 from "./goback1";
export default {
  name: 'newpers',
  data () {
    return {
      
    }
  },
    components:{
        goback1
    }
}
</script>
<style scoped>
.box{
    width:100%;
    height:1.22rem;
    background-color:#302b41;
}
.icon{
    font-size:.25rem;
    color:white;
    float:left;
    margin-top:.07rem;
    margin-left:.19rem;
}
.tit{
    float:left;
  
}
.tit h2{
    margin-top:.07rem;
    margin-left:1.12rem;
    color:white;
    font-family: "宋体";
}
.tit p{
   margin-left:0.5rem;
   margin-top:0.2rem;
   color:#babbc3;
}

</style>