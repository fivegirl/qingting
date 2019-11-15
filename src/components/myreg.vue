<template>
 <div class="box">
	 <div class="reg" >
		    <mt-field label="用户名*" placeholder="请输入手机号 " id="phonenum"
			   v-model="nameValue"   @blur.native.capture="check1">
       </mt-field>
       <!-- <span class="msg">{{msg}}</span> -->
			<label>{{useValue}}</label>
     <!-- <label class="user2">{{useValue}}</label> -->
	 </div>
	 <div class="reg" >
       <mt-field label="密码*" placeholder="请输入密码"
		type="password" id="pass" v-model="passValue"  @blur.native.capture="check2" >

	   </mt-field>
	    <label>{{mValue}}</label>
	 </div>
	 <div class="reg" >
	      <mt-field label="重复密码*" placeholder="请再次输入密码" type="password"  id="repeat"
		 v-model="repeatValue"  @blur.native.capture="check3"></mt-field>
		  <label>{{reValue}}</label>

	</div>
	 <div class="reg" >
		  <mt-field label="邮箱*" placeholder="请输入邮箱" type="email"  id="email"
		  v-model="emailValue"  @blur.native.capture="check4">
      </mt-field>
		 <label>{{eValue}}</label>
	  </div>
	  <div class="reg res" >
        <mt-field label="邮箱验证码*" placeholder="请输入邮箱验证码" type="text" id="ma"
         v-model="maValue" @blur.native.capture='check5()'>
        </mt-field>
        <label >{{yanValue}}</label>

        <input type="button" id="send" value="发送" @click="send()">
    </div>
	<div  class="reg  log">
	   <input type="button" value="立即注册"  class="regBtn" id="regBtne" @click="register">
     <span class="tip">{{tip}}</span>
	 	<div class="listbox" >
		   <p class="list">登录即表明阅读并同意<a href="#">《用户协议》</a>
		   <a href="#">《隐私政策》</a>和
		   <a href="#">《中国移动认证服务条款》</a></p>
	   </div>
	</div>
</div>
</template>
<script>
	import axios from 'axios';
	export default{
		name:'myreg',
		data(){
			return {
				 nameValue:'',
				  tipValue:'',
				  mValue:'',
				  numValue:'',
				  passValue:'',
				  repeatValue:'',
				  reValue:'',
				  eValue:'',
				  emailValue:'',
          useValue:'',
          msg:'',
          success:'',
          maValue:'',
          yanValue:'',
           tip:'',
           //这个变量用来存储后端发来的邮箱验证码
           email:'',
				//定义一个空对象，用来接收从后端获取的数据，
				//这样就不许用每次到后端去请求数据。
				allproduct:[],
				product:[]//用来存获取的数据中的一条
			}
		},
		//从后台获取数据
		// created(){
		// 	console.log("sss");
		// 	fetch('http://localhost:3000/books')
		// 	.then(res=>{
		// 		return res.json();
		// 	})
		// 	.then(data=>{
		// 		console.log("data:"+data);
		// 		this.allproduct=data;
		// 	})
		// },
		methods:{
      //从后端获取验证码
      send(){
         let email=this.emailValue;//邮箱号
         let inputemail=this.maValue;//文本框中输入的验证码
         //往后端发送到邮箱参数
         //userEmail 后端与前端商讨的参数名qs.stringify必要时写
        // let userEmail:email}
        axios.get('/user/emailCode?acceptEmail='+email)
           .then(res=>{
                // this.email是定义的一个变量,用来存储后端发来的验证码,与前端进行对比
                 this.email=res.data;
                 console.log(this.email);
                 console.log(this.email==inputemail);
                 if(inputemail!=this.email){
                   this.yanValue="验证码不正确，请重新输入";
                 }else{
                   this.yanValue='';
                 }
           })
           .catch(err=>{
               console.log(err);
           });
        },
     register(){
         if(this.nameValue==''|| this.passValue==''||
           this.repeatValue==''|| this.maValue==''||this.emailValue==''){
           this.tip="请填写带*号的信息";
           //这个是提醒用户填写必要的用户名
         }else{
             if(this.yanValue==''&& this.useValue==''){
               this.$router.push({path:'/LoginPage'});
             }

         }

     },
			check1(){
        let reg = /^1\d{10}$/;
				if(!this.nameValue){
           this.useValue="请输入手机号码"
          // console.log(this.useValue);
				  }else if(reg.test(this.nameValue)!=true){
             this.useValue="请输入有效手机号"
          }else{
             this.useValue = '';
             let val=this.nameValue;
             let pass=this.passValue;
             let username=this.nameValue;
             //用来验证用户名是否存在
            axios.post('/user/register?userName='+username+'&password='+pass)
             .then(res=>{
                      console.log("sss"+res.data);
                      if(res.data==1){
                      this.$options.methods.register();
                      }else if(res.data==0){
                        this.msg="该用户名已存在,请重新输入"
                      }
                  })
                   .catch(err=>{
                     console.log(err);
                 });
              }
         },

           check2(){
				   let  reg = /^[1-9]\d{5}/;
			   	if(!this.passValue){
					   this.mValue="请输入您的密码"
			   	  }else if(reg.test(this.passValue)!=true){
             this.mValue="密码至少六位"
        	}else{
					this.mValue = '';

				}
			},
			check3(){
				  let  val =this.passValue;
				if(!this.repeatValue){
					 this.reValue="请输入确认密码"
				  }else if(this.repeatValue!=val){
					this.reValue="两次密码不一致"
          }else{
					  this.reValue = '';
				}
		},
		check4(){
			  let reg = /^\w{3,16}@\w{2,16}\.(com|net|com.cn|cn)$/;
				 if(reg.test(this.emailValue)!=true){
					 this.eValue="请输入有效邮箱"

				}else{
					this.eValue = '';
				}
		},
    check5(){
    		  if(!this.maValue){
    			  this.yanValue="请输入邮箱验证码"
    		}else{
    			  this.yanValue= '';
    		}
    }
	}
}
</script>
<style scoped>



.listbox{
	width: 92%;
	margin:0 auto;
	margin-top:.1rem;
/* 	height:.36rem; */
}
.list{
text-align: center;
}
.list>a{
	display: inline-block;
	color:#549beb;
	font-size:12px;
	text-align: center;
	vertical-align: middle;
	line-height: 16px;
}

.list a:nth-child(3){
	padding-left:.3rem;
}
	p{
		color:#969696;
		font-size:12px;
	}
	.box{
	  margin: 0 auto;
	  width:95%;
	  margin-top:10px;
	}
.reg{
	overflow: hidden;
	width:343px;
	height:.7rem;
	margin-bottom: 5px;

	}

.reg>label{
		height:15px;
		text-align: center;
		line-height: 15px;
		z-index: 1;
		color:red;
		display: block;
	}
.res{
	position: relative;}

.tip{
  display: inline-block;
  text-align: center;
  width: 100%;
  color: red;
}
#send{
	width:.5rem;
	height:.36rem;
	/* padding:0 20px; */
	background:#d5d5d6;
	color:black;
	font-size: 14px;
	border:none;
	outline: none;
	position:absolute;
	right:30px;
	top:5px;

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
.log{
	margin-top:.2rem;
	height:auto;
}
.msg{
  display: inline-block;
  width:100%;
  text-align: center;
  color: red;
}
</style>
