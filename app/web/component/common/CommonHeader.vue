<template>
  <div class="common-header">
    <el-menu :default-active="activeIndex" class="common-header-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="top" class="common-header-menu-first"><img class="common-header-menu-logoimg" src="@/asset/images/logo.png" alt="paracraft"> <span class="common-header-menu-logo">Paracraft创意空间</span></el-menu-item>
      <el-menu-item index="oursAdvantage" class="common-header-menu-hidden-item">我们的优势</el-menu-item>
      <el-menu-item index="oursService" class="common-header-menu-hidden-item">服务项目</el-menu-item>
      <el-menu-item index="price" class="common-header-menu-hidden-item">价格</el-menu-item>
      <el-menu-item index="experience" class="pull-right cellphone-hidden">
        <el-button type="primary" class="common-header-menu-experience-btn">合作咨询</el-button>
      </el-menu-item>
      <el-menu-item index="download" class="pull-right common-header-menu-download-item cellphone-hidden">
        <el-button type="primary" class="common-header-menu-download-btn">下载Paracraft</el-button>
      </el-menu-item>
      <el-menu-item index="cellphone" class="pull-right cellphone-menu">
        <div class="cellphone-button-wrap">
          <span @click="handleSelect('download')">下载</span>
          <span>|</span>
          <span @click="handleSelect('experience')">合作咨询</span>
        </div>
      </el-menu-item>
    </el-menu>
    <div class="common-header-phone">
      <span :class="['common-header-phone-item', { 'acitve':  activeIndex === 'oursAdvantage' }]" @click="handleSelect('oursAdvantage')">我们的优势</span>
      <span :class="['common-header-phone-item', { 'acitve':  activeIndex === 'oursService' }]" @click="handleSelect('oursService')">服务项目</span>
      <span :class="['common-header-phone-item', { 'acitve' : activeIndex==='price' }]" @click="handleSelect('price')">价格</span>
    </div>
    <gather-info-dialog :showGatherInfoDialog="showGatherInfoDialog" @close="closeGatherInfoDialog"></gather-info-dialog>
  </div>
</template>
<script>
import GatherInfoDialog from '@/component/common/GatherInfoDialog'
import scrollIntoView from 'scroll-into-view-if-needed'

