import request from '@/utils/request'
// import Qs from 'qs'
/**
 * @Page：登录
 * @ApiDesc： 登录
 * @UsingRoles：All
 * @Author: sun
 */
export function login(params) {
  return request({
    // url: '/users.json',
    url: '/mock/login',
    method: 'get',
    params
  })
}
