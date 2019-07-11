import Mock from 'mockjs';
export default {
    //首页数据
    login:function(){
        var ret= {
		  "data": [
		    {
		      "roles": ["首页", "我的消息", "详情列表","管理","关于"],
		      "rolesName":["首页", "我的消息", "详情列表","管理","关于"],
		      "name": "admin",
		      "power": "admin",
		      "userCode": "123",
		      "loginName": "admin",
		      "status": 200,
		      "token": true,
		      "userSign":"admin",
		      "success": true
		    },
		    {
		      "roles": ["首页", "我的消息", "详情列表","关于"],
		      "rolesName":["首页", "我的消息", "详情列表","关于"],
		      "name": "manager",
		      "power": "manager",
		      "userCode": "123",
		      "loginName": "manager",
		      "status": 200,
		      "token": true,
		      "userSign":"manager",
		      "success": true
		    },
		    {
		      "roles": ["首页", "我的消息", "详情列表","关于"],
		      "rolesName":["首页", "我的消息", "详情列表","关于"],
		      "name": "user",
		      "power": "user",
		      "userCode": "123",
		      "loginName": "user",
		      "status": 200,
		      "token": true,
		      "userSign":"user",
		      "success": true
		    }
		 	],
		  "status": 200,
		  "success": true
		}
        return ret;
    },
    // //获取用户已绑定的就诊卡
    // getAllCard:function(){
    //     var ret = {card_list:[]};
    //     var is_default = 1;
    //     var time = parseInt((new Date()).getTime()/1000);
    //     for (var i=1;i<5;i++) {
    //         if(i == 2){
    //             is_default = 2;
    //         }else{
    //             is_default = 1;
    //         }
    //         ret.card_list.push(Mock.mock({
    //             card_id:i,
    //             user_name:Mock.Random.cname(),
    //             his_card_num:Mock.Random.natural(10000),
    //             user_identify_num:Mock.Random.natural(10000),
    //             is_default:is_default,
    //             create_time:time,
    //             user_birthday:Mock.Random.date(),
    //             'user_mobile':/^1[3|4|5|6|7|8|9]\d{9}$/,
    //             'user_sex|1':[1,2],
    //             user_address:Mock.Random.province(),
    //             user_area:'区县乡镇',
    //             user_area_code:'区县乡镇code'
    //         }));
    //     }
    //     log(ret);
    //     return ret;
    // },
}