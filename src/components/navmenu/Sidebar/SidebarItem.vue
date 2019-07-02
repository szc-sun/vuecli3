<template>
  <div class="menu-wrapper" v-if="!item.hidden">
    <template
      v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)"
    >
      <!-- <app-link :to="resolvePath(onlyOneChild.path)"> -->
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
        >
          <item
            v-if="onlyOneChild.meta"
            :icon="onlyOneChild.meta.icon||item.meta.icon"
            :title="onlyOneChild.meta.title||item.meta.title"
          />
        </el-menu-item>
      <!-- </app-link> -->
    </template>
    <el-submenu v-else ref="submenu" :index="item.path" :class="{'submenu-title-noDropdown':isCollapse}">
      <template slot="title">
        <item :icon="generateIcon(item)" :title="generateTitle(item)"/>
      </template>

      <template v-for="child in item.children">

        <sidebar-item
          v-if="item.children&&item.children.length>0"
          :key="child.path"
          :item="child"
          :base-path="resolvePath(child.path)"
        />
      </template>
    </el-submenu>
  </div>
</template>
<style>
  .submenu-title-noDropdown i.el-submenu__icon-arrow{
    display: none
  }
  .el-submenu__title{
    text-align: left;
    /*text-indent:10px*/
  }
  .el-menu-item{
    text-align: left;
    /*text-indent:10px*/
  }
</style>

<script>
import path from 'path'
// import { generateTitle } from '@/utils/i18n'
// import { validateURL } from '@/utils/validate'
import AppLink from './Link'
import Item from './Item'
// import AppLink from './Link'

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isCollapse: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      onlyOneChild: null
    }
  },
  mounted() {
    // console.log(11,this.isCollapse)
  },
  methods: {
    hasOneShowingChild(children, parent) {
      // console.log(1111, children)
      var showingChildren = []
      if (children === undefined) {
        // 如果没有要显示的子路由器，则显示父路由器

        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      } else {
        showingChildren = children.filter(item => {
          if (item.hidden) {
            return false
          } else {
          // 如果只有一个显示子则使用
            this.onlyOneChild = item
            return true
          }
        })

        // 当只有一个子路由器时，默认情况下会显示子路由器
        if (showingChildren.length === 1) {
          return true
        }
      }

      return false
    },
    resolvePath(routePath) {
      // if (routePath === 'field/index') {
      //   console.log(111111111)
      // }
      // console.log(23333, path.resolve(this.basePath, routePath), this.basePath, routePath)
      return path.resolve(this.basePath, routePath)
    },
    generateTitle(item) { // 收缩功能
      if (!this.isCollapse) {
        return item.meta.title
      } else {
        return null
      }
    },
    generateIcon(item) {
      if (!this.isCollapse) {
        return item.meta.icon
      } else {
        return item.meta.icon
      }
    }

    // hasOneShowingChild(children, parent) {
    //   const showingChildren = children.filter(item => {
    //     if (item.hidden) {
    //       return false
    //     } else {
    //       // 如果只有一个显示子则使用
    //       this.onlyOneChild = item
    //       return true
    //     }
    //   })

    //   // 当只有一个子路由器时，默认情况下会显示子路由器
    //   if (showingChildren.length === 1) {
    //     return true
    //   }

    //   // 如果没有要显示的子路由器，则显示父路由器
    //   if (showingChildren.length === 0) {
    //     this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
    //     return true
    //   }

    //   return false
    // },
    // resolvePath(routePath) {
    //   if (routePath === 'field/index') {
    //     console.log(111111111)
    //   }
    //   return path.resolve(this.basePath, routePath)
    // },
    // isExternalLink(routePath) {
    //   return validateURL(routePath)
    // },
    // clickLink(routePath, e) {
    //   if (!this.isExternalLink(routePath)) {
    //     e.preventDefault()
    //     const path = this.resolvePath(routePath)
    //     this.$router.push(path)
    //   }
    // },
    // generateTitle
  }
}
</script>
