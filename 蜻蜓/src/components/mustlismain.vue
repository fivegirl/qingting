<!--
 * @Author: your name
 * @Date: 2019-11-11 16:46:44
 * @LastEditTime: 2019-11-12 10:57:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \蜻蜓\src\components\mustlismain.vue
 -->
<template>
    <div class="mustlismain">
        <div class="mls" v-if="lidatas.level==1" v-for="(lidatas,index) in alllidatas" :key="index">
            <h4 :id="lidatas.mao">{{lidatas.type}}</h4>
            <span style="display:none">{{currid}}</span>
            <div v-if="limains.parentId==lidatas.id" v-for="(limains,index) in alllidatas" :key="index">
                <div v-if="limains.parentId!=5">
                    <img :src="limains.src" alt="">
                    <ul>
                        <li>
                            <img src="../assets/1.jpg" alt="">
                            <span>{{limains.one}}</span>
                        </li>
                        <li>
                            <img src="../assets/2.jpg" alt="">
                            <span>{{limains.two}}</span>
                        </li>
                        <li>
                            <img src="../assets/3.jpg" alt="">
                            <span>{{limains.three}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <ul class="li5">
                <li v-if="limains.parentId==lidatas.id&&limains.parentId==5" v-for="(limains,index) in alllidatas" :key="index">
                    <img :src="limains.src">
                    <p></p>
                    <span>{{limains.fenlei}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"mustlismain",
    props:['currid'],
    data(){
        return {
            alllidatas:[],
            currida:""
        }
    },
    created(){
        fetch('/api/mustlisten')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.alllidatas = data;
            this.currida = this.currid;
            this.getlocal(this.currida);
        })
        .catch(err=>{
            console.log(err);
        });
    },
    mounted(){
        this.$nextTick(()=>{
            window.addEventListener('scroll',this.handleScroll);
        });
    },
    beforeUpdate(){
        this.currida = this.currid;
        this.getlocal(this.currida);
    },
    methods:{
        //从本地取存入的id
        getlocal(){
            console.log("select"+this.currid);
            let anchorElement = document.getElementById(this.currida);
            console.log("anchorElement"+anchorElement);
            //如果对应id的锚点存在，就跳转到锚点
            if(this.currida){
                anchorElement.scrollIntoView({block: "center"});
            }
        }
    }
}
</script>
<style scoped>
.mustlismain{
    width: 92%;
    margin: .87rem auto 0;
}
.mustlismain h4{
    margin-top: .22rem;
    margin-bottom: .15rem;
}
.mls>div{
    display: flex;
}
.mls>div>div{
    display: flex;
}
.mls img{
    width: 1.17rem;
    height: 1.16rem;
}
.mls ul{
    padding-top: .1rem;
}
.mls li img{
    width: .14rem;
    height: .15rem;
    float: left;
    margin: .07rem .08rem 0 .15rem;
}
.mls li span{
    display: inline-block;
    width: 1.55rem;
    font-size: .14rem;
    color: #5f5f5f;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: .09rem;
    line-height: .3rem;
}
.li5{
    display: flex;
    flex-wrap: wrap;
}
.li5 li{
    width: .81rem;
    height: .81rem;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    margin-right: .07rem;
    margin-bottom:.17rem;
}
.li5 li:nth-child(4n){
    margin-right: 0rem;
}
.li5 li img{
    width: 100%;
    height: 100%;
    margin: 0;
}
.li5 li p{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6);
    position: absolute;
}
.mls .li5 span{
    display: inline;
    width: 100%;
    font-size: .17rem;
    color: #fff;
    position: absolute;
    left: 0rem;
    bottom: 0rem;
    margin-left: 0;
    text-align: center;
}
</style>