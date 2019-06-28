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
			<span class="right-log-btn">退出</span>
		</div>
	</div>
 </template>
 <script>
export default {
	name: 'Header',
	data(){
		return {

		}
	}
}
 </script>
<style lang="scss" scoped>
.header {
	display: -webkit-flex;
    display: flex;
	justify-conten:space-between;
	-webkit-justify-content:space-between;
	align-items:center;
	height:100%;
	line-height:100%;
	width:100%;
	background:#004ea1;
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