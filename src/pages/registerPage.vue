<template>
	<div class="box">
		<router-link to="/loginPage">
		<goback infor='登录'></goback>
		</router-link>
	    <reg></reg>
			
	</div>
</template>
<script>
// import cateNav from '../components/cateNav';
import goback from '../components/goback';
import reg from '../components/myreg';	

	export default{
		name:'registerPage',
		data(){
			return{
				
			}
		},
		components:{
		  reg,goback
		}
	}
</script>
<style scoped>
	
</style>