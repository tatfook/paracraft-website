<template>
  <div class="common-header">
    <el-menu :default-active="activeIndex" class="common-header-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="top" class="common-header-menu-first"><img class="common-header-menu-logoimg" src="@/asset/images/logo.png" alt="paracraft"> <span class="common-header-menu-logo">Paracraft创意空间</span></el-menu-item>
      <el-menu-item index="oursAdvantage" class="common-header-menu-hidden-item">我们的优势</el-menu-item>
      <el-menu-item index="oursService" class="common-header-menu-hidden-item">服务项目</el-menu-item>
      <el-menu-item index="price" class="common-header-menu-hidden-item">价格</el-menu-item>
      <el-menu-item index="experience" class="pull-right">
        <el-button type="primary" class="common-header-menu-experience-btn">合作咨询</el-button>
      </el-menu-item>
    </el-menu>
    <div class="common-header-phone">
      <span class="common-header-phone-item" @click="handleSelect('oursAdvantage')">我们的优势</span>
      <span class="common-header-phone-item" @click="handleSelect('oursService')">服务项目</span>
      <span class="common-header-phone-item" @click="handleSelect('price')">价格</span>
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
    currentPageYOffset() {
      if (window.pageYOffset > 700 && window.pageYOffset < 2400) {
        this.$nextTick(() => {
          this.activeIndex = 'oursAdvantage'
        })
      } else if (window.pageYOffset > 2400 && window.pageYOffset < 3200) {
        this.$nextTick(() => {
          this.activeIndex = 'oursService'
        })
      } else if (window.pageYOffset > 6500 && window.pageYOffset < 8000) {
        this.$nextTick(() => {
          this.activeIndex = 'price'
        })
      } else {
        this.$nextTick(() => {
          this.activeIndex = 'experience'
        })
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
          }
          this.$nextTick(() => {
            let theId = document.getElementById(key)
            scrollIntoView(theId, {
              scrollMode: 'if-needed',
              behavior: 'smooth',
              block: 'start'
            })
          })
          break
        case 'experience':
          this.showGatherInfo()
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
    &-phone {
      background: rgb(12, 49, 119);
      display: block;
      color: #fff;
      opacity: 0.7;
      display: flex;
      justify-content: space-around;
      &-item {
        line-height: 38px;
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
