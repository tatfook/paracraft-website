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
import moment from 'moment'
import GetInfoFormDialog from './GetInfoFormDialog'

export default {
  name: 'GatherInfoDialog',
  props: {
    showGatherInfoDialog: Boolean
  },
  data() {
    return {
      infoData: { email: '', realname: '' },
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
        this.sendEmailToMarketer()
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
          this.sendEmailToMarketer()
        } else {
          return false
        }
      })
    },
    sendContentToEmail(email) {
      let baseUrl = process.env.KEEPWORK_API_PREFIX
      let origin = window.location.origin
      let aLink = `${origin}/ceo_letter?name=${encodeURI(
        this.infoData.realname
      )}`
      axios
        .post(`${baseUrl}/keepworks/email`, {
          subject: '已收到您的需求，我们会尽快与您联系，感谢！',
          to: email,
          html: `<div style="width: 90%;max-width:550px;box-sizing: border-box;box-shadow: 0 0 12px 6px rgba(98, 98, 98, 0.1);background: #fff;margin: 10px auto;padding:30px;">
          <p style="line-height:270%">${this.infoData.realname}，您好!</p>
          <p style="line-height:270%">我是Paracraft的创始人李西峙，谢谢您对Paracraft的兴趣！</p>
          <p style="line-height:270%">我们已经收到了您填写的信息，我们的工作人员会尽快跟您联系。 </p>
          <p style="line-height:270%">很感谢您选择了Paracraft，获取更多素材请访问这里链接： <a href='${aLink}'>${aLink}</a></p>
          <p style="line-height:270%">1989年，7岁的我照着一本我父亲给我的书编写了我人生中第一个程序，并从此喜欢上了编程，小学期间我完成了大量个人作品，到了随心所欲的状态。通过Paracraft，我希望带给孩子们同我相似的学习体验。</p>
          <p style="line-height:270%">期间您有任何技术问题也可以直接Email我。</p>
          <br>
          <br>
          <br>
          <p style='text-align:right;line-height:270%'>李西峙<br>CEO & NPL语言与Paracraft创始人<br>Email：lixizhi@paraengine.com<br></p>
          </div>`,
          from: 'Paracraft团队 <noreply@mail.keepwork.com>'
        })
        .then(res => {})
        .catch(err => {
          console.error('err', err)
        })
    },
    sendEmailToMarketer(email) {
      let baseUrl = process.env.KEEPWORK_API_PREFIX
      let sendTime = moment().format("YYYY-MM-DD H:mm:ss")
      axios
        .post(`${baseUrl}/keepworks/email`, {
          subject: '申请表单合作咨询者信息',
          to: '861146388@qq.com,lixizhi@paraengine.com',
          html: `<div>
          <p><span>联系人：</span>${this.infoData.realname}</p>
          <p><span>联系电话：</span>${this.infoData.cellphone}</p>
          <p><span>邮箱：</span>${this.infoData.email}</p>
          <p><span>单位名称：</span>${this.infoData.organization}</p>
          <p><span>描述：</span>${this.infoData.description}</p>
          <p><span>所在城市：</span>${this.infoData.city}</p>
          <p><span>申请时间：</span>${sendTime}</p>
          </div>`,
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
  .gather-info {
    .el-dialog__wrapper {
      .el-dialog {
        width: 100% !important;
        margin-top: 0 !important;
      }
    }
  }
}
</style>
