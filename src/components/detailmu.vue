<!--
 * @Author: your name
 * @Date: 2019-11-13 14:47:27
 * @LastEditTime: 2019-11-15 11:59:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsonservere:\三阶段\第三阶段\workspace\qingting\src\components\detailmu.vue
 -->
<template>
    <div>
        <ul class="mulu">
            <li  v-for="(currbook,index) in $store.state.currbooks" :key="index">
                <router-link to="/playpage">
                    <p class="mlleft">
                        <span class="fontstyle" @click="changeStyle(index,currbook.goodAudio)" :class="{mubian:index==$store.state.currMusicindex}">{{currbook.two}}</span>
                        <p class="sange">
                            <img src="../assets/time.jpg" alt="">
                            <span>{{currbook.time}}</span>
                            <img src="../assets/zanting.jpg" alt="">
                            <span>{{currbook.goodPoint}}</span>
                            <img src="../assets/shangchuan.jpg" alt="">
                            <span>{{currbook.goodDate}}</span>
                        </p>
                    </p>
                    <img src="../assets/xiazai.jpg" alt="" class="xiazai">
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"detailmu",
    props:["bookid"],
    data(){
        return {
            // currbooks:[],
            currmulu:0
        }
    },
    created(){
        this.$store.dispatch('getmulu');
        // axios.get('./mulu')
        // .then(res=>{
        //     this.currbooks = res.data;
        // })
        // .catch(err=>{
        //     console.log(err);
        // });
    },
    methods:{
        changeStyle(index,currMusichref){
            this.currmulu = index;
            // console.log(currMusichref);
            let play = true;
            this.$store.commit("currmusic",{index,currMusichref,play});
        }
    }
}
</script>
<style scoped>
.mulu{
    width: 100%;
    min-height:6.7rem;
    background: #fff;
}
.mulu li{
    width: 92%;
    height: .41rem;
    margin: 0 auto .18rem;
    padding-top: .06rem;
    overflow: hidden;
}
.mulu .mlleft{
    width: 2.95rem;
}
.fontstyle{
    font-size: .14rem;
    color: #202221;
}
.sange{
    font-size: .1rem;
    color: #979797;
    float: left;
}
.sange span{
    line-height: 17px;
}
.mulu .xiazai{
    width: .17rem;
    height: .17rem;
    float: right;
}
.mubian{
    color: #e75b64;
}
</style>