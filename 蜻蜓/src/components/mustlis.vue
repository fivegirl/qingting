<!--
 * @Author: your name
 * @Date: 2019-11-11 14:26:36
 * @LastEditTime: 2019-11-12 10:47:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \蜻蜓\src\components\mustlis.vue
 -->
<template>
<div>
    <div class="mustlis">
        <div>
            <i class="el-icon-arrow-left"></i>
            <img src="../assets/jiangpai.jpg" alt="">
            <span>蜻蜓排行榜</span>
        </div>
        <ul class="ul">
            <li v-for="(lidata,index) in lidatas" :key="index" @click="changeColor(index,lidata.href)" :class="{linav:index==currIndex}">{{lidata.name}}</li>
        </ul>
    </div>
    <div>
        <mustlismain :currid="this.currmao"></mustlismain>
    </div>
</div>
</template>
<script>
import mustlismain from "./mustlismain";
export default {
    name:"mustlis",
    data(){
        return {
            lidatas:[
            {
                "name":"专辑榜",
                "href":"mao1"
            },
            {
                "name":"主播榜",
                "href":"mao2"
            },
            {
                "name":"电台榜",
                "href":"mao3"
            },
            {
                "name":"直播榜",
                "href":"mao4"
            },
            {
                "name":"分类榜",
                "href":"mao5"
            }
            ],
            currIndex:0,
            currmao:""
        }
    },
    components:{
        mustlismain
    },
    methods:{
        changeColor(index,curr){
            this.currIndex = index;
            this.currmao = curr;
            console.log("获取"+this.currmao);
            localStorage.setItem('id',this.currmao);
        }
    }
}
</script>
<style scoped>
@import url(https://unpkg.com/element-ui/lib/theme-chalk/index.css);
.mustlis{
    width: 100%;
    height: .87rem;
    background: #262739;
    position: fixed;
    top: 0;
    left: 0;
}
.el-icon-arrow-left{
    font-size: .21rem;
    color: #fff;
    margin-top: .1rem;
    float: left;
}
.mustlis>div{
    width: 92%;
    overflow: hidden;
    margin: 0 auto;
}
.mustlis>div img{
    width: .35rem;
    height: .4rem;
    float: left;
    margin-left: .88rem;
}
.mustlis>div span{
    font-size: .19rem;
    color: #fff;
    margin-top: .15rem;
    margin-left: .12rem;
    float: left;
}
.ul{
    display: flex;
    width: 92%;
    margin: 0 auto;
    justify-content: space-between;
}
.ul li{
    font-size: .15rem;
    margin-top: .18rem;
    color: #a7a8ab;
}
.ul .linav{
    font-size: .18rem;
    color: #fff;
}
</style>