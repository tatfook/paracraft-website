<template>
  <div class="price">
    <div class="price-item">
      <h4 class="price-item-title">价格</h4>
      <div class="price-item-content">
        <div class="price-item-content-top">
          编程课程服务
        </div>
        <p class="price-item-content-flow">通用流程</p>
        <p class="price-item-content-step"><span class="price-item-content-step-icon">1</span>留下您的联系方式，我们的服务人员将邀请您体验具体课程内容</p>
        <p class="price-item-content-step"><span class="price-item-content-step-icon">2</span>与我们签约，并按需采购课程</p>
        <p class="price-item-content-step"><span class="price-item-content-step-icon price-item-content-step-icon-last">3</span>在线添加学生与老师，开始教学</p>

        <p class="price-item-content-flow">收费标准</p>
        <p class="price-item-content-charge"><span class="price-item-content-intro-icon"></span>我们按照学生数目收取年费</p>
        <p class="price-item-content-charge-terms">1. 5人以内免费</p>
        <p class="price-item-content-charge-terms">2. 学生数量100以内，单个学生费用2000元/年</p>
        <p class="price-item-content-charge-terms">3. 学生数量100到500之间，新加入的学生费用为1800元/年</p>
        <p class="price-item-content-charge-terms">4. 学生数量大于500，新加入的学生费用为1500元/年</p>

        <p class="price-item-content-charge price-item-content-charge-per"><span class="price-item-content-intro-icon"></span>我们还提供额外的教师培训服务。每位老师3000元/年</p>
        <p class="price-item-content-charge price-item-content-charge-per-2">联系我们可申请最多3名免费教师培训名额</p>
        <!-- <div class="price-item-content-counter"></div> -->
        <div class="price-item-content-hint">
          包年一次性付费优惠更多，欢迎洽谈。
        </div>
      </div>
      <div class="price-item-content">
        <div class="price-item-content-top">
          Paracraft贴牌与授权服务
        </div>
        <p class="price-item-content-intro"><span class="price-item-content-intro-icon"></span>在软件的启动页面上有您的LOGO和文字。</p>
        <p class="price-item-content-intro"><span class="price-item-content-intro-icon"></span>您的专属客户端，当用于在客户端内注册时，网站最后一步，会默认申请成为您的机构用户。</p>
        <p class="price-item-content-intro"><span class="price-item-content-intro-icon"></span>您在机构的管理后台，可以通过新用户的请求，或者直接联系用户，购买您们的更多的服务。</p>
        <p class="price-item-content-intro"><span class="price-item-content-intro-icon"></span>您将获得独立可更新PC客户端安装包，您可以独立发行这个贴牌客户端，来吸引用户。</p>
        <p class="price-item-content-intro"><span class="price-item-content-intro-icon"></span>您可以发行有您们LOGO的用户作品到Android应用商店。</p>
        <p class="price-item-content-intro"><span class="price-item-content-intro-icon"></span>如果您需要完整的Paracraft与NPL引擎商业化授权请联系我们，完整商业化授权允许您按照任何您希望的方式去改变和发行Paracraft。</p>
      </div>
      <div class="price-item-content">
        <div class="price-item-content-top">
          定制化课件开发
        </div>
        <p class="price-item-content-intro"><span class="price-item-content-intro-icon"></span>根据学校和教学机构的需求，开发特色化的编程教学课程；</p>
        <p class="price-item-content-intro"><span class="price-item-content-intro-icon"></span>帮助学校和教学机构打造自己的编程教学品牌；</p>
        <p class="price-item-content-intro"><span class="price-item-content-intro-icon"></span>数、理、化、生物等其它学科的3D游戏化和数字化课件开发；</p>
        <p class="price-item-content-intro"><span class="price-item-content-intro-icon"></span>PC端与手机端同步制作与发行。</p>
      </div>
    </div>
    <p class="price-say">价格仅供参考，我们诚心邀请培训机构、学校、教育工作者和我们一起推广Paracraft</p>
    <p class="price-btn"><span class="price-button" @click="isShowGatherInfo">立即咨询</span></p>
  </div>

