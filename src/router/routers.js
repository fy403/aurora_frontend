import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/index'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login',
    meta: { title: '登录', noCache: true },
    component: (resolve) => require(['@/views/login'], resolve),
    hidden: true
  },
  {
    path: '/404',
    component: (resolve) => require(['@/views/features/404'], resolve),
    hidden: true
  },
  {
    path: '/401',
    component: (resolve) => require(['@/views/features/401'], resolve),
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: (resolve) => require(['@/views/features/redirect'], resolve)
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: (resolve) => require(['@/views/home'], resolve),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'index', affix: true, noCache: true }
      }
    ]
  },
]

// 授权后生成的目录
export const asyncRouterMap = 
  [
    {
      component: Layout,
      hidden: false,
      meta: {
        icon: 'tree-table',
        noCache: true,
        title: '任务管理'
      },
      name: '任务管理',
      path: '/tasks',
      redirect: 'noredirect',
      alwaysShow: true,
      children: [
        {
          component: (resolve) => require(['@/views/tasks/graph'], resolve),
          hidden: false,
          meta: {
            icon: 'source',
            noCache: true,
            title: '图'
          },
          name: 'graph',
          path: 'graph'
        },
      ],
    },
    {
      component: Layout,
      hidden: false,
      name: '个人中心',
      path: '/user',
      redirect: 'noredirect',
      alwaysShow: false,
      children: [
        {
          name: 'center',
          path: 'center',
          component: (resolve) => require(['@/views/system/user/center'], resolve),
          hidden: false,
          meta: {
            icon: 'peoples',
            noCache: true,
            title: '用户管理'
          },
        },
      ],
    },
]

export default new Router({
  // mode: 'hash',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap})
