<template>
  <div class="Leaflet">
    Leaflet123
    <div id="map"></div>
  </div>
</template>
<script>
import markerIcon from 'leaflet/dist/images/marker-icon.png'
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

      var markerArray = [
        {
          icon: markerIcon,
          title: '标记类别1',
          array: [
            { lat: 23.140833, lng: 113.305649 },
            { lat: 23.138604, lng: 113.306835 },
            { lat: 23.138535, lng: 113.305821 }
          ]
        }
        // {
        //   icon: redMarker,
        //   title: '标记类别2',
        //   array: [
        //     { lat: 23.140834, lng: 113.305319 },
        //     { lat: 23.138004, lng: 113.306865 },
        //     { lat: 23.138535, lng: 113.304931 }
        //   ]
        // }
      ]
      this.markerSet(markerArray, map)
      var circle = [23.140833, 113.315319]
      this.circleSet(circle, map)
      var polygon = [
        [23.140833, 113.315319],
        [23.141833, 113.315319],
        [23.145833, 113.335319],
        [23.145833, 113.345319]
      ]
      this.polygonSet(polygon, map)
      map.on('click', this.onMapClick)
    },
    // 标记 marker
    markerSet(arr, map) {
      var L = this.$L
      arr.map((val, index, arr) => {
        val.array.map((val2, index2, arr2) => {
          var icon = L.icon({
            iconUrl: val.icon,
            iconSize: [25, 41],
            iconAnchor: [13, 21]
          })
          L.marker([val2.lat, val2.lng], {
            icon: icon
          }).addTo(map)
            .bindPopup(val.title + JSON.stringify([val2.lat, val2.lng]) + '<br /><b>Hello world!</b><br />I am a popup.').openPopup();
        })
      })
    },
    // 圆形 circle
    circleSet(circle, map) {
      var L = this.$L
      L.circle(circle, 500, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
      }).addTo(map).bindPopup('I am a circle.');
    },
    // 多边形 polygon
    polygonSet(polygon, map) {
      var L = this.$L
      L.polygon(polygon).addTo(map).bindPopup('I am a polygon.');
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
