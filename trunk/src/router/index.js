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
          path: '/check',
          name: 'check',
          meta: {
              title: '提交',
          },
          component: resolve => require(['@/views/sc_check/sc_check'], resolve),
      },
      {
          path: '/mine',
          name: 'mine',
          meta: {
              title: '个人中心',
          },
          component: resolve => require(['@/views/sc_home/sc_mine'], resolve),
      },
      {
          path: '/login',
          name: 'login',
          meta: {
              title: '登录',
          },
          component: resolve => require(['@/views/sc_login/sc_login'], resolve),
      },
  ]
})
