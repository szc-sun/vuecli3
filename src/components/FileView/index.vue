<template>
  <el-dialog
  class="file-view"
  title="文件预览"
  :visible.sync="FileViewData.show"
  width="70%"
  center>
    <div class="view-body">
      <embed v-if="FileViewData.type==='pdf'" class="pdfobject" :src="src" type="application/pdf">
      <iframe v-else id="iframe_view" :src="src" width="100%" height="100%" frameborder="1">
      </iframe>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'FileView',
  props: {
    FileViewData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    }
  },
  computed: {
    src() {
      return this.FileViewData.type === 'pdf' ? this.FileViewData.url : 'https://view.officeapps.live.com/op/view.aspx?src=' + this.FileViewData.url
    }
  },
  mounted() {
    console.log(this.FileViewData)
  },

  methods: {
  }
}
</script>
<style lang="scss" scoped>
.file-view ::v-deep{
  .el-dialog{
    height:70vh;
    display: flex;
    flex-direction: column;
    .el-dialog__body{
      flex:1;
      .view-body{
        height:100%;
        .pdfobject{
          height:100%;
          overflow: auto;
          width: 100%;
        }
      }
    }
  }
}
</style>
