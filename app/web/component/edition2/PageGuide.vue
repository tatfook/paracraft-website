<template>
  <div class="page-guide">
    <div class="page-guide-title">
      <img class="page-guide-line-icon" src="@/asset/images/edition2/guidLineIcon.png" alt="">
      <span>导引</span>
      <img class="page-guide-line-icon page-guide-line-icon-rorate" src="@/asset/images/edition2/guidLineIcon.png" alt="">
    </div>
    <div class="page-guide-content">
      <div class="page-guide-item" v-for="(anchorItem, index) in pageAnchors" :key="index" @click="scrollToById(anchorItem.id)">
        <span class="page-guide-item-index">{{anchorItem.index}}</span>{{anchorItem.text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageAnchors: {
      type: Array,
      required: true
    }
  },
  methods: {
    scrollToById(id) {
      document.getElementById(id).scrollIntoView()
    }
  }
}
</script>


<style lang="scss" scoped>
$itemWidth: 364px;
$itemHeight: 88px;
$offsetX: 77px;
$offsetY: 20px;
.page-guide {
  text-align: center;
  padding: 60px 0 0;
  background: url('../../asset/images/edition2/guidBg.jpg') no-repeat bottom
    #f0f5f9;
  background-size: cover;
  &-title {
    font-size: 26px;
    color: #333;
  }
  &-line-icon {
    margin-right: 24px;
    vertical-align: middle;
    &-rorate {
      margin: 0 0 0 24px;
      transform: rotate(180deg);
    }
  }
  &-content {
    position: relative;
    width: 1221px;
    margin: 0 auto;
    height: 370px;
    margin-top: 60px;
  }
  &-item {
    width: 364px;
    height: 88px;
    line-height: 88px;
    color: #fff;
    background: url('../../asset/images/edition2/guidButtonBg.png') no-repeat;
    display: inline-block;
    position: absolute;
    font-size: 19px;
    cursor: pointer;
    &-index {
      font-size: 30px;
      margin-right: 12px;
      font-weight: bold;
    }
    &:hover {
      color: #f6ff03;
    }
  }
  @for $i from 0 through 3 {
    &-item:nth-child(#{$i + 1}) {
      left: ($itemWidth - $offsetX) * $i;
      top: ($itemHeight - $offsetY) * $i;
    }
  }
}
</style>
<style lang="scss" scoped>
@media (max-width: 767px) {
  .page-guide {
    padding-top: 25px;
    &-title {
      font-size: 16px;
    }
    &-line-icon {
      width: 25px;
      margin-right: 12px;
      &-rorate {
        margin: 0 0 0 12px;
      }
    }
    &-content {
      width: 100%;
      height: auto;
      margin-top: 25px;
      padding: 0 8px 24px;
      box-sizing: border-box;
    }
    &-item {
      width: 50%;
      position: relative;
      height: 44px;
      line-height: 44px;
      font-size: 12px;
      background-size: contain;
      &-index {
        font-size: 15px;
        margin-right: 6px;
      }
    }
    @for $i from 0 through 3 {
      &-item:nth-child(#{$i + 1}) {
        left: 0;
        top: 0;
      }
    }
  }
}
</style>
