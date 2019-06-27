<template>
  <div class="company-profile">
    <div class="company-profile-banner">
      <div class="company-profile-banner-center">
        <div class="company-profile-banner-center-text">
          <h2 class="company-profile-banner-center-text-title">公司介绍</h2>
          <p class="company-profile-banner-center-text-desc">大富网络是一家探索面向个人的3d设计, 人工智能与未来教育的软件公司</p>
          <p class="company-profile-banner-center-text-desc">“团结全世界的资源和力量, 共同创建属于每一个人的游戏世界”</p>
        </div>
      </div>
    </div>
    <div class="company-profile-tab">
      <div :class="['company-profile-tab-item', {'selected': selectedTabIndex == 0}]" @click="selectedItem(0)">公司简介</div>
      <div :class="['company-profile-tab-item', {'selected': selectedTabIndex == 1}]" @click="selectedItem(1)">愿景与使命</div>
      <div :class="['company-profile-tab-item', {'selected': selectedTabIndex == 2}]" @click="selectedItem(2)">产品与核心资产</div>
    </div>
    <div class="company-profile-intro" v-show='selectedTabIndex == 0'>
      <!-- from editor -->
      <!-- <vue-markdown :toc="true" :source="validData" :postrender="postrender" toc-anchor-link-symbol="" toc-anchor-class="iconfont icon-link_" /> -->
      <company-intro></company-intro>
    </div>
    <div class="company-profile-mission" v-show='selectedTabIndex == 1'>
      <!-- from editor -->
      <company-mission></company-mission>
    </div>
    <div class="company-profile-product" v-show='selectedTabIndex == 2'>
      <!-- from editor -->
      <core-product></core-product>
    </div>
  </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import axios from 'axios'
import CompanyIntro from '@/component/common/CompanyIntro'
import CompanyMission from '@/component/common/CompanyMission'
import CoreProduct from '@/component/common/CoreProduct'

export default {
  name: 'CompanyProfile',
  data() {
    return {
      validData: '',
      selectedTabIndex: 0
    }
  },
  mounted() {
    this.getEditorData()
  },
  components: {
    VueMarkdown,
    CompanyIntro,
    CompanyMission,
    CoreProduct
  },
  methods: {
    stripScripts(htmlData) {
      var div = document.createElement('div')
      div.innerHTML = htmlData
      var scripts = div.getElementsByTagName('script')
      var i = scripts.length
      while (i--) {
        scripts[i].parentNode.removeChild(scripts[i])
      }
      return div.innerHTML
    },
    postrender(htmlData) {
      htmlData = this.stripScripts(htmlData)
      return htmlData
    },
    selectedItem(index) {
      this.selectedTabIndex = index
    },
    getEditorData() {
      axios
        .get(
          'https://api.keepwork.com/git/v0/projects/official%2Fcompany/files/official%2Fcompany%2Findex.md'
        )
        .then(response => {
          this.validData = response.data.content
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss">
.company-profile {
  &-banner {
    background: linear-gradient(to right, #2599e7, #61a3fb);
    &-center {
      background: url(../asset/images/ban.jpg) top center no-repeat;
      min-height: 260px;
      border: 1px solid transparent;
      &-text {
        color: #ffffff;
        max-width: 1200px;
        margin: 0 auto;
        // height: 330px;

        &-title {
          margin: 0;
          padding: 60px 0 18px;
          font-size: 28px;
        }
        &-desc {
          font-size: 22px;
        }
      }
    }
  }
  &-tab {
    min-height: 66px;
    background: #f2f2f2;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    &-item {
      width: 280px;
      margin: 0 50px;
      cursor: pointer;
      text-align: center;
      line-height: 66px;
      &.selected {
        color: #2599e7;
      }
    }
  }
}
@media screen and (max-width: 769px) {
  .company-profile {
    &-banner {
      &-center {
        &-text {
          padding: 0;
          text-align: center;
          &-desc {
            font-size: 18px;
          }
        }
      }
    }
    &-intro {
      padding: 0 20px;
    }
  }
}
</style>





