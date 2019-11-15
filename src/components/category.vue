<template>
	<div class="hotBox">
	    <div class="top">
        <p>{{type}}</p>
	       <i class="iconfont icon-dayuhao"></i>
	    </div>
	    <div class="bottom">
	        <ul>
	            <li v-for="(book,index) in books" :key="index">
	                <img class="inro" :src="book.img" alt="">
	               <div class="txt">
					   <p>{{book.title}}</p>
					    <span>{{book.description}}</span>
						<div class="leb">
							<b class="history">{{book.type}}</b>
							<label>{{book.finalstate}}</label>
							<em class="em"><img src="../assets/img/open.png" alt=""></em>
							<h6>{{book.playnum}}</h6>
							<i class="emm" ><img  src="../assets/img/program-count-o.png" alt=""></i>
							<h5>{{book.per}}</h5>
						</div>
				   </div>
	            </li>
	        </ul>
	    </div>
	</div>
</template>
<script>
	export default{
		name:'category',
		props:['type'],
		data(){
		return {
			books:[
			],

			//obj这个属性是用来提高组件的复用性，
			//可以让这个组件在布局相同，
			//数据不相同的地方都使用这个组件。
			obj:{
				'历史':'getHistory',//getNews是下面函数对应的名字
				'相声小品':'getCtalk'
			   }
			}
		},
			//如果数据是从后端获取的，就是用created这个钩子函数
			created(){
				fetch('/api/books')
				.then(res=>{
					// console.log("ddsdssd")
					return res.json();
				})
				.then(data=>{
					//定义一个函数名，主要是通过函数名，
					//调用相应的函数，获取自己想要的数据。
					let funcName = this.obj[this.type];
					// console.log(funcName);
					// console.log("01"+data);
					this.books=this[funcName](data);
					// console.log(this.books);
				})
				.catch(err=>{
					console.log(err);
				})
			},
			methods:{
				getHistory(data){
					let arr = [];
					for(let i in data){
					    if(data[i].isNew){
							arr.push(data[i]);
					    }
					}
					return arr;
				},
				getCtalk(data){
				    data.sort(function (obj1,obj2) {
				        return obj2.buycount-obj1.buycount;
				    });
				    let arr = data.slice(0,3);
				    return arr;
					// console.log("arr"+arr);
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
.hotBox{
  margin: 0 auto;
  width:92%;
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
   /* height: 1.5rem;
    background-color:pink; */
}

ul{
    display: flex;
	flex-wrap: wrap;
   /* justify-content: space-around; */
}

li{
	display: flex;
	align-items: center;
    width:100%;
    height:.83rem;
	margin-bottom:.29rem;
}
.inro{
	display: inline-block;
    width: 24%;
    height:100%;
border-radius: 7px;
margin-right:.18rem;
}
.txt{
	width: 76%;
	height:100%;
/* 	padding-left:.13rem; */
}
p{
	width:100%;
	height:.225rem;
	font-size:.15rem;
	color:#272727 ;
	/* font-weight: 500; */
	/* text-align: center; */
    line-height:.225rem ;

}
span{
	width:100%;
	font-size: .1rem;
	line-height: .1rem;
	text-align: center;
	color:#909090;

}
.leb{
	margin-top:.22rem;
	width:100%;
	position: relative;
}

.history{
	float: left;
    float: left;
	color:#bdbdbd;
	font-size:.1rem;
	line-height:.1rem;
}
label{

	margin-left: 14px;
	float: left;
	color:#ffab62;
	font-size:.1rem;
	line-height:.1rem;
}
label::before{
	/* margin-left:.15rem; */
	position: absolute;
	bottom:-11px;
	left:.25rem;
	content:"";
	width:1px;
	float: left;
	margin-left:.05rem;
	height:8px;
	background: #939593;
}
h5,h6{
	float: left;
	/* position: absolute;
	bottom:.085rem;
	left:.18rem; */
	margin:0;
	padding: 0;
	color:#a7a7a7;
	font-weight:300;
	font-size:.1rem;
	/* padding-left:10px; */
}
.em{
	vertical-align: bottom;
	float: left;
	width:14px;
	height:14px;
	margin-left: .12rem;
	margin-right:2px;
}
.emm{

	margin-left: .1rem;

	float: left;
	width:12px;
	height:14px;
	text-align: center;

}
.emm img{
	display: block;
	width:.09rem;
	height:.1rem;
	margin:0;
	margin-top:4px;

}
.em img{
	display: block;
	width: 100%;
	height:100%;
	margin:0;
}
</style>
