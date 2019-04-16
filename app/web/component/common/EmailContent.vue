<template>
  <div class="email-border">
    <div class="email-border-content">
      <p class="email-border-content-main">{{name}}，您好！</p>
      <p class="email-border-content-main">
        我是Paracraft的作者李西峙。谢谢您对Paracraft的兴趣！
      </p>
      <p class="email-border-content-main">
        我们已经收到了您填写的信息，我们的工作人员会尽快跟您联系。
      </p>
      <p class="email-border-content-main">
        1989年，7岁的我照着一本我父亲给我的书编写了我人生中第一个程序，并从此喜欢上了编程，小学期间我完成了大量个人作品，到了随心所欲的状态。通过Paracraft，我希望带给孩子们同我相似的学习体验。
      </p>
      <p class="email-border-content-main">
        期间您有任何技术问题也可以直接Email我 。
      </p>
      <!-- <p class="email-border-content-main">
        祝好！
      </p> -->
      <br>
      <br>
      <br>
      <p class="email-border-content-ending">李西峙</p>
      <p class="email-border-content-ending">CEO & NPL语言与Paracraft创始人</p>
      <p class="email-border-content-ending">Email：lixizhi@paraengine.com</p>
      <div class="email-border-content-box">
        <p>通过下面链接了解Paracraft：</p>
        <p><a class="email-border-content-box-link" href="http://paracraft.keepwork.com/download?lang=zh" target="_blank">下载Paracraft</a>：推荐Windows版本</p>
        <br>
        <p>参考资料：</p>
        <p><a class="email-border-content-box-link" href="http://cdn.keepwork.com/paracraft/book/paracraft_book_sample.pdf" target="_blank">《Paracraft编程入门》</a>：预览版PDF文档</p>
        <p><a class="email-border-content-box-link" href="https://api.keepwork.com/storage/v0/siteFiles/3393/raw#《3D动画游戏编程》课程教学大纲.pdf" target="_blank">《3D动画游戏编程》课程教学大纲</a>：PDF文档</p>
        <!-- <p>关注微信号Paracraft ，观看部分教学视频</p> -->
        <!-- <p><img src="@/asset/images/weixin.png" class="email-border-content-box-email" alt=""></p> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EmailContent',
  data() {
    return {
      name: ''
    }
  },
  mounted() {
    this.name = decodeURI(this.$route.query.name)
  }
}
</script>
<style lang="scss">
.email-border {
  max-width: 627px;
  margin: 50px auto;
  background: repeating-linear-gradient(
    -45deg,
    rgb(254, 247, 250) 0,
    rgb(254, 247, 250) 30px,
    rgb(137, 190, 224) 0px,
    rgb(137, 190, 224) 60px
  );
  padding: 10px;
  &-content {
    background: #fff;
    padding: 12px;
    p {
      color: #333;
      font-size: 14px;
      line-height: 26px;
    }
    &-main {
      margin: 26px;
    }
    &-ending {
      margin: 8px 40px;
      text-align: right;
    }
    &-box {
      margin: 26px;
      background: rgb(242, 249, 255);
      padding: 30px 34px;
      &-link {
        color: #0090ff;
      }
      &-email {
        max-width: 258px;
        width: 90%;
      }
    }
  }
}
</style>


