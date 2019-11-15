<template>
	<div class="hot">
	    <div class="top">
         <p>{{name}}</p>
          <i class="iconfont icon-dayuhao"></i>
	    </div>
	    <div class="bottom">

	            <div class="bot" v-for="(book,index) in books" :key="index">
	               <div class="img">
					    <img :src="book.goodImg" class="bgc">
						<em><img class="emm" src="../assets/img/p2.png" alt=""></em>
						<h6>{{book.goodPoint}}</h6>
				   </div>
	               <div class="txt1">
					   <div class="txtop">
						   <label>{{book.goodFinish}}</label>
						   <span>{{book.goodName}}</span>
					   </div>
					   <p>{{book.goodIntro}}</p>
				   </div>
	            </div>

	    </div>
	</div>
</template>
<script>
	export default{
		name:'category02',
		props:['name'],
		data(){
		return {
			books:[
			],

			//obj这个属性是用来提高组件的复用性，
			//可以让这个组件在布局相同，
			//数据不相同的地方都使用这个组件。
			obj:{
				'评书':'getVip',//getNews是下面函数对应的名字
				'小说':"novel"
			   }
			}
		},
			//如果数据是从后端获取的，就是用created这个钩子函数
			created(){
				fetch('/api/vipgood/kid?goodSort=儿童')
				.then(res=>{
				return res.json();
				})
				.then(data=>{
					//定义一个函数名，主要是通过函数名，
					//调用相应的函数，获取自己想要的数据。
					let funcName = this.obj[this.name];
					// console.log("data:"+data);
					this.books=this[funcName](data);
				})
				.catch(err=>{
					console.log(err);
				})
			},
			methods:{
				getVip(data){
					let arr = [];
					for(let i in data){
					    if(data[i].goodSort=="评书"){


							// console.log(data[i].type=="武侠");
					        arr.push(data[i]);
					    }
					}
					return arr;
					// console.log("arr:"+arr);
				},
				novel(data){
					let arr = [];
					for(let i in data){
					    if(data[i].goodSort=="儿童"){
							// console.log("data:"+data);

							// console.log(data[i].type=="言情");
					        arr.push(data[i]);
					    }
					}
					return arr;
					// console.log("arr:"+arr);
				},
				getHot(data){
				    data.sort(function (obj1,obj2) {
				        return obj2.buycount-obj1.buycount;
				    });
				    let arr = data.slice(0,3);
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
.hot{
  margin: 0 auto;
  width:91%;
}
.top{
    width:100%;
    height: .53rem;
 /*   background-color: brown; */
    font-size: .2rem;
    line-height: .53rem;
    text-align: left;
}
.bottom{
    width: 100%;
	display: flex;
	flex-wrap: wrap;
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
  width:.6rem;
	margin-top:.09rem;
	display: inline-block;
	color:#3b3d3b;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
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
  height:.3rem;
	line-height:.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
 display: -webkit-box;
 line-clamp: 2;
 　　
 　box-orient: vertical;

}

</style>
