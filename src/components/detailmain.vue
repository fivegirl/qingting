<!--
 * @Author: your name
 * @Date: 2019-11-12 23:49:45
 * @LastEditTime: 2019-11-15 12:35:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsonservere:\三阶段\第三阶段\workspace\qingting\src\components\detailmain.vue
 -->
<template>
    <div class="detailmain">
        <div v-for="(book,index) in $store.state.books" :key="index"
		 v-bind:class="{gu1:isgu1}"  @click="gobofang">
            <div class="dm_top">
                <img :src="book.goodImg" alt="" class="book_img">
                <div>
                    <p>{{book.goodName}}</p>
                    <p>{{book.goodFinish}}</p>
                    <div class="dm_right">
                        <img src="../assets/xqzz.jpg" alt="">
                        <span>{{book.goodAuthor}}</span>
                        <p>
                            <img src="../assets/shoucang.jpg" alt="">
                            <span class="sc">收藏</span>
                        </p>
                    </div>
                </div>
                 <div class="starmain_play">
                    <img src="../assets/play.png" alt="">
                    <span>{{book.goodPoint}}</span>
                </div>
                <span class="vipgu">{{book.goodVip}}</span>
            </div>
            <div class="jianjie" v-show="isshow" @click="dianji()">
                <p>{{book.goodIntro}}</p>
                <span>展开简介<i class="el-icon-arrow-down"></i></span>
            </div>
            <div class="xxjj" v-show="!isshow" @click="dianji()">
                <p class="jjbt">简介</p>
                <p class="jjnr">{{book.goodIntro}}</p>
                <p class="jjbt">详细介绍</p>
                <p class="jjnr">{{book.xiangxijianjie}}</p>
                <div><p>点击收起<i class="el-icon-arrow-up"></i></p></div>
            </div>
            <div class="xqml">
                <div v-bind:class="{gu:isgu}">
                    <div class="xqnav">
                        <p @click="dianjinav()">节目<span class="xhx" v-show="xianshi"></span></p>
                        <p @click="dianjinav()">推荐<span class="xhx" v-show="!xianshi"></span></p>
                    </div>
                    <div class="xqnav_bottom">
                        <p>共<span>213</span>期</p>
                        <ul>
                            <li>
                                <img src="../assets/xiazai.jpg" alt="">
                                <p>下载</p>
                            </li>
                            <li>
                                <img src="../assets/paixu.jpg" alt="">
                                <p>排序</p>
                            </li>
                            <li>
                                <img src="../assets/xuanji.jpg" alt="">
                                <p>选集</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <detailmu :currid="book.goodId" v-show="xianshi"></detailmu>
                    <playlist :playdec="book.goodDes" v-show="!xianshi"></playlist>
                </div>
                <!-- <div class="fixplay">
                    <img :src="book.goodImg">
                    <playbutton :muluid="book.goodName"></playbutton>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import detailmu from "./detailmu";
