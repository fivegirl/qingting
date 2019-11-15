<template>
	<div class="vipBox">
	    <div class="top">
	        <p>{{vipname}}</p>
	         <i class="iconfont icon-dayuhao"></i>
	    </div>
	    <div class="bottom">

	            <div class="bot" v-for="(book,index) in books" :key="index">
	               <div class="img">
					   <span class="vip">{{book.Vip}}</span>
					    <img :src="book.img" class="bgc">
						<em><img class="emm" src="../assets/img/p2.png" alt=""></em>
						<h6>{{book.playnum}}</h6>
				   </div>
	               <div class="txt1">
					   <div class="txtop">
						   <label>{{book.state}}</label>
						   <span>{{book.name}}</span>
					   </div>
					   <p>{{book.description}}</p>
				   </div>
	            </div>

	    </div>
	</div>
</template>
<script>
	export default{
		name:'vip',
		props:['vipname'],
		data(){
		return {
			books:[
			],

			//obj这个属性是用来提高组件的复用性，
			//可以让这个组件在布局相同，
			//数据不相同的地方都使用这个组件。
			obj:{
				'会员推荐':'vips'//getNews是下面函数对应的名字

			   }
			}
		},
			//如果数据是从后端获取的，就是用created这个钩子函数
			created(){
				fetch('http://localhost:3000/books')

				.then(res=>{
					// console.log("sdfsfsdsfd");
				    return res.json();
				})
				.then(data=>{

					let funcName = this.obj[this.vipname];
					// console.log(funcName);
					// console.log(data);
					this.books=this[funcName](data);

				})
				.catch(err=>{
					console.log(err);
				})
			},
			methods:{
				vips(data){
					console.log("dfsfsdsf");
					let arr = [];
					for(let j in data){
					    if(data[j].Vip=="会员"){
						   console.log("会员"+data[j].type=="会员");
					        arr.push(data[j]);
					    }
					}
					console.log("arr:"+arr);
					return arr;

				}
			}
		}

</script>
<style scoped>
	.icon-dayuhao{
	   width:16px;
	   height:16px;
	   color:#b0b1b0;
	  display: inline-block;
	 }
	.top p{
	 /* width:.5rem; */
	  font-weight: 700;
	  text-align: left;
	  font-size:.2rem;
	  color:#2f2e2f;
	  display: inline;
	 /* float: left; */
	}
.vipBox{
  margin: 0 auto;
  width:91%;
}
.top{
    width:100%;
    height: .53rem;
 
    font-size: .2rem;
    line-height: .53rem;
    text-align: left;
}
.bottom{
    width: 100%;
	display: flex;
	flex-wrap: wrap;
	/* height:2rem; */
   justify-content: space-between;
  /*  background-color:greenyellow; */
}


.emm{
	position: absolute;
	bottom:.085rem;
	left:.1rem;
	display: block;
	width:14px;
	height:14px;
}
.bot{
	/* margin-right: */
    width:1.05rem;
    height:1.82rem;
	/* padding-top:10px; */
}
.img{
	width: 100%;
	height:58%;
	position:relative;
}
h6{
	display: inline-block;
	position: absolute;
	bottom:.085rem;
	left:.18rem;
	color:#fff;
	font-weight:300;
	font-size:.1rem;
	padding-left:10px;
}
.bgc{
	border-radius:7px;
	display:block;
    width: 100%;
    height:100%;
	position: absolute;
	top:0;
	left:0;

}
.txtop{
	width:100%;
	position: relative;
	margin-top:0;
	margin-bottom:.07rem;
	/* text-align: center; */
}
.txt1{
	width: 100%;
	height:42%;
	/* padding-left:.13rem; */
}
span{
	margin-top:.09rem;
	display: inline-block;
	color:#3b3d3b;
	font-size:.12rem;
	line-height:.12rem;
	margin-left: .11rem;

	}
label{
	margin-top:.09rem;
	display: inline-block;
	color:#ffab62;
	font-size:.12rem;
	line-height:.12rem;
}
label::after{
	position: absolute;
	bottom:2px;
	left:.15rem;
	content:"";
	width:1px;
	display: inline-block;
	margin-left:.05rem;
	height:.11rem;
	background: #ffab62;
}
p{
	color:#c5c5c5;
	font-size:.12rem;
	line-height:.15rem;

}
.vip{
	background:#ffd795 ;
	z-index: 1;
	color: #926727;
	font-size: .1rem;
	text-align: center;
	line-height: .17rem;
	width:.29rem ;
	height:.17rem ;
	position: absolute;
	top:0;
	left:0;
	margin:0;
	border-radius: 7px 0;
}

</style>
