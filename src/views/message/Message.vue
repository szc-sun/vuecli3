<template>
  <div class="test">
   <div class="test-box">
     123456
     <i class="fa fa-user-circle" aria-hidden="true"></i>
   </div>
   <el-button plain>按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {

    }
  },
  mounted() {
    // console.log(this.$store.getters.test1)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .test{
    height:200px;
    width:80%;
    background:#ccc;
    .test-box{
      height:100px;
      width:50%;
      background:#d00
    }
  }
</style>
