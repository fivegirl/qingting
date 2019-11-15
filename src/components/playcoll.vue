<!--
 * @Author: your name
 * @Date: 2019-11-09 14:19:01
 * @LastEditTime: 2019-11-14 23:52:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\components\playdec.vue
 -->
<template>
    <div class="box">
        <span>
            <img :src="this.dec[0].goodImg">
            {{this.dec[0].goodName}}
        </span>
        <span>
            收藏专辑
        </span>
    </div>
</template>
<script>
export default {
    name:'playcoll',
    data(){
        return {
            dec:[],
            goodName:"",
            goodImg:""
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
        width:90%;
        margin-top:.21rem;
        /* margin:0 auto; */
        margin-left:5%;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .box img{
        width:.43rem;
        height:.43rem;
        vertical-align: middle;
    }
    .box span:nth-of-type(2){
        display:inline-block;
        width:.8rem;
        height:.3rem;
        border:1px solid #E81630;
        border-radius:18px;
        text-align:center;
        line-height:.3rem;
        margin-left:.65rem;
        color:#E81630;
    }
    .box span:nth-of-type(2){
        line-height:.3rem;
    }
</style>