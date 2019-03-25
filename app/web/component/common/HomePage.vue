<template>
  <div class="homepage">
    <div class="homepage-banner" id="top">
      <div class="homepage-banner-center">
        <div class="homepage-banner-center-left">
          <p class="homepage-banner-center-left-typical">Paracraft是一款<span class="homepage-banner-center-left-typical-highlight">免费</span>开源的3D动画与<span class="homepage-banner-center-left-typical-highlight">编程创作</span>软件</p>
          <p class="homepage-banner-center-left-target">我们致力于为青少年提供最佳的编程工具与学习体验</p>
          <span class="homepage-banner-center-left-free" @click="isShowGatherInfo">合作咨询</span><span class="homepage-banner-center-left-free homepage-banner-center-left-watch" @click="showVideo('https://api.keepwork.com/storage/v0/siteFiles/770/raw#宣传视频01.mp4')">观看视频</span>
        </div>
      </div>
    </div>
    <div class="homepage-tags">
      <div class="homepage-tags-center">
        <div class="homepage-tags-center-keyword">
          <!-- <span><span class="homepage-tags-center-keyword-hightlight">免费</span>开源200万行代码</span> -->
          <span class="homepage-tags-center-keyword-hightlight">3D编程环境</span>
          <span>原创NPL语言</span>
          <span><span class="homepage-tags-center-keyword-hightlight">15年</span>研发历史</span>
        </div>
        <div class="homepage-tags-center-keyword">
          <span>100+部教学视频</span>
          <span>完整的教材</span>
          <span>覆盖从<span class="homepage-tags-center-keyword-hightlight">小学</span>到大学</span>
          <span>完整的项目式学习体验 </span>
        </div>
      </div>
    </div>
    <ours-advantage  @showVideo="showVideo"></ours-advantage>
    <div class="homepage-service" id="oursService">
      <div class="homepage-service-bg">
        <div class="homepage-service-bg-center">
          <h4 class="homepage-service-bg-center-title">服务项目</h4>
          <div class="homepage-service-bg-center-intro">
            <div class="homepage-service-bg-center-intro-box">
              <img src="@/asset/images/课程与数字化教学服务.png" alt="">
              <h6 class="homepage-service-bg-center-intro-box-title">编程课程体系与数字化教学服务</h6>
              <p class="homepage-service-bg-center-intro-box-text">独立研发的完善的编程课程体系，并有专业的配套教材，适合中小学生从入门到精通编程</p>
            </div>
            <div class="homepage-service-bg-center-intro-box">
              <img src="@/asset/images/Paracraft-软件贴牌.png" alt="">
              <h6 class="homepage-service-bg-center-intro-box-title">Paracraft 软件贴牌</h6>
              <p class="homepage-service-bg-center-intro-box-text">在客户端或网站启动界面加上您指定的Logo和文字，以及3D引擎商业化授权</p>
            </div>
            <div class="homepage-service-bg-center-intro-box">
              <img src="@/asset/images/课程定制开发.png" alt="">
              <h6 class="homepage-service-bg-center-intro-box-title">课程定制开发</h6>
              <p class="homepage-service-bg-center-intro-box-text">不止提供编程课程定制开发，我们还提供数学、物理、化学、生物等其他学科的3D游戏化和数字化课件外包开发服务，使教学更具有针对性，学习效率提升，促进教学质量的提升</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="homepage-achievement">
      <h4 class="homepage-achievement-title">我们的教学成果</h4>
      <div class="homepage-achievement-intro">
        <div class="homepage-achievement-intro-wrap">
          <div class="homepage-achievement-intro-box" v-for="(pic,index) in currentPicArr" :key="index">
            <img :src="pic.url" alt="">
            <p class="homepage-achievement-intro-box-text">{{pic.text}}</p>
          </div>
        </div>
        <div class="homepage-achievement-intro-phone">
          <div class="homepage-achievement-intro-box" v-for="(pic,index) in currentPicArr_phone" :key="index">
            <img :src="pic.url" alt="" v-show="index == currentTagIndex ? true : false">
            <p class="homepage-achievement-intro-box-text" v-show="index == currentTagIndex ? true : false">{{pic.text}}</p>
          </div>
        </div>
      </div>
      <div class="homepage-achievement-tags">
        <span :class="[{'hightlight': index == currentTagIndex}]" v-for="(i,index) in achievement_tags" :key="index" v-html="i.text"></span>
      </div>
      <div class="homepage-achievement-intro">
        <div class="homepage-achievement-intro-wrap">
          <div class="homepage-achievement-intro-box">
            <img src="@/asset/images/连续5年举办创作大赛.jpg" alt="">
            <p class="homepage-achievement-intro-box-text">连续5年举办国内外创作大赛</p>
          </div>
          <div class="homepage-achievement-intro-box">
            <img src="@/asset/images/学生作品获得.jpg" alt="">
            <p class="homepage-achievement-intro-box-text">学生作品获得计算机比赛一等奖</p>
          </div>
          <div class="homepage-achievement-intro-box">
            <img src="@/asset/images/抵达3500万家庭.jpg" alt="">
            <p class="homepage-achievement-intro-box-text">IPTV，抵达3500万家庭</p>
          </div>
        </div>
        <div class="homepage-achievement-intro-phone">
          <div class="homepage-achievement-intro-box" v-for="(pic,index) in currentPicArr_phone_2" :key="index">
            <img :src="pic.url" alt="" v-show="index == currentTagIndex_2 ? true : false">
            <p class="homepage-achievement-intro-box-text" v-show="index == currentTagIndex_2 ? true : false">{{pic.text}}</p>
          </div>
        </div>
      </div>
      <div class="homepage-achievement-tags homepage-achievement-tags-phone">
        <span :class="[{'hightlight': index == currentTagIndex_2}]" v-for="(i,index) in achievement_tags_2" :key="index" v-html="i.text"></span>
      </div>
      <div class="homepage-achievement-award">
        <span class="homepage-achievement-award-contest">连续5年举办国内外创作大赛</span>
        <span class="homepage-achievement-award-bright homepage-achievement-award-contest">学生作品获得计算机比赛一等奖</span>
        <span class="homepage-achievement-award-contest">200部Paracraft视频上线IPTV，抵达3500万家庭</span>
      </div>
    </div>
    <div class="homepage-teacher">
      <h4 class="homepage-teacher-title">用户作品欣赏</h4>
      <div class="homepage-teacher-center">
        <work-carousel @showVideo="showVideo"></work-carousel>
      </div>
    </div>
    <div class="homepage-price" id="price">
      <price-item @isShowGatherInfo="isShowGatherInfo"></price-item>
    </div>
    <div class="homepage-company">
      <company-item @isShowGatherInfo="isShowGatherInfo" @showVideo="showVideo"></company-item>
    </div>
    <gather-info-dialog :showGatherInfoDialog="showGatherInfoDialog" @close="closeGatherInfoDialog"></gather-info-dialog>
    <div v-if="videoDialogVisible" class="homepage-video-dialog">
      <el-dialog :visible.sync="videoDialogVisible" width="50%" center>
        <video width="100%" :src="currentToPlayerVideo" autoplay controls></video>
      </el-dialog>
    </div>
    <quick-to-top></quick-to-top>
  </div>
