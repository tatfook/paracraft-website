<template>
  <div class="lesson-system-phone">
    <div class="lesson-system-phone-banner">
      <img class="lesson-system-phone-banner-img" src="@/asset/images/banner_phone.jpg" alt="">
      <div class="lesson-system-phone-banner-button" @click="isShowGatherInfo"></div>
    </div>
    <div class="lesson-system-phone-intro">
      <div class="lesson-system-phone-intro-top">
        <p class="lesson-system-phone-intro-top-text"><img class="lesson-system-phone-intro-top-text-icon" src="@/asset/images/特色.png" alt="">3D动画游戏编程，所有的孩子都爱学</p>
        <p class="lesson-system-phone-intro-top-text"><img class="lesson-system-phone-intro-top-text-icon" src="@/asset/images/特色.png" alt="">同一环境，从浅入深，从启蒙到专业</p>
        <p class="lesson-system-phone-intro-top-text"><img class="lesson-system-phone-intro-top-text-icon" src="@/asset/images/特色.png" alt="">基于作品，玩中学，做中学，学会编程，学会学习</p>
      </div>
      <div class="lesson-system-phone-intro-box" v-for="(i,index) in introData" :key="index">
        <div class="lesson-system-phone-intro-box-icon">
          <img class="lesson-system-phone-intro-box-icon-img" :src="i.imgUrl" alt="">
        </div>
        <div class="lesson-system-phone-intro-box-text">
          <p class="lesson-system-phone-intro-box-text-desc">{{i.text}}</p>
        </div>
      </div>
    </div>
    <div class="lesson-system-phone-atlas">
      <h3 class="lesson-system-phone-atlas-title">记忆 + 思维 = 3D动画 + 编程 = 《3D动画与编程课》</h3>
      <div class="lesson-system-phone-atlas-icon"></div>
      <div class="lesson-system-phone-atlas-subtitle">人类的记忆如同计算机中的3D动画；人类的思维如同计算机中的编程</div>
      <div class="lesson-system-phone-atlas-charts">
        <img class="lesson-system-phone-atlas-charts-arrows" src="@/asset/images/向上.png" alt="">
        <div class="lesson-system-phone-atlas-charts-cabinet">
          <div class="lesson-system-phone-atlas-charts-cabinet-chart">
            <p>Paracraft入门</p>
          </div>
          <div class="lesson-system-phone-atlas-charts-cabinet-chart">动画基础</div>
          <div class="lesson-system-phone-atlas-charts-cabinet-chart">编程基础</div>
          <div class="lesson-system-phone-atlas-charts-cabinet-chart">动画进阶</div>
          <div class="lesson-system-phone-atlas-charts-cabinet-chart">编程进阶</div>
          <div class="lesson-system-phone-atlas-charts-cabinet-chart">编程高阶</div>
        </div>
        <div class="lesson-system-phone-atlas-charts-period">
          <div class="lesson-system-phone-atlas-charts-period-text">课时：3</div>
          <div class="lesson-system-phone-atlas-charts-period-text">课时：8</div>
          <div class="lesson-system-phone-atlas-charts-period-text">课时：19</div>
          <div class="lesson-system-phone-atlas-charts-period-text">课时：10</div>
          <div class="lesson-system-phone-atlas-charts-period-text">课时：22</div>
          <div class="lesson-system-phone-atlas-charts-period-text">课时：12</div>
        </div>
        <p class="lesson-system-phone-atlas-charts-hint">注：针对您具体的教学需求，比如侧重编程还是动画，需要多少课时的课程，可以做些应的筛选。具体请咨询我们。</p>
      </div>
    </div>
    <div class="lesson-system-phone-schedule">
      <h3 class="lesson-system-phone-schedule-title">课表抢先看</h3>
      <div class="lesson-system-phone-schedule-icon"></div>
      <div class="lesson-system-phone-schedule-table" v-for="(i,index) in tableDataList" :key="index">
        <h4 class="lesson-system-phone-schedule-table-title">{{i.tableName}}</h4>
        <el-table class="lesson-system-phone-schedule-table-case" :data="i.tableResource" border height="300" style="width:100%" :row-class-name="tableRowClassName" :header-row-class-name="headerRowStyle">
          <el-table-column prop="id" label="序号" width="65"></el-table-column>
          <el-table-column prop="name" label="课程名称" width="80"></el-table-column>
          <el-table-column label="教学基本要求">
            <template slot-scope="scope">
              <p v-html="scope.row.desc"></p>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="lesson-system-phone-schedule-table">
        <h4 class="lesson-system-phone-schedule-table-title">CAD课程</h4>
        <p class="lesson-system-phone-schedule-table-episode">另外我们还有7节CAD课程，讲授如何使用Paracraft里的NPL CAD模型方块通过编程CAD的方式来建模，可以比基于粒子（方块）创建的3D模型有更高的精度。我们推荐您选用。</p>
        <el-table class="lesson-system-phone-schedule-table-case" :data="tableData.CADData" border height="300" style="width:100%" :row-class-name="tableRowClassName" :header-row-class-name="headerRowStyle">
          <el-table-column prop="id" label="序号" width="65"></el-table-column>
          <el-table-column prop="name" label="课程名称" width="80"></el-table-column>
          <el-table-column label="教学基本要求">
            <template slot-scope="scope">
              <p v-html="scope.row.desc"></p>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="lesson-system-phone-suggest">
      <div class="lesson-system-phone-suggest-title">教学建议</div>
      <div class="lesson-system-phone-suggest-icon"></div>
      <div class="lesson-system-phone-suggest-box">
        <img class="lesson-system-phone-suggest-box-cover" src="@/asset/images/教学建议01.jpg" alt="">
        <h3 class="lesson-system-phone-suggest-box-title">教学</h3>
        <p class="lesson-system-phone-suggest-box-desc"><img class="lesson-system-phone-suggest-box-desc-icon" src="@/asset/images/教学01.png" alt="">基于实践和项目，鼓励学生先跟着做，通过模仿获得大量实际体验</p>
        <p class="lesson-system-phone-suggest-box-desc"><img class="lesson-system-phone-suggest-box-desc-icon" src="@/asset/images/教学02.png" alt="">在学生已经有大量体验的基础上，老师引导学生逐步建立起系统的理论知识，在这个过程中仍然要侧重引导学生多观察多自我总结</p>
      </div>
      <div class="lesson-system-phone-suggest-box">
        <img class="lesson-system-phone-suggest-box-cover" src="@/asset/images/教学建议02.jpg" alt="">
        <h3 class="lesson-system-phone-suggest-box-title">学法</h3>
        <p class="lesson-system-phone-suggest-box-desc"><img class="lesson-system-phone-suggest-box-desc-icon" src="@/asset/images/学法01.png" alt="">进行大量的实践操作</p>
        <p class="lesson-system-phone-suggest-box-desc"><img class="lesson-system-phone-suggest-box-desc-icon" src="@/asset/images/学法02.png" alt="">通过对比教师示范示例、修改演示等，找到开发打造原创3D动画、游戏的方法和技巧</p>
        <p class="lesson-system-phone-suggest-box-desc"><img class="lesson-system-phone-suggest-box-desc-icon" src="@/asset/images/学法03.png" alt="">将作品推向市场</p>
      </div>
    </div>
    <div class="lesson-system-phone-refrecen">
      <div class="lesson-system-phone-refrecen-title">参考资料</div>
      <div class="lesson-system-phone-refrecen-icon"></div>
      <img class="lesson-system-phone-refrecen-cover" src="@/asset/images/书1.png" alt="">
      <h2 class="lesson-system-phone-refrecen-bookname">《Paracraft编程入门》</h2>
      <h3 class="lesson-system-phone-refrecen-author">李西峙主编</h3>
      <img class="lesson-system-phone-refrecen-cover" src="@/asset/images/书2.png" alt="">
      <h2 class="lesson-system-phone-refrecen-bookname">《Paracraft编程入门》</h2>
      <h3 class="lesson-system-phone-refrecen-author">李西峙主编</h3>
    </div>
    <div class="lesson-system-phone-bottom">
      <div class="lesson-system-phone-bottom-center">
        <p class="lesson-system-phone-bottom-center-text">我们诚心邀请培训机构、学校、教育工作者和我们一起推广Paracraft</p>
        <span class="lesson-system-phone-bottom-center-button" @click="isShowGatherInfo">立即咨询</span>
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
  name: 'LessonSystem_Phone',
  data() {
    return {
      showGatherInfoDialog: false,
      tableData: tableData,
      introData: [
        {
          imgUrl: require('@/asset/images/特色01.png'),
          text: '基于自主学习，从兴趣到作品，最大程度解决“难教”的问题'
        },
        {
          imgUrl: require('@/asset/images/特色02.png'),
          text: '丰富的项目，人人都可以找到合适的项目，拥有平滑的学习曲线'
        },
        {
          imgUrl: require('@/asset/images/特色03.png'),
          text: '良好模块化和分层的软件设计，清晰简洁的文档，优良的自学土壤'
        },
        {
          imgUrl: require('@/asset/images/特色04.png'),
          text:
            '感性到理性，碎片到系统，重要体验到抽象建模，玩中学，做中学，循环往复，迭代上升'
        },
        {
          imgUrl: require('@/asset/images/特色05.png'),
          text: '编程是文理科的融合，抽象建模是其间的桥梁，融会贯通所有知识'
        },
        {
          imgUrl: require('@/asset/images/特色06.png'),
          text:
            '编程的核心是抽象建模，知识的核心也是抽象建模，学会编程，学会学习'
        }
      ]
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
  components: {
    GatherInfoDialog,
    QuickToTop
  },
  methods: {
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
  }
}
</script>
<style lang="scss" scoped>
.lesson-system-phone {
  &-banner {
    position: relative;
    &-img {
      width: 100%;
    }
    &-button {
      height: 90px;
      width: 140px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &-intro {
    border: 1px solid #2397f3;
    border-top-width: 13px;
    border-radius: 8px;
    margin: 15px 15px 43px;
    box-shadow: 0px 8px 27px 0px rgba(63, 138, 250, 0.13);
    &-top {
      padding: 25px;
      background: #e5f4ff;
      margin-bottom: 35px;
      &-text {
        position: relative;
        padding-left: 40px;
        &-icon {
          position: absolute;
          width: 16px;
          left: 0;
        }
      }
    }
    &-box {
      margin: 15px;
      background-color: #f2f8ff;
      border-radius: 10px;
      display: flex;
      padding: 20px 0;
      &-icon {
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        &-img {
          width: 50px;
        }
      }
      &-text {
        flex: 1;
        &-desc {
          line-height: 30px;
          margin: 0 10px 0 0;
          color: #666666;
        }
      }
    }
  }
  &-atlas {
    background: #f9faff;
    padding-bottom: 40px;
    &-title {
      text-align: center;
      font-size: 21px;
      color: #333;
      padding: 40px 30px 0;
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
      padding: 0 30px 10px;
      color: #666666;
      text-align: center;
      font-size: 14px;
      line-height: 25px;
    }
    &-charts {
      margin: 15px;
      position: relative;
      &-arrows {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }
      &-cabinet {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        min-height: 230px;
        &-chart {
          width: 15%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 12px;
          text-align: center;
          border-radius: 6px 6px 0px 0px;
          &:nth-child(1) {
            background: linear-gradient(90deg, #fc972b 0%, #ffc66c 100%);
            height: 69px;
          }
          &:nth-child(2) {
            background: linear-gradient(90deg, #0a96dd 0%, #00bde5 100%);
            height: 90px;
          }
          &:nth-child(3) {
            background: linear-gradient(90deg, #0a96dd 0%, #00bde5 100%);
            height: 90px;
          }
          &:nth-child(4) {
            background: linear-gradient(90deg, #a339fc 0%, #c07dff 100%);
            height: 138px;
          }
          &:nth-child(5) {
            background: linear-gradient(90deg, #a339fc 0%, #c07dff 100%);
            height: 138px;
          }
          &:nth-child(6) {
            background: linear-gradient(90deg, #eb3f5b 0%, #ff7d7d 100%);
            height: 186px;
          }
        }
      }
      &-period {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
        &-text {
          width: 15%;
          font-size: 12px;
        }
      }
      &-hint {
        font-size: 12px;
        color: #666;
        text-align: center;
        margin-top: 30px;
      }
    }
  }
  &-schedule {
    padding-bottom: 52px;
    &-title {
      text-align: center;
      font-size: 21px;
      color: #333;
      padding: 40px 30px 0;
      font-weight: normal;
    }
    &-icon {
      width: 51px;
      height: 9px;
      background-color: #2397f3;
      border-radius: 4px;
      margin: 24px auto;
    }
    &-table {
      padding: 0 15px;
      &-title {
        text-align: center;
        margin: 50px 0 24px;
        color: #2397f3;
        font-size: 18px;
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
            // .has-gutter {
            tr.table-header {
              border: 1px solid red;
              th {
                background: #e5f4ff;
                color: #333;
              }
            }
            // }
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
    background: #f9faff;
    padding-bottom: 40px;
    &-title {
      text-align: center;
      font-size: 21px;
      color: #333;
      padding: 40px 30px 0;
      font-weight: normal;
    }
    &-icon {
      width: 51px;
      height: 9px;
      background-color: #2397f3;
      border-radius: 4px;
      margin: 24px auto;
    }
    &-box {
      margin: 15px 15px 30px;
      border-radius: 8px;
      overflow: hidden;
      background: #fff;
      box-shadow: 0px 8px 27px 0px rgba(63, 138, 250, 0.13);
      padding-bottom: 15px;
      &-cover {
        width: 100%;
      }
      &-title {
        margin: 10px 15px 0;
        padding: 15px 0;
        border-bottom: 1px solid #d4d4d4;
      }
      &-desc {
        margin: 25px 15px;
        padding-left: 34px;
        position: relative;
        font-size: 14px;
        line-height: 25px;
        color: #666;
        &-icon {
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
  &-refrecen {
    padding: 0 10px 40px;
    text-align: center;
    &-title {
      text-align: center;
      font-size: 21px;
      color: #333;
      padding: 40px 30px 0;
      font-weight: normal;
    }
    &-icon {
      width: 51px;
      height: 9px;
      background-color: #2397f3;
      border-radius: 4px;
      margin: 24px auto;
    }
    &-cover {
      width:100%;
    }
    &-bookname {
      font-size: 16px;
      color: #303133;
      margin-top: 30px;
    }
    &-author {
      font-size: 16px;
      color: #303133;
      margin: 12px 0 60px;
      font-weight: normal;
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
        &:hover {
          background: #e0e9ff;
        }
      }
    }
  }
}
</style>

