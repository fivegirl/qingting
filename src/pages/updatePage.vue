<template>
	<div class="box">
    
    <back></back>
     <h5>个人资料</h5>
   <update></update>
	</div>
</template>
<script>

import back from '../components/back';
import update from '../components/update';

	export default{
		name:'updatePage',
		data(){
			return{

			}
		},
		components:{
		 update,back
		}
	}
</script>
<style scoped>
.box{
  height:100%;

}
h5{
    font-size:.19rem;
    color:#393939;
    display: inline-block;
   /* float: left; */
    line-height:.46rem ;
  }
</style>
