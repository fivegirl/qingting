<!--
 * @Author: your name
 * @Date: 2019-11-09 16:27:00
 * @LastEditTime: 2019-11-09 20:09:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \蜻蜓\src\components\banner_bottom.vue
 -->
<template>
    <div class="banner_bottom">
        <div v-for="(navimg,index) in navimgs" :key="index" class="navbox">
            <img :src="navimg.src">
            <p>{{navimg.data}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"bannerbottom",
    data(){
        return {
            navimgs:[
                {
                    src:"static/img/nav01.jpg",
                    data:"签到"
                },
                {
                    src:"static/img/nav02.jpg",
                    data:"听鬼故事"
                },
                {
                    src:"static/img/nav03.jpg",
                    data:"福利社"
                },
                {
                    src:"static/img/nav04.jpg",
                    data:"联合会员"
                },
                {
                    src:"static/img/nav05.jpg",
                    data:"全部"
                }
            ]
        }
    }
}
</script>
<style scoped>
.banner_bottom{
    width: 87%;
    height: .84rem;
    margin: 0 auto;
    padding: 0 .1rem;
    display: flex;
    justify-content: space-between;
}
.banner_bottom img{
    width:.35rem;
    height: .36rem;
    margin: .15rem auto 3px;
}
.banner_bottom p{
    font-size: .11rem;
    color:#5f5f5f;
}
.navbox{
    text-align: center;
}
</style>