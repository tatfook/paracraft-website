<template>
  <div class="company-mission">
    <div class="company-mission-banner">
    </div>
    <div class="company-mission-explain">
      <h4 class="company-mission-explain-title">产品</h4>
      <p class="company-mission-explain-dot"><span class="prefix-dot"></span>Paracraft创意空间：是一款免费开源的3D动画与编程创作软件。你可以用它创建3D场景和人物，制作动画和电影，学习和编写计算机程序。与成千上万的用户一起学习和分享你的个人作品。
      <span class="detail">详见：<a class="detail-url" href="https://biz.keepwork.com" target="_blank">https://biz.keepwork.com</a></span>
      </p>
      <p class="company-mission-explain-dot"><span class="prefix-dot"></span>keepwork个人作品网：为Paracraft用户提供了探索，学习和创作的网络平台；内置强大的在线创作工具，包括基于Markdown语法的个人网站编辑器，课件制作与发布，在线文档创作，项目管理与协作，Git云存储，云盘。
      <span class="detail">详见：<a class="detail-url" href="https://keepwork.com" target="_blank">https://keepwork.com</a></span>
      </p>
      <p class="company-mission-explain-dot"><span class="prefix-dot"></span>NPL语言：Paracraft使用NPL语言开发完成。NPL语言全称Neural Parallel Language(神经元并行计算机语言)是李西峙于2004年为了解决基于相似原理的AI仿真问题研发的一个编程语言，语法与主流编程语言兼容，NPL社区通过github开源了200多万行引擎与NPL类库代码，期待编程爱好者的加入。
      <span class="detail">NPL语言官网：<a class="detail-url" href="https://github.com/LiXizhi/NPLRuntime" target="_blank">https://github.com/LiXizhi/NPLRuntime</a></span>
      </p>
      <p class="company-mission-explain-dot"><span class="prefix-dot"></span>魔法哈奇：2009年上线以来，有超过500万注册用户的3D儿童社区。全部使用NPL语言开发。
      <span class="detail">官网：<a class="detail-url" href="http://haqi.61.com" target="_blank">http://haqi.61.com</a></span>
      </p>

      <h4 class="company-mission-explain-title">核心资产</h4>
      <p class="company-mission-explain-dot"><span class="prefix-dot"></span>大富网络由一支专业的技术开发团队组成</p>
      <p class="company-mission-explain-dot"><span class="prefix-dot"></span>我们的全部精力都在开发技术平台, 将它做得更完善, 更易用</p>
      <p class="company-mission-explain-dot"><span class="prefix-dot"></span>我们有最合适的工具，专注于ParaEngine引擎和NPL语言的开发</p>
      <p class="company-mission-explain-dot"><span class="prefix-dot"></span>我们拥有自主知识产权，编写代码超过200万行</p>
      <p class="company-mission-explain-dot"><span class="prefix-dot"></span>22项软件著作权及PCT国际专利</p>
      <p class="company-mission-explain-dot"><span class="prefix-dot"></span>原创的NPL脚本语言及MCML标记语言、以及分布式3D游戏引擎</p>
      <p class="company-mission-explain-more">点击了解更多:</p>
      <p class="company-mission-explain-more-item"><a class="item-url" href="https://keepwork.com/official/company/coreassets" target="_blank">核心技术(必看)</a></p>
      <p class="company-mission-explain-more-item"><a class="item-url" href="https://keepwork.com/" target="_blank">个人作品网</a></p>
      <p class="company-mission-explain-more-item"><a class="item-url" href="https://keepwork.com/official/company/building" target="_blank">NPL研发中心办公场所</a></p>
      <p class="company-mission-explain-more-item"><a class="item-url" href="https://keepwork.com/official/company/partner" target="_blank">配天集团：专注投资程序员和远程开发团队</a></p>

      
    </div>
  </div>
</template>
<style lang="scss" scoped>
.company-mission {
  &-banner {
    max-width: 1200px;
    min-height: 300px;
    margin: 30px auto 0;
    background: url('../../asset/images/ban3.jpg') no-repeat top center;
    &-title {
      font-size: 30px;
      color: #fff;
      padding: 100px 0 0 100px;
      margin: 0;
    }
    &-text {
      font-size: 16px;
      color: #fff;
      padding-left: 100px;
      margin: 0 0 20px 0;
    }
  }
  &-explain {
    max-width: 1200px;
    margin: 60px auto;
    color: #333;
    font-size: 14px;
    &-title {
      font-size: 18px;
    }
    &-hint {
      font-size: 14px;
      color: #878787;
      border-left: 1px solid #c2c0c0;
      padding-left: 10px;
    }
    &-dot {
      padding-left: 12px;
      position: relative;
      line-height: 26px;
      .prefix-dot {
        position: absolute;
        left: 0px;
        top: 10px;
        width: 8px;
        display: inline-block;
        height: 8px;
        border-radius: 50%;
        background: #000;
      }
      .detail {
        color: #909399;
        display: block;
        &-url {
          color: #0090ff;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    &-more {
      font-size: 14px;
      color: #999;
      &-item {
        padding-left: 30px;
        .item-url {
          color: #0090ff;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
        &::before{
          content: '';
          display: inline-block;
          border: 5px solid;
          border-top-color: transparent;
          border-right-color: transparent;
          border-bottom-color: transparent;
        }
      }
    }
  }
}
</style>
