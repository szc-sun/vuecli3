import router from './router'
import store from './store'
// import jwt from 'jwt-simple'
// import { Message, MessageBox } from 'element-ui'
router.beforeEach((to, from, next) => {
  store.dispatch('GetInfo').then(() => {
    // 拉取用户信息
    // console.log(store.getters.roles)
    if (store.getters.roles.length === 0) {
      const roles = store.getters.rolesName
      // console.log('roles', roles)
      store.dispatch('GenerateRoutes', { roles }).then(() => {
      // 根据roles权限生成可访问的路由表
        router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
        router.options.routes = store.getters.permission_routers
        // console.log(store.getters.permission_routers, roles)
        // next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
      })
    } else {
      const roles = store.getters.rolesName
      // console.log('roles2', roles)
      store.dispatch('GenerateRoutes', { roles }).then(() => {
        // 根据roles权限生成可访问的路由表
        router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
        router.options.routes = store.getters.permission_routers
        // console.log(store.getters.permission_routers, roles)
      })
      next()
    }
    // // next()
  })
})
