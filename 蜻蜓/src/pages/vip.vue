<!--
 * @Author: your name
 * @Date: 2019-11-07 20:54:11
 * @LastEditTime: 2019-11-11 14:19:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13e:\三阶段\第三阶段\workspace\蜻蜓\src\pages\vip.vue
 -->
<template>
    <div>
        <vipnav class="vipnav"></vipnav>
        <Banner></Banner>
        <bannerbottom></bannerbottom>
        <adver></adver>
        <newmust></newmust>
        <star></star>
        <mofang></mofang>
    </div>
</template>

<script>
import vipnav from "../components/vipnav";
import Banner from "../components/Banner";
import bannerbottom from "../components/bannerbottom";
import adver from "../components/adver";
import newmust from "../components/newmust";
import star from "../components/star";
import mofang from "../components/mofang";
export default {
    name:"vip",
    data(){
        return {
            
        }
    },
    components:{
        vipnav,Banner,bannerbottom,adver,newmust,star,mofang
    }
}
</script>

<style scoped>
.vipnav{
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: white;
    z-index: 2;
}
.vipmain{
    overflow-y: auto;
}
</style>