</template>

<script>
import GatherInfoDialog from '@/component/common/GatherInfoDialog'
import VideoPlayer from '@/component/common/VideoPlayer'
import WorkCarousel from './WorkCarousel'
import PriceItem from './PriceItem'
import CompanyItem from './CompanyItem'
import QuickToTop from './QuickToTop'
import OursAdvantage from './OursAdvantage'

export default {
  name: 'HomePage',
  data() {
    return {
      showGatherInfoDialog: false,
      achievement_tags_pic_1: [
        {
          url: require('@/asset/images/500万注册用户.jpg'),
          text: '500万注册用户'
        },
        {
          url: require('@/asset/images/100部教学视频.jpg'),
          text: '100部教学视频'
        },
        {
          url: require('@/asset/images/50多节在线课程.jpg'),
          text: '50多节在线课程'
        }
      ],
      achievement_tags_pic_2: [
        {
          url: require('@/asset/images/百度贴吧.jpg'),
          text: '百度贴吧200万帖子'
        },
        {
          url: require('@/asset/images/最美慕课.jpg'),
          text: '3D动画课程入选中国教育电台最美慕课'
        },
        {
          url: require('@/asset/images/2万部用户作品视频.jpg'),
          text: '2万部用户作品视频'
        }
      ],
      achievement_tags: [
        { text: '500万注册用户' },
        { text: '100部动画创作教学视频' },
        { text: '50多节在线课程<br>' },
        { text: '百度贴吧200万帖子' },
        { text: '3D动画课程入选中国教育电台最美慕课' },
        { text: '2万部用户作品视频' }
      ],
      achievement_tags_2: [
        { text: '连续5年举办国内外创作大赛' },
        { text: '学生作品获得计算机比赛一等奖' },
        { text: '200部Paracraft视频上线IPTV，抵达3500万家庭' }
      ],
      achievementTagsTimer: null,
      achievementTagsTimer_2: null,
      currentTagIndex: 0,
      currentPicArr: '',
      currentPicArr_phone: [
        {
          url: require('@/asset/images/500万注册用户.jpg'),
          text: '500万注册用户'
        },
        {
          url: require('@/asset/images/100部教学视频.jpg'),
          text: '100部教学视频'
        },
        {
          url: require('@/asset/images/50多节在线课程.jpg'),
          text: '50多节在线课程'
        },
        {
          url: require('@/asset/images/百度贴吧.jpg'),
          text: '百度贴吧200万帖子'
        },
        {
          url: require('@/asset/images/最美慕课.jpg'),
          text: '3D动画课程入选中国教育电台最美慕课'
        },
        {
          url: require('@/asset/images/2万部用户作品视频.jpg'),
          text: '2万部用户作品视频'
        }
      ],
      currentPicArr_phone_2: [
        {
          url: require('@/asset/images/连续5年举办创作大赛.jpg'),
          text: '连续5年举办国内外创作大赛'
        },
        {
          url: require('@/asset/images/学生作品获得.jpg'),
          text: '学生作品获得计算机比赛一等奖'
        },
        {
          url: require('@/asset/images/抵达3500万家庭.jpg'),
          text: 'IPTV，抵达3500万家庭'
        }
      ],
      currentTagIndex_2: 0,
      videoDialogVisible: false,
      currentToPlayerVideo: ''
    }
  },
  mounted() {
    this.currentPicArr = this.achievement_tags_pic_1
    this.achievementTagsAnimation()
    this.achievementTagsAnimation_2()
  },
  methods: {
    isShowGatherInfo() {
      this.showGatherInfoDialog = true
    },
    closeGatherInfoDialog() {
      this.showGatherInfoDialog = false
    },
    achievementTagsAnimation() {
      this.achievementTagsTimer = setInterval(() => {
        this.currentTagIndex =
          this.currentTagIndex + 1 > 5 ? 0 : this.currentTagIndex + 1
        if (this.currentTagIndex >= 3) {
          this.currentPicArr = this.achievement_tags_pic_2
        } else {
          this.currentPicArr = this.achievement_tags_pic_1
        }
      }, 4000)
    },
    achievementTagsAnimation_2() {
      this.achievementTagsTimer_2 = setInterval(() => {
        this.currentTagIndex_2 =
          this.currentTagIndex_2 + 1 > 2 ? 0 : this.currentTagIndex_2 + 1
      }, 4000)
    },
    showVideo(videoUrl) {
      this.currentToPlayerVideo = videoUrl
      this.videoDialogVisible = true
    }
  },
  beforeDestroy() {
    clearInterval(this.achievementTagsTimer)
    clearInterval(this.achievementTagsTimer_2)
  },
  components: {
    GatherInfoDialog,
    VideoPlayer,
    WorkCarousel,
    PriceItem,
    CompanyItem,
    QuickToTop,
    OursAdvantage
  }
}
</script>
<style lang="scss">
.homepage {
  font-family: 'MicrosoftYaHei';
  &-banner {
    background: linear-gradient(to right, #351d85, #081746);
    &-center {
      background: url(../../asset/images/banner.jpg) top center;
      max-width: 1920px;
      min-height: 594px;
      box-sizing: border-box;
      margin: 0 auto;
      padding: 100px 0;
      &-left {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 12px;
        &-typical {
          font-size: 41px;
          line-height: 70px;
          max-width: 695px;
          color: #fff;
          margin: 0;
          &-highlight {
            font-size: 48px;
            font-weight: bold;
          }
        }
        &-target {
          font-size: 24px;
          color: #e2e2e2;
          margin: 48px 0 90px;
        }
        &-free {
          display: inline-block;
          width: 177px;
          line-height: 63px;
          text-align: center;
          border-radius: 30px;
          color: #fff;
          margin-right: 37px;
          cursor: pointer;
          font-size: 20px;
          background: linear-gradient(
            90deg,
            #417dff 0%,
            #3c93ff 53%,
            #36a9ff 100%
          );
          &:hover {
            background: linear-gradient(
              90deg,
              #588af7 0%,
              #4485d4 53%,
              #0e7ccf 100%
            );
          }
        }
        &-watch {
          background: #ecc318;
          color: #333;
          position: relative;
          padding-left: 20px;
          box-sizing: border-box;
          &::before {
            content: '';
            height: 0;
            width: 0;
            position: absolute;
            top: 22px;
            left: 41px;
            display: inline-block;
            border: 10px solid transparent;
            border-left-color: #333;
          }
          &:hover {
            background: #bda134;
          }
        }
      }
    }
  }
  &-tags {
    padding: 60px 0;
    background: #041b49;
    &-center {
      max-width: 1200px;
      margin: 0 auto;
      color: #f2f2f2;
      &-keyword {
        font-size: 20px;
        text-align: center;
        & > span {
          margin: 45px;
          line-height: 70px;
        }
        &-hightlight {
          font-weight: bold;
          font-size: 32px;
        }
      }
    }
  }
  &-service {
    background: linear-gradient(to right, #0471a8, #0432a8);
    &-bg {
      max-width: 1920px;
      margin: 0 auto;
      background: url(../../asset/images/service-bg.jpg) top center no-repeat;
      &-center {
        max-width: 1400px;
        margin: 0 auto;
        &-title {
          color: #fff;
          text-align: center;
          font-size: 34px;
          padding: 74px 0 63px;
          font-weight: normal;
          margin: 0;
        }
        &-intro {
          display: flex;
          justify-content: space-between;
          padding-bottom: 70px;
          flex-wrap: wrap;
          &-box {
            width: 426px;
            text-align: center;
            color: #fff;
            &-title {
              font-size: 24px;
              margin: 53px 0 28px;
              font-weight: normal;
            }
            &-text {
              font-size: 16px;
              opacity: 0.8;
              line-height: 29px;
              padding: 0 30px;
            }
          }
        }
      }
    }
  }
  &-achievement {
    max-width: 1200px;
    margin: 0 auto 70px;
    &-title {
      text-align: center;
      font-size: 34px;
      padding: 97px 0 71px;
      font-weight: normal;
      margin: 0;
    }
    &-intro {
      margin-bottom: 58px;
      &-wrap {
        display: flex;
        min-width: 930px;
        justify-content: space-around;
      }
      &-phone {
        display: none;
      }
      &-box {
        width: 378px;
        position: relative;
        &-text {
          position: absolute;
          width: 100%;
          text-align: center;
          margin: 0;
          padding: 11px 0;
          bottom: 2px;
          color: #fff;
          font-size: 14px;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8),
            rgba(255, 255, 255, 0)
          );
        }
      }
    }
    &-tags {
      text-align: center;
      margin-bottom: 70px;
      &-phone {
        display: none;
      }
      span {
        margin-right: 58px;
        font-size: 20px;
        line-height: 50px;
        color: #333;
        &.hightlight {
          font-size: 24px;
          font-weight: 700;
        }
      }
    }
    &-award {
      font-size: 16px;
      text-align: center;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      span {
        display: inline-block;
        flex: 1;
      }
      &-contest {
        // margin-right: 58px;
      }
      &-bright {
        font-size: 22px;
        color: #333;
        margin-left: 18px;
      }
    }
  }
  &-teacher {
    background: #f9faff;
    padding-bottom: 120px;
    &-title {
      text-align: center;
      font-size: 34px;
      padding: 97px 0 71px;
      font-weight: normal;
      margin: 0;
    }
    &-center {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
  &-video-dialog {
    .el-dialog {
      background: rgba(0, 0, 0, 0);
      box-shadow: none;
      min-width: 510px !important;
      .el-dialog__header {
        padding: 20px;
        position: relative;
        .el-dialog__headerbtn {
          border-radius: 50%;
          position: absolute;
          top: -4px;
          right: -30px;
          padding: 5px;
          &:hover {
            background: rgba(255, 255, 255, 0.2);
          }
          .el-icon-close:before {
            color: #fff;
            font-size: 36px;
          }
        }
      }
      .el-dialog__body {
        padding: 0;
      }
    }
  }
}
@media screen and (max-width: 769px) {
  .homepage {
    &-banner {
      &-center {
        background: url(../../asset/images/banner-phone.jpg) top center;
        background-size: contain;
        padding: 0;
        min-height: 385px;
        &-left {
          text-align: center;
          &-typical {
            text-align: center;
            font-size: 20px;
            line-height: 39px;
            padding: 60px 25px 40px;
            &-highlight {
              font-size: 24px;
            }
          }
          &-target {
            font-size: 14px;
            margin: 0 0 45px;
            text-align: center;
          }
          &-free {
            margin-right: 5px;
            line-height: 50px;
            width: 120px;
            font-size: 15px;
          }
          &-watch {
            margin-left: 20px;
            &::before {
              top: 15px;
              left: 25px;
            }
          }
        }
      }
    }
    &-tags {
      padding: 15px 40px;
      background: #2c49c6;

      &-center {
        &-keyword {
          font-size: 12px;
          & > span {
            margin: 10px;
            line-height: 30px;
          }
          &-hightlight {
            font-size: 16px;
          }
        }
      }
    }
    &-service {
      &-bg {
        background: #105bdd;
        &-center {
          &-title {
            padding: 40px 0 25px;
            font-size: 21px;
          }
          &-intro {
            padding: 10px;
            &-box {
              width: 100%;
              padding-bottom: 20px;
              img {
                width: 100%;
                max-width: 426px;
              }
              &-title {
                margin: 30px 0 20px;
                font-size: 18px;
              }
            }
          }
        }
      }
    }
    &-achievement {
      &-title {
        padding: 40px 0 25px;
        font-size: 21px;
      }
      &-intro {
        padding: 10px;
        margin-bottom: 20px;
        &-wrap {
          display: none;
          min-width: 930px;
          justify-content: start;
        }
        &-phone {
          display: block;
        }
        &-box {
          margin: 0 auto;
          width: 300px;
          img {
            width: 100%;
          }
          &-text {
            // display: none;
          }
        }
      }
      &-tags {
        margin: 0 40px 30px;
        // display: none;
        &-phone {
          display: block;
        }
        span {
          margin-right: 15px;
          font-size: 14px;
          line-height: 30px;
          display: inline-block;
          &.hightlight {
            font-size: 15px;
          }
        }
      }
      &-award {
        font-size: 12px;
        line-height: 30px;
        display: none;
        span {
          display: block;
        }
        &-contest {
          margin-right: 30px;
        }
        &-bright {
          font-size: 15px;
          margin-left: 12px;
          display: inline-block;
        }
      }
    }
    &-teacher {
      padding-bottom: 30px;
      &-title {
        padding: 40px 0 25px;
        font-size: 21px;
      }
    }
    &-video-dialog {
      .el-dialog {
        min-width: 85% !important;
        // min-width: 340px !important;
        .el-dialog__header {
          .el-dialog__headerbtn {
            top: -2px;
            right: -20px;
            .el-icon-close:before {
              font-size: 26px;
            }
          }
        }
      }
    }
  }
}
</style>
