import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 公用权限路由
export const constantRouterMap = [
  {
    path: '',
    component: () => import('@/views/home/Home'),
    redirect: 'home',
    meta: {
      roles: ['首页'],
      title: '首页',
      icon: 'el-icon-document'
    },
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home/Home'),
      meta: {
        roles: ['首页'],
        title: '首页',
        icon: 'el-icon-document'
      }
    }]
  }
]

// 动态路由加载权限
export const asyncRouterMap = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/about/About.vue'),
    meta: {
      roles: ['关于'],
      title: '关于',
      icon: 'el-icon-setting'
    }
  },
  {
    path: '/message',
    name: 'message',
    meta: {
      roles: ['我的消息'],
      title: '我的消息',
      icon: 'el-icon-setting'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/message/Message')
  }
]

// console.log(asyncRouterMap, constantRouterMap)
// asyncRouterMap.forEach(value => {
//   constantRouterMap.push(value)
// })

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
