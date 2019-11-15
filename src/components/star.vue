<!--
 * @Author: your name
 * @Date: 2019-11-10 15:07:36
 * @LastEditTime: 2019-11-14 22:09:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \蜻蜓\src\components\star.vue
 -->
<template>
<div>
    <div class="star">
        <p>明星大咖</p>
        <div class="star_main">
            <div v-for="(star,index) in stars" :key="index" @click="changetype(star.goodAuthor,index)" v-if="index<5">
                <div class="star_img">
                    <img :src="star.goodImg">
                </div>
                <span class="star_author" :class="{star_author1:star.goodAuthor==currauthor}">{{star.goodAuthor}}</span>
            </div>
        </div>
    </div>
    <div class="star_box">
        <starmain :author="currauthor" class="star_boxmain"></starmain>
        <span :style="left"></span>
    </div>
</div>
</template>
<script>
import starmain from "./starmain";
import axios from 'axios';
export default {
    name:"star",
    data(){
        return {
            stars:[],
            currauthor:"",
            currindex:0
        }
    },
    components:{
        starmain
    },
    created(){
        axios.get('/star')
        .then((response)=>{
            this.stars = response.data;
            this.currauthor = this.stars[0].goodAuthor;//把拿到的类型的第一个赋给当前类型
            console.log(this.stars[0].goodAuthor);
        })
        .catch((err)=>{
            console.log(err);
        });
    },
    computed:{
        left:function(){
            return "left:"+(0.27+0.75*this.currindex)+"rem";
        }
    },
    methods:{
        changetype(author,index){
            this.currauthor = author;
            this.currindex = index;
        }
    }
}
</script>
<style scoped>
.star{
    width: 92%;
    margin: 0 auto;
    padding-top: .19rem;
}
.star p{
    display: block;
    font-size: .18rem;
    color: #242426;
    margin-bottom: .15rem;
    flex-wrap: wrap;
}
.star_main{
    display: flex;
    justify-content: space-between;
    margin-bottom: .15rem;
}
.star_img{
    width: .53rem;
    height: .53rem;
    border-radius: 50%;
    overflow: hidden;
}
.star_img img{
    width: 100%;
    height: 100%;
}
.star_author{
    display: inline-block;
    width: .53rem;
    height: .2rem;
    background: #f0edeb;
    color: #685d50;
    border-radius: .1rem;
    font-size: .11rem;
    text-align: center;
    line-height: .2rem;
    margin-top: -.06rem;
}
.star_author1{
    background: #fae2ad;
    color: #693f02;
}
.star_box{
    width: 100%;
    background: linear-gradient(to bottom,#ffe9c4 0%,#ffe9c4 15%,#feedd1 31%,#fef2dc 54%,#fef8ec 72%,#fff 100%);
    position: relative;
}
.star_boxmain{
    width: 92%;
    height: 1.77rem;
    margin: 0 auto;
}
.star_box span{
    border:11px solid transparent;
    border-bottom-color:#ffe9c4;
    position: absolute;
    left: 0.27rem;
    top: -.2rem;
}
</style>