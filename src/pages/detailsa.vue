<!--
 * @Author: your name
 * @Date: 2019-11-12 21:59:33
 * @LastEditTime: 2019-11-14 00:16:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsonservere:\三阶段\第三阶段\workspace\qingting\src\pages\details.vue
 -->
<template>
    <div>
        <detailtop class="detatop"></detailtop>
        <detailmain></detailmain>
    </div>
</template>
<script>
import detailtop from "../components/detailtop";
import detailmain from "../components/detailmain";
export default {
    name:"detailsa",
	props:['goodName'],
    data(){
        return {}
    },
    components:{
        detailtop,detailmain
    }
}
</script>
<style scoped>
.detatop{
    position: fixed;
    z-index: 1;
}
</style>