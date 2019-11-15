<!--
 * @Author: your name
 * @Date: 2019-11-09 10:51:33
 * @LastEditTime: 2019-11-15 01:18:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\pages\playpage.vue-->
<template>
<div class="box">
    <div class="mainbox" v-for="(book,index) in books" :key="index" v-on:click="play(index)" >
        <div class="list">
            <div class="left">
                <img :src="book.goodImg">
            </div>
            <div class="right">
                <div class="right-p">
                        <p>{{book.goodName}}</p>
                        <p>{{book.goodIntro}}</p>
                </div>
            </div>
             <div class="icon">
                <span >
                    <i class="el-icon-video-play" v-bind:id="index">
                    <i class="ado">
                        <audio  :src="book.goodAudio" controls> </audio>
                    </i>
                    </i>
                </span>
            </div>
        </div>
    <div class="fixplay">
        <img :src="book.goodImg">
        <playbutton :muluid="book.goodName"></playbutton>
    </div>
    </div>
</div>
</template>
<script>
import playbutton from "./playbutton";
export default {
  name: 'newlist',
   prop:['id'],
  data () {
    return {
      books:[]
    }
  },
    components:{
        playbutton
    },
    created(){
		let id=this.id;
		console.log(id);
        fetch('api/bt'+'?'+id)
        .then(res=>{
             console.log(res)
            return res.json();
            
        })
        .then(data=>{
            this.books=data;
            console.log(data)
        })
        .catch(err=>{
            console.log(err);
        })
    },
    methods:{
        play(){
			
			this.$router.push({ path: '/detailsa', query: { goodName:'book.goodName' }});
            // var sp = document.getElementById(index);
            // console.log(sp)
            //     if(sp.className=="el-icon-video-play"){
            //         sp.className="el-icon-video-pause";
            //     }
            //     else if(sp.className="el-icon-video-pause"){
            //         sp.className="el-icon-video-play";
            //     }
        }
    }
}

</script>
<style scoped>
.box{
  width:100%;
    /* background-color:#f7f7f9; */
}
.mainbox{
    width:90%;
    height:.78rem;
    margin:0 auto;
    margin-top:.08rem;
    background-color:white;
    border-radius:8px;
}
.left{
    width:.78rem;
    height:.78rem;
    float:left;
}
.left img{
    width:100%;
    height:100%; 
}
.right{
    height:.78rem;
    float:left;
    margin-left:.12rem;
    /* background-color:orangered; */
    overflow:hidden;
}
.right p:nth-of-type(1){
    margin-top:.2rem;
    margin-bottom:.1rem;
    font-size:.2rem;
    font-weight:bold;
}
.right p:nth-of-type(2){
    line-height:12px;
    font-size:14px;
    color:#5f5f5f;
}
.icon{
    float:right;
    font-size:.38rem;
    color:#f32828;
    /* margin-top:.28rem; */
    margin-right:.21rem;
    line-height:.38rem;
    margin-top:.2rem;
    
}
.ado{
    display:inline-block;
    position:relative;
    width:.18rem;
    height:.18rem;
    overflow:hidden;
    left:-27px;
    top:-5px;
    background-color:white;
    color:red;
    z-index: 1;
   
}
.ado audio{
    position: absolute;
    left:-18px;
    top:-18px;
    background-color:white;
    color:white;
    color:red;
    z-index:100;
   
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
    z-index: 2;
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