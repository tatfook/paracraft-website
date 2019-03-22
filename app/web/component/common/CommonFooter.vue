<template>
  <div class="common-footer">
    <div class="common-footer-content">
      <div class="common-footer-content-part">
        <ul class="common-footer-content-part-list">
          <li class="common-footer-content-part-list-title">产品</li>
          <li @click="handleSelect('top')">Paracraft 创意空间</li>
          <li><a href="/download">免费下载</a></li>
          <li><a href="https://keepwork.com/">作品社区</a></li>
          <li><a href="https://keepwork.com/NPL">NPL动画与编程大赛</a></li>
        </ul>
      </div>
      <div class="common-footer-content-part">
        <ul class="common-footer-content-part-list">
          <li class="common-footer-content-part-list-title">服务</li>
          <li @click="handleSelect('oursAdvantage')">我们的优势</li>
          <li @click="handleSelect('oursService')">服务项目</li>
          <li @click="handleSelect('price')">价格</li>
        </ul>
      </div>
      <div class="common-footer-content-part">
        <ul class="common-footer-content-part-list">
          <li class="common-footer-content-part-list-title">致社区</li>
          <li><a href="https://keepwork.com/official/paracraft/to-educators">致教育者</a></li>
          <li><a href="https://keepwork.com/official/paracraft/to-parents">给父母的话</a></li>
          <li><a href="https://keepwork.com/official/paracraft/to-developers">致开发者</a></li>
          <li><a href="https://github.com/LiXizhi/NPLRuntime/wiki">对爱好编程的你说</a></li>
        </ul>
      </div>
      <div class="common-footer-content-part">
        <ul class="common-footer-content-part-list">
          <li class="common-footer-content-part-list-title">关于我们</li>
          <li><a href="/companyProfile ">公司简介</a></li>
          <!-- <li><a href="/news">新闻动态</a></li> -->
        </ul>
      </div>
      <div class="common-footer-content-part">
        <ul class="common-footer-content-part-list">
          <li class="common-footer-content-part-list-title">联系我们</li>
          <li>电话：0755-86967012</li>
          <li>邮箱：support@paraengine.com</li>
        </ul>
      </div>
      <div class="common-footer-content-part common-footer-content-part-last">
        <ul class="common-footer-content-part-list">
          <li class="common-footer-content-part-list-title">关于Paracraft</li>
          <li>
            <img class="common-footer-content-part-list-weixin" src="@/asset/images/weixin.png" alt="">
          </li>
          <li>Paracraft公众号</li>
        </ul>
      </div>
    </div>
    <div class="common-footer-phone">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="产品" name="1">
          <ul class="common-footer-content-part-list">
            <li @click="handleSelect('top')">Paracraft 创意空间</li>
            <li><a href="/download">免费下载</a></li>
            <li><a href="https://keepwork.com/">作品社区</a></li>
            <li><a href="https://keepwork.com/NPL">NPL动画与编程大赛</a></li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="服务" name="2">
          <ul class="common-footer-content-part-list">
            <li @click="handleSelect('oursAdvantage')">我们的优势</li>
            <li @click="handleSelect('oursService')">服务项目</li>
            <li @click="handleSelect('price')">价格</li>
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
          <p class="common-footer-phone-contact-left-content-text">电话：0755-86967012</p>
          <p class="common-footer-phone-contact-left-content-text">邮箱：support@paraengine.com</p>
        </div>
      </div>
      <div class="common-footer-phone-contact-right">
        <img class="common-footer-content-part-list-weixin" src="@/asset/images/weixin.png" alt="">
        <p>Paracraft公众号</p>
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
          }
          this.$nextTick(() => {
            let theId = document.getElementById(key)
            scrollIntoView(theId, {
              scrollMode: 'if-needed',
              behavior: 'smooth',
              block: 'start'
            })
          })
          break
        case 'experience':
          this.showGatherInfo()
          break
        default:
          break
      }
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
      &-list {
        list-style: none;
        padding: 0 0 20px;
        font-size: 12px;
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
    &-contact {
      display: none;
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
        &-left {
          display: flex;
          align-items: center;
          &-content {
            &-text {
              padding: 0 20px 0 0;
            }
          }
        }
        &-right {
        }
      }
    }
  }
}
</style>


