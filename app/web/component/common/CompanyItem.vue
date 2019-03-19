<template>
  <div class="company-item">
    <h4 class="company-item-title">公司介绍</h4>
    <div class="company-item-intro">
      <div class="company-item-intro-box">
        <div class="company-item-intro-box-carousel">
          <el-carousel>
            <el-carousel-item v-for="(item,index) in carouselPic" :key="index">
              <img :src="item.url" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="company-item-intro-box">
        <h6 class="company-item-intro-box-title">发展简史</h6>
        <p class="company-item-intro-box-text">- 2004年 创始人发明NPL语言</p>
        <p class="company-item-intro-box-text">- ParaEngine工作室成立于2005年8月</p>
        <p class="company-item-intro-box-text">- 2007年获得IDG和著名IT企业家的联合投资</p>
        <p class="company-item-intro-box-text">- 2009使用NPL语言发行"魔法哈奇": 国内首个3D儿童创想乐园，累计500万注册用户</p>
        <p class="company-item-intro-box-text">- 2015年并入上市公司大富科技（300134）子公司</p>
        <p class="company-item-intro-box-text">- 2018年推出keepwork个人作品网</p>
        <p class="company-item-intro-box-btn">
          <el-button class="company-item-intro-box-btn-watch" @click="showVideo('https://api.keepwork.com/storage/v0/siteFiles/2948/raw#NPL.mp4')">观看视频</el-button>
        </p>
      </div>
    </div>
    <p class="company-item-ourself"><img src="@/asset/images/引号.png">我们是一家探索面向个人的3D设计，人工智能与未来教育的软件公司<img src="@/asset/images/引号2.png"></p>
    <div class="company-item-tags">
      <div class="company-item-tags-center">
        <span class="company-item-tags-center-word"><span class="company-item-tags-center-word-hightlight">15年</span>技术积累</span>
        <span class="company-item-tags-center-word"> 原创NPL语言</span>
        <span class="company-item-tags-center-word">分布式的3D游戏引擎</span>
        <span class="company-item-tags-center-word"><span class="company-item-tags-center-word-hightlight">22项</span>软件著作权及PCT国际专利</span>
        <span class="company-item-tags-center-word"><span class="company-item-tags-center-word-hightlight">7+发明专利</span></span>
        <span class="company-item-tags-center-word">开源200万NPL代码</span>
        <span class="company-item-tags-center-word"><span class="company-item-tags-center-word-hightlight">自主知识产权</span></span>
        <span class="company-item-tags-center-word">主创人员<span class="company-item-tags-center-word-hightlight">10-30年编程经验</span></span>
      </div>
    </div>
    <div class="company-item-bottom">
      <div class="company-item-bottom-center">
        <p class="company-item-bottom-center-text">我们诚心邀请培训机构，学校，教育工作者和我们一起推广Paracraft</p>
        <span class="company-item-bottom-center-button" @click="isShowGatherInfo">马上体验</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CompanyItem',
  data() {
    return {
      carouselPic: [
        { url: require('@/asset/images/公司介绍01.jpg'), type: 'img' },
        { url: require('@/asset/images/公司介绍02.jpg'), type: 'img' },
        { url: require('@/asset/images/公司介绍03.jpg'), type: 'img' }
      ]
    }
  },
  methods: {
    isShowGatherInfo() {
      this.$emit('isShowGatherInfo')
    },
    showVideo(videoUrl) {
      this.$emit('showVideo', videoUrl)
    }
  }
}
</script>

<style lang="scss">
.company-item {
  background: #f9faff;
  &-title {
    margin: 0;
    padding: 94px 0 30px;
    text-align: center;
    color: #333;
    font-size: 30px;
    font-weight: normal;
  }
  &-intro {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    &-box {
      flex: 1;
      &-carousel {
        max-width: 502px;
        margin: 28px auto 0;
        .el-carousel {
          .el-carousel__indicator {
            .el-carousel__button {
              background: #c0c4cc;
            }
            &.is-active {
              .el-carousel__button {
                background: #0090ff;
              }
            }
          }
        }
      }
      &-title {
        font-size: 22px;
        color: #0090ff;
        margin: 20px 0;
        font-weight: normal;
      }
      &-text {
        font-size: 15px;
        color: #666;
        line-height: 30px;
        margin: 0;
      }
      &-btn {
        &-watch {
          border: solid 1px #0090ff;
          height: 32px;
          border-radius: 16px;
          padding: 0 14px;
          line-height: 32px;
          text-align: center;
          font-size: 12px;
          color: #0090ff;
        }
      }
    }
  }
  &-ourself {
    font-size: 16px;
    color: #5e94be;
    text-align: center;
    margin: 50px 0 0;
    padding-bottom: 70px;
    img {
      margin: 10px 10px 0;
      width: 15px;
    }
  }
  &-tags {
    background: #f1f3fa;
    &-center {
      margin: 0 auto;
      max-width: 1200px;
      text-align: center;
      padding: 34px 0;
      &-word {
        font-size: 18px;
        color: #333;
        margin: 25px 30px;
        display: inline-block;
        &-hightlight {
          font-size: 24px;
          font-weight: bold;
        }
      }
    }
  }
  &-bottom {
    background: linear-gradient(to right, rgb(30, 111, 250), rgb(90, 113, 254));
    text-align: center;
    &-center {
      padding-top: 50px;
      box-sizing: border-box;
      min-height: 238px;
      background: url(../../asset/images/马上体验底图.jpg) top center no-repeat;
      &-text {
        color: #fff;
        font-size: 24px;
      }
      &-button {
        display: inline-block;
        padding: 17px 47px;
        color: #0090ff;
        font-size: 18px;
        background: #fff;
        border-radius: 28px;
        margin: 12px 0;
        cursor: pointer;
      }
    }
  }
}
</style>
