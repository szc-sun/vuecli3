/*
 * @Page: test
 * @Date: 2019-6-27
 */
const test = {
  state: {
    test1: true
  },
  mutations: {
    SET_TEST: (state, data) => {
      state.test = data
    }
  },
  actions: {
    ChangeTest: ({ commit }, data) => {
      commit('SET_TEST', data)
    }
  }
}
export default test
