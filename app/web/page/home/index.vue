<template>
  <el-container id='app' class="index-page-container">
    <el-header class="index-page-container-header" ref="header" v-if="hiddenHeaderAndFooter">
      <common-header></common-header>
    </el-header>
    <el-main class="index-page-container-main">
      <router-view></router-view>
    </el-main>
    <el-footer class="index-page-container-footer" v-if="hiddenHeaderAndFooter">
      <common-footer></common-footer>
    </el-footer>
  </el-container>
</template>

<script>
import Vue from 'vue'
import router from './home.router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import CommonHeader from '@/component/common/CommonHeader'
import CommonFooter from '@/component/common/CommonFooter'

Vue.use(ElementUI)

export default {
  name: 'App',
  router,
  mounted() {
    // console.log('this.route', this.$route)
  },
  computed: {
    hiddenHeaderAndFooter() {
      return this.$route.name === 'EmailContent' ? false : true
    }
  },
  components: {
    CommonHeader,
    CommonFooter
  },

  methods: {
    // currentPageYOffset() {
    //   if (window.pageYOffset > 900 && window.pageYOffset < 3900) {
    //     this.$nextTick(() => {
    //       this.$refs['header'].$el.style.boxShadow = '0 0 10px 1px #333'
    //     })
    //   } else if (window.pageYOffset > 5400 && window.pageYOffset) {
    //     this.$nextTick(() => {
    //       this.$refs['header'].$el.style.boxShadow = '0 0 10px 1px black'
    //     })
    //   } else {
    //     this.$nextTick(() => {
          // this.$refs['header'].$el.style.boxShadow = '0 0 10px 1px #fff'
    //     })
    //   }
    // }
  },
  created() {
    window.addEventListener('scroll', _.debounce(this.currentPageYOffset, 80))
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.currentPageYOffset)
  }
}
</script>
<style lang="scss">
body {
  display: flex;
  min-height: 100vh;
  margin: 0;
}
.index-page-container {
  min-height: 100%;
  &-main {
    padding: 0;
    padding-top: 82px;
  }
  &-header.el-header {
    padding: 0;
    height: auto !important;
    background: rgb(5, 16, 41);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 99;
    box-shadow: 0 0 7px 1px #333;
  }
  &-footer.el-footer {
    padding: 0;
    height: auto !important;
    background-color: #282828;
  }
}
</style>

