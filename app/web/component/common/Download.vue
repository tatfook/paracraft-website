<template>
  <div class="download">
    <div class="download-intro">
      <h3 class="download-intro-title">免费的3D可视化编程教学工具</h3>
      <p class="download-intro-text">7岁以上用户可以用Paracraft创作3D动画和电影，学习和编写计算机程序，支持积木式编程和代码编程一键切换，界面操作简单，老师和学生都能快速上手。</p>
    </div>
    <div class="download-versions">
      <div class="download-versions-part">
        <h5 class="download-versions-part-title">桌面版</h5>
        <div class="download-versions-part-img"><img src="@/asset/images/desk.png" alt="desk"></div>
        <el-button>App Store下载</el-button>
      </div>
      <div class="download-versions-part">
        <h5 class="download-versions-part-title">Mac版</h5>
        <div class="download-versions-part-img"><img src="@/asset/images/mac.png" alt="mac"></div>
        <el-button class="download-versions-part-btn"><a href="https://itunes.apple.com/cn/app/paracraft/id1422406070">App Store下载</a></el-button>
        <el-button>直接下载</el-button>
      </div>
      <div class="download-versions-part">
        <h5 class="download-versions-part-title">Android版</h5>
        <div class="download-versions-part-img"><img class="download-versions-part-img-android" src="@/asset/images/Android.png" alt="Android"><img src="@/asset/images/Android_2.png" alt="Android"></div>
        <el-button>下载安卓手机APK安装包</el-button>
      </div>
    </div>
    <div class="download-pic">
      <img src="@/asset/images/adjust.jpg" alt="">
    </div>
  </div>
</template>
<style lang="scss">
.download {
  max-width: 1200px;
  margin: 0 auto;
  &-intro {
    text-align: center;
    &-title {
      font-size: 40px;
      color: #333;
      line-height: 40px;
      font-weight: normal;
      margin-top: 100px;
    }
    &-text {
      max-width: 1084px;
      font-size: 20px;
      color: #666;
      line-height: 39px;
    }
  }
  &-versions {
    text-align: center;
    display: flex;
    &-part {
      flex: 1;
      &-title {
        font-size: 18px;
      }
      &-img {
        margin: 40px 0 48px;
        &-android {
          margin-right: 16px;
        }
      }
      &-btn {
        padding: 0;
        a {
          text-decoration: none;
          color: #666;
          display: block;
          height: 40px;
          line-height: 40px;
          padding: 0 10px;
        }
      }
    }
  }
  &-pic {
    text-align: center;
    margin: 143px 0;
  }
}
</style>

