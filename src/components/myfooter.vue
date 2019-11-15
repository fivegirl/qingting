<template>
	<div class="footer">

		<ul class="liss">

			<li>
				 <!-- <router-link to="/loginPage"> -->
					<div class="fir" :key="a" v-if="show"
          @click="show=!show"  v-bind:index="a">
						<i class="iconfont icon-shouye2"></i>
						<label>首页</label>
					</div>
					<div class="sec"  v-else @click="show=!show">
						<i class="iconfont icon-shouye"></i>
						<label>首页</label>
					</div>
			<!-- </router-link>	 -->
			</li>
			<li>
				<!-- <router-link to="/classifyPage"> -->
					<div class="fir" v-if="show"
          @click="show=!show"  v-bind:index="b" >
						<i class="iconfont icon-chaojihuiyuan1"></i>
						<i class="iconfont icon-huiyuan4"></i><label>超级会员</label>
					</div>
					<div class="sec"  v-else @click="show=!show">
						<i class="iconfont icon-chaojihuiyuan1"></i>
						<i class="iconfont icon-huiyuan6"></i><label class="label">超级会员</label>
					</div>
				<!-- </router-link>	 -->
			</li>
			<li>

				   <em><img src="../assets/img/p2.png" alt="">
			     </em>

			</li>
			<li >
			  <!-- <router-link to="/registerPage"> -->
						<div class="fir" :key="d" v-if="show" @click="show=!show"
				         v-bind:index="d">
							<i class="iconfont icon-bofang2"></i>
							<label>我听</label>
						</div>
						<div class="sec" v-else @click="show=!show" >
							<i class="iconfont icon-bofang4"></i>
							<label>我听</label>
						</div>
				<!-- </router-link> -->
			</li>

			<li>
				<!-- <router-link to="/registerPage"> -->
					<div class="fir" v-if="show" @click="show=!show"
				      v-bind:index="e">
						<i class="iconfont icon-gerenzhongxin2"></i>
						<label>个人中心</label>
					</div>

					<div class="sec" v-else @click="show=!show">
						<i class="iconfont icon-_gerenzhongxin"></i>
						<label>个人中心</label>
					</div>
		      <!-- </router-link>	 -->
			</li>

		</ul>
	</div>

</template>
<script>
import $ from 'jquery'

	export default{
		name:'myfooter',
		data(){
			return{
      show:false
			// 	b:1,
			// 	c:2,
			// 	d:3,
			// 	e:4,
			//    a:0,
			// dynamic:0,
			// isActive:false,

			}
		},
		methods:{
// 			huan(trans,e){
// 				// let _this=this;
// 				console.log("trans"+trans);
//
// 				   let eve=e.target;
// 				   let all=e.currentTarget.parentElement.children;
// 				   let one1=all[0].firstElementChild.firstElementChild;
// 				   let one2=all[0].firstElementChild.lastElementChild;
// 				   let two1=all[1].firstElementChild.firstElementChild;
// 				   let two2=all[1].firstElementChild.lastElementChild;
// 				   let four1=all[3].firstElementChild.firstElementChild;
// 				   let four2=all[3].firstElementChild.lastElementChild;
// 				   let five1=all[4].firstElementChild.firstElementChild;
// 				   let five2=all[4].firstElementChild.lastElementChild;
// 				  let fir= e.currentTarget.firstElementChild.firstElementChild;
// 				  let last=e.currentTarget.firstElementChild.lastElementChild;
// 				   // console.log(fir);
// 				        one1.style.display="block";
// 						one2.style.display="none";
// 						two1.style.display="block";
// 						two2.style.display="none";
//
// 						four1.style.display="block";
// 						four2.style.display="none";
// 						five1.style.display="block";
// 						five2.style.display="none";
// 						if(trans!=2){
// 							fir.style.display="none";
// 							last.style.display="block";
// 						}
//
//
//
// 				   // })
//
// 			}
			// goimg(transOrd,ass){
			//
			// 	let lis=$('.liss').children();
			// 	// console.log("lis"+lis);
			// 	// var index=0;
			// 	// for(let i=0;i<lis.length;i++){
			// 	// 	 lis[i].setAttribute("index",i);
			// 	//    }
			// 	console.log(this);
			// 	let outIndex =ass.index;
			// 	 ass.index = transOrd;
			// 	console.log("outIndex"+outIndex);
			//
			// 	 // console.log("index:"+ass.index);
			// 	 console.log( lis.eq(outIndex+1));
			// 	 console.log( lis.eq(ass.index));
			// 	 // console.log( lis.eq(ass.index+1));
			// 	 // lis.eq[outIndex].css("display","block");
			// 	 // lis.eq[outIndex+1].css("display","none");
			// 	 // lis.eq[index].css("display","none");
			// 	 // lis.eq[index+1].css("display","block");
			//
			// }
		}
	}
</script>
<style scoped>

.iconfont{
	color:#6c6c6c;
	font-size: .22rem;
	display: block;
	margin-top:.04rem;
}
.icon-chaojihuiyuan1{
	position: absolute;
	left:78px;
	top:7px;
	z-index: 2;
}
.icon-zbbicon0325{
	display:none;
}
.icon-shouye{
color:#e0625e ;
/* color:#fff; */
}
.active{
	color:red;
}
/* .sec{
	display: none;
} */
.fir{
	z-index: 1;
}
.sec>.iconfont{
	color:#ff6e6e;
}
.sec>.icon-huiyuan6{
	color:#fed289;
}
 .sec>.icon-chaojihuiyuan1{
	 z-index: 3;
	 color:#956d28;
	 top:8px;
 }
.sec>label{

    color:#ff6e6e;
}
.sec>.label{
	color: #c89d4f;

}

.footer{
	border-top:1px solid #f2f2f2;
	background: #A52A2A;
	position: fixed;
	bottom:0;
	left:4%;
	width: 92%;
	height: .52rem;
	z-index: 2;
  background: #fff;
	display: -webkit-flex;
	-webkit-align-items:center;
	margin:0 auto;
}
ul{
	width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
	padding-top:.06rem;
}
li{
	-webkit-flex:1;
	display:block;
	height:100%;
	align-items: center;
	text-align: center;
}
ul li:nth-child(3){
	position: relative;
}
 img{
	width: .22rem;
	height: .22rem;
	margin:0 auto;
	padding-top:6px;
	/* padding-bottom:6px; */
}
label{

	height:.1rem;
	line-height: .1rem;
	color: black;
	font-size:.1rem;
	font-weight: 200;
	margin-top:.07rem;
}
em{
	background: url(../assets/img/aa.png)no-repeat center top;
	display: inline-block;
	width:.39rem;
	height:.39rem;
	border-radius: 100%;
	position:relative;
	background-size: 100%;
	margin-top:4px;
}
 em>img{
	 display: block;
	 z-index: 1;
	 width:.14rem;
	 height: .14rem;
	  position: absolute;
	  left:35%;
	  top:25%;
 }


</style>
