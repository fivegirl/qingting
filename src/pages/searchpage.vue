<!--
 * @Author: your name
 * @Date: 2019-11-09 10:51:33
 * @LastEditTime: 2019-11-12 11:16:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\pages\playpage.vue
 -->
<template>
    <div class="box">
        <searchtop></searchtop>
        <searchnav></searchnav>
    </div>
</template>
<script>
import searchtop from "../components/searchtop"
import searchnav from "../components/searchnav"



export default {
  name: 'newpers',
  data () {
    return {
      
    }
  },
  components:{
      searchtop,searchnav
  }
}
</script>
<style scoped>
.box{
    width:100%;
}

</style>