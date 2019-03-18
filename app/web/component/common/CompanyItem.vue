<template>
  <div class="company-item">
    <h4 class="company-item-title">公司介绍</h4>
    <div class="company-item-intro">
      <div class="company-item-intro-box">
        <div class="company-item-intro-box-carousel">
          <el-carousel>
            <el-carousel-item v-for="item in carouselPic" :key="item">
              <img :src="item.url" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="company-item-intro-box">
        <h6 class="company-item-intro-box-title">发展简史</h6>
        <p  class="company-item-intro-box-text">- 2004年 创始人发明NPL语言</p>
        <p  class="company-item-intro-box-text">- ParaEngine工作室成立于2005年8月</p>
        <p  class="company-item-intro-box-text">- 2007年获得IDG和著名IT企业家的联合投资</p>
        <p  class="company-item-intro-box-text">- 2009使用NPL语言发行"魔法哈奇": 国内首个3D儿童创想乐园，累计500万注册用户</p>
        <p  class="company-item-intro-box-text">- 2015年并入上市公司大富科技（300134）子公司</p>
        <p  class="company-item-intro-box-text">- 2018年推出keepwork个人作品网</p>
        <p class="company-item-intro-box-btn">
          <el-button class="company-item-intro-box-btn-watch">观看视频</el-button>
        </p>
      </div>
    </div>
    <p class="company-item-ourself">我们是一家探索面向个人的3D设计，人工智能与未来教育的软件公司</p>
  </div>
</template>
<script>
export default {
  name: 'CompanyItem',
  data() {
    return {
      carouselPic: [
        { url: require('@/asset/images/公司介绍01.jpg'), type: 'img' },
        { url: require('@/asset/images/公司介绍01.jpg'), type: 'img' },
        { url: require('@/asset/images/公司介绍02.jpg'), type: 'img' }
      ]
    }
  },
  methods: {}
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
          border:  solid 1px #0090ff;
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
    margin: 50px 0 30px;
  }
}
</style>
