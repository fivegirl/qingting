<template>
	<div class="circle">
	    <div class="top">
	       {{circle}}

	    </div>
	    <div class="bottom">
	        <ul class="uls">
	            <li v-for="(circle,index) in circles" :key="index">
	                <div class="txt">
					  <img :src="circle.goodImg" alt="">
					  <img class="bofang" src="../assets/img/p2.png" alt="">
				   </div>
				     <p>{{circle.goodName}}</p>
				    <span>{{circle.goodIntro}}</span>
	            </li>
	        </ul>
	    </div>
	</div>
</template>
<script>
	export default{
		name:'category',
		props:['circle'],
		data(){
		return {
			circles:[
			],
			obj:{
				'历史':'getNewman',//getNews是下面函数对应的名字
				'相声小品':'getCtalk'
			   }
			}
		},

			//如果数据是从后端获取的，就是用created这个钩子函数
			created(){
				// console.log("dcdcd")
				fetch('/api/good/xrbt')
				.then(res=>{
					// console.log("res")
					return  res.json();
				})
				.then(data=>{
					// console.log(data);
					this.circles=data;
					// let funcName = this.obj[this.type];
					// this.books=this[funcName](data);

				})
				.catch(err=>{
					console.log(err);
				})
			},
		// 	methods:{
		// 		getNewman(data){
		// 			let arr = [];
		// 			for(let i in data){
		// 			    if(data[i].isNew){
		// 					arr.push(data[i]);
		// 			    }
		// 			}
		// 			return arr;
		// 		}
		//
		//
		// },
	}

</script>
<style scoped>
.bofang{
	width:.14rem;
	height:.14rem;
	position:absolute ;
	left:50%;
	top:50%;
	margin-top:-.07rem;
	margin-left:-.07rem;
	z-index: 2;
}
.circle{
  margin: 0 auto;
  width:91%;
 /* height:2.4rem;
  background: #0000FF; */
}
::-webkit-scrollbar
{
   display: none;
}
.top{
    width:100%;
    height: .53rem;
  font-weight:700;
    font-size: .2rem;
    line-height: .53rem;
    text-align: left;
}
.bottom{
   /* width:6.66rem; */
   overflow-x: scroll;
    /* background-color:pink; */
	padding-bottom:12px;
}

ul{
	width:6.72rem;

	display: flex;
	flex-wrap: wrap;


}
li:last-child{
	margin-right:.17rem;
}
li{

	margin-right: .34rem;

	padding-top:12px;


     display: flex;
	 flex-wrap: wrap;
	 align-items: center;
	 justify-content: center;
    width:.77rem;
    height:1.24rem;
}
.txt{
	position: relative;
	flex-shrink: 0;
	margin:0 auto;
	width:.71rem;
	height:.71rem;
}
img{
	border-radius:100%;
  background:yellowgreen;
	display:block;
    width: 100%;
    height:100%;

}

span{
display: block;
 font-size:.1rem;
 color:#a9a9a9;
 text-align: center;
 width: 100%;
 line-height: .1rem;
/* margin-top:12px; */
}
p{
font-size:.12rem;
text-align: center;
width: 100%;
line-height: .12rem;
/* margin-top:.9rem; */
}
</style>
