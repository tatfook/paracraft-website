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
    <div class="homepage-advantage" id="oursAdvantage">
      <h4 class="homepage-advantage-title">我们的优势</h4>
      <div class="homepage-advantage-intro">
        <div class="homepage-advantage-intro-box">
          <div class="block">
            <el-carousel :interval="4000" indicator-position="outside">
              <el-carousel-item v-for="(item,index) in carouselPic_1" :key="index">
                <img :src="item.url" alt="" width="100%">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="homepage-advantage-intro-box homepage-advantage-intro-box-text">
          <div class="box-text">
            <h5 class="box-text-title">下一代的Minecraft</h5>
            <p class="box-text-text">完善的3D场景编辑器</p>
            <p class="box-text-text">制作3D骨骼动画人物</p>
            <p class="box-text-text">直接在3D世界中编程</p>
            <p class="box-text-text">沉浸式游戏与学习体验</p>
            <p class="box-text-text">支持PC/移动端多平台</p>
            <p class="box-text-text-bottom"><span><img class="box-text-text-bottom-icon" src="@/asset/images/引号.png" alt=""></span>随心所欲创造属于你的3D动画与游戏<span><img class="box-text-text-bottom-icon-right" src="@/asset/images/引号2.png" alt=""></span></p>
          </div>
        </div>
      </div>
      <div class="homepage-advantage-intro homepage-advantage-intro-phone">
        <div class="homepage-advantage-intro-box homepage-advantage-intro-box-text">
          <div class="box-text">
            <h5 class="box-text-title">升级版的Scratch可视化编程</h5>
            <p class="box-text-text">从2D到3D全面升级Scratch命令</p>
            <p class="box-text-text">积木式编程与代码编程一键切换</p>
            <p class="box-text-text">开发从简单到复杂的3D动画与游戏</p>
            <p class="box-text-text">分享你的作品到网站或发布到手机应用商店</p>
            <p class="box-text-text">历经15年，自主研发的NPL语言与专业3D引擎</p>
            <p class="box-text-text-bottom"><span><img class="box-text-text-bottom-icon" src="@/asset/images/引号.png" alt=""></span>从可视化编程，到文本编程，到发布专业应用程序<span><img class="box-text-text-bottom-icon-right" src="@/asset/images/引号2.png" alt=""></span></p>
          </div>
        </div>
        <div class="homepage-advantage-intro-box">
          <div class="block">
            <el-carousel :interval="4000" indicator-position="outside">
              <el-carousel-item v-for="(item,index) in carouselPic_2" :key="index">
                <img :src="item.url" alt="" width="100%">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <div class="homepage-advantage-intro">
        <div class="homepage-advantage-intro-box">
          <div class="block">
            <el-carousel :interval="4000" indicator-position="outside">
              <el-carousel-item v-for="(item,index) in carouselPic_3" :key="index">
                <img :src="item.url" alt="" width="100%">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="homepage-advantage-intro-box homepage-advantage-intro-box-text">
          <div class="box-text">
            <h5 class="box-text-title">面向未来教育</h5>
            <p class="box-text-text">丰富有趣的课程内容，孩子学习兴趣浓厚</p>
            <p class="box-text-text">完整的编程学习生态系统和课程体系，满足学生和老师的需要</p>
            <p class="box-text-text">专业的教师培训+一站式课堂管理平台，助力老师打造高效课堂</p>
            <p class="box-text-text">教学课程可深度定制开发，助力学校和教学机构教学升级</p>
            <p class="box-text-text">基于PBL项目式学习的个人网站创作</p>
            <p class="box-text-text-bottom"><span><img class="box-text-text-bottom-icon" src="@/asset/images/引号.png" alt=""></span>教育的本质就是让人保持(Keep)有事可做(Work)<span><img class="box-text-text-bottom-icon-right" src="@/asset/images/引号2.png" alt=""></span></p>
          </div>
        </div>
      </div>
    </div>
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

