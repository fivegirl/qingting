import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import registerPage from '@/pages/registerPage'
import loginPage from '@/pages/loginPage'
import updatePage from '@/pages/updatePage'
import classifyPage from '@/pages/classifyPage'
import PullToRefresh from '@/pages/PullToRefresh'
import footerPage from '@/pages/footerPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'footerPage',
      redirect: "/updatePage",
      component:footerPage,
      children: [
              {
                path: '/Index',
                name: 'Index',
                component: Index
                }

          ]
   },
	{
	  path: '/footerPage',
	  name: 'footerPage',
    component: footerPage,
    children: [
            {
              path: '/Index',
              name: 'Index',
              component: Index
            },
            {
              path: '/registerPage',
              name: 'registerPage',
              component: registerPage
            },

            {
              path: '/loginPage',
              name: 'loginPage',
              component: loginPage
            },
            {
                path: '/updatePage',
                name: 'updatePage',
                component: updatePage
              }
          ]

	},
  {
    path: '/classifyPage',
    name: 'classifyPage',
    component: classifyPage
  }



  ]

})
