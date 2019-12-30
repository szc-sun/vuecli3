<template>
  <div class="maptalks">
    maptalks1
    <div id="map" class="container"></div>
  </div>
</template>
<script>
import 'maptalks/dist/maptalks.css';
import * as maptalks from 'maptalks';
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.showArc()
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
      var arcUrl = 'http://203.207.224.108:2050/mapserver/tms/services/pjnjddqw/MapServer';
      this.$nextTick(() => {
        maptalks.SpatialReference.loadArcgis(arcUrl + '?f=pjson', function(err, conf) {
          if (err) {
            throw new Error(err);
          }
          var ref = conf.spatialReference;
          ref.projection = 'EPSG:4326';

          var map = new maptalks.Map('map', {
            center: [121, 0],
            zoom: 1,
            minZoom: 1,
            maxZoom: 16,
            spatialReference: ref,
            baseLayer: new maptalks.TileLayer('base', {
              'tileSystem': conf.tileSystem,
              'tileSize': conf.tileSize, // [512, 512]
              'urlTemplate': arcUrl + '/tile/{z}/{y}/{x}',
              'attribution': '&copy; <a target="_blank" href="' + arcUrl + '"">ArcGIS</a>'
            })
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
  height:100%;
}
.container{
  position: relative;
  width: 800px;
  height: 500px;
}
</style>
