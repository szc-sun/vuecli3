import MainPart from '@/views/mainPart'
const editor = {
  path: '/editor',
  component: MainPart,
  redirect: '/editor/vue-kindeditor',
  meta: {
    // roles: ['leaflet'],
    title: 'editor',
    icon: 'el-icon-setting'
  },
  children: [
    {
      path: 'vue-kindeditor',
      name: 'vue-kindeditor',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/editor/vue-kindeditor/index.vue'),
      meta: {
        title: 'vue-kindeditor',
        icon: 'el-icon-setting'
      }
    },
    {
      path: 'tinymce',
      name: 'tinymce',
      component: () => import(/* webpackChunkName: "about" */ '@/views/editor/tinymce/index.vue'),
      meta: {
        title: 'tinymce',
        icon: 'el-icon-setting'
      }
    }
  ]
}
export default editor
