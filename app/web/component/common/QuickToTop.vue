<template>
  <div>
    <div @click="backToTop" class="quickToTop" v-if="showQuickToTop">
      <div class="toTopIcon"></div>
      <div class="topText">↑↑</div>
      <!-- <div class="hoverWrap"><div class="hoverText">↑↑</div></div> -->
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'QuickToTop',
  data() {
    return {
      showQuickToTop: false
    }
  },
  methods: {
    currentPageYOffset() {
      window.pageYOffset > 2160
        ? (this.showQuickToTop = true)
        : (this.showQuickToTop = false)
    },
    backToTop() {
      window.scrollTo(0, 0)
    }
  },
  created() {
    window.addEventListener('scroll', _.debounce(this.currentPageYOffset, 200))
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.currentPageYOffset)
  }
}
</script>

<style lang="scss" scoped>
.quickToTop {
  height: 46px;
  width: 46px;
  border-radius: 50%;
  line-height: 46px;
  box-shadow: 0px 0px 2px #fff, 0px 0px 2px #fff;
  border: 1px solid #6ea7f3;
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 99;
  text-align: center;
  background-color: #fff;
  text-decoration: none;
  color: #409eff;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 0px 2px #0075b4, 0px 0px 2px #0075b4; 
  }
}
@media print {
  .quickToTop {
    display: none;
  }
}
</style>


