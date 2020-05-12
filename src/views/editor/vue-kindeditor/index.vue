<template>
  <div class="vue-kindeditor">
    <div class="kindeditor1">
      <div class="left">
        <h2>vue-kindeditor</h2>
      <editor
        id="editor_id"
        width="670px"
        height="200px"
        :content="content"
        pluginsPath="/static/kindeditor/plugins/"
        @on-content-change="onContentChange"
        :loadStyleMode="true"></editor>
      </div>
      <div class="right">
        <h2>内容</h2>
        <div v-html="content"></div>
        <div>{{content}}</div>
      </div>
    </div>
    <div class="kindeditor2">
      <Kind-editor  ref="kindeditor" :content="content2" @input="getContent"></Kind-editor>
      <div>
        {{content2}}
      </div>
    </div>
  </div>
</template>

<script>
import KindEditor from '@/components/Kindeditor';
export default {
  components: {
    KindEditor
  },
  data() {
    return {
      content: '',
      // html: '<span style="font-family:SimSun;">啊啊啊啊aaaa</span>',
      content2: '<h1> <span style="font-family:Microsoft YaHei;">啊啊</span> </h1>'
    }
  },
  methods: {
    onContentChange(val) {
      this.content = val;
    },
    // 编辑器2
    // 获取编辑器内容
    getContent(content2) {
      this.content2 = content2
    },
    // 编辑器内容转换成在线url
    async getcontent2Url() {
      try {
        const htmlUrl = await this.$refs.kindeditor.content2Url()
        console.log(htmlUrl)
        return htmlUrl
      } catch (error) {
        console.log(error)
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.vue-kindeditor{
  .kindeditor{
    display: flex;
    .right{
      flex:1
    }
  }
}
</style>
