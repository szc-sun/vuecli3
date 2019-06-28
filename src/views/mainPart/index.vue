<template>
	  <el-container class="app-box">
	  <el-header>
	    <Header></Header>
	  </el-header>
	  <el-container>
	    <el-aside width="auto" style="height:100%;box-shadow: 10px 5px 5px #ccc;">
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
	</el-container>
</template>
<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import NavMenu from '@/components/navmenu'
export default {
	name:'MainPart',
	components: {
	    Header,
	    Footer,
	    NavMenu
	 },
}
</script>