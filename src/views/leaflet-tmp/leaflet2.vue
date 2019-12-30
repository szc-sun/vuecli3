<template>
  <div class="Leaflet">
    Leaflet123
    <div id="mapDiv"></div>
  </div>
</template>
<script>
import markerIcon from 'leaflet/dist/images/marker-icon.png'
// import layers from 'leaflet/dist/images/layers.png'
// import icon from 'leaflet/dist/images/marker-icon.png'
// import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import * as esri from 'esri-leaflet';
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
      var map = new L.Map('mapDiv', {
        zoom: 10,
        center: [32.03956857467441, 118.63768386683661],
        boxZoom: true
      });
      console.log(esri)
      esri.basemapLayer('Topographic').addTo(map);
      esri.dynamicMapLayer({
        url: 'http://58.213.85.147:6080/arcgis/rest/services/ycy/ycyzhgx/MapServer/',
        opacity: 0.7
      })
        .addTo(map);
      // var url = 'http://webrd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8';
      // var layer = new L.TileLayer(url, {
      //   subdomains: '1234'
      // });
      // map.addLayer(layer);
      // var icon = L.icon({
      //   iconUrl: markerIcon,
      //   iconSize: [25, 41],
      //   iconAnchor: [13, 21]
      // })
      // var marker = L.marker([39.99, 116.3], { icon: icon });
      // marker.addTo(map);
      // var tmsLayer = L.tileLayer('/api/mapserver/tms/services/100wshiliangimg/MapServer?f=pjson', {
      //   tms: true
      //   // maxZoom: 10,
      //   // reuseTiles: true
      // });
      this.$axios('/api/mapserver/tms/services/100wshiliangimg/MapServer?f=pjson').then(res => {
        console.log(res)
        // map.addLayer(res.data)
      })
      // const map = L.map('mapDiv').setView([28.751407, 118.628740], 12);
      // const dynamicLayer = L.esri.dynamicMapLayer({
      //   url: 'http://203.207.224.108:2050/mapserver/tms/services/100wshiliangimg/MapServer',
      //   opacity: 0.8,
      //   f: 'pjson'
      // });
      // map.addLayer(dynamicLayer);
      // var wmsLayer = L.tileLayer.wms('http://ows.terrestris.de/osm/service?', {
      //   'layers': 'TOPO-WMS'
      //   // 'format': 'image/png',
      //   // 'transparent': 'true',
      //   // 'attribution': "<a href='http://ows.terrestris.de/'>terrestris</a>",
      //   // 'info_format': 'text/html',
      //   // 'tiled': true
      // });
      // var wmsLayer = L.tileLayer.wms('/api/mapserver/tms/services/100wshiliangimg/MapServer?f=pjson', {
      //   f: 'pjson',
      //   layers: [
      //     {
      //       defaultVisibility: false,
      //       id: 1,
      //       maxScale: 0,
      //       minScale: 0,
      //       name: '100wshiliangimg',
      //       parentLayerId: 0,
      //       subLayerIds: null
      //     }
      //   ],
      //   // layers: 'cite:bou2_4p', // 需要加载的图层
      //   format: 'image/png' // 返回的数据格式
      //   // transparent: true
      //   // crs: L.CRS.EPSG4326
      // });
      // console.log('123', tmsLayer, wmsLayer)
      // tmsLayer.addTo(map);
      // console.log(map.getCenter());
      // map.addLayer(wmsLayer);
    },
    // 地图点击事件
    onMapClick(e) {
      var L = this.$L
      var popup = L.popup();
      popup
        .setLatLng(e.latlng)
        .setContent('You clicked the map at ' + e.latlng.toString())
        .openOn(this.map);
    }
  }
}
</script>
<style lang="scss" scoped>
#mapDiv {
  width: 800px;
  height: 500px;
}
</style>
