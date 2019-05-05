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
        <div class="lesson-system-atlas-center-chart">
          <img src="lesson-system-atlas-center-chart-arrows" alt="">
          
        </div>
      </div>
    </div>

    <gather-info-dialog :showGatherInfoDialog="showGatherInfoDialog" @close="closeGatherInfoDialog"></gather-info-dialog>
    <quick-to-top></quick-to-top>

  </div>
</template>
<script>
import GatherInfoDialog from '@/component/common/GatherInfoDialog'
import QuickToTop from './QuickToTop'

export default {
	name: 'LessonSystem',
	data() {
		return {
			showGatherInfoDialog: false
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
		}
	}
}
</script>

<style lang="scss" scoped>
.lesson-system {
	&-banner {
		background: linear-gradient(to right, #351d85, #081746);
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
					margin: 38px 0 90px;
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
					background: linear-gradient(90deg, #fff110 0%, #fae512 53%, #f5d914 100%);
					&:hover {
						background: linear-gradient(90deg, #d4d08f 0%, #e9db5f 53%, #f0d822 100%);
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
			&-box {
				width: 400px;
				box-sizing: border-box;
				padding: 76px 0;
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
			max-width: 1200px;
			margin: 0 auto;
			padding: 97px 0;
			&-title {
				color: #333;
				font-size: 34px;
				text-align: center;
				margin: 0;
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
		}
	}
}
</style>

