import MainPart from '@/views/mainPart'
const leafletRouter = {
  path: '/leaflet',
  component: MainPart,
  meta: {
    // roles: ['leaflet'],
    title: 'leaflet',
    icon: 'el-icon-setting'
  },
  children: [
    {
      path: 'leaflet0',
      name: 'leaflet0',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/leaflet-tmp/leaflet0.vue'),
      meta: {
        title: 'leaflet0',
        icon: 'el-icon-setting'
      }
    },
    {
      path: 'leaflet1',
      name: 'leaflet1',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/leaflet-tmp/leaflet1.vue'),
      meta: {
        title: 'leaflet1',
        icon: 'el-icon-setting'
      }
    },
    {
      path: 'leaflet2',
      name: 'leaflet2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/leaflet-tmp/leaflet2.vue'),
      meta: {
        title: 'leaflet2',
        icon: 'el-icon-setting'
      }
    }
  ]
}
export default leafletRouter
