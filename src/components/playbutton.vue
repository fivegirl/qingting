<!--
 * @Author: your name
 * @Date: 2019-11-13 16:37:13
 * @LastEditTime: 2019-11-15 13:23:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsonservere:\三阶段\第三阶段\workspace\qingting\src\components\playbutton.vue
 -->
<template>
    <div class="playbox" @click="changeshow()">
        <router-link  to="/playpage">
            <audio class="playa"  v-for="(mulu,index) in $store.state.currbooks" :key="index"  autoplay controls v-if="index==$store.state.currMusicindex">
                <source :src="mulu.goodAudio">
            </audio>
        </router-link>
    </div>
</template>
<script>
import axios from 'axios';
import $ from 'jquery';
export default {
    name:"playbutton",
    props:['muluid','currindex'],
    data(){
        return {
            // mulus:[],
            isshow:true
            // playstate:true
        }
    },
    created(){
        
        this.$store.dispatch('getmulu');
        // axios('./mulu')
        // .then(res=>{
        //     this.mulus = res.data;
        // })
        // .catch(err=>{
        //     console.log(err);
        // });
    },
    methods:{
        changeshow(){
            // this.$store.commit("currmusic",index);
            // this.isshow = !this.isshow;
            // if(this.$store.state.playstate==false){
            //     this.$store.state.playstate = true;
            //     this.$store.commit("currmusichplay",this.$store.state.playstate);
            //     $(".playa")[0].play();
            // }else{
            //     // this.playstate = false;
            //     $(".playa")[0].pause();
            // }
        }
    }
}
</script>
<style scoped>
.playbox{
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 4;
}
.playbox img{
    width: .2rem;
    height: .2rem;
    position: absolute;
    left: 0.15rem;
    top: 0.15rem;
    z-index: 3;
}
.playbox img:last-child{
    position: absolute;
    left: 0.1rem;
    top: 0.12rem;
}
.playa{
    width: 3rem;
    height: .5rem;
}
.fixplay{
    position: fixed;
    /* background: skyblue; */
    right: .25rem;
    bottom: .8rem;
    width: .59rem;
    height: .59rem;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #fcfefd;
    box-shadow: 0 0 5px gray;
}
.fixplay img{
    width: 100%;
    height: 100%;
    opacity: .8;
    z-index: 0;
    position: absolute;
    left: 0;
    bottom: 0;
}
</style>