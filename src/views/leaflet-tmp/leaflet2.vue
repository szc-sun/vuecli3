<template>
  <div class="Leaflet">
    Leaflet123
    <div id="map"></div>
  </div>
</template>
<script>
// import markerIcon from 'leaflet/dist/images/marker-icon.png'
// import layers from 'leaflet/dist/images/layers.png'
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
      const map = L.map('map', {
        center: L.latLng(23.140833538081456, 113.30564975738527),
        zoom: 16,
        maxZoom: 18
      })
      this.map = map
      // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      //   maxZoom: 18,
      //   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      // '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      // 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      //   id: 'mapbox/streets-v11'
      // }).addTo(map)
      L.tileLayer(
        'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
        {
          subdomains: ['1', '2', '3', '4'],
          attribution: '高德'
        }
      ).addTo(map)
      map.on('click', this.onMapClick)
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
#map {
  width: 800px;
  height: 500px;
}
</style>
