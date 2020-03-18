<template>
	<div class="data-admin" id = "data-admin">
		<div id="myChart" ></div>
	</div>
</template>
<script>
import 'echarts/map/js/china.js'
import 'echarts/map/js/province/shanghai.js'
import 'echarts/map/js/province/hebei.js'
import 'echarts/map/js/province/shanxi.js'
import 'echarts/map/js/province/neimenggu.js'
import 'echarts/map/js/province/liaoning.js'
import 'echarts/map/js/province/jilin.js'
import 'echarts/map/js/province/heilongjiang.js'
import 'echarts/map/js/province/jiangsu.js'
import 'echarts/map/js/province/zhejiang.js'
import 'echarts/map/js/province/anhui.js'
import 'echarts/map/js/province/fujian.js'
import 'echarts/map/js/province/jiangxi.js'
import 'echarts/map/js/province/shandong.js'
import 'echarts/map/js/province/henan.js'
import 'echarts/map/js/province/hubei.js'
import 'echarts/map/js/province/hunan.js'
import 'echarts/map/js/province/guangdong.js'
import 'echarts/map/js/province/guangxi.js'
import 'echarts/map/js/province/hainan.js'
import 'echarts/map/js/province/sichuan.js'
import 'echarts/map/js/province/guizhou.js'
import 'echarts/map/js/province/yunnan.js'
import 'echarts/map/js/province/xizang.js'
import 'echarts/map/js/province/shanxi1.js'
import 'echarts/map/js/province/gansu.js'
import 'echarts/map/js/province/qinghai.js'
import 'echarts/map/js/province/ningxia.js'
import 'echarts/map/js/province/xinjiang.js'
import 'echarts/map/js/province/beijing.js'
import 'echarts/map/js/province/tianjin.js'
import 'echarts/map/js/province/chongqing.js'
import 'echarts/map/js/province/xianggang.js'
import 'echarts/map/js/province/aomen.js'
import 'echarts/map/js/province/taiwan.js'

export default {
  name: 'EchartsChina2',
  data() {
    return {
      mydata: [],
      provinces: ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen', 'taiwan'],
      provincesText: ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门', '台湾'],
      showName: 'china',
      choose: {
        provinces: '',
        city: ''
      }
    }
  },
  mounted() {
    const _this = this
    this.drawLine(_this.showName)
  },
  watch: {
    showName(val) {
      this.drawLine(val)
    }
  },
  methods: {
    drawLine(showName) {
      var _this = this
      this.mydata = [
        { name: '北京', value: '100' }, { name: '天津', value: this.randomData() },
        { name: '上海', value: this.randomData() }, { name: '重庆', value: this.randomData() },
        { name: '河北', value: this.randomData() }, { name: '河南', value: this.randomData() },
        { name: '云南', value: this.randomData() }, { name: '辽宁', value: this.randomData() }
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
      const myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.off('click')
      myChart.on('click', function(param) {
        // console.log(param.name, _this.provincesText)
        // 遍历取到provincesText 中的下标  去拿到对应的省js
        for (var i = 0, len = _this.provincesText.length; i < len; i++) {
          if (param.name === _this.provincesText[i]) {
            // 显示对应省份的方法
            _this.showName = _this.provincesText[i]
            _this.choose.provinces = param.name
            break
          } else {
            _this.choose.city = param.name
            _this.showName = 'china'
          }
        }
        // console.log(123, param, _this.choose)
        // _this.drawLine(_this.showName)
      })
      // 绘制图表
      myChart.setOption({
        backgroundColor: '#F7F7F7',
        title: {
          text: '损失统计',
          subtext: '数据来自国家统计局'
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
          top: 'center'
          // feature: {
          //     dataView: {readOnly: false},
          //     restore: {},
          //     saveAsImage: {}
          // }
        },
        visualMap: {
          max: 50000,
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
            mapType: showName, // 自定义扩展图表类型
            itemStyle: {
              normal: { label: { show: true }},
              emphasis: { label: { show: true }}
            },
            data: [
              { name: '北京', value: 20057.34 },
              { name: '山东', value: 15477.48 },
              { name: '江苏', value: 31686.1 },
              { name: '安徽', value: 6992.6 },
              { name: '浙江', value: 44045.49 },
              { name: '福建', value: 40689.64 },
              { name: '湖南', value: 37659.78 },
              { name: '湖北', value: 45180.97 },
              { name: '广东', value: 55204.26 },
              { name: '广西', value: 21900.9 },
              { name: '云南', value: 4918.26 },
              { name: '台湾', value: 5881.84 },
              { name: '贵州', value: 4178.01 },
              { name: '四川', value: 2227.92 },
              { name: '新疆', value: 2180.98 },
              { name: '宁夏', value: 9172.94 },
              { name: '内蒙古', value: 3368 },
              { name: '山西', value: 806.98 }
            ]
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
      }, true)
    },
    randomData() {
      return Math.round(Math.random() * 500)
    }

  }
}
</script>
<style>
#myChart{
			height:500px;
			width:500px;
		}
</style>
