import MainPart from '@/views/mainPart'
const maptalksRouter = {
  path: '/maptalks',
  component: MainPart,
  meta: {
    // roles: ['maptalks'],
    title: 'maptalks',
    icon: 'el-icon-setting'
  },
  children: [
    {
      path: 'maptalks1',
      name: 'maptalks1',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/maptalks/maptalks1.vue'),
      meta: {
        title: 'maptalks1',
        icon: 'el-icon-setting'
      }
    },
    {
      path: 'maptalks2',
      name: 'maptalks2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/maptalks/maptalks2.vue'),
      meta: {
        title: 'maptalks2',
        icon: 'el-icon-setting'
      }
    }
  ]
}
export default maptalksRouter
