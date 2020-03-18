<template>
  <div class="maptalks">
    <div id="map" class="container"></div>
  </div>
</template>
<script>
import 'maptalks/dist/maptalks.css';
import * as maptalks from 'maptalks';
export default {
  data() {
    return {
      arcUrlArr: [
        {
          title: '全球基础地理(搭配影像)数据',
          url: 'http://203.207.224.108:2050/mapserver/tms/services/globalimage/MapServer'
        },
        {
          title: '全球电子地图数据',
          url: 'http://203.207.224.108:2050/mapserver/tms/services/100wshiliang/MapServer'
        },
        {
          title: '全球影像数据',
          url: 'http://203.207.224.108:2050/mapserver/tms/services/globalimage/MapServer'
        },
        {
          title: '全球基础地理与地形数据',
          url: 'http://203.207.224.108:2050/mapserver/tms/services/globaldem/MapServer'
        },
        {
          title: '钢铁厂高分影像',
          url: 'http://203.207.224.108:2050/mapserver/tms/services/cngs_gtc/MapServer'
        },
        {
          title: 'test01',
          url: 'http://203.207.223.39:18180/mapserver/tms/services/whbd/MapServer'
          // url: '/api2/mapserver/tms/services/whbd/MapServer'
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.showArc()
    })
  },
  methods: {
    initMap() {
      this.$nextTick(() => {
        const map = new maptalks.Map('map', {
          center: [-0.113049, 51.498568],
          zoom: 14,
          baseLayer: new maptalks.TileLayer('base', {
            urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
            subdomains: ['a', 'b', 'c', 'd'],
            attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
          })
        });
        console.log('map: ', map);
      });
    },
    showArc() {
      var _this = this
      var arcUrl = this.arcUrlArr[0].url;
      // console.log(arcUrl)
      this.$nextTick(() => {
        maptalks.SpatialReference.loadArcgis(arcUrl + '?f=pjson', function(err, conf) {
          if (err) {
            throw new Error(err);
          }

          var ref = conf.spatialReference;
          ref.projection = 'EPSG:4326';
          // tileSystem 控制瓦片的x,y以及行列，后两个是origin原点位置（很重要）
          // conf.tileSystem = [1, -1, -180, 140]
          // console.log(conf)
          var map = new maptalks.Map('map', {
            // center: [120.35998837572278, 36.082247703883596],
            center: [25.319645, 13.651784],
            zoom: 12,
            minZoom: 1,
            maxZoom: 20,
            spatialReference: ref,
            // 缩放级别控件
            // zoomControl: true, // add zoom control
            // 比例尺
            scaleControl: true, // add scale control
            // pitch: 45, // 旋转角度
            // 鹰眼控件
            overviewControl: true, // add overview control
            layerSwitcherControl: {
              'position': 'top-right',
              // title of base layers
              'baseTitle': 'Base Layers',
              // title of layers
              'overlayTitle': 'Layers',
              // layers you don't want to manage with layer switcher
              'excludeLayers': [],
              // css class of container element, maptalks-layer-switcher by default
              'containerClass': 'maptalks-layer-switcher'
            },

            baseLayer: new maptalks.GroupTileLayer('base', [
              // new maptalks.TileLayer(
              //   [_this.arcUrlArr[4].title], {
              //     opacity: 0.1,
              //     'tileSystem': conf.tileSystem,
              //     'tileSize': conf.tileSize, // [512, 512]
              //     urlTemplate: _this.arcUrlArr[4].url + '/tile/{z}/{y}/{x}'
              //     // cssFilter: 'sepia(100%) invert(90%)'
              //     // subdomains: ['a', 'b', 'c', 'd']
              //   }),

              new maptalks.TileLayer([_this.arcUrlArr[0].title], {
                opacity: 1,
                'tileSystem': conf.tileSystem,
                'tileSize': conf.tileSize, // [512, 512]
                // 底图服务器地址，如下为瓦片地址
                'urlTemplate': arcUrl + '/tile/{z}/{y}/{x}',
                // 'attribution': '&copy; <a target="_blank" href="' + arcUrl + '"">ArcGIS</a>',
                // cssFilter: 'sepia(100%) invert(90%)'
                cssFilter: 'blur(5px)' // 高斯模糊
              }),

              new maptalks.TileLayer(
                [_this.arcUrlArr[1].title], {
                  opacity: 0.1,
                  'tileSystem': conf.tileSystem,
                  'tileSize': conf.tileSize, // [512, 512]
                  urlTemplate: _this.arcUrlArr[1].url + '/tile/{z}/{y}/{x}'
                  // cssFilter: 'sepia(100%) invert(90%)'
                  // subdomains: ['a', 'b', 'c', 'd']
                })

            ]),
            // //左下角info
            attribution: {// 左下角info
              content: '&copy; <a target="_blank" href="' + arcUrl + '"">ArcGIS</a>'
            }
          });
          map.addLayer(
            new maptalks.TileLayer(
              [_this.arcUrlArr[2].title], {
                opacity: 0.2,
                'tileSystem': conf.tileSystem,
                'tileSize': conf.tileSize, // [512, 512]
                urlTemplate: _this.arcUrlArr[2].url + '/tile/{z}/{y}/{x}'
                // cssFilter: 'sepia(100%) invert(90%)',
                // cssFilter: 'blur(5px)' // 高斯模糊
                // subdomains: ['a', 'b', 'c', 'd']
              }),
          )
          map.addLayer(
            new maptalks.TileLayer(
              [_this.arcUrlArr[3].title], {
                opacity: 0.2,
                'tileSystem': conf.tileSystem,
                'tileSize': conf.tileSize, // [512, 512]
                urlTemplate: _this.arcUrlArr[3].url + '/tile/{z}/{y}/{x}'
                // cssFilter: 'sepia(100%) invert(90%)',
                // cssFilter: 'blur(5px)' // 高斯模糊
                // subdomains: ['a', 'b', 'c', 'd']
              }),
          )
          map.addLayer(new maptalks.TileLayer(
            [_this.arcUrlArr[4].title], {
              opacity: 0.1,
              'tileSystem': conf.tileSystem,
              'tileSize': conf.tileSize, // [512, 512]
              urlTemplate: _this.arcUrlArr[4].url + '/tile/{z}/{y}/{x}'
              // cssFilter: 'sepia(100%) invert(90%)'
              // subdomains: ['a', 'b', 'c', 'd']
            }))
          map.addLayer(new maptalks.TileLayer(
            [_this.arcUrlArr[5].title], {
              opacity: 0.1,
              'tileSystem': conf.tileSystem,
              'tileSize': conf.tileSize, // [512, 512]
              urlTemplate: _this.arcUrlArr[5].url + '/tile/{z}/{y}/{x}'
              // cssFilter: 'sepia(100%) invert(90%)'
              // subdomains: ['a', 'b', 'c', 'd']
            }))

          // another attribution control
          var attribution = new maptalks.control.Attribution({
            content: 'Another Attribution Control',
            position: {
              top: 5,
              right: 5
            }
          });
          // 控件显示与隐藏
          function handleZoomControl(map) {
            var zoomControl = new maptalks.control.Zoom({
              'position': 'top-left',
              'slider': true,
              'zoomLevel': true
            }).addTo(map);
            map.addControl(attribution);
            function hide() {
              zoomControl.hide();
            }

            function show() {
              if (zoomControl.getMap()) {
                zoomControl.show();
              } else {
                map.addControl(zoomControl);
              }
            }

            function remove() {
              zoomControl.remove();
            }

            var toolbar = new maptalks.control.Toolbar({
              position: 10,
              items: [
                {
                  item: 'Show',
                  click: show
                },
                {
                  item: 'Hide',
                  click: hide
                },
                {
                  item: 'Remove',
                  click: remove
                }
              ]
            })
            return toolbar
          }
          handleZoomControl(map).addTo(map)

          // 点击事件
          map.on('click', function(param) {
            console.log(param, param.coordinate)
          });

          console.log('map: ', map);
        });
      });
    }
  }

}
</script>
<style lang="scss" scoped>
.maptalks{
  height:calc(100% - 63px)
}
.container{
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
