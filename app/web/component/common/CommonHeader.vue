<template>
  <div class="common-header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="top"><img src="@/asset/images/paracraft.png" alt="paracraft">Paracraft 创意空间</el-menu-item>
      <el-menu-item index="oursAdvantage">我们的优势</el-menu-item>
      <el-menu-item index="oursService">我们的服务</el-menu-item>
      <el-menu-item index="price">价格</el-menu-item>
      <el-menu-item index="5" class="pull-right">
        <el-button type="primary" @click="ShowGatherInfo">免费体验</el-button>
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
    ShowGatherInfo() {
      this.showGatherInfoDialog = true
    },
    closeGatherInfoDialog() {
      this.showGatherInfoDialog = false
    },
    handleSelect(key, keyPath){
      console.log(key)
      console.log(keyPath)
      // TODO
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
  .el-menu--horizontal.el-menu {
    background: rgb(5, 16, 41);
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
        background: rgb(5, 16, 41);
      }
      &.is-active {
        background: rgb(5, 16, 41);
      }
    }
  }
  .pull-right {
    float: right !important;
  }
}
</style>


