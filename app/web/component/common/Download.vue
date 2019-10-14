<template>
  <div class="download">
    <div class="download-welcome">
      <div class="download-welcome-center">
        <p class="download-welcome-center-title">Paracraft创意空间（教学版）</p>
        <p class="download-welcome-center-info">
          - 内置教学所需插件，免除后续下载、安装的麻烦。
        </p>
        <p class="download-welcome-center-info">
          - 针对学校、教学机构定制，优化教学体验。
        </p>
        <p class="download-welcome-center-count">
          <span class="download-welcome-center-count-diamonds" v-for="(i,index) in optimizeDownloadCount" :key="index">{{i}}</span>人下载使用
        </p>
      </div>
    </div>
    <div class="download-center">
      <p class="download-center-guide"><a class="download-center-guide-link" href="https://keepwork.com/official/Biz_Website/Instructional_edition_installation_guide" target="_blank">点击这里</a>查看安装指南</p>
      <div class="download-center-cabinet">
        <div class="download-center-cabinet-box-wrap">
          <div class="download-center-cabinet-box">
            <img src="@/asset/images/downloadPage/Windows-8.png" alt="">
            <p class="download-center-cabinet-box-recommend">Windows版</p>
            <a :href="downloadURL.window_zip" @click="addDownloadCount" class="download-center-cabinet-box-desc download-center-cabinet-box-desc-highlight "><img class="download-center-cabinet-box-desc-img" src="@/asset/images/downloadPage/Windows-8-icon.png" alt="">立即下载</a>
            <div class="grey-font">(适用于Windows 7 及以上)</div>
            <div class="download-center-cabinet-box-append">
              <div class="download-center-cabinet-box-append-line">
                您还可以下载 <a :href="downloadURL.sp3">Paracraft for WinXP SP3</a> 版
              </div>
              <div class="download-center-cabinet-box-append-line grey-font">(适用于Windows XP Service Pack 3 及以上)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { get, post } from '@/api'
export default {
  name: 'Download',
  data() {
    return {
      downloadCount: '',
      downloadURL: {}
    }
  },
  computed: {
    optimizeDownloadCount() {
      this.downloadCount = 103200 + this.downloadCount
      return this.downloadCount.toString().split('')
    },
    QROptions() {
      return {
        width: 91,
        height: 91
      }
    },
    QRUrl() {
      return `${window.location.origin}/qrDownload`
    }
  },
  async mounted() {
    window.scrollTo(0, 0)
    document.title = '下载-Paracraft创意空间'
    await Promise.all([this.getDownloadCount(), this.getdownloadURL()])
  },
  methods: {
    async getDownloadCount() {
      const res = await get('keepworks/paracraft_download_count')
      this.downloadCount = res
    },
    addDownloadCount() {
      post('keepworks/paracraft_download_count', {})
        .then(response => {
          this.downloadCount = response
        })
        .catch(error => console.error(error))
    },
    async getdownloadURL() {
      const url = await get('keepworks/paracraft_download_url')
      this.downloadURL = url
    }
  }
}
</script>

