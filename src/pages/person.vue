<!--
 * @Author: your name
 * @Date: 2019-11-12 11:25:05
 * @LastEditTime: 2019-11-12 21:15:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \蜻蜓\src\pages\person.vue
 -->
<template>
    <div>
        <gerentop class="gr"></gerentop>
        <gerenmain></gerenmain>
        <gerenbottom></gerenbottom>
    </div>
</template>
<script>
import gerentop from "../components/gerentop";
import gerenmain from "../components/gerenmain";
import gerenbottom from "../components/gerenbottom";
export default {
    name:"person",
    data(){
        return {

        }
    },
    components:{
        gerentop,gerenmain,gerenbottom
    }
}
</script>
<style scoped>
.gr{
    width: 100%;
    background: #fff;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
}
</style>