export default {
  name: 'CommonHeader',
  data() {
    return {
      showGatherInfoDialog: false,
      activeIndex: '1'
    }
  },
  watch: {},
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    toDownloadPage() {
      this.$router.push({
        path: '/download'
      })
    },
    currentPageYOffset() {
      if (this.$route.name !== 'HomePage') return
      const oursAdvantageEle = document.querySelector('#oursAdvantage')
      const oursServiceEle = document.querySelector('#oursService')
      const priceEle = document.querySelector('#price')

      const oursAdvantageRect = oursAdvantageEle.getBoundingClientRect()
      const oursServiceRect = oursServiceEle.getBoundingClientRect()
      const priceRect = priceEle.getBoundingClientRect()
      const OFFSET = 200
      if (
        -(oursAdvantageRect.height - OFFSET) < oursAdvantageRect.top &&
        oursAdvantageRect.top < OFFSET
      ) {
        this.activeIndex = 'oursAdvantage'
      } else if (
        -(oursServiceRect.height - OFFSET) < oursServiceRect.top &&
        oursServiceRect.top < OFFSET
      ) {
        this.activeIndex = 'oursService'
      } else if (
        -(priceRect.height - OFFSET) < priceRect.top &&
        priceRect.top < OFFSET
      ) {
        this.activeIndex = 'price'
      } else {
        this.activeIndex = 'experience'
      }
    },
    showGatherInfo() {
      this.showGatherInfoDialog = true
    },
    closeGatherInfoDialog() {
      this.showGatherInfoDialog = false
    },
    handleSelect(key, keyPath) {
      switch (key) {
        case 'top':
        case 'oursAdvantage':
        case 'oursService':
        case 'price':
          if (this.$route.name != 'HomePage') {
            this.$router.push('/')
            setTimeout(() => {
              let theId = document.getElementById(key)
              scrollIntoView(theId, {
                scrollMode: 'if-needed',
                behavior: 'smooth',
                block: 'start'
              })
            }, 1000)
            return
          }
          let theId = document.getElementById(key)
          scrollIntoView(theId, {
            scrollMode: 'if-needed',
            behavior: 'smooth',
            block: 'start'
          })
          break
        case 'experience':
          this.showGatherInfo()
          break
        case 'download':
          this.toDownloadPage()
          break
        default:
          break
      }
    }
  },
  components: {
    GatherInfoDialog
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
.common-header {
  max-width: 1200px;
  margin: 0 auto;
  .cellphone-menu {
    display: none;
  }
  &-phone {
    display: none;
  }
  .el-menu--horizontal.el-menu .el-menu-item.is-active {
    color: #3c93ff;
  }
  &-menu {
    &.el-menu--horizontal > .el-menu-item.is-active {
      border-color: transparent;
      color: #3c93ff;
    }
    &.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus {
      background: none;
    }
    &-first {
      padding-right: 80px;
    }
    &-hidden-item {
      padding: 0 35px;
    }
    &-logoimg {
      width: 41px;
    }
    &-logo {
      font-size: 20px;
      margin-left: 16px;
    }
    &-download-item {
      padding-right: 2px;
    }
    &-download-btn {
      border-radius: 20px;
      font-size: 14px;
      color: #40b0ff;
      border: 1px solid;
      background-color: transparent;
      &:active,
      &:focus {
        color: #40b0ff;
        background-color: transparent;
      }
    }
    &-experience-btn {
      border-radius: 20px;
      font-size: 14px;
      border: none;
      background: linear-gradient(
        to right,
        #417dff 0%,
        #3c93ff 53%,
        #36a9ff 100%
      );
      &:hover {
        background: linear-gradient(
          90deg,
          #588af7 0%,
          #4485d4 53%,
          #0e7ccf 100%
        );
      }
    }
  }
  .el-menu--horizontal.el-menu {
    background: rgb(5, 14, 38);
    min-height: 82px;
    border: none;
    .el-menu-item {
      height: 82px;
      line-height: 82px;
      color: #fff;
      font-size: 14px;
      &:hover {
        color: #3c93ff;
      }
      a {
        text-decoration: none;
      }
      &:hover {
        background: rgb(5, 14, 38);
      }
      &.is-active {
        background: rgb(5, 14, 38);
      }
    }
  }
  .pull-right {
    float: right !important;
  }
}
@media screen and (max-width: 769px) {
  .common-header {
    .cellphone-hidden {
      display: none;
    }
    .cellphone-menu.el-menu-item {
      &:hover {
        background: none;
      }
      display: flex;
      justify-content: center;
      align-items: center;
      .cellphone-button-wrap {
        color: #40b5ff;
        width: 110px;
        height: 28px;
        padding: 0 4px;
        line-height: 30px;
        background: #112f54;
        border-radius: 30px;
        display: flex;
        justify-content: space-around;
      }
    }
    &-phone {
      background: rgb(12, 49, 119);
      color: #acafb8;
      display: flex;
      justify-content: space-around;
      &-item {
        line-height: 38px;
        &.acitve {
          color: #fff;
          border-bottom: 2px solid #409eff;
        }
      }
    }
    &-menu {
      &-first {
        padding-right: 0;
      }
      &-hidden-item {
        display: none;
      }
      &-logo {
        font-size: 15px;
        margin-left: 0;
      }
      &-logoimg {
        width: 32px;
      }
    }
    .el-menu--horizontal.el-menu {
      min-height: 40px;
      .el-menu-item {
        height: 60px;
        line-height: 60px;
      }
    }
  }
}
@media screen and (max-width: 376px) {
  .common-header {
    &-menu {
      &-first {
        padding: 0 0 0 10px;
      }
      .pull-right {
        padding: 0 10px 0 0;
      }
    }
  }
}
</style>
