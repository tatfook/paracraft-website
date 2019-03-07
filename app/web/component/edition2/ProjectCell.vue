<template>
  <div class="project-cell" :class="{'project-cell-topped': isTopizable && project.isTopped}">
    <span v-if="ranking && level < 3" class="project-cell-medal"><img :src="rankingIcon" alt="medal"></span>
    <span v-if="ranking && level>=3" class="project-cell-medal-4">{{level+1}}</span>
    <div class="project-cell-cover" @click="goProjectDetail(project)">
      <video v-if="(project.extra && project.extra.videoUrl)" class="project-cell-cover-img" controls="controls" :src="(project.extra && project.extra.videoUrl) || ''"></video>
      <img v-else class="project-cell-cover-img" :src="(project.extra && project.extra.imageUrl) || project_default_cover" alt="">
      <div class="video-mask"></div>
      <span class="project-cell-cover-tag" v-if='showRate'>{{projectRate}}</span>
    </div>
    <h4 class="project-cell-title" @click="goProjectDetail(project)">
      <span class="picked" title="精选" v-if="project.choicenessNo"><img src="@/asset/images/edition2/picked.png" alt=""></span>
      <span class="recruitment" title='招募' v-if="project.privilege & 1">招</span>
      <span class="text" :title="project.name" v-html="project.name"></span>
      <span class="id" v-html="`${project._id || '#' + project.id}`"></span>
      <span class="project-type">
          <img slot="reference" :src="projectTypeIcon" alt="" :title="projectType">
      </span>
    </h4>
    <div class="project-cell-like">
      <i class="iconfont icon-browse_fill"></i>
      <span>{{project.visit}}</span>
      <i class="iconfont icon-like-fill"></i>
      <span>{{project.star}}</span>
      <i class="iconfont icon-message_fill"></i>
      <span>{{project.comment}}</span>
    </div>
    <div class="project-cell-author">
      <a :href="`/u/${(project.user && project.user.username) || '未命名'}`" target="_blank" class="project-cell-author-name">
        <img :src="(project.user && project.user.portrait) || default_portrait" alt="portrait">
        <span class="username" :title="(project.user && project.user.username) || '未命名'">{{(project.user && project.user.username) || '未命名'}}</span>
      </a>
      <div class="project-cell-author-time">{{relativeTime(project.createdAt)}}
        <span v-if="isTopizable" class="project-cell-stick stick-hover" @click="toggleStickProject(project)">
          <i class="iconfont icon-vertical-align-top" v-show="!project.isTopped"></i>
          {{project.isTopped ? '取消置顶' : '置顶'}}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import 'moment/locale/zh-cn'
import project_default_cover from '@/asset/images/edition2/project_default_cover.png'
import default_portrait from '@/asset/images/edition2/default_portrait.png'

export default {
  name: 'ProjectCell',
  props: {
    isTopizable: {
      type: Boolean,
      default: false
    },
    ranking: {
      type: Boolean,
      default: false
    },
    level: {
      type: Number,
      default: 0
    },
    project: {
      type: Object,
      default() {
        return {
          user: {}
        }
      }
    }
  },
  data() {
    return {
      project_default_cover: project_default_cover,
      default_portrait: default_portrait
    }
  },
  computed: {
    isEn() {
      return false
    },
    projectType() {
      return this.project.type == 0 ? '网站' : 'paracraft'
    },
    projectTypeIcon() {
      return this.project.type == 0
        ? require('@/asset/images/edition2/website.png')
        : require('@/asset/images/edition2/paracraft.png')
    },
    rankingIcon() {
      return this.level === 0
        ? require('@/asset/images/edition2/gold.png')
        : this.level === 1
        ? require('@/asset/images/edition2/silver.png')
        : require('@/asset/images/edition2/copper.png')
    },
    projectRate() {
      return this.project.rate.toFixed(1)
    },
    showRate() {
      return this.project.type == 1 && this.projectRate > 0 && this.project.extra.rate.count >= 8
    }
  },
  methods: {
    goProjectDetail(project) {
      window.open(`https://keepwork.com/pbl/project/${project.id}/`)
    },
    relativeTime(time) {
      const offset = moment().utcOffset()
      this.isEn ? moment.locale('en') : moment.locale('zh-cn')
      return moment(time)
        .utcOffset(offset)
        .fromNow()
    },
    toggleStickProject(project) {
      this.$emit('toggleStickProject', project)
    }
  }
}
</script>

