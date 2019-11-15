<template>
	<div class="search">
		<input type="text"  :placeholder="tip">
		<img class="seaImg" src="../assets/img/spy-ss.png" alt="">
	</div>
</template>
<script>
	export default{
		name:'helloWorld',
		data(){
			return {
				tip:'从“失控”到“掌控”'
			}
		}
	}
</script>
<style scoped>
	.search{
		width:100%;
		height:.7rem;
		margin:0 auto;
		 display:flex;
		align-items: center;
		justify-content:center;
	     position: relative;
	}
	.seaImg{
		display: block;
		width:.12rem;
		height:.12rem;
		position: absolute;
		left:1.4rem;
		top:.3rem;
		
	}
	input{
		background-color: #f6f6f6;
		margin:0 auto;
		width:2.15rem;
		height:.23rem;
		border-radius: 10px;
		outline: 0;
		text-align: center;
		line-height:.23rem ;
		
	
	}
</style>