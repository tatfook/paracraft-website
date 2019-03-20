<template>
  <div>
    <el-dialog v-if="showGatherInfoDialog" :visible.sync="showGatherInfoDialog" width="772px" center class="gather-info-dialog" :before-close="handleClose">
      <div class="gather-info-dialog-title">
        <h4 class="gather-info-dialog-title-text">合作咨询</h4>
        <p class="gather-info-dialog-title-hint">我们的销售代表会尽快联系您</p>
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
            <el-input type="textarea" placeholder="请简单描述一下你想了解的问题" v-model="infoData.description"></el-input>
          </el-form-item>
          <el-form-item class="gather-info-dialog-content-form-submit">
            <el-button class="gather-info-dialog-content-form-submit-btn" type="primary" @click="submitInfo()">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'GetInfoDialog',
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
      }
    }
  },
  methods: {
    handleClose(infoData = {isSubmitOperation: 0}) {
      this.$emit('close', infoData)
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
              this.handleClose({...this.infoData,isSubmitOperation: 1})
            })
            .catch(err => {
              console.error('err', err)
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
.gather-info-dialog {
  .el-dialog {
    .el-dialog__header,
    .el-dialog__body {
      padding: 0;
    }
    .el-dialog__header {
      .el-dialog__headerbtn {
        .el-icon-close:before {
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
      .el-form-item {
        margin-bottom: 10px;
      }
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
</style>

