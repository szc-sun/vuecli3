<template>
	<div class="breadcrumb-box">
		<el-breadcrumb separator="/">
			<!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
			<el-breadcrumb-item>活动列表</el-breadcrumb-item>
			<el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
			<transition-group name="breadcrumb">
				<el-breadcrumb-item
					v-for="(item,index) in levelList"
					v-if="item.meta.title"
					:key="item.path"
				>
					<span
						v-if="item.redirect==='noredirect'||index==levelList.length-1"
						class="no-redirect"
					>{{ item.meta.title }}</span>
					<router-link v-else :to="item.redirect||item.path">{{ item.meta.title }}</router-link>
				</el-breadcrumb-item>
			</transition-group>
		</el-breadcrumb>

	</div>
</template>

<script>
import pathToRegexp from 'path-to-regexp'
export default {
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  mounted() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      const { params } = this.$route
      let matched = this.$route.matched.filter(item => {
        if (item.name) {
          var toPath = pathToRegexp.compile(item.path)
          item.path = toPath(params)
          return true
        }
      })
      const first = matched[0]
      if (
        first &&
				first.name.trim().toLocaleLowerCase() !==
				'Home'.toLocaleLowerCase()
      ) {
        matched = [
          /* {
						path: '/dashboard',
						meta: { title: 'dashboard' }
					} */
        ].concat(matched)
      }
      this.levelList = matched
      // console.log('levelList',this.levelList)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
	.breadcrumb-box{
		border:1px solid #ccc;
		box-shadow:1px 1px 1px 1px #ccc;
		padding:15px;
		margin-bottom:15px;
		a{
			font-size:16px;
		}
		span{
			font-size:16px;
		}

	}
</style>
