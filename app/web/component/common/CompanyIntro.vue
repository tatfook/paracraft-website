<template>
  <div class="company-intro">
    <div class="profile-carousel">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in carouselImgUrl" :key="item.url">
          <img :src="item.url" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="profile">
      <h3 class="profile-title">公司简介</h3>
      <p class="profile-text">大富网络技术有限公司是上市公司大富科技（300134）旗下的子公司。</p>
      <p class="profile-text">大富网络（Tatfook Network Inc.）是一家探索面向<strong>个人的3d设计</strong>,<strong>人工智能</strong>与<strong>未来教育</strong>的软件公司。公司自主研发了3D动画与编程创作软件Paracraft和个人作品网keepwork，拥有自己的3D引擎和编程语言NPL。</p>
      <p class="profile-text">我们是由一支专业的技术开发团队组成，专注于ParaEngine引擎和NPL语言的开发，我们有原创的NPL脚本语言及MCML标记语言，分布式的3D游戏引擎，22项软件著作权及PCT国际专利，编写代码超过200万行，拥有经过多年自主研发的青少年编程教学工具——Paracraft，有自己的知识产权。Paracraft融入了我们几十年积累下来的编程体验和对软件编程的理解，我们开放了自主开发的游戏引擎和相关生态软件，打造成一个自主学习的平台（即Paracraft+KeepWork），希望能携手学校和教育机构一起培养下一代的优秀的程序员，也帮助更广大的孩子们学会自主学习的方法。</p>
      <h3 class="profile-title">创始人 & CEO</h3>
      <p class="profile-text">李西峙: 深圳市大富网络技术有限公司CEO， NPL计算机语言创世人， Paracraft软件首席程序员。</p>
      <p class="profile-text">1982年出生于哈尔滨。2005年毕业于浙江大学计算机系（竺可桢学院）。大学期间他在国内外会议和刊物上发表游戏引擎，脚本语言技术，三维动画制作，CPU芯片设计相关论文和著作8篇。2004年出于长期对人工智能的兴趣和研究，他创立了NPL语言（Neural Parallel Language）和ParaEngine 3D游戏引擎，至今写了过百万的开源代码和各种开发工具。Paracraft也是基于NPL语言开发的一款3D创作工具。2007-2015年，他先后获得著名风险投资IDG和国内著名企业家的投资，并任CEO。 </p>
      <p class="profile-text prorile-text-self">大家好，我是李西峙。大家在用的Paracraft软件就是我编写的。 1989年，7岁的我照着一本我父亲给我的书编写了我人生中第一个程序，并从此喜欢上了编程，小学期间我完成了大量个人作品，到了随心所欲的入门状态。更多内容可以看我写的书<a href="https://keepwork.com/s/textbook" target="_blank" class="book-link">《Paracraft编程入门》</a></p>

      <div class="profile-box">
        <h5 class="profile-box-title">新闻</h5>
        <a href="https://keepwork.com/official/company/building" target="_blank" class="profile-box-intro">
          <div class="profile-box-intro-img"></div><img src="@/asset/images/新闻.jpg" alt="">
          <div class="profile-box-intro-words">2017.10.1 大富网络入住NPL南山研发中心</div>
        </a>
      </div>
      <div class="profile-box">
        <h5 class="profile-box-title">投资者关系</h5>
        <a href="https://keepwork.com/official/company/index#" target="_blank" class="profile-box-intro">
          <div class="profile-box-intro-img"></div><img src="@/asset/images/投资关系.jpg" alt="">
          <div class="profile-box-intro-words invest-word">ParaEngine工作室成立于2005年8月; 2007年获得IDG和著名IT企业家的联合投资,2014年团队加入大富配天集团，目前团队属于大富网络，为Tatfook子公司。</div>
        </a>
      </div>
    </div>
    <div class="profile-history">
      <h3 class="profile-history-title">公司项目发展历程</h3>
      <p class="profile-history-detail">详见：发展历程 >></p>
      <div class="profile-history-content">
        <img class="profile-history-content-img" src="@/asset/images/历程.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CompanyIntro',
  data() {
    return {
      carouselImgUrl: [
        {
          url: require('@/asset/images/公司介绍ban.jpg')
        },
        {
          url: require('@/asset/images/公司介绍ban2.jpg')
        },
        {
          url: require('@/asset/images/公司介绍ban3.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
  max-width: 1200px;
  margin: 60px auto;
}
.profile-carousel {
  max-width: 1200px;
  margin: 30px auto;
  overflow: hidden;
}
.profile-title {
  text-align: center;
  font-size: 24px;
  color: #333;
  font-weight: normal;
  margin-top: 60px;
}
.profile-box-intro {
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  background-color: #fafafa;
}
.profile-box-title {
  border-bottom: 1px solid #dcdcdc;
  font-size: 24px;
  padding: 20px 0;
  font-weight: normal;
  color: #333;
}
.profile-box-intro-words.invest-word {
  color: #333;
}
.profile-text {
  font-size: 14px;
  color: #333;
}
.profile-box-intro-words {
  padding: 30px;
  font-size: 14px;
  color: #0090ff;
}
.prorile-text-self {
  font-size: 14px;
  color: #878787;
  border-left: 2px solid #cac6c6;
  padding-left: 6px;
}
.book-link {
  color: #0090ff;
  text-decoration: none;
}
.profile-history {
  min-height: 1082px;
  background: #f9faff;
}
.profile-history-title {
  font-size: 22px;
  color: #333;
  text-align: center;
  margin: 0;
  padding: 60px 0 20px;
}
.profile-history-detail {
  text-align: center;
  font-size: 16px;
  color: #0090ff;
  margin-bottom: 70px;
  /* margin: 0; */
}
.profile-history-content {
  background: url('../../asset/images/huaban.jpg') top center #f9faff no-repeat;
  background-size: 1600px;
  text-align: center;
}
@media screen and (max-width: 768px) {
  .profile-history-content {
    &-img {
      width: 100%;
    }
  }
}
</style>

