<template>
  <div id="app">
    <MainPart/>
  <!-- <el-container class="app-box">
  <el-header>
    <Header></Header>
  </el-header>
  <el-container>
    <el-aside width="auto" style="height:100%">
      <NavMenu/>
    </el-aside>
    <el-container>
      <el-main>
        <router-view/>
      </el-main>
      
    </el-container>
  </el-container>
  <el-footer>
    <Footer/>
  </el-footer>
</el-container> -->
  <!-- <Header></Header> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
  </div>
</template>
<script>
import MainPart from '@/views/mainPart'
// import Footer from '@/components/footer'
// import NavMenu from '@/components/navmenu'
export default {
  name: 'App',
  components: {
    MainPart
  },
}
</script>

<style>

</style>
