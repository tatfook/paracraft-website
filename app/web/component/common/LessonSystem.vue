<template>
  <div class="lesson-system">
    <div class="lesson-system-banner">
      <div class="lesson-system-banner-center">
        <div class="lesson-system-banner-center-left">
          <p class="lesson-system-banner-center-left-typical">
            <span class="lesson-system-banner-center-left-typical-paracraft">Paracraft</span>
            <span class="lesson-system-banner-center-left-typical-highlight">课程系统</span>
          </p>
          <p class="lesson-system-banner-center-left-target">学会编程，学会学习</p>
          <span class="lesson-system-banner-center-left-free" @click="isShowGatherInfo">合作咨询</span>
        </div>
      </div>
    </div>
    <div class="lesson-system-intro">
      <div class="lesson-system-intro-top">
        <div class="lesson-system-intro-top-wrap">
          <img class="lesson-system-intro-top-wrap-img" src="@/asset/images/配图.png" alt="">
        </div>
        <div class="lesson-system-intro-top-brief">
          <p class="lesson-system-intro-top-brief-text"><img class="text-prefix-icon" src="@/asset/images/01.png" alt="">3D动画游戏编程，所有的孩子都爱学</p>
          <p class="lesson-system-intro-top-brief-text"><img class="text-prefix-icon" src="@/asset/images/01.png" alt="">同一环境，从浅入深，从启蒙到专业</p>
          <p class="lesson-system-intro-top-brief-text"><img class="text-prefix-icon" src="@/asset/images/01.png" alt="">基于作品，玩中学，做中学，学会编程，学会学习</p>
        </div>
      </div>
      <div class="lesson-system-intro-boxs">
        <div class="lesson-system-intro-boxs-box">
          <p class="lesson-system-intro-boxs-box-text">基于自主学习，从兴趣到作品，最大程度解决“难教”的问题</p>
        </div>
        <div class="lesson-system-intro-boxs-box">
          <p class="lesson-system-intro-boxs-box-text">丰富的项目，人人都可以找到合适的项目，拥有平滑的学习曲线</p>
        </div>
        <div class="lesson-system-intro-boxs-box">
          <p class="lesson-system-intro-boxs-box-text">良好模块化和分层的软件设计，清晰简洁的文档，优良的自学土壤</p>
        </div>
        <div class="lesson-system-intro-boxs-box">
          <p class="lesson-system-intro-boxs-box-text">感性到理性，碎片到系统，重要体验到抽象建模，玩中学，做中学，循环往复，迭代上升</p>
        </div>
        <div class="lesson-system-intro-boxs-box">
          <p class="lesson-system-intro-boxs-box-text">编程是文理科的融合，抽象建模是其间的桥梁，融会贯通所有知识</p>
        </div>
        <div class="lesson-system-intro-boxs-box">
          <p class="lesson-system-intro-boxs-box-text">编程的核心是抽象建模，知识的核心也是抽象建模，学会编程，学会学习</p>
        </div>
      </div>
    </div>
    <div class="lesson-system-atlas">
      <div class="lesson-system-atlas-center">
        <h3 class="lesson-system-atlas-center-title">记忆 + 思维 = 3D动画 + 编程 = 《3D动画与编程课》</h3>
        <div class="lesson-system-atlas-center-icon"></div>
        <p class="lesson-system-atlas-center-subtitle">人类的记忆如同计算机中的3D动画；人类的思维如同计算机中的编程</p>
        <div class="lesson-system-atlas-center-charts">
          <img class="lesson-system-atlas-center-charts-arrows" src="@/asset/images/arrows.png" alt="">
          <div class="lesson-system-atlas-center-charts-cabinet">
            <div class="lesson-system-atlas-center-charts-cabinet-chart">Paracraft入门</div>
            <div class="lesson-system-atlas-center-charts-cabinet-chart">动画基础</div>
            <div class="lesson-system-atlas-center-charts-cabinet-chart">编程基础</div>
            <div class="lesson-system-atlas-center-charts-cabinet-chart">动画进阶</div>
            <div class="lesson-system-atlas-center-charts-cabinet-chart">编程进阶</div>
            <div class="lesson-system-atlas-center-charts-cabinet-chart">编程高阶</div>
          </div>
          <div class="lesson-system-atlas-center-charts-period">
            <div class="lesson-system-atlas-center-charts-period-text">课时：3</div>
            <div class="lesson-system-atlas-center-charts-period-text">课时：8</div>
            <div class="lesson-system-atlas-center-charts-period-text">课时：19</div>
            <div class="lesson-system-atlas-center-charts-period-text">课时：10</div>
            <div class="lesson-system-atlas-center-charts-period-text">课时：22</div>
            <div class="lesson-system-atlas-center-charts-period-text">课时：12</div>
          </div>
        </div>
        <p class="lesson-system-atlas-center-hint">注：针对您具体的教学需求，比如侧重编程还是动画，需要多少课时的课程，可以做些相应的筛选。具体请咨询我们。</p>
      </div>
    </div>
    <div class="lesson-system-schedule">
      <h3 class="lesson-system-schedule-title">课表抢先看</h3>
      <div class="lesson-system-atlas-center-icon"></div>
      <div class="lesson-system-schedule-table" v-for="(i,index) in tableDataList" :key="index">
        <h4 class="lesson-system-schedule-table-title">{{i.tableName}}</h4>
        <el-table class="lesson-system-schedule-table-case" :data="i.tableResource" border style="width:100%" :row-class-name="tableRowClassName" :header-row-class-name="headerRowStyle">
          <el-table-column prop="id" label="序号" width="94"></el-table-column>
          <el-table-column prop="name" label="课程名称" width="280"></el-table-column>
          <el-table-column label="教学基本要求">
            <template slot-scope="scope">
              <p v-html="scope.row.desc"></p>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="lesson-system-schedule-table">
        <h4 class="lesson-system-schedule-table-title">CAD课程</h4>
        <p class="lesson-system-schedule-table-episode">另外我们还有7节CAD课程，讲授如何使用Paracraft里的NPL CAD模型方块通过编程CAD的方式来建模，可以比基于粒子（方块）创建的3D模型有更高的精度。我们推荐您选用。</p>
        <el-table class="lesson-system-schedule-table-case" :data="tableData.CADData" border style="width:100%" :row-class-name="tableRowClassName" :header-row-class-name="headerRowStyle">
          <el-table-column prop="id" label="序号" width="94"></el-table-column>
          <el-table-column prop="name" label="课程名称" width="280"></el-table-column>
          <el-table-column label="教学基本要求">
            <template slot-scope="scope">
              <p v-html="scope.row.desc"></p>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="lesson-system-suggest">
      <div class="lesson-system-suggest-center">
        <h3 class="lesson-system-atlas-center-title">教学建议</h3>
        <div class="lesson-system-atlas-center-icon"></div>
        <div class="lesson-system-suggest-center-boxs">
          <div class="lesson-system-suggest-center-boxs-box-cover">
            <img class="lesson-system-suggest-center-boxs-box-img" src="@/asset/images/教学建议图01.jpg" alt="">
          </div>
          <div class="lesson-system-suggest-center-boxs-box">
            <h3 class="lesson-system-suggest-center-boxs-box-title">教学</h3>
            <p class="lesson-system-suggest-center-boxs-box-text"><img class="lesson-system-suggest-center-boxs-box-text-img" src="@/asset/images/教学01.png" alt="">基于实践和项目，鼓励学生先跟着做，通过模仿获得大量实际体验</p>
            <p class="lesson-system-suggest-center-boxs-box-text"><img class="lesson-system-suggest-center-boxs-box-text-img" src="@/asset/images/教学02.png" alt="">在学生已经有大量体验的基础上，老师引导学生逐步建立起系统的理论知识，在这个过程中仍然要侧重引导学生多观察多自我总结</p>
          </div>
        </div>
        <div class="lesson-system-suggest-center-boxs">
          <div class="lesson-system-suggest-center-boxs-box">
            <h3 class="lesson-system-suggest-center-boxs-box-title">学习</h3>
            <p class="lesson-system-suggest-center-boxs-box-text"><img class="lesson-system-suggest-center-boxs-box-text-img" src="@/asset/images/学法01.png" alt="">进行大量的实践操作</p>
            <p class="lesson-system-suggest-center-boxs-box-text"><img class="lesson-system-suggest-center-boxs-box-text-img" src="@/asset/images/学法02.png" alt="">通过对比教师示范示例、修改演示等，找到开发打造原创3D动画、游戏的方法和技巧</p>
            <p class="lesson-system-suggest-center-boxs-box-text"><img class="lesson-system-suggest-center-boxs-box-text-img" src="@/asset/images/学法03.png" alt="">将作品推向市场</p>
          </div>
          <div class="lesson-system-suggest-center-boxs-box-cover">
            <img class="lesson-system-suggest-center-boxs-box-img" src="@/asset/images/教学建议图02.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="lesson-system-reference">
      <h3 class="lesson-system-atlas-center-title">参考资料</h3>
      <div class="lesson-system-atlas-center-icon"></div>
      <img class="lesson-system-reference-img" src="@/asset/images/参考资料.jpg" alt="">
      <div class="lesson-system-reference-books">
        <div class="lesson-system-reference-books-book">
          <p class="lesson-system-reference-books-book-name">《Paracraft编程入门》</p>
          <p class="lesson-system-reference-books-book-author">李西峙主编</p>
        </div>
        <div class="lesson-system-reference-books-book lesson-system-reference-books-book-animation">
          <p class="lesson-system-reference-books-book-name">《Paracraft创意动画入门》</p>
          <p class="lesson-system-reference-books-book-author">于平主编</p>
        </div>
      </div>
    </div>
    <div class="lesson-system-bottom">
      <div class="lesson-system-bottom-center">
        <p class="lesson-system-bottom-center-text">我们诚心邀请培训机构、学校、教育工作者和我们一起推广Paracraft</p>
        <span class="lesson-system-bottom-center-button" @click="isShowGatherInfo">立即咨询</span>
      </div>
    </div>
    <gather-info-dialog :showGatherInfoDialog="showGatherInfoDialog" @close="closeGatherInfoDialog"></gather-info-dialog>
    <quick-to-top></quick-to-top>

  </div>
