<!--
 * @Author: your name
 * @Date: 2019-11-09 10:51:33
 * @LastEditTime: 2019-11-15 01:12:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\pages\playpage.vue
 -->
<template>
    <div class="box">
        <newtop></newtop>
        <newlist :id="newimggoodSort"></newlist>
    </div>
</template>
<script>
import newtop from "../components/newtop"
import newlist from "../components/newlist"

export default {
  name: 'newpers',
  props:['newimggoodSort'],
  data () {
    return {
      
    }
  },
  components:{
      newtop,newlist
  }
}
</script>
<style scoped>
.box{
    width:100%;
    background-color:#f7f7f9;
}

</style>