<template>
  <div class="data-admin">
   <div class="data-admin-box">
	 	<div class="data-admin-head">
	 		<el-form label-width="100px" :model="dataAdmin" class="data-admin-from">
		      <el-form-item label="报表选择:">
		      	<el-select v-model="dataAdmin.report" placeholder="请选择">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			  </el-select>
		      </el-form-item>
		    </el-form>
		    <el-radio-group v-model="dataAdmin.contrast">
		      <el-radio-button label="行政区域对比">行政区域对比</el-radio-button>
		      <el-radio-button label="灾情信息对比">灾情信息对比</el-radio-button>
		    </el-radio-group>
		    <el-radio-group v-model="dataAdmin.disaster">
			    <el-radio label="受灾人口">受灾人口</el-radio>
			    <el-radio label="因灾死亡人口">因灾死亡人口</el-radio>
			    <el-radio label="因灾失踪人口">因灾失踪人口</el-radio>
			    <el-radio label="因灾伤病人口">因灾伤病人口</el-radio>
			    <el-radio label="饮水困难人口">饮水困难人口</el-radio>
			    <el-radio label="需过渡性生活救助人口">需过渡性生活救助人口</el-radio>
			</el-radio-group>
	 	</div>
	 	
		    

    	<div id="myChart"></div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'echarts-china',
  data() {
    return {
    	options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        dataAdmin:{
        	report: '', //报表选择
        	contrast:'行政区域对比', // 对比
        	disaster: ''// 灾难
        }
    }
  },
  mounted() {
    console.log(this.$store.getters.test1)
    this.drawLine()
  },
  methods:{
  	drawLine(){
      this.mydata=[  
                {name: '北京',value: '100' },{name: '天津',value: this.randomData() },  
                {name: '上海',value: this.randomData() },{name: '重庆',value: this.randomData() },  
                {name: '河北',value: this.randomData() },{name: '河南',value: this.randomData() },  
                {name: '云南',value: this.randomData() },{name: '辽宁',value: this.randomData() },  
                // {name: '黑龙江',value: this.randomData() },{name: '湖南',value: this.randomData() },  
                // {name: '安徽',value: this.randomData() },{name: '山东',value: this.randomData() },  
                // {name: '新疆',value: this.randomData() },{name: '江苏',value: this.randomData() },  
                // {name: '浙江',value: this.randomData() },{name: '江西',value: this.randomData() },  
                // {name: '湖北',value: this.randomData() },{name: '广西',value: this.randomData() },  
                // {name: '甘肃',value: this.randomData() },{name: '山西',value: this.randomData() },  
                // {name: '内蒙古',value: this.randomData() },{name: '陕西',value: this.randomData() },  
                // {name: '吉林',value: this.randomData() },{name: '福建',value: this.randomData() },  
                // {name: '贵州',value: this.randomData() },{name: '广东',value: this.randomData() },  
                // {name: '青海',value: this.randomData() },{name: '西藏',value: this.randomData() },  
                // {name: '四川',value: this.randomData() },{name: '宁夏',value: this.randomData() },  
                // {name: '海南',value: this.randomData() },{name: '台湾',value: this.randomData() },  
                // {name: '香港',value: this.randomData() },{name: '澳门',value: this.randomData() }  
            ]
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          	backgroundColor: '#F7F7F7',
	        title: {
	            text: '损失统计',
	            subtext: '数据来自国家统计局',
	            // sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
	        },
	        tooltip: {
	            trigger: 'item',
	            formatter: '{b}<br/>{c}'
	        },
	        toolbox: {
	            show: true,
	            orient: 'vertical',
	            left: 'right',
	            top: 'center',
	            // feature: {
	            //     dataView: {readOnly: false},
	            //     restore: {},
	            //     saveAsImage: {}
	            // }
	        },
	        visualMap: {
	            max: 500,
                min: 0,
                text: ['高', '低'],
                realtime: false,
                calculable: false,
                itemHeight: '500',
                inverse: true, // 翻转
                orient: 'horizontal',
	            inRange: {
	                color: ['#FFFFFF', '#096DD9']
	            }
	        },
	        series: [
	            {
	                name: '损失统计',
	                type: 'map',
	                mapType: 'china', // 自定义扩展图表类型
	                itemStyle:{
	                    normal:{label:{show:true}},
	                    emphasis:{label:{show:true}}
	                },
	                data:this.mydata,
	                // 自定义名称映射
	                // nameMap: {
	                //     'Central and Western': '中西区',
	                //     'Eastern': '东区',
	                //     'Islands': '离岛',
	                //     'Kowloon City': '九龙城',
	                //     'Kwai Tsing': '葵青',
	                //     'Kwun Tong': '观塘',
	                //     'North': '北区',
	                //     'Sai Kung': '西贡',
	                //     'Sha Tin': '沙田',
	                //     'Sham Shui Po': '深水埗',
	                //     'Southern': '南区',
	                //     'Tai Po': '大埔',
	                //     'Tsuen Wan': '荃湾',
	                //     'Tuen Mun': '屯门',
	                //     'Wan Chai': '湾仔',
	                //     'Wong Tai Sin': '黄大仙',
	                //     'Yau Tsim Mong': '油尖旺',
	                //     'Yuen Long': '元朗'
	                // }
	            }
	        ]
	    })
    },
    randomData() {  
     return Math.round(Math.random()*500);  
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .data-admin{
    background:#ccc;
    .data-admin-box{

      background:#d00;
      .data-admin-head{
      	text-align:left;
      	.data-admin-from{
			width:35%;
			display:inline-block;
      	}
      }
      #myChart{
      	height:500px
      }
    }
  }
</style>