</template>
<script>
import GatherInfoDialog from '@/component/common/GatherInfoDialog'
import QuickToTop from './QuickToTop'
import tableData from '@/component/data/lessonSystemWorkData'

export default {
  name: 'LessonSystem',
  data() {
    return {
      showGatherInfoDialog: false,
      tableData: tableData
    }
  },
  computed: {
    tableDataList() {
      return [
        {
          tableName: 'Paracraft入门',
          tableResource: this.tableData.paracraftData
        },
        {
          tableName: '动画基础',
          tableResource: this.tableData.animationData
        },
        {
          tableName: '编程基础',
          tableResource: this.tableData.programmeData
        },
        {
          tableName: '动画进阶',
          tableResource: this.tableData.forwardAnimationData
        },
        {
          tableName: '编程进阶',
          tableResource: this.tableData.forwardProgrammeData
        },
        {
          tableName: '编程高阶',
          tableResource: this.tableData.highProgrammeData
        }
      ]
    }
  },
  created() {
    window.addEventListener('resize', _.debounce(this.clientWidth, 200))
  },
  components: {
    GatherInfoDialog,
    QuickToTop
  },
  methods: {
    clientWidth() {
      let client_width = document.body.clientWidth
      if (client_width < 789) {
        this.$router.push({
          name: 'LessonSystem_Phone'
        })
        return
      }
      this.$router.push({
        name: 'LessonSystem'
      })
    },
    isShowGatherInfo() {
      this.showGatherInfoDialog = true
    },
    closeGatherInfoDialog() {
      this.showGatherInfoDialog = false
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return 'warning-row'
      }
      return ''
    },
    headerRowStyle({ row, rowIndex }) {
      return 'table-header'
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.clientWidth)
  }
}
</script>

