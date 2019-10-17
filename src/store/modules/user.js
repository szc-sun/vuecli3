/*
 * @Page: user用户信息存vuex
 * @Date: 2019-6-27
 */
import router from '@/router'
import { login } from '@/api/login'
import { Message } from 'element-ui'
import store from '@/store'
const user = {
  state: {
    // 'roles': ['admin'],
    // 'rolesName': ['首页', '我的消息', '详情列表', '管理', '关于'],
    // 'name': 'admin',
    // 'power': 'admin',
    // 'userCode': '123',
    // 'loginName': 'admin',
    // 'userSign': 'admin'
    'roles': [],
    'rolesName': [],
    'name': '',
    'power': '',
    'userCode': '',
    'loginName': '',
    'userSign': ''
  },
  mutations: {
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_ROLESNAME: (state, rolesName) => {
      state.rolesName = rolesName
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_POWER: (state, power) => {
      state.power = power
    },
    SET_USERCode: (state, userCode) => {
      state.userCode = userCode
    },
    SET_LOGINName: (state, loginName) => {
      state.loginName = loginName
    },
    SET_USERSign: (state, userSign) => {
      state.userSign = userSign
    }
  },
  actions: {
    // userInfo:{userName: 'admin',password: '123'}
    Login: ({ commit, dispatch, state, getters, rootGetters }, userInfo) => {
      return new Promise((resolve, reject) => {
        // var userInfo = { userName: 'admin', password: '123' }
        console.log('userInfo', userInfo)
        login(userInfo).then(res => {
          var userData = res.data.filter((value, index, array) => {
            if (userInfo.userName === value.loginName && userInfo.password === value.userCode) {
              return value
            }
          })
          console.log('userData', userData)
          if (userData.length > 0) {
            commit('SET_ROLES', userData[0].roles)
            commit('SET_ROLESNAME', userData[0].rolesName)
            commit('SET_NAME', userData[0].name)
            commit('SET_POWER', userData[0].power)
            commit('SET_USERCode', userData[0].userCode)
            commit('SET_LOGINName', userData[0].loginName)
            commit('SET_USERSign', userData[0].userSign)
            sessionStorage.setItem('roles', userData[0].roles)
            sessionStorage.setItem('rolesName', userData[0].rolesName)
            sessionStorage.setItem('name', userData[0].name)
            sessionStorage.setItem('power', userData[0].power)
            sessionStorage.setItem('userCode', userData[0].userCode)
            sessionStorage.setItem('loginName', userData[0].loginName)
            sessionStorage.setItem('userSign', userData[0].userSign)
            var roles = userData[0].roles
            store.dispatch('GenerateRoutes', { roles }).then(() => {
              // 根据roles权限生成可访问的路由表
              router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
              router.options.routes = store.getters.permission_routers
              // console.log(store.getters.permission_routers, roles)
              // next() // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            })
            resolve(userData[0])
          } else {
            Message({
              type: 'error',
              message: '账户或密码错误'
            })
          }
        }).catch(error => {
          reject(error)
        })
      })

      // commit('SET_ROLES', data)
    },
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_ROLES', sessionStorage.getItem('roles'))
        commit('SET_ROLESNAME', sessionStorage.getItem('rolesName'))
        commit('SET_NAME', sessionStorage.getItem('name'))
        commit('SET_POWER', sessionStorage.getItem('power'))
        commit('SET_USERCode', sessionStorage.getItem('userCode'))
        commit('SET_LOGINName', sessionStorage.getItem('loginName'))
        commit('SET_USERSign', sessionStorage.getItem('userSign'))
        resolve()
      })
    },
    // 登出
    FedLogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_ROLES', [])
        commit('SET_ROLESNAME', [])
        commit('SET_NAME', '')
        commit('SET_POWER', '')
        commit('SET_USERCode', '')
        commit('SET_LOGINName', '')
        commit('SET_USERSign', '')
        sessionStorage.clear()
        resolve({ success: true })
      })
    }

  }
}
export default user
