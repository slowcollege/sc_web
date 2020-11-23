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
          name: 'main',
          meta: {
              title: '首页',
          },
          component: resolve => require(['@/views/sc_home/sc_main'], resolve),
      },
      {
          path: '/mine',
          name: 'mine',
          meta: {
              title: '个人中心',
          },
          component: resolve => require(['@/views/sc_home/sc_mine'], resolve),
      },
  ]
})
