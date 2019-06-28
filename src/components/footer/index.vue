/*
 * @Page: 布局-底部
 * @Author: sun
 * @Date: 2019-16-27
 */
 <template>
	<div class="footer">
		<div class="left-footer">
			
		</div>
		<div class="center-footer">
			底部
		</div>

		<div class="right-footer">
		</div>
	</div>
 </template>
 <script>
export default {
	name: 'Footer',
	data(){
		return {

		}
	}
}
 </script>
<style lang="scss" scoped>
.footer {
	display: -webkit-flex;
    display: flex;
	justify-conten:space-between;
	-webkit-justify-content:space-between;
	align-items:center;
	height:100%;
	line-height:100%;
	width:100%;
	background:#004ea1;
	color:#fff;
	.left-log{
		display:inline-block;
		height:80%;
	}
	.right-log{
		padding-right:50px;
		display:inline-block;		
	}
}
</style>