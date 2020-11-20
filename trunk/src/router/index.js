import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

export default new Router({
  routes: [
      /*---------------------功能模块---------------------*/
      {
          path: '*',
          meta: {
              title: '404'
          },
          name: '404',
          component: resolve => require(['@/views/sc_error/sc_error'], resolve)
      },
      {
          path: '/',
          name: 'Main',
          meta: {
              title: '惠购电商',
          },
          component: resolve => require(['@/views/sc_home/sc_main'], resolve)
      },
  ]
})
