<template>
  <div>
    这是首页的内容，哈哈哈

    <div>这是首页</div>
    <button @click="isShowGatherInfo">免费试用</button>
    <gather-info-dialog :showGatherInfoDialog="showGatherInfoDialog" @close="closeGatherInfoDialog"></gather-info-dialog>
  </div>
</template>

<script>
import GatherInfoDialog from '@/component/common/GatherInfoDialog'

export default {
  name: 'HomePage',
  data() {
    return {
      showGatherInfoDialog: false
    }
  },
  methods: {
    isShowGatherInfo() {
      this.showGatherInfoDialog = true
    },
    closeGatherInfoDialog() {
      this.showGatherInfoDialog = false
    }
  },
  components: {
    GatherInfoDialog
  }
}
</script>
