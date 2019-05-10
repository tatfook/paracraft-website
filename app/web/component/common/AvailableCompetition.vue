<template>
  <div class="available-competition">
    <h1>用Paracraft制作作品可参加哪些全国性竞赛？</h1>
    <p>教育部办公厅印发《关于公布2019年度面向中小学生的全国性竞赛活动的通知》，确定29项竞赛活动为2019年度面向中小学生开展的全国性竞赛活动。</p>
    <p>其中使用Paracraft制作的动画与编程作品能参加的全国性竞赛活动共计6项，包括：</p>
    <div class="available-competition-list">
      <div class="available-competition-item" v-for="(competition, index) in competitionListNames" :key="index">
        <img :src="competition.logo" alt="" class="available-competition-item-logo">
        <div class="available-competition-item-category">
          {{competition.category}}
          <span class="available-competition-item-count">{{competition.names.length}}项</span>
        </div>
        <div class="available-competition-item-names">{{competition.namesStr}}</div>
      </div>
    </div>
    <p>Paracraft除了能参加编程类比赛，还可以参加创意动画类比赛。Paracraft可以方便的制作3D动画，比其它Flash等2D动画工具优势大。</p>
  </div>
</template>
<script>
export default {
  name: 'AvailableCompetition',
  data() {
    return {
      competitionList: [
        {
          logo: require('@/asset/images/competition/1.png'),
          category: '全国青少年科技创新大赛',
          names: ['计算机科学']
        },
        {
          logo: require('@/asset/images/competition/2.gif'),
          category: '全国中小学科学影像节',
          names: ['科普动画']
        },
        {
          logo: require('@/asset/images/competition/3.jpg'),
          category: '全国中小学信息技术创新与实践大赛',
          names: ['动画创作', '微视频创作', '移动端网页创作', '3D 智能作品创作']
        }
      ]
    }
  },
  computed: {
    competitionListNames() {
      return _.map(this.competitionList, competition => {
        return {
          ...competition,
          namesStr: competition.names.join('、')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.available-competition {
  padding: 98px 0 87px;
  background: linear-gradient(bottom, #fafbff, #fff);
  color: #333;
  text-align: center;
  h1 {
    font-size: 30px;
    font-weight: normal;
    margin: 0 0 48px 0;
  }
  p {
    font-size: 16px;
    margin: 16px 0;
  }
  &-list {
    max-width: 1408px;
    width: 100%;
    margin: 48px auto 72px;
  }
  &-item {
    display: inline-block;
    vertical-align: middle;
    width: 428px;
    height: 241px;
    margin: 24px 24px 0 0;
    text-align: center;
    border: 2px solid #f2f2f3;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0px 6px 0px 0px #2397f3;
    padding: 24px 0;
    &:last-child {
      width: 504px;
      margin-right: 0;
    }
    &-logo {
      max-width: 100%;
      height: auto;
    }
    &-category {
      font-size: 18px;
      margin: 36px 0 16px;
    }
    &-count {
      font-size: 14px;
      color: #fff;
      background-color: #fd9900;
      height: 20px;
      line-height: 20px;
      padding: 0 7px;
      border-radius: 4px;
    }
    &-names {
      color: #0090ff;
      font-size: 16px;
    }
  }
}
</style>
<style lang="scss" scoped>
@media (max-width: 840px) {
  .available-competition {
    padding: 40px 10px 24px;
    h1 {
      font-size: 20px;
      margin-bottom: 16px;
    }
    p {
      font-size: 14px;
      margin: 8px 0;
    }
    &-list {
      box-sizing: border-box;
      margin: 16px auto 40px;
    }
    & &-item {
      width: 100%;
      max-width: 504px;
      margin-right: 0;
      padding: 16px 8px;
      height: 180px;
      margin-top: 20px;
      &-category {
        font-size: 16px;
        margin: 8px 0;
      }
      &-names {
        font-size: 14px;
      }
    }
  }
}
</style>
