<template>
  <div class="Leaflet">
    Leaflet
    <div id="map"></div>
  </div>
</template>
<script>
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import redMarker from 'leaflet/dist/images/layers.png'
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
      var _this = this
      var L = this.$L
      this.map = L.map('map', {
        center: L.latLng(23.140833538081456, 113.30564975738527),
        zoom: 16,
        maxZoom: 18
      })
      L.tileLayer(
        'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
        {
          subdomains: ['1', '2', '3', '4'],
          attribution: '高德'
        }
      ).addTo(_this.map)

      var obj = [
        {
          icon: markerIcon,
          array: [
            { lat: 23.140833, lng: 113.305649 },
            { lat: 23.138604, lng: 113.306835 },
            { lat: 23.138535, lng: 113.305821 }
          ]
        },
        {
          icon: redMarker,
          array: [
            { lat: 23.140834, lng: 113.305319 },
            { lat: 23.138004, lng: 113.306865 },
            { lat: 23.138535, lng: 113.304931 }
          ]
        }
      ]
      var layers = this.makerSet(obj, _this)

      var myGroup = L.layerGroup(layers)
        .bindPopup('我是第个marker')
        .openPopup()
      this.map.addLayer(myGroup)
    },
    makerSet(obj, that) {
      var L = this.$L
      var layers = []
      for (let i = 0; i < obj.length; i++) {
        for (let j = 0; j < obj[i].array.length; j++) {
          var redIcon = L.icon({
            iconUrl: obj[i].icon,
            iconSize: [25, 41],
            iconAnchor: [13, 21]
          })
          var layer = new L.Marker([obj[i].array[j].lat, obj[i].array[j].lng], {
            icon: redIcon
          })
          layer
            .addTo(that.map)
            .bindPopup('我是第' + i + '个marker')
            .closePopup()
          layers.push(layer)
        }
      }
      return layers
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
