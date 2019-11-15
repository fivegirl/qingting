<!--
 * @Author: your name
 * @Date: 2019-11-07 20:47:11
 * @LastEditTime: 2019-11-11 13:47:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13e:\三阶段\第三阶段\workspace\蜻蜓\src\components\vipnav.vue
 -->
<template>
    <div class="navmain">
        <div class="nav">
            <ul class="nav1">
                <li v-for="(nav,index) in navs" :key="index" @click="changeStyle(index,$event)" :class="{navfont:index==currType}">{{nav}}</li>
            </ul>
            <i class="el-icon-search"></i>
        </div>
        <div class="nav_bottom">
            <img src="../assets/default-avatar@2x.png" alt="">
            <span>海量精选内容会员免费听</span>
            <i>开通</i>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name:"vipnav",
    data(){
        return {
            navs:[
                "推荐",
                "老司机安利",
                "小说",
                "职场秘籍",
                "文史千年",
                "儿童"
            ],
            currType:0,
            scroll:null
        }
    },
    methods:{
        changeStyle(index,e){
            console.log(index)
            this.currType = index;
            let eventdom=e.target;
            eventdom.scrollIntoView(
            {behavior:"auto", block: "center",inline: "center"});
        }
    }
}
</script>

<style scoped>
@import url(https://unpkg.com/element-ui/lib/theme-chalk/index.css);
.navmain{
    width: 100%;
    height: 1.01rem;
}
.nav{
    width:92%;
    margin: 0 auto;
    display: flex;
}
.nav1{
    width:3rem;
    height: .36rem;
    display: flex;
    overflow-x: auto;
}
.nav1 li{
    font-size: 12px;
    color:#8b8b8b;
    margin-right: .21rem;
    text-align: center;
    line-height: .36rem;
    white-space: nowrap;
}
.nav1 .navfont{
    font-size: .21rem;
    color: #b9a232;
}
.el-icon-search{
    margin-left: .14rem;
    font-size:.24rem;
    color: #ba964a;
    line-height: .36rem;
}
.nav_bottom{
    width:92%;
    height:.44rem;
    margin: 0 auto;
    padding-top: .21rem;
}
.nav_bottom img{
    float: left;
    width: .33rem;
}
.nav_bottom span{
    float: left;
    font-size: .12rem;
    color:#6d6d6d;
    margin-top: .11rem;
    margin-left: 8px;
}
.nav_bottom i{
    float: right;
    width:.63rem;
    height: .3rem;
    background: #fddfa3;
    border-radius: .15rem;
    font-size: .12rem;
    color:#61420d;
    font-style: normal;
    text-align: center;
    line-height: .3rem;
    margin-top: 5px;
}
</style>