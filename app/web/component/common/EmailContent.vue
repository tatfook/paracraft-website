<template>
  <div class="email-border">
    <div class="email-border-content">
      <p class="email-border-content-main">{{name}}，您好！</p>
      <p class="email-border-content-main">我是Paracraft的创始人李西峙，感谢您对Paracraft的关注！
        我们已经收到了您填写的信息，工作人员将会尽快与您联系。
        很高兴您选择了Paracraft。
      </p>
      <p class="email-border-content-main">
        在1989年，7岁的我照着一本父亲给我的书，编写了我人生中的第一个程序，并从此爱上了编程。
        小学期间，我完成了大量个人作品，从入门阶段到了可以随心所欲去编程的状态。
        通过Paracraft，我希望将这种愉悦的学习体验带给更多的孩子们。
      </p>
      <p class="email-border-content-main">
        如您有任何问题，欢迎随时通过邮件和我联系，我会在看到的第一时间回复您。
        您也可以关注我们的微信号（微信搜索：Paracraft）获取支持。
      </p>
      <p class="email-border-content-main">
        祝好！
      </p>
      <p class="email-border-content-ending">李西峙</p>
      <p class="email-border-content-ending">CEO & NPL语言与Paracraft创始人</p>
      <p class="email-border-content-ending">Email：lixizhi@paraengine.com</p>
      <div class="email-border-content-box">
        <p>通过下面链接了解Paracraft：</p>
        <p><a class="email-border-content-box-link" href="http://paracraft.keepwork.com/download?lang=zh">下载Paracraft </a></p>
        <p><a class="email-border-content-box-link" href="#">《Paracraft编程入门》</a></p>
        <p>关注微信号Paracraft ，观看部分教学视频</p>
        <p><img src="@/asset/images/weixin.png" alt=""></p>
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
    console.log('this.route', this.$route)
    this.name = this.$route.query.name
  }
}
</script>
<style lang="scss">
.email-border {
  max-width: 624px;
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
    p{
      color: #333;
      font-size: 14px;
    }
    &-main {
      margin: 40px;
    }
    &-ending {
      margin: 8px 40px;
      text-align: right;
    }
    &-box {
      margin: 40px;
      background: rgb(242, 249, 255);
      padding: 30px 34px;
      &-link {
        color: #0090ff;
      }
    }
  }
}
</style>


