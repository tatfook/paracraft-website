<template>
  <div class="code-banner">
    <img class="code-banner-fake-bg hidden-xs-only" src="@/asset/images/edition2/NPLCodeBanner.jpg" alt="">
    <img class="code-banner-fake-bg hidden-sm-and-up" src="@/asset/images/edition2/NPLCodeBanner_phone.jpg" alt="">
    <div class="code-banner-operate">
      <a href="//keepwork.com/ranking" target="_blank" class="code-banner-fake-button">
        <img class="code-banner-trophy-icon" src="@/asset/images/edition2/trophy.png" alt="">
        进入作品排行榜
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.code-banner {
  position: relative;
  text-align: center;
  &-fake-bg {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  &-fake-button {
    text-decoration: none;
    border: 2px solid;
    color: #fff;
    font-size: 26px;
    font-weight: bold;
    height: 68px;
    display: inline-block;
    line-height: 68px;
    padding: 0 50px;
    &:hover {
      color: #00e4ff;
    }
  }
  &-trophy-icon {
    vertical-align: middle;
    margin-right: 4px;
  }
  &-operate {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    top: 20vw;
  }
}
</style>
<style lang="scss" scoped>
@media (max-width: 767px) {
  .code-banner {
    &-operate {
      top: 29vw;
    }
    &-fake-button {
      font-size: 12px;
      height: 31px;
      line-height: 31px;
      padding: 0 12px;
    }
    &-trophy-icon {
      width: 13px;
    }
  }
}
</style>
