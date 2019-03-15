<template>
  <div class="company-profile">
    <div class="company-profile-banner">
      <div class="company-profile-banner-center">
        <div class="company-profile-banner-center-text">
          公司简介
        </div>
      </div>
    </div>
    <div class="company-profile-intro">
      <p>大富网络技术有限公司是上市公司大富科技（300134）旗下的子公司，一家探索面向个人的3D设计，人工智能与未来教育的软件公司。</p>
      <p>我们是由一支专业的技术开发团队组成，专注于ParaEngine引擎和NPL语言的开发，我们有原创的NPL脚本语言及MCML标记语言，分布式的3D游戏引擎，22项软件著作权及PCT国际专利，编写代码超过200万行，拥有经过多年自主研发的青少年编程教学工具——Paracraft，有自己的知识产权。Paracraft融入了我们几十年积累下来的编程体验和对软件编程的理解，我们开放了自主开发的游戏引擎和相关生态软件，打造成一个自主学习的平台（即Paracraft+KeepWork），希望能携手学校和教育机构一起培养下一代的优秀的程序员，也帮助更广大的孩子们学会自主学习的方法。
      </p>
    </div>
  </div>
</template>
<style lang="scss">
.company-profile {
  &-banner {
    background: linear-gradient(to right, #2599e7, #61a3fb);
    margin-bottom: 70px;
    &-center {
      background: url(../asset/images/简介.jpg) top center no-repeat;
      min-height: 336px;
      &-text {
        font-size: 48px;
        color: #ffffff;
        max-width: 1200px;
        margin: 0 auto;
        padding-left: 180px;
        line-height: 330px;
      }
    }
  }
  &-intro {
    max-width: 1200px;
    margin: 0 auto 245px;
    font-size: 16px;
    color: #666;
    line-height: 32px;
  }
}
</style>

