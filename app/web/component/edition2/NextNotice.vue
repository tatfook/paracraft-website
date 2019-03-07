<template>
  <div class="next-notice">
    <div class="next-notice-title">
      <img class="next-notice-title-image" src="@/asset/images/edition2/next_notice_title.png" alt="">
    </div>
    <div class="next-notice-content">
      下期我们将公布<span class="next-notice-stress">NPL代码节大赛第一批获奖作品名单</span>，并公开作品观看链接，让我们一起期待这场视觉盛宴
    </div>
  </div>
</template>

<style lang="scss" scoped>
.next-notice {
  text-align: center;
  color: #333;
  height: 410px;
  padding-top: 68px;
  box-sizing: border-box;
  background: url('../../asset/images/edition2/notice_bg.png') center bottom
    no-repeat #fff;
  &-title {
    margin-bottom: 53px;
    font-weight: bold;
  }
  &-content {
    color: #666;
  }
  &-stress {
    font-weight: bold;
    color: #333;
  }
}
</style>
<style lang="scss" scoped>
@media (max-width: 767px) {
  .next-notice {
    height: 185px;
    padding-top: 26px;
    background-image: url('../../asset/images/edition2/notice_bg_phone.png');
    &-title {
      margin-bottom: 25px;
      &-image {
        width: 230px;
      }
    }
    &-content {
      font-size: 13px;
      padding: 0 16px;
      line-height: 1.5;
    }
  }
}
</style>
