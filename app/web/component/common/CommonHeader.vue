<template>
  <div class="common-header">
    <el-menu mode="horizontal">
      <el-menu-item><img src="@/asset/images/paracraft.png" alt="paracraft">Paracraft 创意空间</el-menu-item>
      <el-menu-item>我们的优势</el-menu-item>
      <el-menu-item>服务项目</el-menu-item>
      <el-menu-item>价格</el-menu-item>
      <el-menu-item class="pull-right">
        <el-button type="primary">免费体验</el-button>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'CommonHeader'
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
      &:hover {
        background: rgb(5, 16, 41);
      }
    }
  }
  .pull-right {
    float: right !important;
  }
}
</style>


