<template>
    <div class="box">
         <div class="classBox">
            <ul>
				<li>言情</li>
				<li>武侠</li>
				<li>玄幻</li>
				<li>言情</li>
				<li>武侠</li>
				<li>玄幻</li>
			</ul>
             
         </div>
         <div class="contentBox">
            <!-- <BookList :typename="currtype"></BookList> -->
         </div>
    </div>  
</template>
<script>
	export default {
	  name: 'Classify',
	  data (){
	    return {
	       types:[]
	      
	    }
	}
}
</script>
<style scoped>
	.box{
	    width: 95%;
	    margin: 0 auto;
	    margin-top:.3rem;
	}
	.classBox{
	    width: 100%;    
	}
	
	.classBox ul{
	    display: flex;
	    width: 100%;
	    height: .4rem;
	    overflow-x: auto;/*横向滚动*/
	}
	
	.classBox ul li{
	    width:1rem;
	    border:1px solid blue;
	    flex-shrink: 0; /**/
	    text-align: center;
	    line-height: .4rem;
	}
	
	.contentBox{
	    width: 100%;
	    min-height: 6rem;
	    background-color: red;
	}

</style>
