/*
 * @Page: user用户信息存vuex
 * @Date: 2019-6-27
 */
// import router from '@/router'
import { login } from '@/api/login'
// import store from '@/store'
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
        var userInfo = { userName: 'admin', password: '123' }
        login().then(res => {
          var userData = res.data.filter((value, index, array) => {
            if (userInfo.userName === value.loginName && userInfo.password === value.userCode) {
              return value
            }
          })
          console.log('userData', userData)
          commit('SET_ROLES', userData[0].roles)
          commit('SET_ROLESNAME', userData[0].rolesName)
          commit('SET_NAME', userData[0].name)
          commit('SET_POWER', userData[0].power)
          commit('SET_USERCode', userData[0].userCode)
          commit('SET_LOGINName', userData[0].loginName)
          commit('SET_USERSign', userData[0].userSign)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })

      // commit('SET_ROLES', data)
    },
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_ROLES', ['admin'])
        commit('SET_ROLESNAME', ['首页', '我的消息', '详情列表', '管理', '关于'])
        commit('SET_NAME', 'admin')
        commit('SET_POWER', 'admin')
        commit('SET_USERCode', '123')
        commit('SET_LOGINName', 'admin')
        commit('SET_USERSign', 'admin')
        resolve()
      })
    }
  }
}
export default user
