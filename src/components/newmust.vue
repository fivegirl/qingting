<!--
 * @Author: your name
 * @Date: 2019-11-10 13:39:31
 * @LastEditTime: 2019-11-15 01:06:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \蜻蜓\src\components\newmust.vue
 -->
<template>
    <div class="newmust">
        <p>新人必听</p>
        <div class="newmust_box">
            <div v-for="(newimg,index) in newimgs" :key="index" v-if="index<8">
                <router-link :to='"/newpage/"+newimg.goodSort'>
                    <div class="new_img">
                        <img :src="newimg.goodImg">
                        <img src="../assets/play.png" class="vip_play">
                    </div>
                    <p class="new_sort">{{newimg.goodSort}}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"newmust",
    data(){
        return {
            newimgs:[]
        }
    },
    created(){
        // axios.get('/good/xrbt')
        axios.get('/xrbt')
        .then(res=>{
            this.newimgs = res.data;
        })
        .catch(err=>{
            console.log(err);
        });
    }
}
</script>
<style scoped>
.newmust{
    width: 92%;
    margin: 0 auto;
    padding-top: .19rem;
}
.newmust p{
    display: block;
    font-size: .18rem;
    color: #242426;
    margin-bottom: .15rem;
    flex-wrap: wrap;
}
.newmust_box{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.newmust_box>div{
    margin-left: .1rem;
    margin-right: .18rem;
}
.newmust_box div:nth-child(4n){
    margin-left: .1rem;
    margin-right: .1rem;
}
.new_img{
    width: .6rem;
    height: .6rem;
    background: skyblue;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
}
.new_img img{
    width: 100%;
    height: 100%;
}
.newmust .new_sort{
    font-size: .11rem;
    color: #18181a;
    text-align: center;
    margin-top: 8px;
}
.new_img .vip_play{
    position: absolute;
    width: .17rem;
    height: .21rem;
    left: .22rem;
    top: .17rem;
    z-index: 1;
}
</style>