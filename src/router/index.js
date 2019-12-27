import Vue from 'vue'
import Router from 'vue-router'
import MainPart from '@/views/mainPart'
import leafletRouter from './modules/leaflet-router'
Vue.use(Router)

// 公用权限路由
export const constantRouterMap = [
  {
    path: '',
    component: MainPart,
    // component: () => import('@/views/home/Home'),
    redirect: 'home',
    meta: {
    // roles: ['首页'],
      title: '首页',
      icon: 'el-icon-document'
    },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/Home'),
        meta: {
          // roles: ['首页'],
          title: '首页',
          icon: 'el-icon-document'
        }
      },
      {
        path: 'message',
        name: 'message',
        meta: {
          roles: ['我的消息'],
          title: '我的消息',
          icon: 'el-icon-setting'
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/message/Message'),
        children: [{
          path: 'message2',
          name: 'message2',
          meta: {
            roles: ['我的消息'],
            title: '我的消息2',
            icon: 'el-icon-setting'
          },
          component: () => import(/* webpackChunkName: "about" */ '@/views/message/Message')
        },
        {
          path: 'message3',
          name: 'message3',
          meta: {
            roles: ['我的消息'],
            title: '我的消息3',
            icon: 'el-icon-setting'
          },
          component: () => import(/* webpackChunkName: "about" */ '@/views/message/Message')
        }
        ]
      }
    ]
  },
  leafletRouter,
  {
    path: '/search-engine',
    name: 'search-engine',
    redirect: '/search-engine/index',
    component: MainPart,
    // hidden: true,
    children: [{
      path: 'index',
      name: 'index',
      meta: {
      // roles: ['数据管理'],
        title: '搜索引擎',
        icon: 'el-icon-search',
        keepAlive: true
      },
      component: () => import(/* webpackChunkName: "about" */ '@/views/search-engine/index')
    }

    ]
  },
  {
    path: '/drag-table',
    name: 'drag-table',
    redirect: '/drag-table/index',
    component: MainPart,
    // hidden: true,
    children: [{
      path: 'index',
      name: 'index',
      meta: {
      // roles: ['数据管理'],
        title: '表格ts',
        icon: 'el-icon-setting'
      },
      component: () => import(/* webpackChunkName: "about" */ '@/views/drag-table/drag-table')
    }

    ]
  },
  {
    path: '/echarts-china',
    component: MainPart,
    meta: {
      roles: ['数据管理'],
      title: '数据管理',
      icon: 'el-icon-setting'
    },
    children: [{
      path: 'index1',
      name: 'index1',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/echarts/echartsChina'),
      meta: {
        title: '数据管理1',
        icon: 'el-icon-setting'
      }
    },
    {
      path: 'Leaflet',
      name: 'Leaflet',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/echarts/echartsChina2'),
      meta: {
        title: '数据管理2',
        icon: 'el-icon-setting'
      }
    }
    ]
  },
  // {
  //   path: '/echarts-china',
  //   name: 'echarts-china',
  //   component: MainPart,
  //   // hidden: true,
  //   children: [
  //     {
  //       path: 'index1',
  //       name: 'index1',
  //       meta: {
  //         // roles: ['数据管理'],
  //         title: '数据管理',
  //         icon: 'el-icon-setting'
  //       },
  //       component: () => import(/* webpackChunkName: "about" */ '@/views/echarts/echartsChina')
  //     },
  //     {
  //       path: 'index2',
  //       name: 'index2',
  //       meta: {
  //         // roles: ['数据管理'],
  //         title: '数据管理2',
  //         icon: 'el-icon-setting'
  //       },
  //       component: () => import(/* webpackChunkName: "about" */ '@/views/echarts/echartsChina2')
  //     }
  //     // {
  //     //   path: 'index2',
  //     //   name: 'index2',
  //     //   meta: {
  //     //     // roles: ['数据管理'],
  //     //     title: '数据管理2',
  //     //     icon: 'el-icon-setting'
  //     //   },
  //     //   component: () => import(/* webpackChunkName: "about" */ '@/views/echarts/echartsChina2')
  //     // }
  //   ]
  // },
  // {
  //   path: '/echarts-china2',
  //   name: 'echarts-china2',
  //   redirect: '/echarts-china2/index2',
  //   component: MainPart,
  //   // hidden: true,
  //   children: [
  //     {
  //       path: 'index2',
  //       name: 'index2',
  //       meta: {
  //         // roles: ['数据管理'],
  //         title: '数据管理2',
  //         icon: 'el-icon-setting'
  //       },
  //       component: () => import(/* webpackChunkName: "about" */ '@/views/echarts/echartsChina2')
  //     }
  //   ]
  // },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    meta: {
      roles: ['登录'],
      title: '登录',
      icon: 'el-icon-setting'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/login/Login')
  }
]

// 动态路由加载权限
export const asyncRouterMap = [

  // {
  //   path: '/message',
  //   name: 'message',
  //   meta: {
  //     roles: ['我的消息'],
  //     title: '我的消息',
  //     icon: 'el-icon-setting'
  //   },
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/message/Message')
  // },
  {
    path: '/about',
    component: MainPart,
    meta: {
      roles: ['关于'],
      title: '关于',
      icon: 'el-icon-setting'
    },
    children: [{
      path: 'index',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/about/About.vue'),
      meta: {
        roles: ['关于'],
        title: '关于',
        icon: 'el-icon-setting'
      }
    },
    {
      path: 'Leaflet',
      name: 'Leaflet',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/about/Leaflet.vue'),
      meta: {
        roles: ['关于'],
        title: '关于',
        icon: 'el-icon-setting'
      }
    }
    ]
  },
  {
    path: '/manager',
    component: MainPart,
    meta: {
      roles: ['管理'],
      title: '管理',
      icon: 'el-icon-setting'
    },
    children: [{
      path: 'index',
      name: 'manager',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/manager/Manager.vue'),
      meta: {
        roles: ['管理'],
        title: '管理',
        icon: 'el-icon-setting'
      }
    }]
  }
]

// console.log(asyncRouterMap, constantRouterMap)
// asyncRouterMap.forEach(value => {
//   constantRouterMap.push(value)
// })

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
