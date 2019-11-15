<!--
 * @Author: your name
 * @Date: 2019-11-12 11:24:34
 * @LastEditTime: 2019-11-12 21:26:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \蜻蜓\src\components\gerentop.vue
 -->
<template>
    <div class="gr1">
        <div class="gerentop">
            <i class="el-icon-bell"></i>
            <span v-show="isshow">个人中心</span>
            <img src="../assets/saoyisao.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:"gerentop",
    data(){
        return{
            scrollTop:0,
            isshow:false
        }
    },
    mounted(){
        this.$nextTick(()=>{
            window.addEventListener('scroll',this.handleScroll);
        });
    },
    methods:{
        handleScroll () {
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            console.log(this.scrollTop);
            if(this.scrollTop>10){
                this.isshow = true;
            }else{
                this.isshow = false;
            }
        }
    }
}
</script>
<style scoped>
.gerentop{
    width: 92%;
    height: .45rem;
    background: #fff;
    margin: 0 auto;
}
.el-icon-bell{
    font-size: .26rem;
    color: #1e1e1e;
    margin-top: .09rem;
}
.gerentop img{
    width: .21rem;
    height: .21rem;
    float: right;
    margin-top: .1rem;
}
.gerentop span{
    font-size: .19rem;
    color: #303030;
    margin-left: 1.11rem;
    font-weight: bold;
}
</style>