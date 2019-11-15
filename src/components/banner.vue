<template>
	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="(img,index) in imgs" :key="index"  >
	            <a v-bind:href="img.href"><img :src="img.img" alt=""></a>
	        </div>
	    </div>
		<div class="swiper-pagination"></div>
	</div>
</template>
<script>
import swiper from 'swiper'
import axios from 'axios';
export default{
	name:'banner',
	//从后端获取轮播图的图片（动态的数据）
	data(){
		return{
			imgs:[]
		}
	},
	created(){
		axios.get('/good/banner/1')
		// .then(res=>{
		// 	return res.json();
		// })
		.then(res=>{
      console.log(res.data);
			this.imgs=res.data;
			this.$nextTick(function(){
				let mySwiper = new swiper('.swiper-container',{

					pagination: {
					  el: ".swiper-pagination",
					  type: "custom",
					  renderCustom: function(swiper, current, total) {
						var customPaginationHtml = "";
						for (var i = 0; i < total; i++) {
						  //判断哪个分页器此刻应该被激活
						  if (i == current - 1) {
							customPaginationHtml +=
							  '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
						  } else {
							customPaginationHtml +=
							  '<span class="swiper-pagination-customs"></span>';
						  }
						}
						return '<span class="swiperPag">'+customPaginationHtml+'</span>';
					  }
					},

				     autoplay:true,
				      speed:100,
				      grabCursor:true
				});
			});
		})
		.catch(err=>{
			console.log(err);
		})
	}
}
</script>
<style >
/* 用@import 方式引入swiper的css样式 */
@import url(https://unpkg.com/swiper/css/swiper.css);
.swiper-container{
	margin-top: 115px;
  width:92%;
  height:1.33rem;
  border-radius: 9px;
}
.swiperPag {
  width:1rem;
  height: .2rem;
  border-radius: 0.04rem;
  display:block;
/*  align-items: center; */
  margin:0 auto;
  background-color: rgba($color: #000000, $alpha: 0.8)
}
.swiper-pagination-fraction,.swiper-pagination-bullets {
  bottom:0.27rem;
}
.swiper-pagination-customs {
 width: .06rem;
 height:.06rem;
  border-radius: 50%;
  display: inline-block;
   background-color: #f8f4f1;
  margin-right: .05rem;
}
/*自定义分页器激活时的样式表现*/
.swiper-pagination-customs-active {

  width: .21rem;
  height: .06rem;
  display: inline-block;
  border-radius: 5px;
  background: #fff;
  margin-right: .05rem;
}
img{
  width:100%;
  height:100%;
}
</style>
