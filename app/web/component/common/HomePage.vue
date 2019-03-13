<template>
  <div class="homepage">
    <div class="homepage-banner">
      <div class="homepage-banner-center">
        <div class="homepage-banner-center-left">
          <p class="homepage-banner-center-left-typical">Paracraft是一款<span class="homepage-banner-center-left-typical-highlight">免费</span>开源的3D动画与编程<span class="homepage-banner-center-left-typical-highlight">创作软件</span></p>
          <p class="homepage-banner-center-left-target">我们致力于为青少年提供最佳的编程工具与学习体验</p>
          <span class="homepage-banner-center-left-free">免费体验</span><span class="homepage-banner-center-left-free homepage-banner-center-left-watch">观看视频</span>
        </div>
      </div>
    </div>
    <div class="homepage-tags">
      <div class="homepage-tags-center">
        <div class="homepage-tags-center-keywork">
          <span class="homepage-tags-center-keywork-hightlight">免费</span>
          <span>开源200万行代码</span>
          <span class="homepage-tags-center-keywork-hightlight">3D世界</span>
          <span>原创NPL语言</span>
          <span><span class="homepage-tags-center-keywork-hightlight">15年</span>研发历史</span>
        </div>
        <div class="homepage-tags-center-keywork">
          <span>100+部教学视频</span>
          <span>完整的教材</span>
          <span>覆盖从<span class="homepage-tags-center-keywork-hightlight">小学到大学</span></span>
          <span>完整的项目式学习体验 </span>
        </div>
      </div>
    </div>
    <div class="homepage-advantage">
      <h4 class="homepage-advantage-title">我们的优势</h4>
      <div class="homepage-advantage-intro">
        <div class="homepage-advantage-intro-box">
          <div class="block">
            <el-carousel>
              <el-carousel-item v-for="(item,index) in carouselPic_1" :key="index">
                <img :src="item.url" alt="" width="100%">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="homepage-advantage-intro-box box-text">
          <h5 class="box-text-title">下一代的Minecraft</h5>
          <p class="box-text-text">完善的3D场景编辑器</p>
          <p class="box-text-text">制作3D骨骼动画人物</p>
          <p class="box-text-text">直接在3D世界中编程</p>
          <p class="box-text-text">沉浸式游戏与学习体验</p>
          <p class="box-text-text">支持PC/移动多平台</p>
          <p class="box-text-text-bottom"><span>‘‘</span>随心所欲创造属于你的3D动画与游戏<span>’’</span></p>
        </div>
      </div>
      <div class="homepage-advantage-intro">
        <div class="homepage-advantage-intro-box box-text">
          <h5 class="box-text-title">升级版的Scratch可视化编程</h5>
          <p class="box-text-text">从2D到3D全面升级Scratch命令</p>
          <p class="box-text-text">从可视化编程到基于文本的编程</p>
          <p class="box-text-text">开发从简单到复杂的3D动画与游戏</p>
          <p class="box-text-text">分享你的作品到网站或发布到手机应用商城</p>
          <p class="box-text-text">历经15年，自主研发的NPL语言与专业3D引擎</p>
          <p class="box-text-text-bottom"><span>‘‘</span>从可视化编程，到文本编程，到发布专业软件App<span>’’</span></p>
        </div>
        <div class="homepage-advantage-intro-box">
          <div class="block">
            <el-carousel>
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
            <!-- <el-carousel height="150px"> -->
            <!-- <el-carousel-item v-for="(item,index) in carouselPic_1" :key="index"> -->
            <img src="@/asset/images/carouse-pic-7.jpg" alt="" width="100%">
            <!-- </el-carousel-item> -->
            <!-- </el-carousel> -->
          </div>
        </div>
        <div class="homepage-advantage-intro-box box-text">
          <h5 class="box-text-title">面向未来教育</h5>
          <p class="box-text-text">丰富有趣的课程内容，孩子学习兴趣浓厚</p>
          <p class="box-text-text">完整的编程学习生态系统和课程体系，满足学生和老师的需要</p>
          <p class="box-text-text">专业的教师培训+一站式课堂管理平台，助力老师打造高效课堂</p>
          <p class="box-text-text">教学课程可深度定制开发，助力学校和教学机构教学升级</p>
          <p class="box-text-text-bottom"><span>‘‘</span>随心所欲创造属于你的3D动画与游戏<span>’’</span></p>
        </div>
      </div>
    </div>
    <div class="homepage-service">
      <div class="homepage-service-bg">
        <div class="homepage-service-bg-center">
          <h4 class="homepage-service-bg-center-title">我们的服务</h4>
          <div class="homepage-service-bg-center-intro">
            <div class="homepage-service-bg-center-intro-box">
              <img src="@/asset/images/ours-service-1.png" alt="">
              <h6 class="homepage-service-bg-center-intro-box-title">Paracraft 软件贴牌</h6>
              <p class="homepage-service-bg-center-intro-box-text">在客户端或网站启动界面加上您指定的Logo和文字；</p>
              <p class="homepage-service-bg-center-intro-box-text">以及3D引擎商业化授权</p>
            </div>
            <div class="homepage-service-bg-center-intro-box">
              <img src="@/asset/images/ours-service-2.png" alt="">
              <h6 class="homepage-service-bg-center-intro-box-title">Paracraft 软件贴牌</h6>
              <p class="homepage-service-bg-center-intro-box-text">在客户端或网站启动界面加上您指定的Logo和文字；</p>
              <p class="homepage-service-bg-center-intro-box-text">以及3D引擎商业化授权</p>
            </div>
            <div class="homepage-service-bg-center-intro-box">
              <img src="@/asset/images/ours-service-3.png" alt="">
              <h6 class="homepage-service-bg-center-intro-box-title">Paracraft 软件贴牌</h6>
              <p class="homepage-service-bg-center-intro-box-text">在客户端或网站启动界面加上您指定的Logo和文字；</p>
              <p class="homepage-service-bg-center-intro-box-text">以及3D引擎商业化授权</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="homepage-achievement">
      <h4 class="homepage-achievement-title">我们的教学成果</h4>
      <div class="homepage-achievement-intro">
        <div class="homepage-achievement-intro-box" v-for="(pic,index) in currentPicArr" :key="index">
          <img :src="pic.url" alt="">
        </div>
      </div>
      <div class="homepage-achievement-tags">
        <span :class="[{'hightlight': index == currentTagIndex}]" v-for="(i,index) in achievement_tags" :key="index" v-html="i.text">500万注册用户</span>
      </div>
      <div class="homepage-achievement-intro">
        <div class="homepage-achievement-intro-box">
          <img src="@/asset/images/连续5年举办创作大赛.jpg" alt="">
        </div>
        <div class="homepage-achievement-intro-box">
          <img src="@/asset/images/学生作品获得.jpg" alt="">
        </div>
        <div class="homepage-achievement-intro-box">
          <img src="@/asset/images/抵达3500万家庭.jpg" alt="">
        </div>
      </div>
      <div class="homepage-achievement-award">
        <span class="homepage-achievement-award-contest">连续5年举办创作大赛，举办国际大赛</span>
        <span class="homepage-achievement-award-bright">学生作品获得计算机比赛1等奖</span>
        <p>学生作品获得计算机比赛1等奖<span class="homepage-achievement-award-bright">IPTV，抵达3500万家庭</span></p>
      </div>
    </div>
    <div class="homepage-teacher">
      <h4 class="homepage-teacher-title">作品是最好的老师</h4>
      <div class="homepage-teacher-center">
        <div class="block">
          <el-carousel type="card" :interval="150000" arrow="always">
            <el-carousel-item v-for="(item,index) in workData" :key="index">
              <div class="homepage-teacher-center-img">
                <div class="homepage-teacher-center-img-wrap">
                  <img :src="item.coverUrl" alt="" width="100%">
                  <img class="homepage-teacher-center-img-wrap-player" src="@/asset/images/作品播放.png" alt="">
                </div>
                <h5 class="homepage-teacher-center-img-name">{{item.workName}}</h5>
                <p class="homepage-teacher-center-img-author">作者： {{item.author}}</p>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <gather-info-dialog :showGatherInfoDialog="showGatherInfoDialog" @close="closeGatherInfoDialog"></gather-info-dialog>
  </div>
