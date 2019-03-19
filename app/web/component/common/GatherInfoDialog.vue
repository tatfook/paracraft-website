<template>
  <div class="gather-info">
    <el-dialog v-if="showGatherInfoDialog" :visible.sync="showGatherInfoDialog" width="772px" center class="gather-info-dialog" :before-close="handleClose">
      <div class="gather-info-dialog-title">
        <h4 class="gather-info-dialog-title-text">商务合作</h4>
        <p class="gather-info-dialog-title-hint">免费试用Paracraft，试用中遇到疑问请在Paracraft微信公众号中留言</p>
      </div>
      <div class="gather-info-dialog-content">
        <div class="gather-info-dialog-content-reminder">
          <img class="gather-info-dialog-content-reminder-icon" src="@/asset/images/hint.png" alt="hint">
          表单提交成功后我们将于1-3个工作日内与您联系，如有紧急情况请在Paracraft微信公众号中留言，我们将及时回复！
        </div>
        <el-form :model="infoData" :rules="infoDataRules" ref="infoForm" label-position="top" label-width="100px" class="gather-info-dialog-content-form">
          <el-form-item label="联系人姓名：" prop="realname">
            <el-input placeholder="请输入您的姓名" v-model="infoData.realname"></el-input>
          </el-form-item>
          <el-form-item label="联系手机：" prop="cellphone">
            <el-input placeholder="请输入手机号码" v-model="infoData.cellphone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱：" prop="email">
            <el-input placeholder="请输入邮箱" v-model="infoData.email"></el-input>
          </el-form-item>
          <el-form-item label="所属单位名称：">
            <el-input placeholder="请输入单位或者机构名称" v-model="infoData.organization"></el-input>
          </el-form-item>
          <el-form-item label="描述：">
            <el-input placeholder="请简单描述一下你想了解的问题" v-model="infoData.description"></el-input>
          </el-form-item>
          <el-form-item class="gather-info-dialog-content-form-submit">
            <el-button class="gather-info-dialog-content-form-submit-btn" type="primary" @click="submitInfo()">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="submitSuccessVisible" width="30%" center class="submit-success">
      <h4 slot="title" class="submit-success-title">Hi,{{infoData.email}}</h4>
      <div class="submit-success-speech">
        <p>谢谢，我们已经向您提交的邮箱发送了一份有关如何入门Paracraft的视频！请登录您的邮箱，了解更多Paracraft创意空间更多信息！</p>
      </div>
      <div class="submit-success-hint">
        <p>如果没有收到确认邮件，可以尝试以下做法：</p>
        <p>• 检查邮件是否在垃圾邮件中；</p>
        <p>• <span class="submit-success-hint-resend" @click="toResendEmail">[重发]</span>确认邮件；</p>
        <p>• 如需帮助请在Paracraft微信公众号中留言,我们将尽快回复！</p>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="resendEmailVisible" width="25%" center class="resend-email">
      <h4 slot="title" class="resend-email-title">重发确认邮箱</h4>
      <el-form ref="resendEmail" :model="resendEmailData" :rules="resendEmailDataRules">
        <el-form-item prop="new_email">
          <el-input placeholder="邮箱" v-model="resendEmailData.new_email"></el-input>
        </el-form-item>
        <el-form-item class="resend-email-send">
          <el-button type="primary" class="resend-email-send-btn" @click="resendEmailAgain">重新发送</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'GatherInfoDialog',
  props: {
    showGatherInfoDialog: Boolean
  },
  data() {
    return {
      infoData: {
        realname: '',
        cellphone: '',
        email: '',
        organization: '',
        description: ''
      },
      infoDataRules: {
        realname: [
          { required: true, message: '请输入您的姓名', trigger: 'blur' }
        ],
        cellphone: [
          {
            required: true,
            message: '请输入手机号码',
            trigger: 'blur'
          }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change']
          }
        ]
      },
      submitSuccessVisible: false,
      resendEmailVisible: false,
      resendEmailData: {
        new_email: ''
      },
      resendEmailDataRules: {
        new_email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change']
          }
        ]
      }
    }
  },
  methods: {
    handleClose(params) {
      this.$emit('close', params)
    },
    submitInfo() {
      let baseUrl = process.env.KEEPWORK_API_PREFIX
      this.$refs.infoForm.validate(valid => {
        if (valid) {
          axios
            .post(`${baseUrl}/paracraftVisitors/upsert`, {
              ...this.infoData
            })
            .then(res => {
              this.sendContentToEmail(this.infoData.email)
              this.handleClose()
              this.submitSuccessVisible = true
            })
            .catch(err => {
              console.error('err', err)
            })
        } else {
          return false
        }
      })
    },
    toResendEmail() {
      this.submitSuccessVisible = false
      this.resendEmailVisible = true
    },
    resendEmailAgain() {
      this.$refs.resendEmail.validate(valid => {
        if (valid) {
          this.sendContentToEmail(this.resendEmailData.new_email)
          this.resendEmailVisible = false
        } else {
          return false
        }
      })
    },
    sendContentToEmail(email) {
      let baseUrl = process.env.KEEPWORK_API_PREFIX
      let origin = window.location.origin
      let aLink = `${origin}/ceo_letter?name=${this.infoData.realname}`
      axios
        .post(`${baseUrl}/keepworks/email`, {
          subject: '已收到您的需求，我们会尽快与您联系，感谢！',
          to: email,
          html: `<p>${
            this.infoData.realname
          },您好!</p><p>感谢您对Paracraft的关注！我们已经收到了您填写的信息，工作人员将会尽快与您联系。</p><p>完整信件请访问： <a href='${aLink}'></a>${aLink}</p>`,
          from: 'Paracraft团队 <noreply@mail.keepwork.com>'
        })
        .then(res => {
        })
        .catch(err => {
          console.error('err', err)
        })
    }
  }
}
</script>
<style lang="scss">
.gather-info {
  .gather-info-dialog {
    .el-dialog {
      .el-dialog__header,
      .el-dialog__body {
        padding: 0;
      }
      .el-dialog__header {
        .el-dialog__headerbtn{
          .el-icon-close:before{
            color: #fff;
          }
        }
      }
    }
    &-title {
      height: 149px;
      background: url(../../asset/images/mianfei.jpg);
      color: #fff;
      text-align: center;
      &-text {
        font-size: 32px;
        margin: 0;
        padding-top: 36px;
      }
      &-hint {
      }
    }
    &-content {
      max-width: 635px;
      margin: 0 auto;
      padding: 0 10px;
      &-reminder {
        height: 47px;
        background-color: #f1f6fa;
        border: solid 1px #e0edf2;
        margin: 27px 0 35px;
        display: flex;
        align-items: center;
        padding: 0 15px;
        font-size: 12px;
        &-icon {
          margin-right: 13px;
        }
      }
      &-form {
        &-submit {
          text-align: center;
          padding: 13px 0 47px;
          margin: 0;
          &-btn {
            width: 139px;
          }
        }
      }
    }
  }
  .submit-success {
    &-title {
      font-size: 18px;
      color: #333;
    }
    &-speech {
      background-color: #eaf3fe;
      box-shadow: 0px 2px 5px 0px rgba(147, 171, 201, 0.35);
      border-radius: 2px;
      border: solid 1px #3c7afe;
      padding: 5px 18px;
      color: #1b64d2;
    }
    &-hint {
      background-color: #fff9e5;
      box-shadow: 0px 2px 5px 0px rgba(147, 171, 201, 0.35);
      border-radius: 2px;
      border: solid 1px #f2d054;
      color: #8a6700;
      padding: 5px 18px;
      margin: 17px 0;
      &-resend {
        color: #1b64d2;
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .el-dialog {
      max-width: 600px !important;
      .el-dialog__body {
        padding-top: 0;
      }
    }
  }
  .resend-email {
    &-title {
      font-size: 18px;
      color: #333;
    }
    &-send {
      text-align: center;
      &-btn {
        width: 158px;
        margin-top: 20px;
      }
    }
    .el-dialog {
      max-width: 466px !important;
      .el-dialog__body {
        padding-top: 0;
      }
    }
  }
}
@media screen and (max-width: 769px) {
  .gather-info-dialog {
    .el-dialog__wrapper {
      .el-dialog {
        width: 90% !important;
      }
    }
  }
}
</style>