</template>
<script>
export default {
  name: 'PriceItem',
  methods: {
    isShowGatherInfo() {
      this.$emit('isShowGatherInfo')
    }
  }
}
</script>

<style lang='scss'>
.price {
  &-item {
    &-title {
      color: #333;
      font-size: 30px;
      margin: 0;
      padding: 94px 0 72px;
      font-weight: normal;
      text-align: center;
    }
    &-content {
      border: solid 1px #6ebffd;
      max-width: 1200px;
      margin: 0 auto 60px;
      padding-bottom: 60px;
      &-top {
        height: 82px;
        line-height: 82px;
        background: rgb(229, 244, 255);
        font-size: 22px;
        color: #333;
        font-weight: bold;
        padding-left: 67px;
      }
      &-flow {
        color: #333333;
        font-size: 18px;
        padding-left: 67px;
        margin-top: 43px;
      }
      &-step {
        font-size: 16px;
        color: #333;
        padding-left: 67px;
        &-icon {
          display: inline-block;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #fd9900;
          text-align: center;
          color: #fff;
          margin-right: 21px;
          position: relative;
          &::before {
            content: '';
            display: inline-block;
            width: 2px;
            height: 20px;
            background: #fd9900;
            position: absolute;
            top: 22px;
            left: 10px;
          }
          &-last {
            &::before {
              height: 0;
            }
          }
        }
      }
      &-charge {
        color: #333;
        font-size: 16px;
        line-height: 26px;
        padding-left: 67px;
        &-icon {
          display: inline-block;
          width: 10px;
          height: 10px;
          background: #0090ff;
          transform: rotate(45deg);
          margin-right: 22px;
        }
        &-terms {
          color: #666;
          padding-left: 98px;
          margin: 9px 0;
          font-size: 16px;
        }
        &-per {
          margin-bottom: 0;
          &-2 {
            margin: 0;
            padding-left: 98px;
          }
        }
      }
      &-counter {
      }
      &-hint {
        background: rgb(255, 245, 229);
        color: #ee6a00;
        height: 60px;
        line-height: 60px;
        margin: 67px 67px 0;
        padding-left: 24px;
      }
      &-intro {
        padding-left: 67px;
        font-size: 16px;
        color: #333;
        &-icon {
          display: inline-block;
          border: 2px solid #0090ff;
          width: 10px;
          height: 4px;
          margin-right: 16px;
          border-right-color: transparent;
          border-top-color: transparent;
          transform: rotate(-45deg) translateY(-16%) translateX(40%);
        }
        &-img {
          margin: 0 0 30px 67px;
          .service-1 {
            max-width: 457px;
            width: 100%;
          }
          .service-2 {
            max-width: 572px;
            width: 100%;
          }
          &-reminder {
            font-size: 14px;
            color: #666;
            padding-left: 67px;
          }
        }
        .atention {
          color: #0090ff;
        }
      }
    }
  }
  &-say {
    font-size: 22px;
    text-align: center;
    color: #333;
    margin: -20px 0 40px;
  }
  &-btn {
    text-align: center;
    padding-bottom: 90px;
    .price-button {
      cursor: pointer;
      height: 68px;
      color: #fff;
      border: none;
      min-width: 197px;
      font-size: 22px;
      border-radius: 34px;
      display: inline-block;
      line-height: 68px;
      background: linear-gradient(90deg, #417dff 0%, #3c93ff 53%, #36a9ff 100%);
      &:hover {
        background: linear-gradient(
          90deg,
          #588af7 0%,
          #4485d4 53%,
          #0e7ccf 100%
        );
      }
    }
  }
}
@media screen and (max-width: 769px) {
  .price {
    &-item {
      &-title {
        padding: 40px 0 25px;
        font-size: 21px;
      }
    }
  }
}
</style>

