<template>
  <div class="common-footer">
    <div class="common-footer-content">
      <div class="common-footer-content-part">
        <ul class="common-footer-content-part-list">
          <li class="common-footer-content-part-list-title">产品</li>
          <!-- <li @click="handleSelect('top')">Paracraft 创意空间</li> -->
          <li><a href="http://paracraft.keepwork.com/download?lang=zh" target="_blank">Paracraft下载</a></li>
          <li><a href="https://keepwork.com/" target="_blank">作品社区</a></li>
          <li><a href="https://keepwork.com/NPL" target="_blank">NPL动画与编程大赛</a></li>
        </ul>
      </div>
      <div class="common-footer-content-part">
        <ul class="common-footer-content-part-list">
          <li class="common-footer-content-part-list-title">服务与支持</li>
          <!-- <li @click="handleSelect('oursAdvantage')">我们的优势</li> -->
          <li><a href="https://keepwork.com/official/paracraft/index" target="_blank">解决方案</a></li>
          <li><a href="#" @click.stop.prevent="handleSelect('oursService')">服务项目</a></li>
          <li><a href="#" @click.stop.prevent="handleSelect('price')">价格详情</a></li>
          <li><a href="/curriculum">课程体系</a></li>
        </ul>
      </div>
      <div class="common-footer-content-part">
        <ul class="common-footer-content-part-list">
          <li class="common-footer-content-part-list-title">教育理念</li>
          <li><a href="https://keepwork.com/official/paracraft/to-parents" target="_blank">写给父母们的话</a></li>
          <li><a href="https://keepwork.com/official/paracraft/to-educators" target="_blank">致教育工作者</a></li>
          <li><a href="https://keepwork.com/official/paracraft/to-developers" target="_blank">致开发者</a></li>
          <li><a href="https://keepwork.com/s/autobiography" target="_blank">对爱好编程的你说</a></li>
          <li><a href="https://keepwork.com/official/paracraft/selflearning" target="_blank">关于自主学习</a></li>
        </ul>
      </div>
      <div class="common-footer-content-part">
        <ul class="common-footer-content-part-list">
          <li class="common-footer-content-part-list-title">关于我们</li>
          <li><a href="/companyProfile ">公司介绍</a></li>
          <li><a href="https://api.keepwork.com/storage/v0/siteFiles/3749/raw#宣传页.pdf" target="_blank">宣传页下载</a></li>
        </ul>
      </div>
      <div class="common-footer-content-part">
        <ul class="common-footer-content-part-list">
          <li class="common-footer-content-part-list-title">联系我们</li>
          <li>电话：<br>0755-86967012</li>
          <li>邮箱：<br>support@paraengine.com</li>
          <li @click="showLocation()">地址：<br>深圳市南山区科技园德赛科技大厦西座2303-2304</li>
        </ul>
      </div>
      <div class="common-footer-content-part common-footer-content-part-last">
        <ul class="common-footer-content-part-list">
          <li class="common-footer-content-part-list-title">更多视频请关注</li>
          <li>
            <img class="common-footer-content-part-list-weixin" src="@/asset/images/weixin.png" alt="">
          </li>
          <li>公众号：paracraft</li>
        </ul>
      </div>
    </div>
    <div class="common-footer-phone">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="产品" name="1">
          <ul class="common-footer-content-part-list">
            <li @click="handleSelect('top')">Paracraft 创意空间</li>
            <li><a href="http://paracraft.keepwork.com/download?lang=zh">免费下载</a></li>
            <li><a href="https://keepwork.com/">作品社区</a></li>
            <li><a href="https://keepwork.com/NPL">NPL动画与编程大赛</a></li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="服务" name="2">
          <ul class="common-footer-content-part-list">
            <li @click="handleSelect('oursAdvantage')">我们的优势</li>
            <li @click="handleSelect('oursService')">服务项目</li>
            <li @click="handleSelect('price')">价格</li>
            <li><a href="/curriculum">课程体系</a></li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="致社区" name="3">
          <ul class="common-footer-content-part-list">
            <li><a href="https://keepwork.com/official/paracraft/to-educators">致教育者</a></li>
            <li><a href="https://keepwork.com/official/paracraft/to-parents">给父母的话</a></li>
            <li><a href="https://keepwork.com/official/paracraft/to-developers">致开发者</a></li>
            <li><a href="https://github.com/LiXizhi/NPLRuntime/wiki">对爱好编程的你说</a></li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="关于我们" name="4">
          <ul class="common-footer-content-part-list">
            <li><a href="/companyProfile ">公司简介</a></li>
            <!-- <li><a href="/news">新闻动态</a></li> -->
          </ul>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="common-footer-phone-contact">
      <div class="common-footer-phone-contact-left">
        <div class="common-footer-phone-contact-left-content">
          <p class="common-footer-phone-contact-left-content-text">电话：<br>0755-86967012</p>
          <p class="common-footer-phone-contact-left-content-text">邮箱：<br>support@paraengine.com</p>
          <p class="common-footer-phone-contact-left-content-text" @click="showLocation">地址：<br>深圳市南山区科技园德赛科技大厦西座2303-2304</p>
        </div>
      </div>
      <div class="common-footer-phone-contact-right">
        <p class="common-footer-phone-contact-right-more">更多视频请关注</p>
        <img class="common-footer-content-part-list-weixin" src="@/asset/images/weixin.png" alt="">
        <p class="common-footer-phone-contact-right-text">公众号：paracraft</p>
      </div>
    </div>
    <div class="common-footer-bottom">
      Paracraft
      |
      <span class="common-footer-bottom-text">粤ICP备14002196号-2© Tatfook</span>
    </div>
  </div>
