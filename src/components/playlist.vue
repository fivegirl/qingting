<!--
 * @Author: your name
 * @Date: 2019-11-09 14:19:01
 * @LastEditTime: 2019-11-14 23:34:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\components\playdec.vue
 -->
<template>
    <div class="box">
        <div class="mainbox" v-for="(item,index) in decs" :key="index" @click="godetail">
            <div class="left">
                <img :src="item.goodImg">
            </div>
            <div class="right">
                <p class="list1">
                    <span>会员专享</span>
                    <span>{{item.goodName}}</span>
                </p>
                <p class="list2">
                    <span>
                        [付费精品]
                    </span>
                    
                    <span>
                    [火爆完本]
                    </span>
                    <span>
                        {{item.goodIntro}}
                    </span>
                </p>
                <p class="list3">
                    <span>
                        <i class="el-icon-caret-right"></i>
                    </span>
                    <span>{{item.goodPoint}}</span>
                    <span>
                        <i class="el-icon-tickets"></i> 
                    </span>
                    <span>120期</span>
                </p>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'playdec',
    data(){
        return {
            decs:[],
            goodName:"",
            goodIntro:"",
            goodPoint:"",
            goodImg:""
        }
    },
    created(){
        fetch('/api/ft')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            this.decs = data;
        })
        .catch(err=>{
            console.log(err);
        })
    },
	methods:{
		godetail(){
			this.$router.push({ path: '/detailsa', query: { goodName:'book.goodName' }})
		}
	}
}
</script>
<style scoped>
    .mainbox{
        width:90%;
        height:.76rem;
        display:flex;
        /* background-color:violet; */
        margin:0 auto;
        margin-top:.16rem;
        /* padding-bottom:.12rem; */
    }
    .left img{
        width:.75rem;
        height:.77rem;
    }
    .right{
        margin-left:.13rem;
        width:100%;
        height:.86rem;
        border-bottom:2px solid #f1f1f1;
    }
    .list1 span:nth-of-type(1){
        display:inline-block;
        width:.5rem;
        height:.16rem;
        border-radius:8px 0 8px 0 ;
        background-color:#fbce81;
        color:#8a6224;
        /* margin-left:.12rem; */
        margin-top:.06rem;
        font-size:10px;
        text-align:center;
        line-height:.16rem;
    }
    .list1 span:nth-of-type(2){
        display:inline-block;
        margin-top:.06rem;
        /* margin-left:.08rem; */
    }
    .list2{
        width:2.55rem;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        margin-top:.09rem;
        color:#949494;
        /* margin-left:.15rem; */
        font-size:14px;
    }
    .list3 i:nth-of-type(1){
        font-size:.2rem;
    }
    .list3 span{
        display:inline-block;
        color:#949494;
        font-size:15px; 
        margin-top:.06rem;       
    }
    /* .list3 span:nth-of-type(2) i{
        font-size:.3rem;
    } */
</style>
