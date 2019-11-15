<!--
 * @Author: your name
 * @Date: 2019-11-11 16:46:44
 * @LastEditTime: 2019-11-14 23:29:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \蜻蜓\src\components\mustlismain.vue
 -->
<template>
    <div class="mustlismain">
        <div v-for="(lidatas,index) in alllidatas" :key="index">
            <div class="mls" v-if="lidatas.level==1">
                <h4 :id="lidatas.mao">{{lidatas.type}}</h4>
                <span style="display:none">{{currid}}</span>
                <div v-for="(limains,index) in alllidatas" :key="index">
                    <div v-if="limains.parentId==lidatas.id">
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
                </div>
                <ul class="li5">
                    <li v-if="limains.parentId==lidatas.id&&limains.parentId==5"  v-for="(limains,index) in alllidatas" :key="index">
                        <img :src="limains.src">
                        <p></p>
                        <span>{{limains.fenlei}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"mustlismain",
    props:['currid'],
    data(){
        return {
            alllidatas:[
                {
                    "type":"专辑榜",
                    "id":1,
                    "level":1,
                    "mao":"mao1"
                },{
                    "type":"主播榜",
                    "id":2,
                    "level":1,
                    "mao":"mao2"
                },{
                    "type":"电台榜",
                    "id":3,
                    "level":1,
                    "mao":"mao3"
                },{
                    "type":"直播榜",
                    "id":4,
                    "level":1,
                    "mao":"mao4"
                },{
                    "type":"分类榜",
                    "id":5,
                    "level":1,
                    "mao":"mao5"
                },{
                    "one":"国史演义|张少佐讲述红色革命",
                    "two":"邪恶催眠师3：梦醒大结局",
                    "three":"合租医仙",
                    "src":"static/img/biaosheng.jpg",
                    "parentId":1
                    
                },{
                    "one":"郭德纲对口相声",
                    "two":"单田芳：乱世枭雄",
                    "three":"盗墓笔记8部完整版",
                    "src":"static/img/rebo.jpg",
                    "parentId":1
                    
                },{
                    "one":"闪婚总裁契约妻",
                    "two":"不一样的经典童话",
                    "three":"诡镇",
                    "src":"static/img/xinpin.jpg",
                    "parentId":1
                    
                },{
                    "one":"马红漫的个人投资客",
                    "two":"晓年鉴",
                    "three":"蒋勋细说红楼梦",
                    "src":"static/img/changxiao.jpg",
                    "parentId":1
                    
                },{
                    "one":"叶文工作室",
                    "two":"DJ晓慧",
                    "three":"宝贝幼稚园",
                    "src":"static/img/nvshen.jpg",
                    "parentId":2
                    
                },{
                    "one":"高晓松",
                    "two":"梁宏达",
                    "three":"张绍忠",
                    "src":"static/img/nanshen.jpg",
                    "parentId":2
                    
                },{
                    "one":"朱亚文",
                    "two":"京都念慈庵流行音乐全金榜",
                    "three":"老道（逗比学院）",
                    "src":"static/img/xinjin.jpg",
                    "parentId":2
                    
                },{
                    "one":"CNR中国之声",
                    "two":"怀集音乐之声",
                    "three":"CNR经济之声",
                    "src":"static/img/diantai.jpg",
                    "parentId":3
                    
                },{
                    "one":"浪浪的飞翔",
                    "two":"李峙",
                    "three":"京晶",
                    "src":"static/img/diantaizhubo.jpg",
                    "parentId":3
                    
                },{
                    "one":"映秋儿·森屿",
                    "two":"酸汁宝贝",
                    "three":"初静丫（麦克风fm）",
                    "src":"static/img/daka.jpg",
                    "parentId":4
                    
                },{
                    "one":"你使劲-罄竹",
                    "two":"是夏天吧",
                    "three":"安心·娱家",
                    "src":"static/img/xinren.jpg",
                    "parentId":4
                    
                },{
                    "src":"static/img/author(1).jpg",
                    "fenlei":"小说",
                    "parentId":5
                },{
                    "src":"static/img/author(2).jpg",
                    "fenlei":"相声小品",
                    "parentId":5
                },{
                    "src":"static/img/author(3).jpg",
                    "fenlei":"评书",
                    "parentId":5
                },{
                    "src":"static/img/author(4).jpg",
                    "fenlei":"脱口秀",
                    "parentId":5
                },{
                    "src":"static/img/author(1).jpg",
                    "fenlei":"历史",
                    "parentId":5
                },{
                    "src":"static/img/author(2).jpg",
                    "fenlei":"儿童",
                    "parentId":5
                },{
                    "src":"static/img/author(3).jpg",
                    "fenlei":"头条",
                    "parentId":5
                },{
                    "src":"static/img/author(4).jpg",
                    "fenlei":"情感",
                    "parentId":5
                },{
                    "src":"static/img/author(1).jpg",
                    "fenlei":"文化",
                    "parentId":5
                },{
                    "src":"static/img/author(2).jpg",
                    "fenlei":"教育",
                    "parentId":5
                },{
                    "src":"static/img/author(3).jpg",
                    "fenlei":"音乐",
                    "parentId":5
                }
            ],
            currida:""
        }
    },
    created(){
        // axios.get('/mustlisten')
        // // .then(res=>{
        // //     return res.json();
        // // })
        // .then(res=>{
        //     this.alllidatas = res.data;
        //     this.currida = this.currid;
            this.currida = "";
            this.getlocala(this.currida);
        // })
        // .catch(err=>{
        //     console.log(err);
        // });
    },
    mounted(){
        this.$nextTick(()=>{
            window.addEventListener('scroll',this.handleScroll);
        });
    },
    beforeUpdate(){
        this.currida = this.currid;
        this.getlocala(this.currida);
        this.currida = null;
    },
    methods:{
        //从本地取存入的id
        getlocala(){
            console.log("select"+this.currid);
            let anchorElement = document.getElementById(this.currida);
            console.log("anchorElement"+anchorElement);
            //如果对应id的锚点存在，就跳转到锚点
            if(this.currida){
                anchorElement.scrollIntoView();
            }
        },
        handleScroll () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            console.log(scrollTop);
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
.mls>div>div{
    display: flex;
}
.mls>div>div>div{
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
    margin-right: 2%;
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