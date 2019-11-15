<!--
 * @Author: your name
 * @Date: 2019-11-12 21:58:42
 * @LastEditTime: 2019-11-14 23:43:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsonservere:\三阶段\第三阶段\workspace\qingting\src\components\detail.vue
 -->
<template>
    <div class="detail_top">
        <div class="dt_top" v-for="(book,index) in $store.state.books" :key="index">
            <goback1></goback1>
            <span v-show="isshow">{{book.goodName}}</span>
            <img src="../assets/fenxiang.jpg" alt="">
        </div>
    </div>
</template>
<script>
import goback1 from "./goback1";
export default {
    name:"detailtop",
    data(){
        return{
            scrollTop:0,
            isshow:false
        }
    },
    components:{
        goback1
    },
    mounted(){
        this.$nextTick(()=>{
            window.addEventListener('scroll',this.handleScroll);
        });
    },
    methods:{
        handleScroll(){
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(this.scrollTop>160){
                this.isshow = true;
                console.log(this.scrollTop);
            }else if(this.scrollTop<=160){
                this.isshow = false;
            }
        }
    }
}
</script>
<style scoped>
.detail_top{
    width: 100%;
    height: .49rem;
    background: #9e8b7a;
}
.dt_top{
    width: 92%;
    height: 100%;
    margin: 0 auto;
}
.dt_top i{
    font-size: .2rem;
    color: #fff;
    float: left;
    margin-top: .1rem;
}
.dt_top img{
    width: .18rem;
    height: .2rem;
    float: right;
    margin-top: .12rem;
}
.dt_top span{
    display: inline-block;
    font-size: .2rem;
    color: #fff;
    margin-top: .07rem;
}
</style>