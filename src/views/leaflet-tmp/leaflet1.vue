<template>
  <div class="Leaflet">
    Leaflet
    <div id="map"></div>
  </div>
</template>
<script>
import markerIcon from 'leaflet/dist/images/marker-icon.png'
// import redMarker from 'leaflet/dist/images/layers.png'
// import icon from 'leaflet/dist/images/marker-icon.png'
// import iconShadow from 'leaflet/dist/images/marker-shadow.png'
export default {
  data() {
    return {
      map: null
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      var L = this.$L
      // const map = L.map('map', {
      //   center: L.latLng(23.140833538081456, 113.30564975738527),
      //   zoom: 16,
      //   maxZoom: 18
      // })
      // this.map = map
      // L.tileLayer(
      //   'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
      //   {
      //     subdomains: ['1', '2', '3', '4'],
      //     attribution: '高德'
      //   }
      // ).addTo(map)
      var icon = L.icon({
        iconUrl: markerIcon,
        iconSize: [25, 41],
        iconAnchor: [13, 21]
      })
      // 您可以使用LayerGroup类来执行以下操作，而不是将它们直接添加到地图中：
      var littleton = L.marker([23.142833, 113.305319], { icon: icon }).bindPopup('This is Littleton, CO.');
      var denver = L.marker([23.141833, 113.305319], { icon: icon }).bindPopup('This is Denver, CO.');
      var aurora = L.marker([23.143833, 113.305319], { icon: icon }).bindPopup('This is Aurora, CO.');
      var golden = L.marker([23.140833, 113.305319], { icon: icon }).bindPopup('This is Golden, CO.');
      var cities = L.layerGroup([littleton, denver, aurora, golden]);
      // var cities = new L.layerGroup();
      // L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities);
      // L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities);
      // L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities);
      // L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);
      var mapArr = [

        {
          // 矢量地图带注记
          url: 'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
          Attr: {
            subdomains: ['1', '2', '3', '4'],
            attribution: '高德'
          }
        },
        {
          // 矢量地图不带注记
          url: 'http://wprd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}&scl=1&ltype=3',
          Attr: {
            subdomains: ['1', '2', '3', '4'],
            attribution: '高德'
          }
        },
        {
          // 影像不带注记
          url: 'http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
          Attr: {
            subdomains: ['1', '2', '3', '4'],
            attribution: '高德'
          }
        },
        {
          // 道路带注记
          url: 'http://webst0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8',
          Attr: {
            subdomains: ['1', '2', '3', '4'],
            attribution: '高德'
          }
        },
        {
          // 道路不带注记
          url: 'http://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=8&ltype=11',
          Attr: {
            subdomains: ['1', '2', '3', '4'],
            attribution: '高德'
          }
        },
        {
          // 矢量带注记
          url: 'http://wprd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}',
          Attr: {
            subdomains: ['1', '2', '3', '4'],
            attribution: '高德'
          }
        }

      ]

      var grayscale = L.tileLayer(
        mapArr[0].url,
        {
          subdomains: mapArr[0].Attr.subdomains,
          attribution: '高德'
        }
      );
      var streets = L.tileLayer(
        mapArr[2].url,
        {
          subdomains: mapArr[2].Attr.subdomains,
          attribution: '高德'
        }
      );

      // var map = L.map('map', {
      //   center: L.latLng(23.140833538081456, 113.30564975738527),
      //   zoom: 10,
      //   layers: [grayscale, cities]
      // })
      const map = L.map('map', {
        center: L.latLng(23.140833538081456, 113.30564975738527),
        zoom: 16,
        maxZoom: 18,
        layers: [grayscale, cities]
      })
      this.map = map
      // var baseMaps = {
      //   'Grayscale': grayscale,
      //   'Streets': streets
      // };
      var baseMaps = {
        "<span style='color: gray'>Grayscale233</span>": grayscale,
        'Streets': streets
      };

      var overlayMaps = {
        'Cities': cities
      }
      L.control.layers(baseMaps, overlayMaps).addTo(map);
      L.control.scale().addTo(map);
      var ZoomViewer = L.Control.extend({
        onAdd: function() {
          var gauge = L.DomUtil.create('div');
          gauge.style.width = '200px';
          gauge.style.background = 'rgba(255,255,255,0.5)';
          gauge.style.textAlign = 'left';
          map.on('zoomstart zoom zoomend', function(ev) {
            gauge.innerHTML = 'Zoom level: ' + map.getZoom();
          })
          return gauge;
        }
      });
      (new ZoomViewer()).addTo(map);
    }
  }
}
</script>
<style lang="scss" scoped>
#map {
  width: 800px;
  height: 500px;
}
</style>
