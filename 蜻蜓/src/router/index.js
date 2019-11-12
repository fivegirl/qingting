/*
 * @Author: your name
 * @Date: 2019-11-07 10:04:18
 * @LastEditTime: 2019-11-11 14:39:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsonservere:\三阶段\第三阶段\workspace\蜻蜓\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
// import vip from '@/pages/vip';
import mustlisten from '@/pages/mustlisten';

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'vip',
    //   component: vip
    // },
    // {
    //   path: '/vip',
    //   name: 'vip',
    //   component: vip
    // },
    {
      path: '/',
      name: 'mustlisten',
      component: mustlisten
    },
    {
      path: '/mustlisten',
      name: 'mustlisten',
      component: mustlisten
    }
  ]
})
