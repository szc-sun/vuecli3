import router from './router'
import store from './store'
// import jwt from 'jwt-simple'
// import { Message, MessageBox } from 'element-ui'
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    // 拉取用户信息
    console.log(123, store.getters.roles)
    if (store.getters.roles === null) {
      next('/login')
    } else if (sessionStorage.getItem('roles') === null) {
      next('/login')
    } else if (store.getters.roles.length === 0) {
      store
        .dispatch('GetInfo')
        .then(() => {
          const roles = store.getters.roles.split(',')
          console.log('roles', roles, { roles })
          store.dispatch('GenerateRoutes', { roles }).then(() => {
            // 根据roles权限生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            router.options.routes = store.getters.permission_routers
            console.log(store.getters.permission_routers, roles)
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })
        })
    } else {
      next()
    }
  }
  // // next()
})