</template>

<script>
import GatherInfoDialog from '@/component/common/GatherInfoDialog'
import VideoPlayer from '@/component/common/VideoPlayer'
import workData from '@/component/data/workData.js'

export default {
  name: 'HomePage',
  data() {
    return {
      showGatherInfoDialog: false,
      carouselPic_1: [
        { url: require('@/asset/images/carouse-pic-1.jpg') },
        { url: require('@/asset/images/carouse-pic-2.jpg') },
        { url: require('@/asset/images/carouse-pic-3.jpg') }
      ],
      carouselPic_2: [
        { url: require('@/asset/images/carouse-pic-4.jpg') },
        { url: require('@/asset/images/carouse-pic-5.jpg') },
        { url: require('@/asset/images/carouse-pic-6.jpg') }
      ],
      achievement_tags_pic_1: [
        { url: require('@/asset/images/500万注册用户.jpg') },
        { url: require('@/asset/images/100部教学视频.jpg') },
        { url: require('@/asset/images/50多节在线课程.jpg') }
      ],
      achievement_tags_pic_2: [
        { url: require('@/asset/images/百度贴吧.jpg') },
        { url: require('@/asset/images/最美慕课.jpg') },
        { url: require('@/asset/images/2万部用户作品视频.jpg') }
      ],
      achievement_tags: [
        { text: '500万注册用户' },
        { text: '100部教学视频' },
        { text: '50多节在线课程<br>' },
        { text: '百度贴吧200万帖子' },
        { text: '3D动画课程入选中国教育电台最美慕课' },
        { text: '2万部用户作品视频' }
      ],
      achievementTagsTimer: null,
      currentTagIndex: 0,
      currentPicArr: '',
      workData: workData
    }
  },
  mounted() {
    this.currentPicArr = this.achievement_tags_pic_1
    this.achievementTagsAnimation()
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
      }, 1000)
    }
  },
  components: {
    GatherInfoDialog,
    VideoPlayer
  }
}
</script>
<style lang="scss">
.homepage {
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
          background: linear-gradient(
            90deg,
            #417dff 0%,
            #3c93ff 53%,
            #36a9ff 100%
          );
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
            left: 50px;
            display: inline-block;
            border: 10px solid transparent;
            border-left-color: #333;
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
      &-keywork {
        font-size: 20px;
        & > span {
          margin-right: 90px;
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
    &-title {
      text-align: center;
      margin: 120px 0 60px;
      font-size: 34px;
      font-weight: normal;
    }
    &-intro {
      display: flex;
      margin-bottom: 90px;
      &-box {
        flex: 1;
        .block .el-carousel {
          .el-carousel__indicators {
            .el-carousel__indicator {
              .el-carousel__button {
                width: 10px;
                height: 10px;
                border-radius: 50%;
              }
              &.is-active button {
                background: #409eff;
              }
            }
          }
          .el-carousel__container {
            height: 404px !important;
            max-width: 100%;
            .el-carousel__item .el-carousel__mask {
              opacity: 0.6;
            }
            .el-carousel__arrow {
              color: #409eff;
              background-color: #ffffff;
              box-shadow: 0px 4px 11px 0px rgba(172, 172, 172, 0.32);
            }
          }
        }
        &.box-text {
          box-shadow: 0px 8px 27px 0px rgba(63, 138, 250, 0.13);
          border-radius: 6px;
          background: url(../../asset/images/advantage-bg.png);
          .box-text {
            &-title {
              font-size: 28px;
              color: #333;
              margin-bottom: 34px;
              padding-left: 74px;
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
                padding-left: 74px;
                font-size: 22px;
                color: #1298ff;
                margin-top: 35px;
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
          padding: 97px 0 67px;
          font-weight: normal;
          margin: 0;
        }
        &-intro {
          display: flex;
          justify-content: space-between;
          padding-bottom: 82px;
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
            }
          }
        }
      }
    }
  }
  &-achievement {
    max-width: 1200px;
    margin: 0 auto;
    &-title {
      text-align: center;
      font-size: 34px;
      padding: 97px 0 71px;
      font-weight: normal;
      margin: 0;
    }
    &-intro {
      display: flex;
      justify-content: space-around;
      margin-bottom: 58px;
      &-box {
        width: 377px;
      }
    }
    &-tags {
      text-align: center;
      margin-bottom: 70px;
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
      &-contest {
        margin-right: 58px;
      }
      &-bright {
        font-size: 22px;
        color: #333;
      }
    }
  }
  &-teacher {
    background: #f9faff;
    &-title {
      text-align: center;
      font-size: 34px;
      padding: 97px 0 71px;
      font-weight: normal;
      margin: 0;
    }
    &-center {
      max-width: 1000px;
      margin: 0 auto;
      .block .el-carousel {
        .el-carousel__container {
          height: 400px !important;
          max-width: 100%;
          .el-carousel__item {
            .el-carousel__mask {
              opacity: 0.6;
            }
            &.is-active .homepage-teacher-center-img-wrap {
              position: relative;
              &-player {
                display: block !important;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -30px;
                margin-top: -30px;
              }
            }
          }
          .el-carousel__arrow {
            color: #409eff;
            background-color: #ffffff;
            box-shadow: 0px 4px 11px 0px rgba(172, 172, 172, 0.32);
          }
        }
        .el-carousel__indicators {
          .el-carousel__indicator {
            .el-carousel__button {
              width: 10px;
              height: 10px;
              border-radius: 50%;
            }
            &.is-active {
              button {
                background: #409eff;
              }
            }
          }
        }
      }
      &-img {
        &-wrap {
          &-player {
            display: none;
          }
        }
        &-name {
          font-size: 18px;
          color: #333;
          margin: 24px 0 20px;
        }
        &-author {
          color: #999;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
