<template>
  <div class="edition1-page">
    <div class="times1">
      <div class="times1-banner">
        <div class="times1-banner-title">《创意时报》<span class="times1-banner-title-count">01</span></div>
        <div class="times1-banner-container">
          <h1 class="times1-banner-h1">学习游戏编程 <span>免费送哈奇VIP</span></h1>
          <div>
            <img src="@/asset/images/edition1/edition1-header-icon.png">
          </div>
          <a class="times1-banner-button" href="https://keepwork.com/l/student/center" target="_blank">进入课程中心</a>
        </div>
      </div>
      <div class="times1-advertising">
        <div class="times1-advertising-container">
          <div class="times1-advertising-title"><span class="times1-advertising-title-content">NPL代码节大赛公告</span></div>
          <div class="times1-advertising-content">
            NPL代码节大赛开启，欢迎随时投稿，优秀作品还会在我们下一期《创意时报》上展示，更有机会赢取哈奇装备！
          </div>
          <div class="times1-advertising-info">投稿邮箱：<span class="times1-advertising-info-email">support@paraengine.com</span></div>
        </div>
      </div>
    </div>

    <div class='times1-main-content'>
      <img class="hide-sm-and-up" src="@/asset/images/edition1/edition1-lesson-1.jpg">
      <img class="hide-sm-and-up" src="@/asset/images/edition1/edition1-lesson-2.jpg">
      <img class="hide-sm-only" src='@/asset/images/edition1/edition1-lesson-3.jpg'>
      <div class='times1-to-exchange'>
        去兑换
        <img src='@/asset/images/edition1/edition1-guide-icon.png'>
        <a class="hide-sm-only" href="https://keepwork.com/a/exchangeMall" target="_blank">https://keepwork.com/wiki/js/mod/knowledgeBean/index</a>
        <a class="hide-sm-and-up" href="//keepwork.com/wiki/js/mod/knowledgeBean/index" target="_blank">兑换中心</a>
      </div>
      <img class="hide-sm-only times1-img-title" src="@/asset/images/edition1/edition1-title-1.png">
      <img class="hide-sm-and-up times1-img-title" src="@/asset/images/edition1/edition1-title-2.png">
      <a target="_blank" href="https://keepwork.com/l/student/package/8">
        <img class="hide-sm-only" src="@/asset/images/edition1/animation-teaching-1.jpg">
        <img class="hide-sm-and-up" src="@/asset/images/edition1/animation-teaching-2.jpg">
      </a>
      <a target="_blank" href="https://keepwork.com/l/student/package/6">
        <img class="hide-sm-only" src="@/asset/images/edition1/code-1.jpg">
        <img class="hide-sm-and-up" src="@/asset/images/edition1/code-2.jpg">
      </a>
    </div>

    <div class="times1-footer">
      <h1 class="times1-footer-h1">
        还在等什么？现在就去 <span class="times1-footer-strength">学课程 / 赚知识豆 / 兑换哈奇装备</span>
        <a href="https://keepwork.com/l/student/center" target="_blank" class="times1-footer-button">进入课程中心</a>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Edition1-page'
}
</script>
<style lang="scss" scoped>
.edition1-page {
  margin: 0 auto;
  max-width: 1200px;
}
.hide-sm-and-up {
  display: none;
}
.fullscreen-template .el-main {
  background-color: #f6f6f6;
}
.times1 {
  background-color: #fff;
  margin-top: 25px;
  &-banner {
    max-width: 100%;
    margin: 0 auto;
    padding-left: 255px;
    height: 385px;
    background: #fff
      url('../../asset/images/edition1/edition1-background-1.png') left top
      no-repeat;
    position: relative;
    &-title {
      position: absolute;
      left: 0;
      top: 0;
      color: #fff;
      background-color: #0072ff;
      font-size: 18px;
      border-radius: 0 60px 45px 0;
      padding: 0 12px 0 4px;
      &-count {
        font-size: 30px;
        margin-left: 2px;
        font-style: italic;
      }
    }
    &-container {
      padding-top: 52px;
      & img {
        background-color: transparent;
        margin: 8px 0 8px -11px;
      }
    }
    &-h1 {
      font-size: 48px;
      color: #fff;
      margin: 0;
      border: none;
      padding: 0;
      & span {
        font-size: 32px;
        color: #fcff00;
        margin: 18px 0 32px 0;
        border: none;
        font-weight: normal;
        padding: 0;
      }
    }
    &-button {
      font-size: 18px;
      color: #279bf5;
      width: 145px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      display: inline-block;
      background-color: #fff;
      border-radius: 4px;
    }
  }
  &-advertising {
    margin: 0 36px;
    background-color: #f1f8fe;
    padding: 36px;
    &-container {
      border: 2px solid #279bf5;
      text-align: center;
      padding: 3px 15px 30px 15px;
    }
    &-title {
      position: relative;
      top: -20px;
    }
    &-title-content {
      padding: 0 30px;
      font-size: 20px;
      color: #279bf5;
      font-weight: bold;
      background-color: #f1f8fe;
    }
    &-content {
      font-size: 18px;
      color: #303133;
      margin-bottom: 16px;
    }
    &-info {
      font-size: 16px;
      color: #606266;
    }
    &-info-email {
      color: #279bf5;
    }
  }
  &-main-content {
    background-color: #fff;
    text-align: center;
  }
  &-main-content img {
    max-width: 100%;
  }

  &-to-exchange {
    margin-top: -80px;
    padding-bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-to-exchange img {
    margin: 0 8px 0 2px;
  }
  &-footer {
    padding: 0 36px 190px;
    background-color: #fff;
    &-h1 {
      font-size: 20px;
      color: #fff;
      margin: 0;
      padding: 20px 0;
      text-align: center;
      font-weight: normal;
      border: none;
      background: url('../../asset/images/edition1/edition1-background.jpg')
        left top no-repeat;
    }
    &-strength {
      font-size: 28px;
    }
    &-button {
      font-size: 18px;
      color: #ff6503;
      width: 143px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      display: inline-block;
      background-color: #fff;
      border-radius: 4px;
      margin-left: 30px;
    }
  }
}

@media (max-width: 768px) {
  .hide-sm-and-up {
    display: inline-block;
  }
  .hide-sm-only {
    display: none;
  }
  .md-page-viewer .toggle-sidebar-main-button {
    display: none;
  }
  .times1 {
    margin: 0;
  }
  .times1 .times1-banner {
    padding: 0 16px;
    height: 150px;
    margin-bottom: 10px;
    background-size: auto 92%;
    background-position-x: -44px;
  }
  .times1 .times1-banner-title {
    font-size: 14px;
  }
  .times1 .times1-banner-title-count {
    font-size: 24px;
  }
  .times1 .times1-banner-container {
    position: relative;
    padding-top: 48px;
  }
  .times1 .times1-banner-h1 {
    font-size: 22px;
  }
  .times1 .times1-banner-h1 span {
    font-size: 16px;
  }
  .times1 .times1-banner-container img {
    width: 150px;
    margin-left: -4px;
  }
  .times1 .times1-banner-button {
    position: absolute;
    right: 0;
    top: 54px;
    width: 80px;
    font-size: 12px;
    height: 28px;
    line-height: 28px;
  }

  .times1-advertising {
    margin: 0 10px;
    padding: 20px;
  }
  .times1-advertising-container {
    padding: 0 15px 20px 15px;
    text-align: left;
  }
  .times1-advertising-title {
    text-align: center;
  }
  .times1-advertising-title-content {
    padding: 0 16px;
  }
  .times1-advertising-content {
    font-size: 14px;
    margin: -12px 0 8px;
  }
  .times1-advertising-info {
    font-size: 12px;
  }

  .times1-main-content {
    margin: 0;
  }

  .times1-to-exchange {
    margin: 0;
    padding: 0;
  }

  .times1-img-title {
    margin-top: 30px;
  }

  .times1-footer {
    margin: 0;
    padding: 0;
  }
  .times1-footer .times1-footer-h1 {
    font-size: 16px;
    background-size: auto 100%;
    padding: 12px 0;
  }
  .times1-footer .times1-footer-strength {
    font-size: 20px;
    display: inline-block;
  }
  .times1-footer .times1-footer-button {
    font-size: 14px;
    margin-left: 0;
    height: 36px;
    line-height: 36px;
    margin-top: 16px;
    width: 120px;
  }
}

@media (min-width: 520px) and (max-width: 768px) {
  .times1 .times1-banner {
    height: 220px;
  }
  .times1 .times1-banner-h1 {
    font-size: 32px;
  }
  .times1 .times1-banner-container img {
    width: 220px;
  }
  .times1 .times1-banner-button {
    width: 145px;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
  }
}
</style>


