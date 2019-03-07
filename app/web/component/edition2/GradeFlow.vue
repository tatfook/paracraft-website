<template>
  <div class="grade-flow">
    <div class="grade-flow-title">评分流程</div>
    <div class="grade-flow-nav">
      <div class="grade-flow-nav-item" v-for="(nav, index) in navs" :key="index" @click="showByIndex(index+1)">
        <div class="grade-flow-nav-item-line" :class="{'grade-flow-nav-item-line-active':activeIndex > (index+1)}"></div>
        <div class="grade-flow-nav-item-index" :class="{'grade-flow-nav-item-index-active':activeIndex > index}">{{nav.id}}</div>
        <div class="grade-flow-nav-item-info">{{nav.text}}</div>
      </div>
    </div>
    <div class="grade-flow-content">
      <div class="grade-flow-arrow" v-show="activeIndex > 1" @click="showPrev">
        <img class="grade-flow-arrow-default" src="@/asset/images/edition2/step_prev.png" alt="">
        <img class="grade-flow-arrow-hover" src="@/asset/images/edition2/step_prev_hover.png" alt="">
      </div>
      <div class="grade-flow-arrow grade-flow-arrow-rotate" v-show="activeIndex < 4" @click="showNext">
        <img class="grade-flow-arrow-default" src="@/asset/images/edition2/step_prev.png" alt="">
        <img class="grade-flow-arrow-hover" src="@/asset/images/edition2/step_prev_hover.png" alt="">
      </div>
      <img class="grade-flow-content-image" :src="activeImg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          id: 1,
          text: '选择作品'
        },
        {
          id: 2,
          text: '进入作品观看'
        },
        {
          id: 3,
          text: '观看作品3分钟后收到评分提醒'
        },
        {
          id: 4,
          text: '完成评分并提交'
        }
      ],
      activeIndex: 1
    }
  },
  computed: {
    activeImg() {
      let imgSrc = ''
      switch (this.activeIndex) {
        case 1:
          imgSrc = require('@/asset/images/edition2/step_1.jpg')
          break
        case 2:
          imgSrc = require('@/asset/images/edition2/step_2.jpg')
          break
        case 3:
          imgSrc = require('@/asset/images/edition2/step_3.jpg')
          break
        case 4:
          imgSrc = require('@/asset/images/edition2/step_4.jpg')
          break
        default:
          break
      }
      return imgSrc
    }
  },
  methods: {
    showPrev() {
      this.activeIndex--
    },
    showNext() {
      this.activeIndex++
    },
    showByIndex(index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.grade-flow {
  &-title {
    font-size: 22px;
    color: #4088ff;
  }
  &-nav {
    margin: 38px auto 46px;
    display: flex;
    width: 976px;
    max-width: 100%;
    &-item {
      flex: 1;
      text-align: center;
      position: relative;
      &-index {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 50%;
        background-color: #e3e2e2;
        border: 8px solid #f7f6f6;
        font-size: 20px;
        color: #666;
        cursor: pointer;
        &-active {
          background-color: #ffb903;
          color: #fff;
          border-color: #ffeab3;
        }
      }
      &-line {
        position: absolute;
        height: 2px;
        left: 50%;
        right: -50%;
        top: 28px;
        background-color: #ccc;
        &-active {
          background-color: #ffb903;
        }
      }
      &-info {
        font-size: 15px;
        color: #303133;
        margin-top: 16px;
      }
      &:last-child {
        .grade-flow-nav-item-line {
          display: none;
        }
      }
    }
  }
  &-content {
    width: 830px;
    max-width: 100%;
    margin: 0 auto;
    position: relative;
    &-image {
      max-width: 100%;
    }
  }
  &-arrow {
    position: absolute;
    left: 0;
    top: 42%;
    width: 38px;
    height: 60px;
    line-height: 66px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
    &-default {
      display: inline;
    }
    &-hover {
      display: none;
    }
    &:hover {
      .grade-flow-arrow-default {
        display: none;
      }
      .grade-flow-arrow-hover {
        display: inline;
      }
    }
    &-rotate {
      left: auto;
      right: 0;
      transform: rotate(180deg);
    }
  }
}
</style>
<style lang="scss" scoped>
@media (max-width: 767px) {
  .grade-flow {
    &-nav {
      margin-bottom: 16px;
      &-item {
        &-index {
          width: 25px;
          height: 25px;
          border-width: 5px;
          font-size: 13px;
          line-height: 25px;
        }
        &-line {
          top: 18px;
        }
        &-info {
          font-size: 12px;
        }
      }
    }
    &-content {
      padding: 0 20px;
      box-sizing: border-box;
    }
    &-arrow {
      width: 28px;
      height: 44px;
      line-height: 48px;
      top: 14vw;
      left: 20px;
      &-rotate {
        left: auto;
        right: 20px;
      }
    }
  }
}
</style>
