<template>
 <div class="box">
	  <div class="reg" >
		    <mt-field label="用户名" placeholder="请输入手机号 "  v-model="userValue"  ></mt-field>
	  </div>
	 <div class="reg" >
       <mt-field label="密码" placeholder="请输入密码" type="password" v-model="passwordValue" ></mt-field>
	   </div>
	 <div class="reg verify">
		 <mt-field label="验证码" placeholder="请输入验证码" type="number"
     v-model="verifyValue" @blur.native.capture='verify()'></mt-field>
	  	  <i class="yzm" id="firy">{{ma}}</i> <span class="huan" @click="changeMa">看不清？<br><a>换一张</a></span>
        <label class="err">{{err}}</label>
	  </div>

	<div  class="reg  log">
	   <input type="button" value="登录"  class="logBtn" id="logBtne" @click="login">
    <span class="tipmsg">{{tipmsg}}</span>
    <span class="msg">{{msg}}</span>
	   <router-link to="/registerPage">
	       <span class="golog">没账号，请注册</span>
	   </router-link>
	</div>
	<ul class="uls">
		<li><i class="iconfont icon-weixin4"></i></li>
		<li><i class="iconfont icon-weibo1"></i></li>
		<li><i class="iconfont icon-koukou"></i></li>
		<li>
			<i class="iconfont icon-more" @click="show"></i>
		</li>
	     <mt-popup v-model="popupVisible"  position="bottom" class="cover">
	        <ul class="us">
				<li><i class="iconfont icon-baiduzhuanhuan"></i></li>
			  </ul>
			  <div class="morefooter">
				<div class="shareCancel" @click="hiddenShare">取消</div>
			  </div>
		 </mt-popup>
	</ul>
</div>
</template>
<script>
import { Popup } from 'mint-ui';
import axios from 'axios';
	export default{
		name:'login',
		data(){
			return {
				popupVisible:false,
				ma:'2234',
				verifyValue:'',
				userValue:'',
				passwordValue:'',
				err:'',
				val:'',
				tipmsg:'',
        msg:''
				}
		},
		components:{
		 Popup
		},
		methods:{
			show(){
				this.popupVisible=true
			},
			hiddenShare(){
				this.popupVisible=false
			},
      //验证验证码输入是否正确
      verify(){
        let val=this.verifyValue;
        let ma=this.ma;
        if(!this.verifyValue){
           this.err="请输入验证码"

        }else if(val!=ma){
           this.err="验证码不正确"
        }else{
          this.err='';

        }
      },

      changeMa(){
          this.ma=this.$options.methods.getMa(this.ma);
       },
      getMa(obj){
      	   let num=parseInt(Math.random()*10000)
          while(num<1000){
      	    num=parseInt(Math.random()*10000)
      	   }
      	   return num;

      },
      login(){
            if( this.userValue=='' || this.passwordValue==''
            ){
                this.tipmsg="请输入用户名或密码";
            }else{
                this.tipmsg=" ";
                console.log(this.passwordValue)
                console.log(this.userValue)
                let password=this.passwordValue;
                let username=this.userValue;
               // this.$router.push({path:'/IndexPage'});
               axios.post('/user/login?password='+password+'&userName='+username)
                  .then(res=>{
                      console.log("返回的数据"+res.data);
                      if(res.data==1){
                         //保存用户名
                        window.localStorage.setItem("userName",username);
                          //删除用户名和密码的方式
                        // window.localStorage.setItem("user","");
                          this.$router.push({path:'/Index'})
                       }else if(res.data==0){
                         this.msg="用户名或密码错误,请重新输入"

                       }else if(res.data=-1){
                          this.msg="该用户名不存在"
                       }
                       })
                       .catch(err=>{
                           console.log(err);
                       });
                    }
                 }
             }
          }

</script>
<style scoped>

 .msg, .tipmsg{
    display: inline-block;
    text-align: center;
    width: 100%;
    color: red;
  }
.sharePopup{
	width:100%;
     margin:0 auto;
	 }
.cover{
	border-top-left-radius:14px;
	border-top-right-radius:14px;
	width:100%;
	height:1.52rem;
}
.mint-cell:last-child,.mint-cell-wrapper{
  background-image: none;
}
.shareCancel{
	width:100%;
	color:#c6c6c6;
	font-size:.15rem;
	height:100%;
	line-height: .43rem;
	text-align: center;

}
.mint-cell-wrapper{
	background-image: none;
}
.us{
	width:100%;
	height:1rem;
}
.us li{
	width:100%;
	height:100%;
	padding-left:.39rem;
	line-height: 1.09rem;
}
.icon-baiduzhuanhuan{
	font-size: .6rem;
	color: #2f82ee;
}
.morefooter{
	border-top:2px solid #f2f2f2;
	width:100%;
	height:.53rem;
	text-align: center;
}
.log{
	margin-top:.2rem;
	height:auto;
}

.golog{
	display: block;
	font-size: 14px;
	color:#35a7e8;
	width:100%;
/* 	height:.3rem; */
	z-index:1;
	margin:0 auto;
	text-align: center;
}
	.box{
	  margin: 0 auto;
	  width:95%;
	  margin-top:.4rem;
	}
.reg{
	overflow: hidden;
	width:343px;
	height:.7rem;
	margin-bottom: 5px;
	/* margin-top:.2rem; */
	margin-left:5px;
	}

label{
		height:15px;
	width:100%;
		line-height: 15px;
    text-align: center;
		display: block;
    color:red;
	}
.res{
	position: relative;
}
#send{
	width:.5rem;
	height:.36rem;
	/* padding:0 20px; */
	background:#d5d5d6;
	color:black;
	font-size: 14px;
	border:none;
	/* margin-right:10px; */
	position:absolute;
	right:30px;
	top:5px;

}
.logBtn{
	width:2.75rem;
	height:.51rem;
	background:#febebe;
	color: white;
	font-size: .17rem;
	border-radius: .2rem;
	border:none;
	outline: none;
	margin-left: 34px;
}
.log{
	margin-top:.2rem;
	height:auto;
}
.verify{
	position:relative;
}
.yzm{
	display: block;
	width:.4rem;
	height:.2rem;
    font-size: .15rem;
	font-weight: bold;
	position: absolute;
	right:70px;
	top:14px;
}
.huan{
	position:absolute;
	right: 0;
	top:0;
    width:.6rem;
     font-size: 14px;
	display: inline-block;
	color:black;
	padding-left:5px;
	}
.huan>a{
	text-decoration: underline;
	color:black;
}
.regBtn{
	width:2.75rem;
	height:.51rem;
	background:#fd6a68;
	color: white;
	font-size: .17rem;
	border-radius: .2rem;
	border:none;
	outline: none;
	margin-left: 34px;
}
.uls{

	width:92%;
	height:.4rem;
	margin:0 auto;
	margin-top:1.6rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
li{
	height:100%;
}
.iconfont{
	font-size: .37rem;
}
.icon-weixin4{
	color:#6cb854;
}
.icon-weibo1{
	color:#ea6d7d;
}
.icon-koukou{
	color:#6494d4;
}
.icon-more{
	color:#ffb635;
}
</style>
