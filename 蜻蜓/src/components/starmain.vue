<!--
 * @Author: your name
 * @Date: 2019-11-10 20:19:06
 * @LastEditTime: 2019-11-11 09:21:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \蜻蜓\src\components\starmain.vue
 -->
<template>
    <div class="starmain">
        <div style="display:none" >{{author}}</div>
        <div class="starimg_box" v-for="(starbook,index) in starbooks" :key="index">
            <!-- <router-link> -->
                <div class="starimg">
                    <img :src="starbook.goodImg">
                </div>
                <p>{{starbook.good_intro}}</p>
                <div class="starmain_play">
                    <img src="../assets/play.png" alt="">
                    <span>{{starbook.good_point}}</span>
                </div>
            <!-- </router-link> -->
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'starmain',
    props:['author'],
    data(){
        return {
            allstarbook:[],
            starbooks:[]
        }
    },
    created(){
        //从后端获取数据
        axios.get('./starbook')
        .then(res=>{
            this.allstarbook = res.data;//内部数据，由于没有渲染到组件里，所以没有触发组件更新
            this.starbooks = this.getStarbooksByType(this.allstarbook);//内部数据，由于渲染到了页面，所以触发了组件更新
        })
        .catch(err=>{
            console.log(err);
        });
    },
    beforeUpdate(){
        this.starbooks = this.getStarbooksByType(this.allstarbook);
            console.log("upde"+this.starbooks)
    },
    methods:{
        getStarbooksByType(data){//根据作者获取数据
            let arr = [];
            for(let i in data){
                if(data[i].author==this.author){
                    arr.push(data[i]);
                }
            }
            return arr;
        }
    }
}
</script>
<style scoped>
.starmain{
    display: flex;
    justify-content: space-between;
}
.starimg_box{
    margin-top: .16rem;
    position: relative;
}
.starimg{
    width: 1.05rem;
    height: 1.05rem;
    border-radius: 8px;
    overflow: hidden;
}
.starimg img{
    width: 100%;
    height: 100%;
}
.starimg_box p{
    width: 1.05rem;
    font-size: .12rem;
    color:#1a181a;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height: .19rem;
}
.starmain_play{
    position: absolute;
    left: .05rem;
    top: .85rem;
}
.starmain_play img{
    width: .06rem;
    height: .09rem;
}
.starmain_play span{
    font-size: .11rem;
    color: #fff;
}
</style>