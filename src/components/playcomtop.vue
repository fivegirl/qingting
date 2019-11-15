<!--
 * @Author: your name
 * @Date: 2019-11-09 14:19:01
 * @LastEditTime: 2019-11-14 23:17:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\components\playdec.vue
 -->
<template>
   <div class="box" >
        <div class="top">
            <span>用户评论(28)</span>
            <span @click="show"><i class="el-icon-edit"></i>我要评论</span>
        </div>
         <mt-popup v-model="popupVisible" position="bottom" class="pop">
                <p class="txttop">
                    <span>写评论</span>
                    <input type="button" value="发表"  @click="send()">
                </p>
                <textarea placeholder="快来表达你的感想吧" class="txt"  v-model="sss">

                </textarea>
        </mt-popup>
        <div class="bottom" id="bom">
            <div class="main">
                <div class="cont" id="ctt">
                    <p><img src="../assets/img/pic1.jpg"></p>
                    <p class="use">
                        <span class="sp1">
                            <i>18993453202</i>
                             <i class="el-icon-more"></i>
                        </span>
                        <span class="sp3" id="spp3">很好听啊，奈斯很好听啊，奈斯很好听啊，奈斯</span>
                        <span class="sp2">
                            <i>2019-10-29</i>
                            <i class="el-icon-chat-dot-round"></i>
                            <i class="el-icon-thumb"></i>
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div class="bigbox">
            <div class="infobox"> 
                <input type="text" placeholder="我来说两句~" @click="show" >
            </div>
            <div class="iconbox">
                <span @click="show">
                    <i class="el-icon-chat-line-square"></i>
                    <p>评论</p>
                </span>
                <span>
                    <i class="el-icon-star-off"></i>
                    <p>收藏</p>
                </span>
                <span>
                    <i class="el-icon-download"></i>
                    <p>下载</p>
                </span>
            </div>
        </div>
   </div>
</template>
<script>
import  {Popup}  from 'mint-ui';
export default {
    data(){
        return {
            popupVisible:false,
            sss:""
        }
    },
    methods:{
        show(){
             this.popupVisible=true
        },
        send(){
            var bom = document.getElementById("bom");
            var boxdom =document.createElement("div");
            var val = ` 
            <div class="main">
                <div class="cont" id="ctt">
                    <p><img src="../assets/img/pic1.jpg"></p>
                    <p class="use">
                        <span class="sp1">
                            <i>18993453202</i>
                             <i class="el-icon-more"></i>
                        </span>
                        <span class="sp3" id="spp3">{this.sss}</span>
                        <span class="sp2">
                            <i>2019-10-29</i>
                            <i class="el-icon-chat-dot-round"></i>
                            <i class="el-icon-thumb"></i>
                        </span>
                    </p>
                </div>
            </div>`;
            boxdom.innerHTML=val;
            bom.appendChild(boxdom);
        }
    }
}
</script>
<style scoped>
    .top{
        width:90%;
        height:.21rem;
        /* background-color:orange; */
        margin:0 auto;
        display:flex;
        justify-content: space-between;
        text-align:center;
    }
    .top span:nth-of-type(1){
        font-size:.22rem;
        font-weight:bold;
    }
    .top span:nth-of-type(2){
        line-height:.3rem;
        color:#fd5353;

    }
     .txttop{
        width:100%;
        height:.5rem;
        /* background-color:blue; */
        text-align:center;
        line-height:.5rem;
    }
    .txttop span{
        margin-left:1.5rem;
        margin-right:1rem;
    }
    .txttop input{
        width:.6rem;
        height:.3rem;
        border-radius:.15rem;
        border:0;
        outline:0;
        background-color:#dc2929;
        color:white;
    }
    .pop{
        width:100%;
        height:1.3rem;
        border-top-left-radius:8px;
        border-top-right-radius: 8px;
        background-color:#f7f7f7;
    }
    .txt{
        width:90%;
        height:1rem;
        margin-left:5%;
        border:0;
        outline:0;

    }
    .bottom{
       width:100%;
       margin-top:.2rem;
       margin-bottom:.3rem;
    }
    .bottom .main{
        width:90%;
        /* height:1.03rem; */
        /* border-top:3px solid #efefef; */
        border-bottom:3px solid #efefef;
        /* background-color:orange; */
        margin:0 auto;
        overflow: hidden;
    }
    .bottom .cont{
        /* width:90%; */
        /* height:.73rem; */
        /* background-color:blue; */
        display:flex;
        margin:0 auto;
    }
    .bottom .cont img{
        width:.33rem;
        height:.33rem;
    }
    .bottom .cont p:nth-of-type(2){
        width:100%;
        margin-left:.12rem;
        margin-bottom:.2rem;
        /* overflow: hidden; */
    }
    .bottom .sp1{
        display:flex;
        justify-content: space-between;
    }
    .bottom .sp1 i:nth-of-type(1){
        font-size:.11rem;
        color:#626262;
        font-style:normal;
    }
    .bottom .sp2{
        display:block;
    }
    .bottom .sp2 i:nth-of-type(1){
        font-style:normal;
        margin-right:1.6rem;
        font-size:.11rem;
        color:#626262;
    }
    .bottom .sp2 i:nth-of-type(2){
        font-size:.19rem;
    }
    .bottom .sp2 i:nth-of-type(3){
        font-size:.19rem;
        margin-left:.19rem;
    }
    .bottom .sp3{
        line-height:.3rem;
    }

    .box{
        width:100%;
        margin-top:.18rem;
        /* padding-left:2.5%; */
        border-top:1px solid #cccccc;
        /* background-color:red; */
    }
    .bigbox{
        width:100%;
        height:.52rem;
        background-color:white;
        border-top:1px solid #cccccc;
        display:flex;
        align-items: center;
        justify-content:space-between;
        position: fixed;
        left:0px;
        top:6.24rem;
    }
    .bigbox .infobox{
        width:2.20rem;
        height:.36rem;
        /* background-color:orangered; */
    }
    .bigbox .infobox input{
        width:2rem;
        height:.36rem;
        border:0;
        outline:0;
        border:1px solid #cecece;
        border-radius: .18rem;
        background-color:#f7f8f9;
        color:#a4a5a5;
        padding-left:.21rem;
    }
    .bigbox .iconbox i{
        /* display:block; */
        font-size:.22rem;
    }
    .bigbox .iconbox{
        width:1.2rem;
        display:flex;
        text-align:center;
        justify-content: space-around;
    }
    .bigbox .iconbox p {
        text-align:center;
        font-size:13px;
        color:#9b9b9b;
    }
   .bigbox .txttop{
        width:100%;
        height:.5rem;
        /* background-color:blue; */
        text-align:center;
        line-height:.5rem;
    }
    .bigbox .txttop span{
        margin-left:1.5rem;
        margin-right:1rem;
    }
    .bigbox .txttop input{
        width:.6rem;
        height:.3rem;
        border-radius:.15rem;
        border:0;
        outline:0;
        background-color:#dc2929;
        color:white;
    }
    .bigbox .pop{
        width:100%;
        height:1.3rem;
        border-top-left-radius:8px;
        border-top-right-radius: 8px;
        background-color:#f7f7f7;
    }
    .bigbox .txt{
        width:90%;
        height:1rem;
        margin-left:5%;
        border:0;
        outline:0;
    }
    
</style>