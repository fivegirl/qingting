<!--
 * @Author: your name
 * @Date: 2019-11-09 10:51:33
 * @LastEditTime: 2019-11-11 21:53:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\pages\playpage.vue
 -->
<template>
    <div class="box">
        <div class="bot">
            <div class="detail">
                <img src="../assets/img/lis-pic1.jpg">
                <div class="det">
                    <p>豪杰相助，霸业得成</p>
                    <p>
                        <i class="el-icon-caret-right"></i>
                        <span>7.0亿</span>
                        <i class="el-icon-tickets"></i>
                        <span>150期</span>
                    </p>
                </div>
            </div>
            <div class="detail">
                <img src="../assets/img/lis-pic1.jpg">
                <div class="det">
                    <p>豪杰相助，霸业得成</p>
                    <p>
                        <i class="el-icon-caret-right"></i>
                        <span>7.0亿</span>
                        <i class="el-icon-tickets"></i>
                        <span>150期</span>
                    </p>
                </div>
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
.detail img{
    width:1.67rem;
    height:1.67rem;
}
.det p:nth-of-type(1){
    color:#1c1c1c;
    margin-top:.07rem;
}
.det p:nth-of-type(2){
    font-size:13px;
    color:#7e7e7e;
    margin-top:.06rem;
}
.det p:nth-of-type(2) i{
    font-size:.18rem;
}
.bot{
    display:flex;
    justify-content: space-around;
}
</style>