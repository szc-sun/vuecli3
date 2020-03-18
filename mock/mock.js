// 引入mockjs
const Mock = require('mockjs')
import login from './js/login'
import list from './js/list'
// 获取mock.Random对象
const Random = Mock.Random
// //mock一组数据
// const newsData = function() {
//     let news = [];
//     for(let i = 0; i < 10; i++){
//         let newObject = {
//             title: Random.csentence(5, 30), //随机生成一个文字标题
//             image: Random.dataImage('300x300', 'mock的图片'), // 生成一个300X300的服务器
//             author: Random.cname(), // 随机生成一个常见的中文姓名
//             datetime: Random.date() + ' ' + Random.time() // 指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
//         }
//         news.push(newObject)
//     }
//     return {
//         news: news
//     }
// }
// Mock.mock('/news/index', 'get', newsData);  //mock(url,post/get/put/delete,数据)
// Mock.mock(/\/mock\/login/, 'get', login.login);
Mock.mock(RegExp('/mock/login' + '.*'), 'get', function(options) {
  // console.log(options)
  return Mock.mock(login.login)
})
Mock.mock(RegExp('/mock/list' + '.*'), 'post', function(options) {
  // console.log(options);
  return Mock.mock(list.newsData)
})
