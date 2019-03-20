<template>
  <div class="common-header">
    <el-menu :default-active="activeIndex" class="common-header-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="top"><img class="common-header-menu-logoimg" src="@/asset/images/logo.png" alt="paracraft"> <span class="common-header-menu-logo">Paracraft 创意空间</span></el-menu-item>
      <el-menu-item index="oursAdvantage">我们的优势</el-menu-item>
      <el-menu-item index="oursService">服务项目</el-menu-item>
      <el-menu-item index="price">价格</el-menu-item>
      <el-menu-item index="experience" class="pull-right">
        <el-button type="primary" class="common-header-menu-experience-btn">合作咨询</el-button>
      </el-menu-item>
    </el-menu>
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
  methods: {
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
  }
}
</script>
<style lang="scss">
.common-header {
  max-width: 1200px;
  margin: 0 auto;
  &-menu {
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
</style>


