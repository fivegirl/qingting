/*
 * @Author: your name
 * @Date: 2019-11-07 10:04:18
 * @LastEditTime: 2019-11-15 00:19:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \蜻蜓\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import Axios from 'axios';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Axios.defaults.baseURL = '/api/';

Vue.use(ElementUI);
Vue.use(MintUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
