<template>
    <div class="home">
        <div>中英文切换测试：{{$t('message.text')}}</div>
        <hr/>
        <div style = "display:flex">
            分享到：
            <el-button @click="shareTo('qq')">
                <img src="http://zixuephp.net/static/images/qqshare.png" width="32">
            </el-button>
            <el-button @click="shareTo('sina')">
                <img src="http://zixuephp.net/static/images/sinaweiboshare.png" width="36">
            </el-button>
            <el-button @click="shareTo('wechat')">
                <img src="http://zixuephp.net/static/images/wechatshare.png" width="32">
            </el-button>
        </div>
        <hr/>
        测试组件
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <hr/>
        测试vuex
        <span @click="textChange">{{text}}</span>
        <hr/>
        富文本编辑器tinymce
        <tinymce-text id="tinymce" @release="release" style="color:#333"></tinymce-text>
        <hr/>
        echarts地图
        <div id="myChart1" :style="{width: '600px', height: '600px'}"></div>
        <div id="myChart2" :style="{width: '600px', height: '600px'}"></div>
        <div>
        <hr/>
        图片预览插件一
        <vue-preview
        :list="list"
        :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}"
        :previewBoxStyle="{border: '1px solid #eee'}"

        @close="closeHandler"
        @destroy="destroyHandler"
        />
        <hr/>
        图片预览插件二（这个好用v-viewer）
        <viewer>
        <img
            width="150"
            v-for="(src,index) in list"
            :src="src.src"
            :key="index"
            >
    </viewer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TinymceText from '@/components/tinymce/TinymceText'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    TinymceText
  },
  data() {
    return {
      mydata: [],
      list: [
        {
          src: 'https://placekitten.com/600/400',
          w: 600,
          h: 600
        },
        {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }
      ]
    }
  },
  computed: {
    text() {
      return this.$store.getters.test1
    }
  },
  activated() {
    console.log('activated')
  },
  mounted() {
    // console.log(this.$store)
    // this.$store.dispatch('Login', '')
    this.drawLine()
  },
  methods: {
    shareTo(stype) {
      var ftit = ''
      var flink = ''
      var lk = ''
      // 获取文章标题
      ftit = document.title
      // 获取网页中内容的第一张图片地址作为分享图
      flink = document.images[0].src
      if (typeof flink === 'undefined') {
        flink = ''
      }
      // 当内容中没有图片时，设置分享图片为网站logo
      if (flink === '') {
        lk = 'http://' + window.location.host + '/static/images/logo.png'
      }
      // 如果是上传的图片则进行绝对路径拼接
      if (flink.indexOf('/uploads/') !== -1) {
        lk = 'http://' + window.location.host + flink
      }
      // 百度编辑器自带图片获取
      if (flink.indexOf('ueditor') !== -1) {
        lk = flink
      }
      // //qq空间接口的传参
      // if(stype=='qzone'){
      //     window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+document.location.href+'?sharesource=qzone&title='+ftit+'&pics='+lk+'&summary='+document.querySelector('meta[name="description"]').getAttribute('content'));
      // }
      // 新浪微博接口的传参
      if (stype === 'sina') {
        window.open('http://service.weibo.com/share/share.php?url=' + encodeURIComponent('http://127.0.0.1:8081/biomedical/#/demand-details/25') + '&title=' + ftit + '&pic=' + lk + '&appkey=2706825840')
      }
      // qq好友接口的传参
      if (stype === 'qq') {
        window.open('http://connect.qq.com/widget/shareqq/index.html?url=http://127.0.0.1:8081/biomedical/#/demand-details/25&title=服务&pics=')
      }
      // 生成二维码给微信扫描分享，php生成，也可以用jquery.qrcode.js插件实现二维码生成
      if (stype === 'wechat') {
        window.open('http://zixuephp.net/inc/qrcode_img.php?url=https://www.baidu.com/')
        window.open('http://zixuephp.net/inc/qrcode_img.php?url=分享的地址')
      }
    },
    // 即将关闭的时候，调用这个处理函数
    closeHandler() {
      // console.log('closeHandler')
    },
    // 完全关闭之后，调用这个函数清理资源
    destroyHandler() {
      // console.log('destroyHandler')
    },
    textChange() {
      this.$store.dispatch('ChangeTest', '456')
      // console.log(this.$store.getters.test1)
    },
    release(content) {
      // console.log(content)
    },

    drawLine() {
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
      const myChart1 = this.$echarts.init(document.getElementById('myChart1'))
      const myChart2 = this.$echarts.init(document.getElementById('myChart2'))
      // 绘制图表
      myChart1.setOption({
        backgroundColor: '#F7F7F7',
        title: {
          text: '损失统计',
          subtext: '数据来自国家统计局'
          // sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c} (p / km2)'
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
          min: 0,
          max: 500,
          // text:['High','Low'],
          realtime: false,
          calculable: true,
          orient: 'horizontal',
          inRange: {
            color: ['#DDDDDD', '#026FDD']
          }
        },
        series: [
          {
            name: '损失统计',
            type: 'map',
            mapType: 'china', // 自定义扩展图表类型
            itemStyle: {
              normal: { label: { show: true }},
              emphasis: { label: { show: true }}
            },
            data: this.mydata
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
      myChart2.setOption(
        {
          backgroundColor: '#F7F7F7',
          title: {
            text: '损失统计',
            left: 'center',
            top: 20,
            textStyle: {
              color: '#222'
            }
          },

          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },

          visualMap: {
            show: false,
            min: 80,
            max: 501,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series: [
            {
              name: '损失统计',
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              data: this.mydata.sort(function(a, b) { return a.value - b.value }),
              roseType: 'radius',
              label: {
                normal: {
                  textStyle: {
                    color: '#FF5F50'
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: '#FF7F50'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },
              itemStyle: {
                normal: {
                  color: '#c23531',
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },

              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function(idx) {
                return Math.random() * 200
              }
            }
          ]
        })
    },
    randomData() {
      return Math.round(Math.random() * 500)
    }
  }
}
</script>
<style lang="scss" scoped>
hr{
    margin:20px 0 50px;
}
</style>
