<template>
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
          <h5 class="box-text-title">比Minecraft更进一步</h5>
          <p class="box-text-text">完善的3D场景编辑器</p>
          <p class="box-text-text">制作3D骨骼动画角色</p>
          <p class="box-text-text">直接在3D世界中编程</p>
          <p class="box-text-text">沉浸式游戏与学习体验</p>
          <p class="box-text-text">支持PC/移动端多平台</p>
          <p class="box-text-text-bottom-phone">随心所欲创造属于你的3D动画与游戏</p>
          <p class="box-text-button"><span class="box-text-button-sty" @click="showVideo('https://api.keepwork.com/storage/v0/siteFiles/3279/raw#功能演示视频.mp4')">功能演示视频</span></p>
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
          <p class="box-text-text-bottom-phone">从可视化编程，到文本编程，到发布专业应用程序</p>
          <p class="box-text-button"><span class="box-text-button-sty" @click="showVideo('https://api.keepwork.com/storage/v0/siteFiles/3304/raw#编程教学样片.mp4')">编程教学样片</span></p>
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
          <h5 class="box-text-title">丰富的师资培训方案</h5>
          <p class="box-text-text">完整的编程学习生态系统和课程体系</p>
          <p class="box-text-text">老师3天可入门上岗，课程循序渐进，支持边教边学</p>
          <p class="box-text-text">软件吸引人，学生课后自学动力强，教学质量有保证</p>
          <p class="box-text-text">支持学长制、导师制、课堂教学等多种模式，提升PBL项目式学习效率</p>
          <p class="box-text-text">长期提供教师培训与答疑服务</p>
          <p class="box-text-text-bottom-phone">教育的本质就是让人保持(Keep)有事可做(Work)</p>
          <p class="box-text-button"><span class="box-text-button-sty" @click="showVideo('https://api.keepwork.com/storage/v0/siteFiles/3281/raw#课件演示样片.mp4')">课件演示样片</span></p>
          <p class="box-text-text-bottom"><span><img class="box-text-text-bottom-icon" src="@/asset/images/引号.png" alt=""></span>教育的本质就是让人保持(Keep)有事可做(Work)<span><img class="box-text-text-bottom-icon-right" src="@/asset/images/引号2.png" alt=""></span></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OursAdvantage',
  data() {
    return {
      carouselPic_1: [
        { url: require('@/asset/images/优势1-沉浸式游戏与学习体验.jpg') },
        { url: require('@/asset/images/优势1-制作3D骨骼动画人物-顺序图2.jpg') },
        { url: require('@/asset/images/优势1-完善的3D场景编辑器-顺序图3.jpg') },
        { url: require('@/asset/images/优势1-顺序图4.jpg') },
        { url: require('@/asset/images/适配-顺序图5.jpg') },
      ],
      carouselPic_2: [
        {
          url: require('@/asset/images/优势2-从2D到3D全面升级Scratch命令-顺序图1.jpg')
        },
        {
          url: require('@/asset/images/优势22.jpg')
        },
        { url: require('@/asset/images/优势2-开发从游戏.jpg') }
      ],
      carouselPic_3: [
        { url: require('@/asset/images/优势3-未来教育.jpg') },
        { url: require('@/asset/images/未来教育-互动学习辅导平台.jpg') },
        { url: require('@/asset/images/01.jpg') },
        { url: require('@/asset/images/02.jpg') },
        { url: require('@/asset/images/03.jpg') },
        { url: require('@/asset/images/04.jpg') }
      ]
    }
  },
  methods: {
    showVideo(videoUrl) {
      this.$emit('showVideo', videoUrl)
    }
  }
}
</script>
<style lang="scss">
.homepage {
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
              // box-shadow: 0px 8px 27px 0px rgba(63, 138, 250, 0.13);
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
          // background: url(../../asset/images/advantage-bg.png);
          &-title {
            font-size: 28px;
            color: #333;
            margin: 0;
            padding: 30px 0 28px 74px;
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
              padding: 0 0 30px 84px;
              font-size: 22px;
              color: #1298ff;
              margin-top: 25px;
              &-icon {
                margin-right: 10px;
                &-right {
                  margin-left: 10px;
                }
              }
              &-phone {
                display: none;
              }
            }
          }
          &-button {
            padding-left: 74px;
            margin: 10px;
            &-sty {
              line-height: 35px;
              display: inline-block;
              padding: 0 12px 0 30px;
              border-radius: 17px;
              color: #fff;
              cursor: pointer;
              background: linear-gradient(
                #417dff 0%,
                #3c93ff 53%,
                #36a9ff 100%
              );
              position: relative;
              &:hover {
                background: linear-gradient(
                  90deg,
                  #588af7 0%,
                  #4485d4 53%,
                  #0e7ccf 100%
                );
              }
              &::before {
                content: '';
                height: 0;
                width: 0;
                position: absolute;
                top: 10px;
                left: 17px;
                display: inline-block;
                border: 8px solid transparent;
                border-left-color: #fff;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 769px) {
  .homepage {
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
            background: #fff;
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
              padding: 16px 20px 13px;
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
                display: none;
                padding: 0 0 25px;
                font-size: 14px;
                text-align: center;
                &-icon {
                  width: 12px;
                  &-right {
                    width: 12px;
                  }
                }
                &-phone {
                  display: block;
                  font-size: 14px;
                  color: #1298ff;
                  padding: 0 20px;
                }
              }
            }
            &-button {
              padding-left: 0;
              text-align: center;
              font-size: 14px;
              padding-bottom: 30px;
              &-sty {
                &::before {
                  top: 9px;
                  left: 16px;
                  border: 8px solid transparent;
                  border-left-color: #fff;
                }
              }
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


