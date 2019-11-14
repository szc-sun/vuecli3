<template>
  <div>
    管理员页面
    <div id="myMap"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clickCityCode: null,
      mapJson: null,
      level: 1
    }
  },
  mounted() {
    this.drawLine(this.level, this.mapJson, '中国')
  },
  watch: {
  },
  methods: {
    drawLine(levle, mapJson, name) {
      // console.log(5555, levle, mapJson, name)
      var _this = this
      // 基于准备好的dom，初始化echarts实例
      const mapSample = _this.$echarts.init(document.getElementById('myMap'));
      (_this.getMapJson(name, mapJson)).then(res => {
        _this.mapJson = res
        // console.log(111, res, _this.$echarts.getMap(name))
        // 中国地图和已注册的地球不用再注册
        if (name !== '中国' && !_this.$echarts.getMap(name)) {
          _this.$echarts.registerMap(name, res)
        }
        var series = [
        // 中国地图省份颜色
          {
            type: 'map',
            map: 'china',
            geoIndex: 0,
            aspectScale: 0.2, // 长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: '#fff'
                }
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: '#031525',
                borderColor: '#3B5077'
              },
              emphasis: {
                areaColor: '#2B91B7'
              }
            },
            animation: false,
            data: _this.sampleResourceData

          }
        ]
        mapSample.setOption({
          backgroundColor: '#040B1E',
          title: {
          // text: '全国节点',
          // subtext: '数据来自国家统计局'
          // sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c}万份'
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
            show: true,
            type: 'piecewise',
            left: '85%',
            bottom: '20%',
            splitNumber: 5,
            calculable: false,
            itemWidth: 14,
            itemHeight: 14,
            itemGap: 15,
            align: 'left',
            itemSymbol: 'roundRect',
            seriesIndex: [0],
            min: 0,
            max: 1000,
            // pieces: [

            //   { color: 'rgba(16,38,84,1)', gt: 0, lte: 100, label: '0~100万份', symbol: 'image://static/homeIcon/fangxing1.svg', symbolSize: 20 },
            //   { color: 'rgba(19,43,97,1)', gt: 100, lte: 500, label: '100~500万份', symbol: 'image://static/homeIcon/fangxing2.svg', symbolSize: 20 },
            //   { color: 'rgba(26,62,137,1)', gt: 500, lte: 1000, label: '500~1000万份', symbol: 'image://static/homeIcon/fangxing3.svg', symbolSize: 20 },
            //   { color: 'rgba(33,82,181,1)', gt: 1000, label: '1000万份以上', symbol: 'image://static/homeIcon/fangxing4.svg', symbolSize: 20 },
            //   { value: -1, label: '正常', symbol: 'image://static/homeIcon/zhengchang.svg' },
            //   { value: -2, label: '失联', symbol: 'image://static/homeIcon/shilian.svg' },
            //   { value: -3, label: '故障', symbol: 'image://static/homeIcon/guzhang.svg' },
            //   { value: -4, label: '重点样本资源\n监控事件', symbol: 'image://static/homeIcon/zhongdian(2).svg' }
            // ],
            // right: 40,
            // bottom: 170,
            textStyle: {
              color: '#4ac7f5',
              fontSize: 14,
              lineHeight: 18
            }
          },
          geo: {
            map: name === '中国' ? 'china' : name,
            // zoom: 1.1,
            // top: 45,
            zoom: 1.1,
            top: 70,
            // bottom: 110,
            label: {
              emphasis: {
                show: false
              }
            },
            roam: true, // 是否允许缩放
            itemStyle: {
              normal: {
                color: 'rgba(10,22,52,1)', // 地图背景色
                borderColor: '#2E72F7', // 省市边界线00fcff 516a89
                borderWidth: 1
              },
              emphasis: {
                color: '#828DD9', // 鼠标悬浮背景
                borderColor: '#6cb0e0'
              }
            }
          },
          series: series
        }, true)
      })
      // console.log(2222, china)
      // this.$echarts.registerMap('中国', s.data)

      window.addEventListener('resize', function() {
        mapSample.resize()
      })
      mapSample.off()
      // 点击事件,根据点击某个省份计算出这个省份的数据
      mapSample.on('click', function(params) {
        // 逻辑控制
        // _this.drawLine(_this.level, _this.mapJson, '中国')
        _this.level === 3 ? _this.drawLine(_this.level, _this.mapJson, '中国') : _this.drawLine(_this.level, _this.mapJson, params.name)
        // console.log(444444444, params.name)
      })
    },
    // 动态引入地图json文件，在此函数用bus总线动态改变兄弟组件数据
    getMapJson(name, nowJson) {
      var _this = this
      var id = 0
      var showMapFn = () => import('echarts/map/json/china.json')
      if (name === '中国' || _this.level === 3 || !nowJson) {
        _this.level = 1
        showMapFn = () => import('echarts/map/json/china.json')
      } else if (_this.level === 1 && nowJson) { // 省级地图
        _this.level = 2
        id = this.getId(name, nowJson)
        showMapFn = () => import('./city/' + id + '.json')
        // showMapFn = () => import('@/assets/map/city/' + id + '.json')
      } else if (_this.level === 2 && nowJson) {
        _this.level = 3
        id = this.getId(name, nowJson)
        // showMapFn = () => import('../../assets/map/city/' + id + '.json')
        showMapFn = () => import('./city/' + id + '.json')
      }
      return showMapFn()
    },
    getId(name, nowJson) {
      var id = null
      nowJson.features.forEach((val, index, arr) => {
        if (name === val.properties.name) {
          id = val.id
        }
      })
      return id
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

