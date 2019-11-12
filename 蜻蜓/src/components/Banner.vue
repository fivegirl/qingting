<!--
 * @Author: your name
 * @Date: 2019-11-09 14:19:43
 * @LastEditTime: 2019-11-11 14:20:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsonservere:\三阶段\第三阶段\workspace\蜻蜓\src\components\banner.vue
 -->
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img,index) in imgs" :key="index"  >
                <a v-bind:href="img.href"><img :src="img.src" ></a>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>  
    </div>  
</template>
<script>
import Swiper from 'swiper';
export default {
    name: 'Banner',
    data () {
        return {
            imgs:[]
        }
    },
    created(){
        fetch("/api/bannerimgs")
        .then(res=>{
            console.log(res)
            return res.json();
        })
        .then(data=>{
            this.imgs = data;
            this.$nextTick(function(){
                let mySwiper = new Swiper('.swiper-container',{
                   autoplay:true,
                    speed:300,
                    grabCursor:true,
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                        type:"custom",
                        renderCustom: function (swiper, current, total) {
                            var paginationHtml = " ";
                            for (var i = 0; i < total; i++) {
                                // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
                                if (i === (current - 1)) {
                                    paginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                                }else{
                                    paginationHtml += '<span class="swiper-pagination-customs"></span>';
                                }						  
                            }
                            return paginationHtml;
                        }
                    }
                });
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>
<style>
@import url(https://unpkg.com/swiper/css/swiper.css);
.swiper-container{
  width:92%;
  height: 1.33rem;
  border-radius:9px;
  margin-top: 1.01rem;
    --swiper-pagination-color: #fefffd;/* 两种都可以 */
}
.swiper-wrapper img{
  width:100%;
  height: 100%;
}

/*包裹自定义分页器的div的位置等CSS样式*/
	.swiper-pagination-custom {
        bottom: 5%;
        left: 0;
        width: 100%;
        height: 20px;
        /* background-color: red; */
        text-align: center;
    }
    /*自定义分页器的样式，这个你自己想要什么样子自己写*/
    .swiper-pagination-customs {
        width: 10px;
        height: 10px;
        display:inline-block;
        background: #fff;
        opacity: .5;
        border-radius: 50%;
        margin: 0 5px;
        outline: 0;
    }
    /*自定义分页器激活时的样式表现*/
    .swiper-pagination-customs-active {
        width: .2rem;
        height: 10px;
        opacity: 1;
        border-radius: 6px;
        background-color: #fff;
    }
</style>