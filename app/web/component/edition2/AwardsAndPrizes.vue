<template>
  <div class="awards-and-prizes">
    <div class="awards-and-prizes-title">
      <!-- 奖励与奖品 -->
    </div>
    <div class="awards-and-prizes-content">
      <span class="awards-and-prizes-content-title">
        参赛作品可以获得：
      </span>
      <p class="awards-and-prizes-content-text">
        <img src="@/asset/images/edition2/title-icon.png" alt="" class="awards-and-prizes-content-text-icon">NPL代码节设有 一等奖、二等奖、三等奖、人气奖；</p>
      <p class="awards-and-prizes-content-text">
        <img src="@/asset/images/edition2/title-icon.png" alt="" class="awards-and-prizes-content-text-icon">每届大赛截止日期前，根据作品排行榜单评选出一、二、三等奖；人气奖由获评人数最多的作品获得；</p>
      <p class="awards-and-prizes-content-text">
        <img src="@/asset/images/edition2/title-icon.png" alt="" class="awards-and-prizes-content-text-icon">所有获奖作品必须满足最低标准要求，若本届大赛提交的所有作品未达到对应奖项最低标准要求，则该奖项本届不进行评选；</p>
      <p class="awards-and-prizes-content-text">
        <img src="@/asset/images/edition2/title-icon.png" alt="" class="awards-and-prizes-content-text-icon">此前已获奖作品，包括但不限于获得PAC大赛、IICC大赛、NPL大赛奖项的作品不再参与评选（人气奖不受此条规则限制）。</p>
      <a href="https://keepwork.com/paraworld/NPL/index" target="_blank" class="awards-and-prizes-content-more">点击查看详情</a>
      <div class="awards-and-prizes-content-level">
        <div class="awards-and-prizes-content-level-box">
          <div class="awards-and-prizes-content-level-box-ranking">一等奖<span class="ranking">1名</span></div>
          <div class="awards-and-prizes-content-level-box-bonus">现金<span class="bonus">3500</span>元</div>
        </div>
        <div class="awards-and-prizes-content-level-box">
          <div class="awards-and-prizes-content-level-box-ranking">二等奖<span class="ranking">2名</span></div>
          <div class="awards-and-prizes-content-level-box-bonus">现金<span class="bonus">2500</span>元</div>
        </div>
        <div class="awards-and-prizes-content-level-box">
          <div class="awards-and-prizes-content-level-box-ranking">三等奖<span class="ranking">4名</span></div>
          <div class="awards-and-prizes-content-level-box-bonus">现金<span class="bonus">1500</span>元</div>
        </div>
        <div class="awards-and-prizes-content-level-box">
          <div class="awards-and-prizes-content-level-box-ranking">人气奖<span class="ranking">1名</span></div>
          <div class="awards-and-prizes-content-level-box-bonus">现金<span class="bonus">500</span>元</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AwardsAndPrizes'
}
</script>
<style lang="scss" scoped>
.awards-and-prizes {
  min-height: 915px;
  background: url('../../asset/images/edition2/awardbg.png') no-repeat top
    center;
  background-size: 100%;
  padding: 60px 20px 50px;
  &-title {
    width: 400px;
    height: 52px;
    margin: 0 auto 60px;
    text-align: center;
    line-height: 52px;
    letter-spacing: 3px;
    color: #ffffff;
    font-size: 26px;
    font-weight: 700;
    background: url('../../asset/images/edition2/award-title.png') no-repeat top
      center;
  }
  &-content {
    max-width: 1080px;
    box-sizing: border-box;
    box-shadow: 0px 8px 13px 0px rgba(20, 36, 111, 0.11);
    border-radius: 10px;
    padding: 59px 57px;
    margin: 0 auto;
    background: url('../../asset/images/edition2/award.png') no-repeat top 59px
      right 0 #fff;
    &-title {
      background: url('../../asset/images/edition2/title-bg.png') no-repeat left
        top #fff;
      line-height: 43px;
      display: inline-block;
      height: 43px;
      width: 232px;
      text-align: center;
      letter-spacing: 2px;
      color: #812d04;
      font-size: 18px;
      margin: 0 0 20px 17px;
    }
    &-text {
      max-width: 530px;
      font-size: 16px;
      box-sizing: border-box;
      padding-left: 25px;
      margin-left: 17px;
      line-height: 27px;
      position: relative;
      &-icon {
        position: absolute;
        left: 0;
        top: 5px;
      }
    }
    &-more {
      padding-left: 40px;
      line-height: 27px;
      letter-spacing: 2px;
      color: #4088ff;
      margin-bottom: 50px;
      display: inline-block;
    }
    &-level {
      display: flex;
      flex-wrap: wrap;
      &-box {
        flex: 1;
        min-width: 150px;
        margin: 40px 0;
        padding-left: 15px;
        &-ranking {
          color: #754fc1;
          font-size: 22px;
          margin-bottom: 30px;
          font-weight: 700;
          display: flex;
          .ranking {
            color: #fff;
            background-color: #754fc1;
            border-radius: 3px;
            margin-left: 8px;
            display: inline-block;
            min-width: 50px;
            height: 26px;
            line-height: 26px;
            text-align: center;
            font-weight: normal;
            font-size: 16px;
            display: inline-block;
          }
        }
        &-bonus {
          color: #333;
          font-size: 25px;
          .bonus {
            color: #ff6600;
            font-size: 42px;
            font-weight: 700;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .awards-and-prizes {
    background-size: 180%;
    &-title {
      margin-bottom: 20px;
      width: 100%;
      font-size: 26px;
    }
    &-content {
      background-image: none;
      padding: 20px;
      &-text {
        font-size: 14px;
        line-height: 25px;
        &-icon {
          width: 9px;
          height: 12px;
          top: 8px;
        }
      }
      &-more {
        font-size: 14px;
      }
      &-level {
        &-box {
          padding-left: 10px;
          margin: 22px 0;
          &-ranking {
            font-size: 16px;
            margin-bottom: 12px;
          }
          &-bonus {
            font-size: 16px;
            .bonus {
              font-size: 23px;
            }
          }
        }
      }
    }
  }
}
</style>


