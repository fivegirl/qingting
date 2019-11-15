// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import $ from 'jquery'
import Axios from 'axios';
import './assets/iconfont/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import global from './js/global'
Vue.prototype.GLOBAL = global;
import MintUI from 'mint-ui'
 import 'mint-ui/lib/style.css' 
 Vue.use(MintUI)
 import { Loadmore } from 'mint-ui';
 Vue.component(Loadmore.name, Loadmore);
Axios.defaults.baseURL = '/api/'; //把axios的请求基本路径改为api，以后就不需要在每个axios请求里写api


// import animate from './js/animate'
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  methods:{

  }
  
})
