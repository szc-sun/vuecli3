<template>
<div class="about">
	<h1>This is an about page</h1>
	<div>父组件：{{value}}</div>
	<!-- <vmodel @focus="onFocus" @blur="onBlur" @input='onInput' @change='onChange' :label="label" v-model="value"/> -->
	<vmodel :label="label" v-model="value"/>
	<el-button @click="textApi" pain>按钮</el-button>
	<div>
		<div v-for="(item,index) in listData" :key="index" class="news-box">
			<h3 :title="item.title">{{item.title}}</h3>
			<h6><span>作者：</span> {{item.author}}</h6>
			<div>{{item.datetime}}</div>
			<img :src="item.image" alt="图片加载中。。。"/>

		</div>
	</div>
</div>
</template>
<script>
import vmodel from './vmodel'
import { list } from '@/api/list'
export default {
  components: {
    vmodel
  },
  data() {
    return {
      label: '输入',
      value: '123',
      listData: []
    }
  },
  mounted() {
    this.textApi()
  },
  methods: {
    textApi() { // 测试mock数据
      var data = {}
      list(data).then(res => {
        this.listData = res.data
        // console.log('list',res)
      })
      // console.log(123)
    },
    onFocus(event) {
      // console.log('获取焦距123', event)
    },
    onBlur(event) {
      // console.log('失去焦距456', event)
    },
    onInput(value) {
      // this.value = value
      // console.log('input事件', value)
    },
    onChange(event) {
      // this.value = event.target.value
      // console.log('change事件', event)
    }
  }
}
</script>
<style lang="scss" scope>
.about{
	text-align:left;
	.news-box{
		display:inline-block;
		width:25%;
		margin-bottom:20px;
		h3{
			width:100%;
			white-space:nowrap;
			overflow:hidden;
			text-overflow:ellipsis
		}
	}
}
</style>
