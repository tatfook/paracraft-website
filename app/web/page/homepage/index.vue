<template>
  <div class="home-page">
    <div>这是首页</div>
    <button @click="isShowGatherInfo">免费试用</button>
    <a href="/1">哈哈</a>
    <a href="/2">联系我们</a>
    <gather-info-dialog :showGatherInfoDialog="showGatherInfoDialog" @close="closeGatherInfoDialog"></gather-info-dialog>
  </div>
</template>

<script>
import GatherInfoDialog from "@/component/common/GatherInfoDialog"
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'

Vue.use(ElementUI)

export default {
  name: "HomePage",
  data() {
    return {
      showGatherInfoDialog: false
    };
  },
  methods: {
    isShowGatherInfo() {
      this.showGatherInfoDialog = true;
    },
    closeGatherInfoDialog() {
      this.showGatherInfoDialog = false;
    }
  },
  components: {
    GatherInfoDialog
  }
};
</script>

