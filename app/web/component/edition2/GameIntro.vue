<template>
  <div class="game-intro">
    <div class="game-intro-title"><img class="game-intro-title-img" src="@/asset/images/edition2/intro_title.png" alt=""></div>
    <div class="game-intro-content">
      <p class="game-intro-item">1、NPL 代码节是由 Keepwork 独家举办的一个持续性的 Paracraft 作品大赛，我们会定期为优秀作品颁奖；</p>
      <p class="game-intro-item">2、Keepwork 现已推出作品排行系统，诚邀广大用户对作品进行线上评分；</p>
      <p class="game-intro-item">3、本次参赛的作品有热门游戏、炫酷动画等等，快来为你心仪的作品正名吧！</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-intro {
  text-align: center;
  color: #333;
  padding: 65px 0 140px;
  background: url('../../asset/images/edition2/intro_bg.jpg') center no-repeat;
  background-size: cover;
  &-title {
    margin-bottom: 53px;
    font-weight: bold;
  }
  &-item {
    font-size: 16px;
    margin: 0;
    line-height: 1.9em;
  }
}
</style>
<style lang="scss" scoped>
@media (max-width: 767px) {
  .game-intro {
    padding: 24px 24px 35px;
    background-image: url('../../asset/images/edition2/intro_bg_phone.jpg');
    &-title {
      margin-bottom: 24px;
      &-img {
        width: 230px;
      }
    }
    &-item {
      font-size: 12px;
    }
  }
}
</style>