</template>
<script>
import scrollIntoView from 'scroll-into-view-if-needed'

export default {
  name: 'CommonFooter',
  data() {
    return {
      activeName: '1'
    }
  },
  methods: {
    handleSelect(key) {
      switch (key) {
        case 'top':
        case 'oursAdvantage':
        case 'oursService':
        case 'price':
          if (this.$route.name != 'HomePage') {
            this.$router.push('/')
            setTimeout(() => {
              let theId = document.getElementById(key)
              scrollIntoView(theId, {
                scrollMode: 'if-needed',
                behavior: 'smooth',
                block: 'start'
              })
            }, 1000)
            return
          }
          let theId = document.getElementById(key)
          scrollIntoView(theId, {
            scrollMode: 'if-needed',
            behavior: 'smooth',
            block: 'start'
          })
          break
        case 'experience':
          this.showGatherInfo()
          break
        default:
          break
      }
    },
    showLocation() {
      this.$router.push({ name: 'CompanyAddress' })
    }
  }
}
</script>
<style lang="scss" scoped>
.common-footer {
  &-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    &-part {
      flex: 1;
      color: #fff;
      font-size: 14px;
      &-list {
        list-style: none;
        padding: 0 0 20px;
        font-size: 14px;
        line-height: 35px;
        a {
          text-decoration: none;
          color: #b4b4b4;
        }
        &-title {
          color: #fff;
          padding: 30px 0 8px;
          font-size: 14px;
        }
        li + li {
          color: #b4b4b4;
          // cursor: pointer;
        }
        li:nth-last-child(1) {
          cursor: pointer;
        }
        &-weixin {
          width: 122px;
        }
      }
      &-last {
        text-align: center;
      }
    }
  }
  &-phone {
    display: none;
    /deep/ .el-collapse-item {
      .el-collapse-item__header {
        font-size: 14px;
      }
    }
    &-contact {
      display: none;
      &-right {
        &-more {
          font-size: 16px;
        }
        &-text {
          color: rgb(179, 179, 179);
        }
      }
    }
  }
  &-bottom {
    font-size: 13px;
    color: #fff;
    text-align: center;
    line-height: 65px;
    background: #181818;
    &-text {
      color: #666;
    }
  }
}
@media screen and (max-width: 769px) {
  .common-footer {
    &-content {
      display: none;
      &-part-list {
        margin: 0;
        padding: 0;
      }
    }
    &-phone {
      display: block;
      padding: 0 10px;
      /deep/ .el-collapse {
        border: none;
        .el-collapse-item {
          .el-collapse-item__header {
            background: #282828;
            border-bottom: 1px solid #4c4c4c;
            color: #fff;
            .el-collapse-item__arrow {
              color: #8b8b8b;
            }
          }
          .el-collapse-item__wrap {
            background: #282828;
            border-bottom: 1px solid #7e7272;
            .el-collapse-item__content {
              background: #282828;
              color: #b4b4b4;
            }
          }
        }
      }
      &-contact {
        display: flex;
        padding: 10px;
        color: #fff;
        background: rgb(32, 32, 32);
        font-size: 14px;
        &-left {
          display: flex;
          align-items: center;
          // min-width: 236px;
          &-content {
            &-text {
              padding: 0 20px 0 0;
            }
          }
        }
        &-right {
          flex: 1;
          text-align: center;
          img {
            width: 100%;
            max-width: 140px;
          }
        }
      }
    }
  }
}
</style>


