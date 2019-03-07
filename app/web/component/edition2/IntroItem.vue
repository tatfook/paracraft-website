<template>
  <div class="intro-item">
    <div class="intro-item-container">
      <div class="intro-item-title">如何参加NPL代码节</div>
      <div class="intro-item-steps">
        <div class="intro-item-steps-item">分享作品到keepwork</div>
        <img class="intro-item-steps-arrow" src="@/asset/images/edition2/step_arrow.png" alt="">
        <div class="intro-item-steps-item">进入NPL大赛官网报名</div>
        <img class="intro-item-steps-arrow" src="@/asset/images/edition2/step_arrow.png" alt="">
        <div class="intro-item-steps-item">报名成功</div>
      </div>
      <a class="intro-item-apply" href="//keepwork.com/paraworld/NPL/index" target="_blank">查看大赛详情</a>
    </div>
    <div class="intro-item-container intro-item-rules">
      <div class="intro-item-title">评分规则</div>
      <ul class="intro-item-rules-content">
        <li class="intro-item-rules-item">所有<span class="intro-item-rules-strss">实名用户</span>均可参与评分，每个用户对同一个作品只有一次评分机会，且不可更改。</li>
        <li class="intro-item-rules-item">根据作品获得的用户评分，计算每个作品的最终得分。</li>
        <li class="intro-item-rules-item">最终得分采用百分制，最高100分，最低10分。</li>
      </ul>
    </div>
    <grade-flow class="intro-item-container"></grade-flow>
  </div>
</template>

<script>
import GradeFlow from './GradeFlow'
export default {
  components: {
    GradeFlow
  }
}
</script>


<style lang="scss" scoped>
.intro-item {
  text-align: center;
  background-color: #f9f9f9;
  &-container {
    width: 1080px;
    max-width: 100%;
    margin: 0 auto 42px;
    background-color: #fff;
    border-radius: 8px;
    padding: 40px 0 45px;
    position: relative;
    &:after {
      content: '';
      height: 10px;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: transparent;
      background-image: repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 4px,
        #bebebe 0px,
        #bebebe 6px
      );
    }
  }
  &-title {
    font-size: 22px;
    color: #4088ff;
  }
  &-steps {
    margin: 50px 0 60px;
    &-item {
      border: 2px solid #3a89ff;
      background-color: #61a0ff;
      color: #fff;
      display: inline-block;
      width: 200px;
      height: 44px;
      line-height: 44px;
      border-radius: 44px;
    }
    &-arrow {
      margin: 0 36px;
      vertical-align: middle;
    }
  }
  &-apply {
    width: 163px;
    height: 42px;
    line-height: 42px;
    border: 2px solid #2b7aff;
    text-align: center;
    margin: 0 auto;
    color: #2b7aff;
    font-size: 14px;
    display: inline-block;
    text-decoration: none;
    &:hover {
      background-color: #2a7aff;
      color: #fff;
    }
  }
  &-rules {
    padding: 40px 60px;
    box-sizing: border-box;
    &-content {
      list-style: none;
      text-align: left;
      padding: 0 0 0 25px;
      margin: 42px 0 0 0;
    }
    &-item {
      font-size: 16px;
      color: #333;
      margin-bottom: 28px;
      position: relative;
      &::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: #3b5bed;
        position: absolute;
        left: -25px;
        top: 8px;
      }
    }
    &-strss {
      color: #61a0ff;
    }
  }
}
</style>
<style lang="scss" scoped>
@media (max-width: 767px) {
  .intro-item {
    padding: 0 10px;
    &-title {
      font-size: 16px;
    }
    &-container {
      padding: 21px 0 31px;
      margin-bottom: 14px;
    }
    &-steps {
      margin: 17px 0 22px;
      &-item {
        width: 90px;
        height: 36px;
        font-size: 12px;
        line-height: initial;
        border-radius: 10px;
        padding: 0 8px;
        box-sizing: border-box;
        overflow: hidden;
        &:last-child {
          line-height: 32px;
        }
      }
      &-arrow {
        margin: 0 4px;
        width: 12px;
        position: relative;
        top: -13px;
      }
    }
    &-apply {
      font-size: 13px;
      height: 32px;
      line-height: 32px;
      width: 112px;
    }
    &-rules {
      &-content {
        padding: 0 16px 0 24px;
        margin-top: 16px;
      }
      &-item {
        margin-bottom: 8px;
        font-size: 12px;
        &::before {
          width: 4px;
          height: 4px;
          left: -11px;
          top: 6px;
        }
      }
    }
  }
}
</style>