import playlist from "./playlist";
import playbutton from "./playbutton";
import axios from "axios";
export default {
    name:'detailmain',
    data(){
        return{
            isshow:true,
            xianshi:true,
            scrollTop:0,
            isgu:false,
            isgu1:false
        }
    },
    components:{
        detailmu,playlist,playbutton
    },
    created(){
        this.$store.dispatch('getDetail');//页面一打开就获取数据
        // axios.get('/currbooks')
        // .then((res)=>{
        //     this.books = res.data;
        //     console.log(this.books)
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })  
    },
    mounted(){
        this.$nextTick(()=>{
            window.addEventListener('scroll',this.handleScroll);
        });
    },
    methods:{
        dianji(){
            this.isshow = !this.isshow;
            this.isgu1 = !this.isgu1;
        },
        dianjinav(){
            this.xianshi = !this.xianshi;
        },
        handleScroll(){
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            console.log(this.scrollTop);
            if(this.scrollTop>=209){
                this.isgu = true;
                console.log(this.isgu)
                return;
            }else{
                this.isgu = false;
                console.log(this.isgu)
            }
        },
		gobofang(){
			this.$router.push({ path: '/playpage', query: { goodName:'book.goodName' }})
		}
    }
}
</script>
<style scoped>
.detailmain{
    width: 100%;
    background: #9e8b7a;
    overflow: hidden;
}
.dm_top{
    width: 92%;
    margin: .49rem auto 0;
    overflow: hidden;
}
.book_img{
    width: .97rem;
    height: .97rem;
    border-radius: 6px;
    float: left;
    margin-right: .1rem;
}
.dm_top>div{
    float: left;
}
.dm_top>div p:nth-child(1){
    font-size: .17rem;
    color: #fff;
    line-height: .25rem;
}
.dm_top>div p:nth-child(2){
    font-size: .1rem;
    color: #fff;
    line-height: .2rem;
}
.dm_right{
    display: flex;
    margin-top: .25rem;
}
.dm_right>img{
    width: .23rem;
    height: .23rem;
    margin-right: 12px;
}
.dm_right>span{
    font-size: .1rem;
    color: #fff;
    margin-right: .8rem;
}
.dm_right p{
    width: .62rem;
    height: .27rem;
    border-radius: .13rem;
    background: #ff8486;
    overflow: hidden;
}
.dm_right p img{
    float: left;
    margin-top: .03rem;
    margin-left: .05rem;
}
.dm_right .sc{
    float: left;
    font-size: .12rem;
    color: #fff;
    margin-top: .05rem;
}
.jianjie{
    width: 92%;
    background: #736051;
    margin: .11rem auto 0;
    padding-bottom: .23rem;
    border-radius: 6px;
}
.jianjie p{
    font-size: .12rem;
    line-height: .2rem;
    color:#fcede0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
.jianjie span{
    display: block;
    width: .6rem;
    margin: 0 auto;
    font-size: .12rem;
    color:#fcede0;
}
.xxjj{
    width: 92%;
    height: 5.5rem;
    margin: .11rem auto 0;
    position: relative;
    padding-bottom: .5rem;
    box-sizing: border-box;
    overflow: hidden;
    overflow-y: auto;
}
.jjbt{
    font-size: .17rem;
    color: #fff;
    margin-bottom: 12px;
}
.jjnr{
    font-size: .15rem;
    line-height: .25rem;
    color: #fff;
    margin-bottom: .3rem;
}
.xxjj div{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #9e8b7a;
}
.xxjj div p{
    width: 1.2rem;
    height: .41rem;
    border-radius: .2rem;
    background: #736051;
    font-size: .13rem;
    color: #fff;
    text-align: center;
    line-height: .41rem;
    margin: 0.2rem auto;
}
.xxjj i{
    margin-left: .07rem;
}
.xqnav{
    width: 100%;
    height: .48rem;
    border-top-left-radius: .08rem;
    border-top-right-radius: .08rem;
    font-size: .15rem;
    color: #3a3a3a;
    background: #fff;
}
.xhx{
    display: block;
    width: .17rem;
    height: 3px;
    background: #f25f60;
    border-radius: 2px;
    margin: 0 auto;
}
.xqnav p{
    display: inline-block;
    margin-top: .16rem;
}
.xqnav p:first-child{
    margin-left: .85rem;
}
.xqnav p:last-child{
    margin-left: 1.45rem;
}
.xqnav_bottom{
    width: 100%;
    height: .57rem;
    background: #fff;
    overflow: hidden;
    padding: 0 .13rem;
    box-sizing: border-box;
}
.xqnav_bottom>p{
    font-size: .11rem;
    color: #979797;
    float: left;
    margin-top: .11rem;
}
.xqnav_bottom ul{
    float: right;
    display: flex;
    margin-top: .15rem;
}
.xqnav_bottom ul li{
    margin-left: .18rem;
    text-align: center;
}
.xqnav_bottom img{
    width:.18rem;
    height: .16rem;
}
.xqnav_bottom li p{
    font-size: .09rem;
    color: #979998;
}
.xqml{
    z-index: 1;
    background: #fff;
    padding-bottom: .18rem;
}
.gu{
    width: 100%;
    background: #fff;
    position: fixed;
    left: 0rem;
    top:.49rem; 
}
.gu1{
    width: 100%;
    background: #9e8b7a;
    position: fixed;
    left: 0rem;
    top:0; 
}
.starmain_play{
    position: absolute;
    left: .15rem;
    top: 1.25rem;
}
.starmain_play img{
    width: .16rem;
    height: .16rem;
}
.starmain_play span{
    font-size: .11rem;
    color: #fff;
}
.vipgu{
    font-size: .13rem;
    color: #78551b;
    background: #fbd594;
    position: absolute;
    left: .15rem;
    top: .49rem;
    border-top-left-radius: .07rem;
    border-bottom-right-radius: .07rem;
    padding: 1px 4px;
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