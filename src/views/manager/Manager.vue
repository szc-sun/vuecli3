<template>
  <div>
    管理员页面
    <div id="myMap"></div>
  </div>
</template>
<script>
import china from 'echarts/map/json/china.json'
import shanghai from 'echarts/map/json/province/shanghai.json'
import 'echarts/map/json/province/hebei.json'
import 'echarts/map/json/province/shanxi.json'
import 'echarts/map/json/province/neimenggu.json'
import 'echarts/map/json/province/liaoning.json'
import 'echarts/map/json/province/jilin.json'
import 'echarts/map/json/province/heilongjiang.json'
import 'echarts/map/json/province/jiangsu.json'
import 'echarts/map/json/province/zhejiang.json'
import 'echarts/map/json/province/anhui.json'
import 'echarts/map/json/province/fujian.json'
import 'echarts/map/json/province/jiangxi.json'
import 'echarts/map/json/province/shandong.json'
import 'echarts/map/json/province/henan.json'
import 'echarts/map/json/province/hubei.json'
import 'echarts/map/json/province/hunan.json'
import 'echarts/map/json/province/guangdong.json'
import 'echarts/map/json/province/guangxi.json'
import 'echarts/map/json/province/hainan.json'
import 'echarts/map/json/province/sichuan.json'
import 'echarts/map/json/province/guizhou.json'
import 'echarts/map/json/province/yunnan.json'
import 'echarts/map/json/province/xizang.json'
import 'echarts/map/json/province/shanxi1.json'
import 'echarts/map/json/province/gansu.json'
import 'echarts/map/json/province/qinghai.json'
import 'echarts/map/json/province/ningxia.json'
import 'echarts/map/json/province/xinjiang.json'
import 'echarts/map/json/province/beijing.json'
import 'echarts/map/json/province/tianjin.json'
import 'echarts/map/json/province/chongqing.json'
import 'echarts/map/json/province/xianggang.json'
import 'echarts/map/json/province/aomen.json'
import 'echarts/map/json/province/taiwan.json'
export default {
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
    console.log(china, shanghai)
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
      this.$echarts.registerMap('shanghai', shanghai)
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
      const myMap = this.$echarts.init(document.getElementById('myMap'))
      myMap.off('click')
      myMap.on('click', function(param) {
        console.log(param.name, _this.provincesText)
        // 遍历取到provincesText 中的下标  去拿到对应的省js
        for (var i = 0, len = _this.provincesText.length; i < len; i++) {
          if (param.name == _this.provincesText[i]) {
            // 显示对应省份的方法
            _this.showName = _this.provincesText[i]
            _this.choose.provinces = param.name
            break
          } else {
            _this.choose.city = param.name
            _this.showName = 'china'
          }
        }
        console.log(123, param, _this.choose)
        // _this.drawLine(_this.showName)
      })
      // 绘制图表
      myMap.setOption({
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
        geo: {
          map: 'china',
          // zoom: 1.1,
          // top: 45,
          zoom: 1.2,
          top: 100,
          // bottom: 110,
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false, // 是否允许缩放
          itemStyle: {
            normal: {
              color: '#DAE8FF', // 地图背景色
              borderColor: '#6cb0e0', // 省市边界线00fcff 516a89
              borderWidth: 1
            },
            emphasis: {
              color: '#828DD9', // 鼠标悬浮背景
              borderColor: '#6cb0e0'
            }
          }
        },
        series: [

        ]
      }, true)
    },
    randomData() {
      return Math.round(Math.random() * 500)
    }

  }

}
</script>
<style lang="scss" scoped>
  #myMap{
    height:800px;
    width:800px
  }
</style>

