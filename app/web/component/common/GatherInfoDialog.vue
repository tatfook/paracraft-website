<template>
  <div class="gather-info-dialog">
    <el-dialog :visible.sync="showGatherInfoDialog" width="772px" center :before-close="handleClose">
      <div class="gather-info-dialog-title">
        <h4 class="gather-info-dialog-title-text">商务合作</h4>
        <p class="gather-info-dialog-title-hint">免费试用Paracraft，试用中遇到疑问以及商务合作请致电：0755-86967012</p>
      </div>
      <div class="gather-info-dialog-content">
        <div class="gather-info-dialog-content-reminder">
          <img class="gather-info-dialog-content-reminder-icon" src="@/asset/images/hint.png" alt="hint">
          表单提交成功后我们将于1-3个工作日内与您联系，如有紧急情况请拨打0755-86967012
        </div>
        <el-form :model="infoData" :rules="infoDataRules" ref="infoForm" label-position="top" label-width="100px" class="gather-info-dialog-content-form">
          <el-form-item label="姓名：" prop="realname">
            <el-input placeholder="请填写您的姓名" v-model="infoData.realname"></el-input>
          </el-form-item>
          <el-form-item label="联系方式：" prop="cellphone">
            <el-input placeholder="手机号码/座机号码" v-model="infoData.cellphone"></el-input>
          </el-form-item>
          <el-form-item label="所属单位名称：">
            <el-input placeholder="请填写单位或者机构名称" v-model="infoData.organization"></el-input>
          </el-form-item>
          <el-form-item class="gather-info-dialog-content-form-submit">
            <el-button class="gather-info-dialog-content-form-submit-btn" type="primary">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
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
        organization: ''
      },
      infoDataRules: {
        realname: [
          { required: true, message: '请填写您的姓名', trigger: 'blur' }
        ],
        cellphone: [
          {
            required: true,
            message: '请填写您的手机号码/座机号码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleClose() {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss">
.gather-info-dialog {
  .el-dialog__wrapper {
    .el-dialog {
      .el-dialog__header,
      .el-dialog__body {
        padding: 0;
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
    max-width: 615px;
    margin: 0 auto;
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
</style>
