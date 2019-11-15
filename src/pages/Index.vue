<template>
	<div class="box">
		<navtop></navtop>
		<banner></banner>
		<myNav></myNav>
		<mycircle circle="新人必听"></mycircle>
		<category02 name="小说"></category02>
		<myvip vipname="会员推荐"></myvip>
		<category type="历史"></category>
		<category02 name="评书"></category02>
		<category type="相声小品"></category>
		<!-- <myfooter></myfooter> -->
	</div>
</template>
<script>
import navtop from '../components/navtop';
import banner from '../components/banner';
import myNav from '../components/myNav';
import myvip from '../components/vip';
import mycircle from '../components/circle';
import category from '../components/category';
import category02 from '../components/category02';


export default{
	name:'Index',
	data(){
		return{}
	},
	components:{
		navtop,banner,myNav,mycircle,category,
		category02,myvip
	}
}
</script>
<style scoped>

</style>
