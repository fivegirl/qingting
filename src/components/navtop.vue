<template>

	<div class="nav">
		<div class="navtop">
			<ul>
				<li v-for="(lilist,index) in lilists" :key="index"
				  @click="toggle(index,$event)"

				  v-bind:class='{active:index==dynamic}' v-bind:id='index'>
				  {{lilist.text}}</li>
			</ul>
			<em>
				<transition name="slide-fade" mode="out-in" >
					<i class="iconfont icon-fenlei3" v-if="show" @click="show=!show" ></i>
					 <span v-else @click="show=!show">.分类.</span>

				</transition>

			</em>

		</div>
		<div class="search">
			<input type="text"  :placeholder="tip" @click="goSearch()">
			<i class="el-icon-search"></i>
			<i class="el-icon-time"></i>
		</div>

	</div>

</template>
<script>
	export default{
		name:'navtop',
		data(){
			return{
				show:true,


				tip:'从“失控”到“掌控”',
				lilists:[{
					text:'推荐'
				},
				{
					text:'小说'
				},
				{
					text:'脱口秀'
				},
				{
					text:'搞笑'
				},
				{
					text:'情感'
				},
				{
					text:'直播'
				},
				{
					text:'外语'
				},
				{
					text:'蜻蜓之声'
				},
				{
					text:'二次元'
				},
				{
					text:'短音频'
				}
				],
				dynamic:0,
				isActive:false


			}
		},
		methods:{
			toggle(index,e) {
				// console.log(index)
				if(index==1){
					this.dynamic=index;
				}else{
					this.dynamic=index;
				}
				let eventdom=e.target;
				// console.log("dsfsdf"+eventdom);
			   eventdom.scrollIntoView(
			   {behavior:"auto", block: "center",inline: "center"});


			},
      goSearch(){
        this.$router.push({path:'/LoginPage'});
      }

		}
	}
</script>
<style scoped>
	em>img,span{
		transform-style: preserve-3d;
		position: absolute;
		left: 0;
		top: 0;
	}
	/*进入时过渡状态*/
	.slide-fade-enter-active{
	    transition: all .3s ease;
	}
	/*离开时的过渡状态*/
	.slide-fade-leave-active {
	    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	/*进入时初始状态和离开的最终状态是一样的*/
	.slide-fade-enter, .slide-fade-leave-to {
	    transform: rotateZ(360deg);
	    opacity: 0;
	}

 .active{
		color:red;
		font-size: 22px;
	}
   .boxcls{
		color:black;
		font-size: 14px;
	}

.nav{
	position: fixed;
	top:0;
	left:0;

	z-index: 2;
	width:100%;
	height:.9rem;
	background: #fff;
}
.navtop{
	width:100%;
	height:.4rem;
	}
ul{
	position: absolute;
	top:0;
	left:.16rem;
	display: flex;
	width: 2.97rem;
	height: .4rem;
	overflow-x: auto;
}
li{
	height:100%;
  color:#9a989a;
flex-shrink: 0; /**/
text-align: center;
line-height: .4rem;
font-size: .15rem;
padding-right: .23rem;

}
.search{
	width:100%;
	height:.5rem;

	display:flex;
	align-items: center;
	justify-content:center;
	 position: relative;
}
.seaImg{
	display: block;
	width:.12rem;
	height:.12rem;

}
::-webkit-scrollbar{
   display: none;
}
input{
	background-color: #f6f6f6;
outline: none;
border: none;
	width:2.97rem;
	height:.31rem;
	border-radius:18px;
	outline: 0;
	text-align: center;
	line-height:.31rem ;
}
em{
	position: relative;
	display: inline-block;
	width:.48rem;
	height:100%;
	float: right;
	transform-style: preserve-3d;
	transform:rotateX(-20deg);
	animation:photo 2s linear infinite;
}

.icon-fenlei3{
	line-height: .4rem;
	font-size: .2rem;
	text-align: center;
	color:#999999;
	display: block;
}
span{
	width:100%;
	display:block;
	line-height: .4rem;
	font-size: .15rem;
	text-align: left;
	color:#959595;

}
.el-icon-search{
	position: absolute;
	left:.92rem;
	top:16px;
	font-weight: bold;
	font-size: .16rem;
	color: #f04e4e;
}
.el-icon-time{
	width:.45rem;
	height:100%;
	line-height: .5rem;
	float: right;
	text-align: right;
	font-size: .22rem;
	color: #9a9a9a;
}
</style>
