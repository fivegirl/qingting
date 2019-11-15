<!--
 * @Author: your name
 * @Date: 2019-11-09 14:19:01
 * @LastEditTime: 2019-11-15 09:47:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\components\playdec.vue
 -->
<template>
    <div class="box">
        <img :src="this.dec[0].goodImg">
         <!-- {{this.dec.goodImg}} -->
    </div>
</template>
<script>
export default {
    name:'playdec',
    data(){
        return {
            dec:[],
        }
    },
    created(){
        fetch('/api/et')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            this.dec = data;
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>
<style scoped>
    .box{
        width:2.82rem;
        height:2.82rem;
        margin:0 auto;
        margin-top:.08rem;
    }
    .box img{
        width:100%;
        height:100%;
    }
</style>