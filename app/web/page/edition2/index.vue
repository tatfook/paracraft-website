<template>
  <div class="edition2-page">
    <code-banner></code-banner>
    <page-guide :pageAnchors='pageAnchors'></page-guide>
    <game-intro id="gameIntro"></game-intro>
    <intro-item class="edition2-page-offset"></intro-item>
    <awards-and-prizes id="awardsAndPrizes"></awards-and-prizes>
    <ranking-list id="rankingList"></ranking-list>
    <next-notice id="nextNotice"></next-notice>
  </div>
</template>

<style lang="scss">
@import '../../asset/css/common.css';
@import '../../asset/css/display.css';
</style>

<script>
import CodeBanner from '@/component/edition2/CodeBanner'
import PageGuide from '@/component/edition2/PageGuide'
import AwardsAndPrizes from '@/component/edition2/AwardsAndPrizes'
import RankingList from '@/component/edition2/RankingList'
import GameIntro from '@/component/edition2/GameIntro'
import IntroItem from '@/component/edition2/IntroItem'
import NextNotice from '@/component/edition2/NextNotice'
export default {
  data() {
    return {
      pageAnchors: [
        {
          id: 'gameIntro',
          index: '01',
          text: '大赛简介'
        },
        {
          id: 'awardsAndPrizes',
          index: '02',
          text: '奖励与奖品'
        },
        {
          id: 'rankingList',
          index: '03',
          text: '争霸榜单实时看'
        },
        {
          id: 'nextNotice',
          index: '04',
          text: '下期预告'
        }
      ]
    }
  },
  components: {
    CodeBanner,
    PageGuide,
    AwardsAndPrizes,
    RankingList,
    GameIntro,
    IntroItem,
    NextNotice
  }
}
</script>

<style lang="scss" scoped>
.edition2-page {
  &-offset {
    margin-bottom: -80px;
    /deep/ .intro-item-container {
      position: relative;
      top: -80px;
    }
  }
}
</style>
<style lang="scss" scoped>
@media (max-width: 767px) {
  .edition2-page {
    &-offset {
      margin-bottom: -24px;
      /deep/ .intro-item-container {
        top: -24px;
      }
    }
  }
}
</style>

