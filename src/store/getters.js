const getters = {
  test1: state => state.test.test1,
  roles: state => state.user.roles,
  rolesName: state => state.user.rolesName,
  name: state => state.user.name,
  power: state => state.user.power,
  userCode: state => state.user.userCode,
  loginName: state => state.user.loginName,
  userSign: state => state.user.userSign,
  addRouters: state => state.permission.addRouters,
  permission_routers: state => state.permission.routers,
  // 弹窗名称
  dialogTitle: state => state.permission.dialogTitle
}
export default getters
