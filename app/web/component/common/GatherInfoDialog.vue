<template>
  <div class="gather-info-dialog">
    <el-dialog
      title="商务联系"
      :visible.sync="showGatherInfoDialog"
      width="80%"
      center
      :before-close="handleClose"
    >hahah</el-dialog>
  </div>
</template>
<script>
export default {
  name: "GatherInfoDialog",
  props: {
    showGatherInfoDialog: Boolean
  },
  data() {
    return {};
  },
  methods: {
    handleClose() {
      console.log(222);
      this.$emit("close");
    }
  }
};
</script>