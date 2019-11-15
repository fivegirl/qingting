<!--
 * @Author: your name
 * @Date: 2019-11-11 09:21:43
 * @LastEditTime: 2019-11-11 13:45:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \蜻蜓\src\components\mofang.vue
 -->
<template>
    <div>
        <div class="mofang">
            <p>主题魔方</p>
            <div>
                <div class="mofangmain" v-for="(currmfdata,index) in currmfdatas" :key="index">
                    <p>{{currmfdata.author}}</p>
                    <p>{{currmfdata.intro}}</p>
                </div>
                <div class="mofangmain mofang2">
                    <i class="el-icon-refresh-left"></i>
                    <span @click="random()">换一批</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"mofang",
    data(){
        return {
            mfdatas:[
                {
                    "author":"老梁",
                    "intro":"老梁收听指南"
                },
                {
                    "author":"历史人物",
                    "intro":"穿越千年对谈"
                },
                {
                    "author":"侦探迷",
                    "intro":"开始你的推理"
                },
                {
                    "author":"鬼屋历险",
                    "intro":"有胆你就来"
                },
                {
                    "author":"文学青年",
                    "intro":"属于文学的你"
                },
                {
                    "author":"单身狗",
                    "intro":"自我救赎"
                },
                {
                    "author":"人生体验官",
                    "intro":"名人那些事儿"
                },
                {
                    "author":"奈何桥回首",
                    "intro":"必听惊悚佳作"
                },
                {
                    "author":"少女心",
                    "intro":"花痴了女孩"
                },
                {
                    "author":"王朝的女人",
                    "intro":"皇帝的女人"
                },
                {
                    "author":"驱魔人",
                    "intro":"恐怖鬼故事"
                },
                {
                    "author":"宝妈",
                    "intro":"辣妈养成"
                },
                {
                    "author":"萌娃",
                    "intro":"快乐成长"
                },
                {
                    "author":"社畜",
                    "intro":"自我救赎"
                },
                {
                    "author":"会员人气听",
                    "intro":"“老司机”安利"
                },
                {
                    "author":"影视著作",
                    "intro":"听剧场"
                },
                {
                    "author":"散仙周建龙",
                    "intro":"鬼吹灯演播者"
                },
                {
                    "author":"单田芳",
                    "intro":"评书大师"
                }
            ],
            currmfdatas:[   
                {
                    "author":"老梁",
                    "intro":"老梁收听指南"
                },
                {
                    "author":"历史人物",
                    "intro":"穿越千年对谈"
                },
                {
                    "author":"侦探迷",
                    "intro":"开始你的推理"
                },
                {
                    "author":"鬼屋历险",
                    "intro":"有胆你就来"
                },
                {
                    "author":"文学青年",
                    "intro":"属于文学的你"
                },
                {
                    "author":"单身狗",
                    "intro":"自我救赎"
                },
                {
                    "author":"人生体验官",
                    "intro":"名人那些事儿"
                },
                {
                    "author":"奈何桥回首",
                    "intro":"必听惊悚佳作"
                }
            ],
            i:8
        }
    },
    methods:{
        random(){
            let currmfdatas1={};
            let l = this.mfdatas.length;//18
            if(this.i+8>l){
                let  currmfdatas3=this.mfdatas.slice(this.i,l);
                this.i = 8-(l-this.i);
                currmfdatas1=this.mfdatas.slice(0,this.i);

                currmfdatas1= currmfdatas3.concat(currmfdatas1);


                // var str1=[{name:"11",age:11}];
                // var str2=[{name:"22",age:22}];
                //  
                // var str3 = [];
                //  
                // for (var i = 0; i < str1.length; i++) {
                //     str3.push(str1[i]);
                // }
                //  
                // for (var i = 0; i < str2.length; i++) {
                //     str3.push(str2[i]);
                // }
                //  
                // --------------
                //  
                // var str3 = str1.concat(str2);

                // 本质上是数组，用合并数组的方法来进行合并。
                
            }else{
                currmfdatas1=this.mfdatas.slice(this.i,this.i+8);
                this.i +=8;
            }
            this.currmfdatas = currmfdatas1;
        }
    }
}
</script>
<style scoped>
.mofang{
    width: 92%;
    margin: 0 auto;
    padding-top: .19rem;
}
.mofang>p{
    display: block;
    font-size: .18rem;
    color: #242426;
    margin-bottom: .15rem;
    flex-wrap: wrap;
}
.mofang>div{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.mofangmain{
    width: 1.14rem;
    height: .51rem;
    background: #fffaf4;
    border-radius: .06rem;
    padding-top: .11rem;
}
.mofangmain:nth-child(even){
    background: #fef7e5;
}
.mofang2{
    font-size: .16rem;
    color: #502800;
    text-align: center;
    line-height: .51rem;
}
.mofangmain p:first-child{
    font-size: .16rem;
    color: #502800;
    text-align: center;
}
.mofangmain p:last-child{
    font-size: .12rem;
    color: #c5ae94;
    text-align: center;
    line-height: .21rem;
}
</style>