<style lang="scss" scoped>
.lesson-system {
  &-banner {
    background: linear-gradient(to right, rgb(74, 88, 221), rgb(35, 114, 245));
    &-center {
      background: url(../../asset/images/lesson-banner.jpg) top center no-repeat;
      background-size: auto 100%;
      max-width: 1920px;
      min-height: 460px;
      box-sizing: border-box;
      margin: 0 auto;
      padding: 100px 0;
      &-left {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 12px;
        &-typical {
          max-width: 695px;
          color: #fff;
          margin: 0;
          &-paracraft {
            font-size: 66px;
            color: #fee900;
            font-weight: bold;
            text-shadow: 3px 3px #3917ca;
            line-height: 70px;
            padding-right: 15px;
          }
          &-highlight {
            line-height: 70px;
            font-size: 50px;
            color: #fff;
            font-weight: bold;
          }
        }
        &-target {
          font-size: 34px;
          color: #fff;
          margin: 8px 0 60px;
        }
        &-free {
          display: inline-block;
          width: 177px;
          line-height: 63px;
          text-align: center;
          border-radius: 30px;
          color: #333;
          margin-right: 37px;
          cursor: pointer;
          font-size: 20px;
          background: linear-gradient(
            90deg,
            #fff110 0%,
            #fae512 53%,
            #f5d914 100%
          );
          &:hover {
            background: linear-gradient(
              90deg,
              #d4d08f 0%,
              #e9db5f 53%,
              #f0d822 100%
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
  &-intro {
    max-width: 1200px;
    margin: 102px auto 108px;
    border: 1px solid #2397f3;
    border-top-width: 13px;
    border-radius: 16px;
    &-top {
      padding: 23px 71px;
      display: flex;
      background-color: #e5f4ff;
      &-wrap {
        width: 366px;
        &-img {
          width: 366px;
        }
      }
      &-brief {
        flex: 1;
        padding-left: 56px;
        &-text {
          margin: 30px 0;
          font-size: 24px;
          color: #333;
          padding-left: 49px;
          position: relative;
          .text-prefix-icon {
            position: absolute;
            left: 0;
            top: 3px;
          }
        }
      }
    }
    &-boxs {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding-bottom: 80px;
      &-box {
        width: 400px;
        box-sizing: border-box;
        padding: 66px 0;
        position: relative;
        &::before {
          content: '';
          width: 183px;
          height: 1px;
          background-color: #0090ff;
          position: absolute;
          bottom: 38px;
          left: 50%;
          transform: translate(-50%);
        }
        &::after {
          content: '';
          width: 36px;
          height: 6px;
          background-color: #0090ff;
          position: absolute;
          border-radius: 3px;
          bottom: 35px;
          left: 50%;
          transform: translate(-50%);
        }
        &-text {
          max-width: 270px;
          margin: 0 auto;
          text-align: center;
          font-size: 18px;
          line-height: 30px;
          color: #333;
        }
      }
    }
  }
  &-atlas {
    background-color: #f9faff;
    &-center {
      max-width: 928px;
      margin: 0 auto;
      padding: 97px 0;
      &-title {
        color: #333;
        font-size: 34px;
        text-align: center;
        margin: 0;
        font-weight: normal;
      }
      &-icon {
        width: 51px;
        height: 9px;
        background-color: #2397f3;
        border-radius: 4px;
        margin: 24px auto;
      }
      &-subtitle {
        font-size: 20px;
        color: #666;
        text-align: center;
      }
      &-charts {
        position: relative;
        min-height: 400px;
        &-arrows {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translate(-50%);
        }
        &-cabinet {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          min-height: 330px;
          &-chart {
            min-width: 130px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            border-radius: 6px 6px 0px 0px;
            &:nth-child(1) {
              background: linear-gradient(90deg, #fc972b 0%, #ffc66c 100%);
              height: 52px;
            }
            &:nth-child(2) {
              background: linear-gradient(90deg, #0a96dd 0%, #00bde5 100%);
              height: 78px;
            }
            &:nth-child(3) {
              background: linear-gradient(90deg, #0a96dd 0%, #00bde5 100%);
              height: 78px;
            }
            &:nth-child(4) {
              background: linear-gradient(90deg, #a339fc 0%, #c07dff 100%);
              height: 136px;
            }
            &:nth-child(5) {
              background: linear-gradient(90deg, #a339fc 0%, #c07dff 100%);
              height: 136px;
            }
            &:nth-child(6) {
              background: linear-gradient(90deg, #eb3f5b 0%, #ff7d7d 100%);
              height: 195px;
            }
          }
        }
        &-period {
          display: flex;
          justify-content: space-between;
          &-text {
            width: 130px;
            text-align: center;
            padding: 25px 0 60px;
            font-size: 16px;
            color: #333;
          }
        }
      }
      &-hint {
        font-size: 16px;
        text-align: center;
        color: #666;
      }
    }
  }
  &-schedule {
    padding: 93px 0;
    max-width: 1015px;
    margin: 0 auto;
    &-title {
      font-size: 30px;
      text-align: center;
      color: #333;
      font-weight: normal;
    }
    &-table {
      &-title {
        text-align: center;
        margin: 50px 0 24px;
        color: #2397f3;
        font-size: 22px;
        font-weight: normal;
      }
      &-episode {
        text-align: center;
        margin: 25px auto 28px;
        max-width: 910px;
        color: #333;
        font-size: 16px;
      }
      /deep/ .el-table {
        td {
          padding: 2px 0;
        }
        .warning-row {
          background: #f5f8fc;
        }
      }
      &-case {
        /deep/ .el-table__header-wrapper {
          .el-table__header {
            .has-gutter {
              tr.table-header {
                th {
                  background: #e5f4ff;
                  color: #333;
                }
              }
            }
          }
        }
        // /deep/ .el-table__body-wrapper {
        // 	.el-table__body {
        // 		.el-table__row {
        // 			&:nth-child(2n) {
        // 				background: #f5f8fc;
        // 			}
        // 		}
        // 	}
        // }
      }
    }
  }
  &-suggest {
    background-color: #f9faff;
    &-center {
      max-width: 1200px;
      margin: 0 auto;
      padding: 97px 0;
      &-boxs {
        height: 346px;
        display: flex;
        background: #fff;
        box-shadow: 0px 17px 42px 1px rgba(59, 98, 156, 0.07);
        margin: 47px 0 70px;
        border-radius: 0 0 12px 12px;
        overflow: hidden;
        &-box {
          flex: 1;
          &-cover {
            width: 568px;
          }
          &-img {
            height: 346px;
          }
          &-title {
            max-width: 500px;
            margin: 43px auto 0;
            border-bottom: 1px solid #d4d4d4;
            padding-bottom: 24px;
            font-size: 26px;
            color: #333;
            font-weight: normal;
          }
          &-text {
            max-width: 500px;
            box-sizing: border-box;
            padding-left: 35px;
            position: relative;
            margin: 28px auto;
            font-size: 16px;
            line-height: 30px;
            color: #666;
            &-img {
              position: absolute;
              left: 0;
              top: 0;
            }
          }
        }
      }
    }
  }
  &-reference {
    padding: 97px 0 40px;
    max-width: 1307px;
    margin: 0 auto;
    &-img {
      margin: 30px 0 5px;
    }
    &-books {
      display: flex;
      justify-content: center;
      &-book {
        width: 540px;
        text-align: center;
        &-animation {
          padding-left: 26px;
          box-sizing: border-box;
        }
        &-name {
          font-size: 20px;
          color: #303133;
          line-height: 39px;
          font-weight: bold;
          margin-bottom: 4px;
        }
        &-author {
          font-size: 20px;
          color: #303133;
          margin-top: 4px;
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
        font-size: 20px;
        padding: 0 10px;
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
        &:hover {
          background: #e0e9ff;
        }
      }
    }
  }
}
</style>

