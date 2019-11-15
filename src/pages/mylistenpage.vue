<!--
 * @Author: your name
 * @Date: 2019-11-09 10:51:33
 * @LastEditTime: 2019-11-11 21:51:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\pages\playpage.vue
 -->
<template>
    <div class="box">
      <listentop></listentop>
      <like></like>
      <listenlike></listenlike>
      <listenlike class="likes"></listenlike>
    </div>
</template>
<script>
import listentop from "../components/listentop"
import listenlike from "../components/listenlike"
import like from "../components/like"



export default {
  name: 'newpers',
  data () {
    return {
      
    }
  },
  components:{
    listentop,like,listenlike
  }
}
</script>
<style scoped>
.box{
    width:100%;
}
.likes{
  margin-top:.15rem;
}
</style>