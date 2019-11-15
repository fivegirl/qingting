/*
 * @Author: your name
 * @Date: 2019-11-07 10:04:18
 * @LastEditTime: 2019-11-15 01:09:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsonservere:\三阶段\第三阶段\workspace\蜻蜓\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import vip from '@/pages/vip';
import mustlisten from '@/pages/mustlisten';
import person from '@/pages/person';
import detailsa from '@/pages/detailsa';
import mylistenpage from '@/pages/mylistenpage';
import playpage from '@/pages/playpage';
import newpage from '@/pages/newpage';
import searchpage from '@/pages/searchpage';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vip',
      component: vip
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    },
    {
        path: '/mustlisten',
        name: 'mustlisten',
        component: mustlisten
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
    {
      path: '/detailsa',
      name: 'detailsa',
      component: detailsa
    },
    {
      path: '/mylistenpage',
      name: 'mylistenpage',
      component: mylistenpage
    },
    {
      path: '/playpage',
      name: 'playpage',
      component: playpage
    },
    {
      path: '/newpage/:newimggoodSort',
      name: 'newpage',
      component: newpage
    },
    {
      path: '/searchpage',
      name: 'searchpage',
      component: searchpage
    }
  ]
})
