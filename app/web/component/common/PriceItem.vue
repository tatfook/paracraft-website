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
        <p class="price-item-content-step  price-item-content-step-last"><span class="price-item-content-step-icon">3</span>在线添加学生与老师，开始教学</p>

        <p class="price-item-content-flow">收费标准</p>
        <p class="price-item-content-charge"><span class="price-item-content-intro-icon"></span>我们按照学生数目收取年费</p>
        <p class="price-item-content-charge-terms"><span class="price-item-content-charge-terms-num">1.</span> 5人以内免费</p>
        <p class="price-item-content-charge-terms"><span class="price-item-content-charge-terms-num">2.</span> 学生数量100以内，单个学生费用2000元/年</p>
        <p class="price-item-content-charge-terms"><span class="price-item-content-charge-terms-num">3.</span> 学生数量100到500之间，新加入的学生费用为1800元/年</p>
        <p class="price-item-content-charge-terms"><span class="price-item-content-charge-terms-num">4.</span> 学生数量大于500，新加入的学生费用为1500元/年</p>

        <p class="price-item-content-charge price-item-content-charge-per"><span class="price-item-content-intro-icon"></span>我们还提供额外的教师培训服务。每位老师3000元/年<br>联系我们可申请最多3名免费教师培训名额</p>
        <!-- <p class="price-item-content-charge price-item-content-charge-per">联系我们可申请最多3名免费教师培训名额</p> -->
        <p class="price-item-content-calculate"><img class="price-item-content-calculate-img" src="@/asset/images/计算器.png" alt="@/asset/images/计算器.png"><span class="price-item-content-calculate-weight">价格计算器</span>（您可根据自身需求进行合理规划，灵活使用多种计算模式，获得最优成本收益）</p>
        <div class="price-item-content-counter">
          <div class="price-item-content-counter-count">
            <p class="price-item-content-counter-count-member">学生人数</p>
            <p class="price-item-content-counter-count-num">费用：{{studentCharge}}元/年/人</p>
            <div class="price-item-content-counter-count-slider">
              <div class="price-item-content-counter-count-slider-left">
                <el-slider v-model="sliderValue_student" show-input :max="3000">
                </el-slider>
              </div>
              <div class="price-item-content-counter-count-slider-right">人</div>
            </div>
            <p class="price-item-content-counter-count-member">老师人数</p>
            <p class="price-item-content-counter-count-num">费用：{{teacherCharge}}元/年/人</p>
            <div class="price-item-content-counter-count-slider">
              <div class="price-item-content-counter-count-slider-left">
                <el-slider v-model="sliderValue_teacher" show-input :max="300">
                </el-slider>
              </div>
              <div class="price-item-content-counter-count-slider-right">人</div>
            </div>
          </div>
          <div class="price-item-content-counter-result">
            <p class="price-item-content-counter-result-title">价格预算清单</p>
            <div class="price-item-content-counter-result-content">
              <p class="price-item-content-counter-result-text" v-show="!sliderValue_student && !sliderValue_teacher">请拖动滑竿或直接输入相关人数的预计用量，以估算使用Paracraft服务的总成本</p>
              <div class="price-item-content-counter-result-item" v-show="sliderValue_student">
                <span class="price-item-content-counter-result-item-key">学生服务</span>
                <span class="price-item-content-counter-result-item-value">￥{{_allStudentsCharge}}</span>
                <p class="price-item-content-counter-result-item-hint">学生费用{{studentCharge}}元/年/人 · {{sliderValue_student}}人</p>
              </div>
              <div class="price-item-content-counter-result-item" v-show="sliderValue_teacher">
                <span class="price-item-content-counter-result-item-key">老师服务：</span>
                <span class="price-item-content-counter-result-item-value">￥{{_allTeachersCharge}}</span>
                <p class="price-item-content-counter-result-item-hint">老师费用{{teacherCharge}}元/年/人 · {{sliderValue_teacher}}人</p>
              </div>
              <div class="price-item-content-counter-result-item" v-show="sliderValue_student || sliderValue_teacher">
                <span class="price-item-content-counter-result-item-key">优惠</span>
                <span class="price-item-content-counter-result-item-count">￥{{discounts}}</span>
              </div>
            </div>
            <div class="price-item-content-counter-result-total">
              <p>合计：￥<span class="price-item-content-counter-result-total-hightlight">{{totalCharge}}</span>/年</p>
            </div>
            <p class="price-item-content-counter-result-export" @click="exportList()">↓导出清单</p>
          </div>
        </div>
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
        <p class="price-item-content-intro"><span class="price-item-content-intro-icon"></span>根据学校和教学机构的需求，开发特色化的编程教学课程。</p>
        <p class="price-item-content-intro"><span class="price-item-content-intro-icon"></span>帮助学校和教学机构打造自己的编程教学品牌。</p>
        <p class="price-item-content-intro"><span class="price-item-content-intro-icon"></span>数、理、化、生物等其它学科的3D游戏化和数字化课件开发。</p>
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
  data() {
    return {
      sliderValue_student: 0,
      sliderValue_teacher: 0
      // over_studentChargeTenThousand: 0,
      // over_teacherChargeTenThousand: 0
    }
  },
  computed: {
    studentCharge() {
      if (this.sliderValue_student < 6) {
        return 0
      } else if (this.sliderValue_student < 101) {
        return 2000
      } else if (this.sliderValue_student < 501) {
        return 1800
      } else {
        return 1500
      }
    },
    teacherCharge() {
      if (this.sliderValue_teacher < 4) {
        return 0
      } else {
        return 3000
      }
    },
    allStudentsCharge() {
      if (this.sliderValue_student < 6) {
        return 0
      } else if (
        this.sliderValue_student >= 6 &&
        this.sliderValue_student < 101
      ) {
        return (this.sliderValue_student - 5) * 2000
      } else if (
        this.sliderValue_student >= 101 &&
        this.sliderValue_student < 501
      ) {
        return (this.sliderValue_student - 100) * 1800 + 95 * 2000
      } else {
        return (this.sliderValue_student - 500) * 1500 + 400 * 1800 + 95 * 2000
      }
    },
    _allStudentsCharge() {
      return this.allStudentsCharge >= 10000
        ? this.allStudentsCharge / 10000 + '万'
        : this.allStudentsCharge
    },
    allTeachersCharge() {
      if (this.sliderValue_teacher < 4) {
        return 0
      } else {
        return (this.sliderValue_teacher - 3) * 3000
      }
    },
    _allTeachersCharge() {
      return this.allTeachersCharge >= 10000
        ? this.allTeachersCharge / 10000 + '万'
        : this.allTeachersCharge
    },
    discounts() {
      let studentCount = 0
      let teacherCount = 0
      if (this.sliderValue_student <= 5) {
        studentCount = 2000 * this.sliderValue_student
      } else {
        studentCount = 10000
      }
      if (this.sliderValue_teacher <= 3) {
        teacherCount = 3000 * this.sliderValue_teacher
      } else {
        teacherCount = 9000
      }
      return studentCount + teacherCount
    },
    totalCharge() {
      return this.allStudentsCharge + this.allTeachersCharge >= 10000
        ? (this.allStudentsCharge + this.allTeachersCharge) / 10000 + '万'
        : this.allStudentsCharge + this.allTeachersCharge
    }
  },
  methods: {
    isShowGatherInfo() {
      this.$emit('isShowGatherInfo')
    },
    exportList() {
      import('@/component/data/Export2Excel').then(excel => {
        const tHeader = ['服务类型', '数量', '价格/年/元']
        let data = [
          ['学生', this.sliderValue_student, this.allStudentsCharge],
          ['老师', this.sliderValue_teacher, this.allTeachersCharge],
          ['', '总价（元）', this.totalCharge]
        ]
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: '费用清单'
        })
        this.downloadLoading = false
      })
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
        margin-bottom: 43px;
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
        margin: 0 0 0 67px;
        padding: 0 0 12px 18px;
        border-left: 2px solid #fd9900;
        position: relative;
        &-icon {
          position: absolute;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #fd9900;
          text-align: center;
          color: #fff;
          left: -11px;
          line-height: 22px;
        }
        &-last {
          padding-bottom: 0;
        }
      }
      &-charge {
        color: #333;
        font-size: 16px;
        line-height: 26px;
        padding-left: 86px;
        position: relative;
        &-terms {
          color: #666;
          padding-left: 98px;
          margin: 9px 0;
          font-size: 16px;
          position: relative;
          &-num {
            position: absolute;
            left: 82px;
          }
        }
        &-per {
          margin-bottom: 0;
          &-2 {
            margin: 0;
            padding-left: 98px;
          }
        }
      }
      &-calculate {
        padding-left: 67px;
        font-size: 14px;
        color: #666;
        margin: 45px 0 3px;
        display: flex;
        &-img {

        }
        &-weight {
          font-size: 16px;
          color: #333;
          font-weight: bold;
          padding-left: 10px;
        }
      }
      &-counter {
        padding: 20px 41px 0;
        display: flex;
        flex-wrap: wrap;
        &-count {
          flex: 1;
          border: solid 1px #e5e5e5;
          padding: 0 26px 50px;
          margin-right: 26px;
          &-member {
            font-size: 18px;
            color: #333;
            margin-top: 36px;
          }
          &-slider {
            display: flex;
            &-left {
              flex: 1;
            }
            &-right {
              width: 30px;
              line-height: 38px;
              padding-left: 3px;
            }
          }
          &-num {
            font-size: 16px;
            color: #999;
          }
        }
        &-result {
          width: 355px;
          border: solid 1px #e5e5e5;
          &-title {
            background: #f8f6f6;
            line-height: 50px;
            font-size: 20px;
            margin: 0;
            padding-left: 21px;
          }
          &-content {
            padding-top: 40px;
            min-height: 238px;
            border: 1px solid transparent;
            box-sizing: border-box;
          }
          &-text {
            width: 282px;
            text-align: center;
            margin: 0 auto 90px;
            padding-top: 40px;
            color: #999;
            font-size: 14px;
          }
          &-item {
            width: 300px;
            margin: 20px auto;
            font-size: 20px;
            padding-right: 10px;
            &-key {
            }
            &-value {
              float: right;
            }
            &-count {
              float: right;
              color: #0090ff;
            }
            &-hint {
              color: #999;
              margin: 0;
              font-size: 14px;
            }
          }
          &-total {
            width: 310px;
            min-height: 66px;
            color: #fff;
            margin: 30px auto 0;
            font-size: 16px;
            background: #0090ff;
            p {
              margin: 0;
              line-height: 60px;
              text-align: right;
              padding-right: 10px;
            }
            &-hightlight {
              font-size: 30px;
            }
          }
          &-export {
            color: #999;
            text-align: right;
            padding-right: 21px;
            cursor: pointer;
            &:hover {
              color: #0090ff;
            }
          }
        }
      }
      &-hint {
        background: rgb(255, 245, 229);
        color: #ee6a00;
        line-height: 60px;
        margin: 67px 41px 0;
        padding-left: 24px;
      }
      &-intro {
        padding-left: 86px;
        font-size: 16px;
        color: #333;
        position: relative;
        &-icon {
          position: absolute;
          top: 10px;
          left: 62px;
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
      &-content {
        margin: 0 10px 20px;
        &-top {
          padding-left: 20px;
          height: 50px;
          line-height: 50px;
        }
        &-flow {
          padding-left: 20px;
        }
        &-step {
          margin-left: 30px;
          font-size: 14px;
        }
        &-charge {
          padding-left: 40px;
          font-size: 14px;
          &-terms {
            padding-left: 58px;
            font-size: 14px;

            &-num {
              left: 40px;
            }
          }
        }
        &-calculate {
          display: block;
          padding:0 0 10px 45px;
          position: relative;
          &-img{
            position: absolute;
            left: 14px;
            top: 2px;
          }
          &-weight {
            padding: 0;
          }
        }
        &-counter {
          padding: 10px;
          &-count {
            margin: 0 0 10px;
            padding: 0 16px 40px;
          }
          &-result {
            width: 100%;
            &-item {
              width: 100%;
              box-sizing: border-box;
              padding: 0 10px;
            }
            &-total {
              width: 100%;
            }
          }
        }
        &-hint {
          margin: 10px;
        }
        &-intro {
          padding: 0 8px 0 40px;
          font-size: 14px;
          &-icon {
            position: absolute;
            top: 10px;
            left: 18px;
            width: 8px;
            height: 3px;
          }
        }
      }
    }
    &-say {
      margin: 12px;
      font-size: 18px;
    }
    &-btn {
      padding-bottom: 30px;
      .price-button {
        line-height: 50px;
        min-width: 120px;
        font-size: 15px;
      }
    }
  }
}
</style>

