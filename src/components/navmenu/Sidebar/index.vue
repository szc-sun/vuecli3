/*
 * @Page: 侧边主导航栏
 * @Author: cong
 * @Date: 2018-11-29 11:31:46
 * @Last Modified by: cong
 */
<template>
    <el-menu
      :collapse="isCollapse"
       router
      mode="vertical"
      text-color="#333"
      active-text-color="#fff"
      class="el-menu-vertical-demo"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
        :isCollapse="isCollapse"
      />
    </el-menu>
</template>

<script>
// import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  props: {
    // route object
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // ...mapGetters(['sidebar']),
    routes() {
      return this.$store.getters.permission_routers
    }
    // isCollapse() {
    //   return !this.sidebar.opened
    // }
  },
  watch: {
    routes(val) {
      this.menudata1 = val
    }
  },
  data() {
    return {
      menudata1: [],
      menudata: [{
        path: '1',
        title: '首页',
        level: '1',
        icon: 'el-icon-setting',
        meta: {
          roles: ['关于'],
          title: '关于',
          icon: 'el-icon-document'
        },
        children: [{
          path: '11',
          icon: 'el-icon-menu',
          title: '选项一',
          meta: {
            roles: ['关于'],
            title: '关于',
            icon: 'el-icon-document'
          }
        }, {
          path: '12',
          icon: 'el-icon-menu',
          title: '选项二',
          meta: {
            roles: ['关于'],
            title: '关于',
            icon: 'el-icon-document'
          },
          children: [{
            path: '121',
            icon: 'el-icon-menu',
            title: '选项四',
            meta: {
              roles: ['关于'],
              title: '关于',
              icon: 'el-icon-document'
            },
            children: [{
              path: '1111',
              meta: {
                roles: ['关于'],
                title: '关于',
                icon: 'el-icon-document'
              },
              icon: 'el-icon-menu',
              title: '选项五'
            }, {
              path: '1211',
              icon: 'el-icon-menu',
              meta: {
                roles: ['关于'],
                title: '关于',
                icon: 'el-icon-document'
              },
              title: '选项六1111111111111111'
            }]
          }
          ]

        }
        ] }, {
        path: '2',
        meta: {
          roles: ['关于'],
          title: '关于',
          icon: 'el-icon-document'
        },
        icon: 'el-icon-menu',
        title: '导航二'
      }, {
        path: '3',
        icon: 'el-icon-document',
        title: '导航三',
        meta: {
          roles: ['关于'],
          title: '关于',
          icon: 'el-icon-document'
        }
      }, {
        path: '4',
        icon: 'el-icon-setting',
        title: '导航四',
        meta: {
          roles: ['关于'],
          title: '关于',
          icon: 'el-icon-document'
        }
      }, {
        path: '5',
        icon: 'el-icon-setting',
        title: '导航五',
        meta: {
          roles: ['关于'],
          title: '关于',
          icon: 'el-icon-document'
        }
      }, {
        path: '6',
        icon: 'el-icon-setting',
        title: '导航六',
        meta: {
          roles: ['关于'],
          title: '关于',
          icon: 'el-icon-document'
        }
      }, {
        path: '7',
        icon: 'el-icon-setting',
        title: '导航七',
        meta: {
          roles: ['关于'],
          title: '关于',
          icon: 'el-icon-document'
        }
      }, {
        path: '8',
        icon: 'el-icon-setting',
        title: '导航八',
        meta: {
          roles: ['关于'],
          title: '关于',
          icon: 'el-icon-document'
        }
      }
      ]
    }
  },
  mounted() {
    console.log('路由', this.$store.getters.permission_routers)
    // this.$nextTick(function() {
    //   this.menudata1 = this.$store.getters.permission_routers
    //   console.log('路由', this.$store.getters.permission_routers)
    // })
    // this.$nextTick(function() {
    //   this.routes.forEach(value => {
    //     this.menudata1.push(value)
    //   })
    //   console.log(12345, this.routes, this.menudata1)
    // })

    // console.log(22,this.isCollapse)
  }
}
</script>
<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: auto;
    min-width: 200px;

  }
.el-menu-vertical-demo.el-menu{
  border-right: 0 !important;
}
.el-menu-item.is-active {
  background: -webkit-linear-gradient(
    to right,
    #268ff9,
    #4ec2fc
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    to right,
    #268ff9,
    #4ec2fc
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    to right,
    #268ff9,
    #4ec2fc
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #268ff9, #4ec2fc); /* 标准的语法 */
  color: white;
  border-radius: 5px;
}
@media screen and (max-width: 1440px) {
  .musider{
    .el-submenu{
      .el-menu-item{
        padding-left: 33px !important;
        &>.svg-icon{
          margin-right: 4px !important;
        }
      }
      .el-submenu{
        .el-submenu__title{
          padding-left: 33px !important;
          &>.svg-icon{
            margin-right: 4px !important;
          }
        }
        .el-menu--inline{
          .el-menu-item{
            padding-left: 44px !important;
          }
        }
      }
    }
  }
}
</style>
