<template>
 
</template>
<script>
import GatherInfoDialog from '@/component/common/GatherInfoDialog'
import QuickToTop from './QuickToTop'
import tableData from '@/component/data/lessonSystemWorkData'
export default {
  name: 'LessonSystem_Phone',
  data() {
    return {
      showGatherInfoDialog: false,
      tableData: tableData,
      
    }
  },
  computed: {
    
  },
  components: {
    GatherInfoDialog,
    QuickToTop
  },
  methods: {
    isShowGatherInfo() {
      this.showGatherInfoDialog = true
    },
    closeGatherInfoDialog() {
      this.showGatherInfoDialog = false
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return 'warning-row'
      }
      return ''
    },
    headerRowStyle({ row, rowIndex }) {
      return 'table-header'
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

