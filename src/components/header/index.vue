/*
 * @Page: 布局-头部
 * @Author: sun
 * @Date: 2019-16-27
 */
 <template>
	<div class="header">
		<div class="left-log">
			<img src="@/assets/log.png" alt="">
		</div>

		<div class="right-log">
			<span class="right-log-btn"><i class="fa fa-user-circle" aria-hidden="true"></i> 用户</span> |
			<span class="right-log-btn" @click="loginOut">退出</span>
		</div>
	</div>
 </template>
<script>
export default {
  name: 'Header',
  data() {
    return {

    }
  },
  methods: {
    loginOut() {
      const h = this.$createElement
      this.$msgbox({
        title: '提醒',
        message: h('p', null, [
          h('span', null, '确定要注销 '),
          h('i', { style: 'color: teal' }, '用户'),
          h('span', null, ' 吗？')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            this.$store.dispatch('FedLogOut').then(res => {
              done()
              instance.confirmButtonLoading = false
              const roles = []
              this.$store.dispatch('GenerateRoutes', { roles })
              this.$router.push('/login')
              console.log(this.$store.getters.permission_routers, this.$router.options.routes)
            })
          } else {
            done()
          }
        }
      }).then(action => {
        this.$message({
          type: 'info',
          message: '退出成功！'
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
	display: -webkit-flex;
  display: flex;
	justify-content:space-between;
	-webkit-justify-content:space-between;
	align-items:center;
	height:100%;
	line-height:100%;
	width:100%;
	background:#00C4E0;
	.left-log{
		display:inline-block;
		height:80%;
		padding-left:100px;
		img{
			display:inline-block;
			height:100%;
		}
	}
	.right-log{
		padding-right:50px;
		display:inline-block;
		color:#fff;
		.right-log-btn{
			cursor:pointer
		}
	}
}
</style>
