import request from '@/utils/request'
// import Qs from 'qs'
/**
 * @Page：mock测试
 * @ApiDesc： mock测试
 * @UsingRoles：All
 * @Author: sun
 */
export function list(data) {
  return request({
    url: '/mock/list',
    // url: '/mock/login',
    method: 'post',
    data
  })
}
