<template>
  <div class="vue-tinymce">
    <div class="left">
      <h2>富文本编辑器tinymce</h2>
      <tinymce-text id="tinymce" @release="release" style="color:#333"></tinymce-text>
    </div>
    <div class="right">
      <h2>内容</h2>
      <div v-html="content"></div>
      <div>{{content}}</div>
    </div>
  </div>
</template>

<script>
import TinymceText from '@/components/tinymce/TinymceText'
export default {
  components: {
    TinymceText
  },
  data() {
    return {
      content: ''
    }
  },
  methods: {
    release(content) {
      this.content = content
      // console.log(content)
    }
  }
}
</script>
<style lang="scss" scoped>
.vue-tinymce{
    display: flex;
    .left{
      width:60%;
    }
    .right{
      flex:1
    }
}
</style>
