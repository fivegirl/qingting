<template>
	<div class="nav">
		<ul>
			<li>
				<div class="lis">
					<i class="iconfont icon-xiadaohangtubiaojihe-xingzhuang_tab_ico_-1"></i>
			    </div> <label>小说</label></li>
				
			<li> <router-link to="/classifyPage">
			<div class="lis"><i class="iconfont icon-zhibo2"></i>
			</div>
			<label>直播</label></router-link></li>
			<li><router-link to="/testPage">
			    <div class="lis"><i class="iconfont icon-guangboju"></i>
				</div><label>广播</label></router-link></li>
			<li><div class="lis">
			<i class="iconfont icon-wangqibangdan"></i>
			</div><label>必听榜单</label></li>
			<li>
				<div class="lis"><i class="iconfont icon-diyufenbu"></i>
				</div><label>个人中心</label></li>
		</ul>
	</div>
</template>
<script>
export default{
	name:'myNav',
	data(){
		return{}
	}
	
}	
</script>
<style scoped>
.nav{
	margin: 0 auto;
	width:92%;
	height: .98rem;
	/* background-color:yellowgreen; */
}
ul{
	width:100%;
	display: flex;
	justify-content: space-between;
	padding-top:.17rem;
	height: .81rem;
	text-align: center;
	vertical-align: middle;
}
li{
	-webkit-flex:1;
	justify-content: space-between;
	align-items: center;
	height:100%;
	/* text-align: center; */

}
.lis{
	height:.4rem;
	width:.4rem;
	background: #fe4b4d;
	border-radius: 100%;
	text-align: center;
	margin-right: .35rem;
	line-height: .4rem;
	margin:0 auto;
	margin-bottom:.07rem;
}
ul li:last-child{
	margin-right: 0;
}
label{
	display: block;
	height:.12rem;
	line-height: .12rem;
	color: #727272;
	font-size:.12rem;
	/* font-weight: 200; */
/* 	margin-top:.07rem; */
	/* text-align: center; */
}
.iconfont{
	color:#feeae9;
	font-size:.24rem;
	display: block;
	opacity: .9;
}
	

</style>