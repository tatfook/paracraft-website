<template>
  <el-container id='app' class="index-page-container">
    <el-header>
      <common-header></common-header>
    </el-header>
    <el-main class="index-page-container-main">
      <router-view></router-view>
    </el-main>
    <el-footer>
      <common-footer></common-footer>
    </el-footer>
  </el-container>
</template>

<script>
import Vue from 'vue'
import router from './home.router'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import CommonHeader from '@/component/common/CommonHeader'
import CommonFooter from '@/component/common/CommonFooter'

Vue.use(ElementUI)

export default {
  name: "App",
  router,
  components: {
    CommonHeader,
    CommonFooter
  }
};
</script>
<style lang="scss">
body{
  display: flex;
  min-height: 100vh;
  margin: 0;
}
.index-page-container{
  min-height: 100%;
}
</style>

