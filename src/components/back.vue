<template>
	<div class="back">
		<div class="top">
			<img src="../assets/img/sy_sdk_left.png" @click="goback">

		</div>

	</div>

</template>
<script>
export default{
	name:'goback',

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
	width:.29rem;
  height:.5rem;
  float: left;



}
.top{
	width:.29rem;
  display: inline-block;

	height: .42rem;
}
img{
	width:.25rem;
	height: .25rem;
	 float: left;
	margin-top:.1rem;
}

</style>
