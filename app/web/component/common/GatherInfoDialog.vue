<template>
  <div class="gather-info">
    <get-info-form-dialog v-if="showGatherInfoDialog" :showGatherInfoDialog="showGatherInfoDialog" @close="handleClose"></get-info-form-dialog>
    <el-dialog :visible.sync="submitSuccessVisible" width="30%" center class="submit-success">
      <h4 slot="title" class="submit-success-title">Hi,{{infoData.realname}}</h4>
      <div class="submit-success-speech">
        <p>我们已经向您提交的邮箱<span class="submit-success-speech-email">({{infoData.email}})</span>发送了一份有关如何入门Paracraft的视频，请查收。</p>
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
import GetInfoFormDialog from './GetInfoFormDialog'

export default {
  name: 'GatherInfoDialog',
  props: {
    showGatherInfoDialog: Boolean
  },
  data() {
    return {
      infoData: { email: '' ,realname: ''},
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
    handleClose(infoData) {
      if (infoData.isSubmitOperation === 1) {
        this.infoData = infoData
        this.sendContentToEmail(this.infoData.email)
        this.submitSuccessVisible = true
      }
      this.$emit('close')
    },
    toResendEmail() {
      this.submitSuccessVisible = false
      this.resendEmailVisible = true
    },
    resendEmailAgain() {
      this.$refs.resendEmail.validate(valid => {
        if (valid) {
          this.sendContentToEmail(this.resendEmailData.new_email)
          this.$message.success('发送成功')
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
        .then(res => {})
        .catch(err => {
          console.error('err', err)
        })
    }
  },
  components: {
    GetInfoFormDialog
  }
}
</script>
<style lang="scss">
.gather-info {
  .submit-success {
    &-title {
      font-size: 18px;
      color: #333;
      margin-bottom: 10px;
    }
    &-speech {
      background-color: #eaf3fe;
      box-shadow: 0px 2px 5px 0px rgba(147, 171, 201, 0.35);
      border-radius: 2px;
      border: solid 1px #3c7afe;
      padding: 5px 18px;
      color: #1b64d2;
      &-email {
        font-weight: bold;
      }
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
