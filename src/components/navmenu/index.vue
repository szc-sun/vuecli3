<template>
	<div style="height:100%">

		<div style="border-bottom:0.5px solid #ccc;height:50px;line-height:50px;text-align:center">
			<i :class="{'el-icon-s-unfold':isCollapse,'el-icon-s-fold':!isCollapse}" @click="changeIsCollapse" style="cursor:pointer"></i>
		</div>
		<div  class="nav-box">
			<Sidebar :isCollapse="isCollapse"/>
		</div>

	</div>
</template>

<style>
.nav-box{
	height:calc(100% - 52px);
	overflow-y: scroll;
	/*overflow-x:hidden;*/
}
.nav-box::-webkit-scrollbar{
	height:6px;
	width:5px;
}
.nav-box::-webkit-scrollbar-thumb{
	border-radius:10px;
	box-shadow:inset 0 0 6px #ccc;
	-webkit-box-shadow:inset 0 0 6px #ccc;
	background-color: rgba(144,147,153,.5);
}

</style>

<script>
import Sidebar from './Sidebar'
export default {
  name: 'NavMenu',
  components: { Sidebar },
  data() {
    return {
      isCollapse: true,
      menudata: [{
        id: '1',
        title: '首页',
        icon: 'el-icon-location',
        children: [{
          id: '11',
          icon: 'el-icon-menu',
          title: '选项一'
        }, {
          id: '12',
          icon: 'el-icon-menu',
          title: '选项二',

          children: [{
            id: '111',
            icon: 'el-icon-menu',
            title: '选项三'
          }, {
            id: '121',
            icon: 'el-icon-menu',
            title: '选项二'
          }
          ]

        }
        ] }, {
        id: '2',
        icon: 'el-icon-menu',
        title: '导航二'
      }, {
        id: '3',
        icon: 'el-icon-document',
        title: '导航三'
      }, {
        id: '4',
        icon: 'el-icon-setting',
        title: '导航四'
      }
      ]
    }
  },
  watch: {
    isCollapse: function(val) {
      console.log(val)
    }
  },
  mounted() {
    console.log(this.$router)
  },
  methods: {
    changeIsCollapse() {
      this.isCollapse = !this.isCollapse
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
