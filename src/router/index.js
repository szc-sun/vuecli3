import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 公用权限路由
export const constantRouterMap = [
	{
    path: '',
    component: () => import('@/views/home/Home'),
    redirect: 'home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home/Home')
    }]
  }
]


// 动态路由加载权限
const asyncRouterMap = [
	{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/about/About.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName: "about" */ '@/views/test/Test')
    }
]

console.log(asyncRouterMap,constantRouterMap)
asyncRouterMap.forEach(value=>{
    constantRouterMap.push(value)
})

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})