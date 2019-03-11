<template>
  <div class="common-footer">
    <div class="common-footer-content">
      <div class="common-footer-content-part">
        <ul class="common-footer-content-part-list">
          <li class="common-footer-content-part-list-title">产品</li>
          <li>Paracraft 创意空间</li>
          <li><a href="/download">免费下载</a></li>
          <li>作品社区</li>
          <li>NPL动画与编程大赛</li>
        </ul>
      </div>
      <div class="common-footer-content-part">
        <ul class="common-footer-content-part-list">
          <li class="common-footer-content-part-list-title">服务</li>
          <li><a href="/download">我们的优势</a></li>
          <li>服务项目</li>
          <li>价格</li>
        </ul>
      </div>
      <div class="common-footer-content-part">
        <ul class="common-footer-content-part-list">
          <li class="common-footer-content-part-list-title">致社区</li>
          <li><a href="https://keepwork.com/official/paracraft/to-educators">致教育者</a></li>
          <li><a href="https://keepwork.com/official/paracraft/to-parents">给父母的话</a></li>
          <li><a href="https://keepwork.com/official/paracraft/to-developers">致开发者</a></li>
          <li>对爱好编程的你说</li>
        </ul>
      </div>
      <div class="common-footer-content-part">
        <ul class="common-footer-content-part-list">
          <li class="common-footer-content-part-list-title">关于我们</li>
          <li>公司简介</li>
          <li><a href="/download">新闻动态</a></li>
        </ul>
      </div>
      <div class="common-footer-content-part">
        <ul class="common-footer-content-part-list">
          <li class="common-footer-content-part-list-title">联系我们</li>
          <li>电话：0755-86967012</li>
          <li>邮箱：service@KeepWork.com.cn</li>
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
    <div class="common-footer-bottom">
      Paracraft
      |
      <span class="common-footer-bottom-text">粤ICP备14002196号-2© Tatfook</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonFooter'
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
        a{
          text-decoration: none;
          color: #b4b4b4;
        }
        &-title {
          color: #fff;
          padding: 30px 0 8px;
        }
        li + li {
          color: #b4b4b4;
        }
        &-weixin{
          width: 122px;
        }
      }
      &-last{
        text-align: center;
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
</style>


