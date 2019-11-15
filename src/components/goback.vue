<template>
	<div class="back">
		<div class="top">
			<img src="../assets/img/sy_sdk_left.png" @click="goback">
			  <p >{{infor}}</p>
		</div>
		<div class="img">
			<img src="../assets/img/logo.jpg" alt="">
			<span>蜻蜓FM</span>
		</div>
	</div>
	
</template>
<script>
export default{
	name:'goback',
	props:['infor'],
	data(){
		return{
			
		}
	},
	methods:{
		goback(){
			//因为router有历史记录这一功能
			 this.$router.go(-1);
		}
	}
		
}	
</script>
<style scoped>
.back{
	width: 92%;
	margin: 0 auto;
	
	
}
.top{
	width:100%;
	overflow: hidden;
	height: .42rem;
}
img{
	width:.25rem;
	height: .25rem; 
	 float: left;
	margin-top:.15rem;
}
p{
	/* width:.25rem; */
	height:.42rem;
	 float: right;
	 font-size:.18rem;
	 color: #434343;
	margin-top:.12rem;
	margin-right: 10px;
}
.img{
	width:100%;
	position: relative;
	height:.34rem;
	text-align: center;
	padding-bottom: 10px;
}
.img>img{
	position: absolute;
	margin-top:0;
	width:.34rem;
	height:.34rem;
	left:90px;
	top:0;
}
span{
	display: inline-block;
	font-size:.26rem;
	color:#e23e39;
}
</style>