<style lang="scss" scoped>
.download {
  &-welcome {
    background: #1e7cfc;
    padding: 30px 30px 38px;
    &-center {
      max-width: 1200px;
      margin: 0 auto;
      color: #fff;
      &-title {
        margin: 0 0 16px;
        font-size: 36px;
      }
      &-info {
        margin: 8px 0;
      }
      &-count {
        margin: 16px 0 0;
        &-diamonds {
          display: inline-block;
          background: #fff;
          color: #1e7cfc;
          padding: 0 4px;
          margin-right: 4px;
        }
      }
    }
  }
  &-center {
    max-width: 1200px;
    margin: 0 auto;
    &-guide {
      min-height: 62px;
      line-height: 62px;
      background: #e7f5ed;
      text-align: center;
      &-link {
        text-decoration: none;
        color: #ff8150;
        &:hover {
          color: #e17247;
        }
      }
    }
    &-cabinet {
      display: flex;
      padding: 40px 0;
      &-phone {
        background: rgb(232, 245, 234);
      }
      &-box {
        flex: 1;
        text-align: center;
        align-items: center;
        .grey-font {
          color: #999;
          font-size: 14px;
        }
        &-cover {
          width: 50px;
          margin: 0 auto;
          position: relative;
        }
        &-QR {
          position: absolute;
          right: -110px;
          top: 0;
        }
        &-wrap {
          display: flex;
          align-items: center;
          flex: 1;
        }
        &-desc {
          display: flex;
          padding: 7px;
          border-radius: 4px;
          margin: 14px auto;
          max-width: 142px;
          border: 1px solid #409eff;
          justify-content: center;
          color: #409eff;
          text-decoration: none;
          &:hover {
            color: rgb(51, 143, 229);
            border: 1px solid rgb(51, 143, 229);
          }
          &-highlight {
            background: #409eff;
            color: #fff;
            border-radius: 36px;
            &:hover {
              background: rgb(51, 143, 229);
              color: #fff;
            }
          }
          &-img {
            width: 20px;
            margin-right: 4px;
          }
        }
        &-hint {
          font-size: 14px;
          color: #8d8d8d;
          &-phone {
            max-width: 176px;
            color: #32b16c;
            margin: 0 auto;
            font-size: 16px;
            display: block;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
            &:hover {
              color: #328654;
            }
          }
        }
        &-append {
          margin-top: 30px;
          font-size: 16px;
          &-line {
            margin-bottom: 6px;
          }
          a {
            color: #409eff;
            text-decoration: none;
            &:hover {
              border-bottom: 1px solid #409eff;
            }
          }
        }
      }
    }
    &-paracraft {
      border-bottom: 1px solid #d9d9d9;
      &-title {
        color: #333;
        font-size: 24px;
        margin: 53px 0 20px;
      }
      &-hint {
        color: #8d8d8d;
        font-size: 16px;
        &-guide {
          color: #399fff;
          text-decoration: none;
          &:hover {
            color: #2c82d2;
          }
        }
      }
      &-code {
        border: none;
      }
    }
  }
  &-abstract {
    background: rgb(249, 248, 248);
    padding: 68px 0 74px;
    &-intro {
      display: flex;
      max-width: 1200px;
      margin: 0 auto;
      &-box {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
        &-content {
          &-title {
            margin: 40px 0 10px 0;
          }
          &-text {
            max-width: 478px;
            color: #8d8d8d;
            font-size: 16px;
            margin: 0 auto;
            line-height: 24px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 769px) {
  .download {
    &-welcome {
      &-center {
        padding-left: 12px;
        &-title {
          font-size: 16px;
          padding: 12px 0 0 0;
          font-weight: bold;
        }
        &-version {
          font-size: 12px;
          &-new {
          }
        }
        &-count {
          font-size: 12px;
        }
      }
    }
    &-center {
      &-guide {
        font-size: 12px;
        margin: 0;
        min-height: 40px;
        line-height: 40px;
      }
      &-cabinet {
        flex-wrap: wrap;
        padding: 0;
        &-box {
          min-width: 220px;
          padding: 26px 0;
          &-hint {
            font-size: 12px;
            &-phone {
              max-width: 220px;
            }
          }
        }
      }
      &-paracraft {
        &-title {
          font-size: 14px;
          padding-left: 12px;
          margin-top: 17px;
        }
        &-hint {
          font-size: 12px;
          padding: 0 12px;
        }
      }
    }
    &-abstract {
      background: #fff;
      border-top: 10px solid rgb(249, 249, 249);
      border-bottom: 10px solid rgb(249, 249, 249);
      &-intro {
        flex-wrap: wrap;
        &-box {
          min-width: 260px;
          margin: 12px;
          &-content {
            width: 100%;
            max-width: 480px;
            &-title {
              font-size: 14px;
            }
            &-text {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>

