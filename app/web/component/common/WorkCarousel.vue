<template>
  <div class="works">
    <div class="works-say"><img src="@/asset/images/引号.png">作品是最好的老师<img src="@/asset/images/引号2.png"></div>
    <div class="works-cabinet">
      <div class="works-cabinet-box" v-for="(item,index) in currentPageData" :key="index">
        <div class="works-cabinet-box-cover" @click="showVideo(item)">
          <img class="works-cabinet-box-cover-img" :src="item.coverUrl">
          <img class="works-cabinet-box-cover-player" src="@/asset/images/作品播放.png" alt="" @click="showVideo(item)">
        </div>
        <h5 class="works-cabinet-box-title">{{item.workName}}<span class="works-cabinet-box-title-type" v-show="item.type">{{item.type}}</span></h5>
        <p class="works-cabinet-box-author">作者： {{item.author}}</p>
      </div>
    </div>
    <div class="works-paging">
      <el-button type="primary" class="works-paging-btn works-paging-btn-left" @click="goPre()"></el-button>
      <span :class="['works-paging-dot', {'works-paging-dot-active': currentPage == index}]" v-for="(i,index) in countPage" :key="index" @click="whichPage(index)" @mouseover="whichPage(index)"></span>
      <el-button type="primary" class="works-paging-btn works-paging-btn-right" @click="goNext()"></el-button>
    </div>
  </div>
</template>
<script>
import workData from '@/component/data/workData.js'

export default {
  name: 'WorkCarousel',
  data() {
    return {
      workData: workData,
      perPage: 6,
      currentPage: 0,
      currentPageData: '',
      pageAnimationTimer: null
    }
  },
  computed: {
    countPage() {
      return Math.ceil(this.workData.length / this.perPage)
    }
  },
  mounted() {
    this.currentPageData = this.workData.slice(0, 6)
    this.pageAnimation()
  },
  methods: {
    whichPage(index) {
      let start = 6 * index
      let end = 6 * (index + 1)
      this.currentPage = index
      this.currentPageData = this.workData.slice(start, end)
    },
    goPre() {
      this.currentPage = this.currentPage === 0 ? 4 : this.currentPage - 1
      this.whichPage(this.currentPage)
    },
    goNext() {
      this.currentPage = this.currentPage === 4 ? 0 : this.currentPage + 1
      this.whichPage(this.currentPage)
    },
    pageAnimation() {
      this.pageAnimationTimer = setInterval(() => {
        this.currentPage =
          this.currentPage + 1 > this.countPage - 1 ? 0 : this.currentPage + 1
        this.whichPage(this.currentPage)
      }, 9500)
    },
    showVideo(item) {
      this.$emit('showVideo', item.videoUrl)
    }
  },
  beforeDestroy() {
    clearInterval(this.pageAnimationTimer)
  }
}
</script>

<style lang='scss'>
.works {
  &-cabinet {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    min-height: 626px;
    &-box {
      width: 380px;
      // max-height: 273px;
      margin-bottom: 40px;
      background-color: #ffffff;
      box-shadow: 0px 8px 12px 0px rgba(98, 98, 98, 0.08);
      &:hover {
        box-shadow: 0px 8px 12px 0px rgba(98, 98, 98, 0.4);
        transition: all 200ms ease-in;
      }
      &-cover {
        width: 380px;
        position: relative;
        cursor: pointer;
        &-img {
          width: 100%;
          object-fit: cover;
        }
        &-player {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left: -30px;
          margin-top: -30px;
          cursor: pointer;
        }
      }
      &-title {
        color: #333;
        font-size: 16px;
        padding: 10px 68px 11px 20px;
        margin: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
        &-type {
          position: absolute;
          right: 20px;
          top: 9px;
          background: #f0f0f0;
          font-size: 14px;
          color: #666;
          padding: 5px 12px;
          font-weight: normal;
          border-radius: 14px;
        }
      }
      &-author {
        color: #999;
        font-size: 12px;
        padding: 0 0 11px 20px;
        margin: 0;
      }
    }
  }
  &-paging {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &-dot {
      width: 10px;
      height: 10px;
      display: inline-block;
      background: #e3e6eb;
      border-radius: 50%;
      margin: 0 7px;
      &-active {
        background: #6ab7f9;
      }
    }
    &-btn {
      display: inline-block;
      width: 30px;
      height: 30px;
      padding: 0;
      border-radius: 50%;
      background: #6ab7f9;
      position: relative;
      cursor: pointer;
      &::before {
        position: absolute;
        top: 8px;
        left: 12px;
        content: '';
        border: 1px solid #fff;
        width: 10px;
        height: 10px;
        display: inline-block;
        border-right-color: transparent;
        border-top-color: transparent;
        transform: rotate(45deg);
      }
      &-right {
        transform: rotate(180deg);
      }
    }
  }
  &-say {
    text-align: center;
    padding: 0 0 50px;
    font-size: 16px;
    color: #5e94be;
    img {
      margin: 0 10px;
      width: 15px;
    }
  }
}
@media screen and (max-width: 769px) {
  .works {
    &-cabinet {
      padding: 8px;
      min-height: 480px;
      &-box {
        width: 48%;
        height: auto;
        margin-bottom: 12px;
        &-cover {
          width: 100%;
          &-player {
            width: 40px;
            margin-left: -20px;
            margin-top: -20px;
          }
        }
        &-title {
          font-size: 14px;
          padding: 4px 30px 4px 4px;
          font-weight: normal;
          &-type {
            padding: 0 5px;
            top: 4px;
            right: 4px;
            font-size: 12px;
          }
        }
        &-author {
          font-size: 12px;
          padding: 0 0 5px 4px;
        }
      }
    }
  }
}
</style>