export default {
  name: 'HomePage',
  data() {
    return {
      showGatherInfoDialog: false,
      carouselPic_1: [
        { url: require('@/asset/images/优势1-完善的3D场景编辑器.jpg') },
        { url: require('@/asset/images/优势1-制作3D骨骼动画人物.jpg') },
        { url: require('@/asset/images/优势1-沉浸式游戏与学习体验.jpg') },
        { url: require('@/asset/images/优势1-追加.jpg') }
      ],
      carouselPic_2: [
        { url: require('@/asset/images/优势2-从可视化到基于.jpg') },
        { url: require('@/asset/images/优势2-开发从游戏.jpg') },
        {
          url: require('@/asset/images/优势2-开发从简单到复杂的3D动画与游戏.jpg')
        }
      ],
      carouselPic_3: [
        { url: require('@/asset/images/优势3-未来教育.jpg') },
        { url: require('@/asset/images/优势3-辅导平台.jpg') },
        { url: require('@/asset/images/优势3-辅导平台2.jpg') },
        { url: require('@/asset/images/优势3-辅导平台4.jpg') },
        { url: require('@/asset/images/优势3-辅导平台5.jpg') },
        { url: require('@/asset/images/优势3-辅导平台6.jpg') }
      ],
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
    QuickToTop
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
  &-advantage {
    max-width: 1400px;
    margin: 0 auto;
    min-height: 433px;
    &-title {
      text-align: center;
      margin: 0;
      font-size: 34px;
      font-weight: normal;
      padding: 120px 0 60px;
    }
    &-intro {
      display: flex;
      margin-bottom: 90px;
      flex-wrap: wrap;
      &-phone {
        flex-wrap: wrap-reverse;
      }
      &-box {
        width: 680px;
        margin: 0 auto;
        &-text {
          width: 720px;
        }
        .block .el-carousel {
          .el-carousel__indicators {
            .el-carousel__indicator {
              &.is-active button {
                background: #409eff;
              }
            }
          }
          .el-carousel__container {
            height: 404px !important;
            max-width: 100%;
            .el-carousel__item {
              box-shadow: 0px 8px 27px 0px rgba(63, 138, 250, 0.13);
              .el-carousel__mask {
                opacity: 0.6;
              }
            }
            .el-carousel__arrow {
              color: #409eff;
              background-color: #ffffff;
              box-shadow: 0px 4px 11px 0px rgba(172, 172, 172, 0.32);
            }
          }
        }
        .box-text {
          box-shadow: 0px 8px 27px 0px rgba(63, 138, 250, 0.13);
          border-radius: 6px;
          min-height: 404px;
          background: url(../../asset/images/advantage-bg.png);
          &-title {
            font-size: 28px;
            color: #333;
            margin: 0;
            padding: 45px 0 35px 74px;
          }
          &-text {
            padding-left: 74px;
            font-size: 18px;
            color: #666;
            line-height: 36px;
            margin: 0;
            &::before {
              content: '';
              border: 2px solid #0090ff;
              display: inline-block;
              width: 12px;
              height: 6px;
              border-top-color: transparent;
              border-right-color: transparent;
              transform: rotate(-45deg) translateY(-16%) translateX(40%);
              margin-right: 15px;
            }
            &-bottom {
              padding: 0 0 44px 84px;
              font-size: 22px;
              color: #1298ff;
              margin-top: 35px;
              &-icon {
                margin-right: 10px;
                &-right {
                  margin-left: 10px;
                }
              }
            }
          }
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
    &-advantage {
      &-title {
        padding: 40px 0 25px;
        font-size: 21px;
      }
      &-intro {
        // padding: 0 10px;
        margin: 0 10px 20px;
        &-phone {
          flex-wrap: wrap-reverse;
        }
        &-box {
          min-width: 100%;
          .block .el-carousel {
            .el-carousel__container {
              .el-carousel__item {
              box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 1);
              }
            }
          }
          .box-text {
            min-height: auto;
            &-title {
              font-size: 16px;
              padding: 40px 20px 30px;
            }
            &-text {
              padding-left: 20px;
              font-size: 14px;
              line-height: 25px;
              &::before {
                width: 8px;
                height: 3px;
              }
              &-bottom {
                padding: 0 0 25px;
                font-size: 14px;
                text-align: center;
                &-icon {
                  width: 12px;
                  &-right {
                    width: 12px;
                  }
                }
              }
            }
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
@media screen and (max-width: 682px) {
  .homepage {
    &-banner {
      &-center {
      }
    }
    &-advantage {
      &-intro {
        &-box {
          .block .el-carousel {
            .el-carousel__container {
              height: calc((100vw - 36px) / 680 * 404) !important;
            }
          }
        }
      }
    }
  }
}
</style>
