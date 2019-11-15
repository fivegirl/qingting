<!--
 * @Author: your name
 * @Date: 2019-11-09 14:19:01
 * @LastEditTime: 2019-11-15 13:14:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\components\playdec.vue
 -->
<template>
    <div class="box">
        <p class="el">
            <el-divider>
            </el-divider>
        </p>
        <div class="main">
            <!-- <span class="sp1">
                <i class="el-icon-alarm-clock"></i>
            </span> -->
            <!-- <span class="sp2"> -->
                <!-- <i class="el-icon-caret-left"></i> -->
                <!-- <i class="el-icon-video-play" id="toplay" v-on:click="play"> -->
                    <span class="ado">
                        <!-- <audio  :src="this.dec[0].goodAudio" controls>
                        </audio> -->

                        <!-- <playbutton></playbutton> -->
                    </span>
                <!-- </i> -->
                <!-- <i class="el-icon-caret-right"></i> -->
            <!-- </span> -->
            <!-- <span class="sp3">
                <i class="el-icon-s-fold"></i>
            </span> -->
        </div>
    </div>
</template>
<script>
import playbutton from "./playbutton";
export default {
    name: 'newlist',
    //prop:['id'],
    data () {
        return {
            dec:[]
        }
    },
    components:{
        playbutton
    },
  created(){
        fetch('/api/et')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            this.dec = data;
        })
        .catch(err=>{
            console.log(err);
        })
    },
    methods:{
        play(){
            var sp = document.getElementById("toplay");
            // console.log(adodom)
            if(sp.className=="el-icon-video-play"){
                sp.className="el-icon-video-pause";
            }
            else if(sp.className="el-icon-video-pause"){
                sp.className="el-icon-video-play";
            }
        }
    }
}
</script>
<style scoped>
    .box{
        width:100%;
        /* height:.71rem; */
        /* background-color:teal; */
        margin-top:.35rem;
    }
    .box p{
        width:92%;
        margin:0 auto;
    }
    .main{
        width:90%;
        margin:0 auto;
        display:flex;
        /* justify-content: space-between; */
        align-items: center; 
        justify-content: center;
    }
    .sp1 i{
        font-size:.26rem;
        color:#929292; 
    }
    /* .sp1 p{
        font-size:12px;
    } */
    .sp2{
        margin-left:.55rem;
        position:relative;
        left:0px;
        top:0px;
        

    }
    .sp2 i:nth-of-type(1){
        font-size:.27rem;
        color:#e81630;
        vertical-align: middle;

    }
     .sp2 i:nth-of-type(2){
        font-size:.5rem;
        color:#e81630;
        vertical-align: middle; 
        padding-left:.3rem;
        padding-right:.13rem;
    }
    .sp2 i:nth-of-type(3){
        font-size:.27rem;
        color:#e81630;
        vertical-align: middle;
    }
    .sp3 i{
        font-size:.26rem;
        color:#929292;
        margin-left:.54rem;
    }
/* .ado{
    display:inline-block;
    position:relative;
    left:-33px;
    top:-8px;
    width:.2rem;
    height:.2rem;
    overflow:hidden;
    background-color:yellow;
    color:red;
   
   
}
.ado audio{
    position: absolute;
    left:-18px;
    top:-18px;
    background-color:white;
    color:white;
    color:red;
    z-index:100;
    background-color:yellow;

} */

.ado audio{
   width:2.6rem;
   height:.7rem;
   background-color:white;
}

</style>