<style lang='scss'>
.project-cell {
  width: 290px;
  padding: 16px 16px 8px;
  margin: 0 auto 16px;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  background: #fff;
  transition: all 200ms ease-in;
  position: relative;
  &-medal {
    position: absolute;
    top: 0;
    z-index: 10;
  }
  &-medal-4 {
    position: absolute;
    top: 20px;
    left: 0;
    z-index: 10;
    background: url(../../asset/images/edition2/top4_100.png);
    display: inline-block;
    width: 60px;
    height: 28px;
    line-height: 28px;
    color: #fff;
    font-weight: bold;
    text-shadow: 1px 2px 2px #303133;
    text-align: center;
  }
  .red {
    color: red;
  }
  &-topped::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-bottom: 16px solid #2397f3;
    transform: rotate(-45deg);
    left: -10px;
    top: -2px;
  }
  &-stick {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    background-color: #fff;
    color: #aaa;
    font-size: 12px;
    cursor: pointer;
    display: none;
  }
  &:hover {
    box-shadow: 0 12px 24px -6px rgba(0, 0, 0, 0.16);
    transition: all 200ms ease-in;
    .stick-hover {
      display: inline-block;
    }
  }
  &-cover {
    width: 100%;
    height: 143px;
    cursor: pointer;
    position: relative;
    &-img {
      width: 100%;
      height: 143px;
      object-fit: cover;
      border-radius: 4px;
      cursor: pointer;
    }
    .video-mask {
      width: 100%;
      height: 143px;
      position: absolute;
      top: 0;
      left: 0;
    }
    &-tag {
      position: absolute;
      top: 5px;
      font-size: 24px;
      line-height: 26px;
      background: rgba(255, 255, 255, 0.7);
      padding: 0 3px;
      border-radius: 3px;
      right: 5px;
      font-style: italic;
      color: #ffa405;
      font-family: 'SourceHanSansCN-Medium';
      background: rgba(0, 0, 0, 0.1);
    }
  }
  &-title {
    font-size: 14px;
    margin: 10px 0;
    line-height: 20px;
    height: 20px;
    cursor: pointer;
    display: flex;
    position: relative;
    .text {
      display: inline-block;
      max-width: 140px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      height: 20px;
    }
    .id {
      color: #909399;
      padding-left: 4px;
    }
    .picked {
      margin-right: 4px;
      img {
        height: 20px;
        width: 20px;
        object-fit: contain;
      }
    }
    .recruitment {
      display: inline-block;
      background: #ef5936;
      border-radius: 10px;
      color: #fff;
      margin-right: 4px;
      padding: 0 6px;
      font-size: 11px;
      height: 20px;
    }
    .project-type {
      position: absolute;
      right: 2px;
      top: 0;
    }
  }
  &-like {
    font-size: 12px;
    color: #909399;
  }
  &-author {
    display: flex;
    align-items: center;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    padding-top: 12px;
    &-name {
      flex: 1;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #303133;
      &:hover {
        color: #2397f3;
      }
      img {
        width: 30px;
        height: 30px;
        object-fit: cover;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 8px;
      }
      .username {
        display: inline-block;
        width: 100px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    &-time {
      width: 120px;
      text-align: right;
      position: relative;
    }
  }
}
.project-cell-type-popover.el-popper.el-popover {
  width: 50px !important;
  min-width: 50px !important;
  padding: 6px;
  .el-popover__title {
    width: 50px;
    font-size: 12px;
    text-align: center;
    margin: 0;
  }
}
@media screen and (max-width: 768px) {
  .project-cell {
    width: 100%;
    max-width: 230px;
    padding: 4px;
    font-size: 12px;
    border: none;
    &-cover {
      width: 100%;
      height: 90px;
      &-img {
        width: 100%;
        height: 90px;
        object-fit: cover;
        border-radius: 4px;
      }
    }
    &-title {
      font-size: 12px;
    }
    &-author {
      font-size: 12px;
      &-name {
        .username {
          width: 50px;
        }
      }
    }
  }
}
</style>
