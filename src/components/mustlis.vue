<!--
 * @Author: your name
 * @Date: 2019-11-11 14:26:36
 * @LastEditTime: 2019-11-14 23:41:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \蜻蜓\src\components\mustlis.vue
 -->
<template>
<div>
    <div class="mustlis">
        <div>
            <goback1></goback1>
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
import goback1 from "./goback1";
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
            currmao:"",
            scrollTop:0
        }
    },
    components:{
        mustlismain,goback1
    },
    mounted(){
        this.$nextTick(()=>{
            window.addEventListener('scroll',this.handleScroll);
        });
    },
    methods:{
        changeColor(index,curr){
            this.currIndex = index;
            this.currmao = curr;
            console.log("获取"+this.currmao);
        },
        handleScroll () {
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            console.log(this.scrollTop);
            if(this.scrollTop<500){
                this.changeColor(0,this.lidatas[0].href);
            }else if(this.scrollTop>=500&&this.scrollTop<900){
                this.changeColor(1,this.lidatas[1].href);
            }else if(this.scrollTop>=900&&this.scrollTop<1200){
                this.changeColor(2,this.lidatas[2].href);
            }else{
                this.changeColor(3,this.lidatas[3].href);
            }
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