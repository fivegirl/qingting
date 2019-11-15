<template>
	<div class="box">
    
		<router-link to="/registerPage">
		<goback infor="注册"></goback>
		</router-link>
	    <login></login>
	</div>
</template>
<script>
// import cateNav from '../components/cateNav';
import goback from '../components/goback';
import login from '../components/login';	

	export default{
		name:'loginPage',
		data(){
			return{
				
			}
		},
		components:{
		 login,goback
		}
	}
</script>
<style scoped>
	
</style>