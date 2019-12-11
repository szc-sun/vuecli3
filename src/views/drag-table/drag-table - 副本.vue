<template>
  <div>
    123
    <TableCom :inputTable="table"></TableCom>
  </div>
</template>
<script lang='ts'>
import {
  // Component,
  Vue
} from 'vue-property-decorator'
import {
  TableCom, // 单表单vue组件
  // BaseTable, // BaseTable实体类
  DragTable
} from 'vue3-drag-table/lib/drag-table.umd.min'
import 'vue3-drag-table/lib/drag-table.css'

export default Vue.extend({
  components: {
    TableCom
  },
  data() {
    return {
      // compiledMarkdown: exampleMDs.initTable,
      table: null
    }
  },
  mounted() {
    // debugger
    const dragTable: DragTable = new DragTable('install')
    const table: any = dragTable.createTable({ id: 'table1' })
    // 上表头
    for (let i = 0; i < 5; i++) {
      const tmpData = {
        id: i + 1,
        cell: {
          value: ''
        }
      }
      table.theadAdd({
        type: 'top',
        sourceContainerData: tmpData,
        targetParentPosition: []
      })
    }
    // 左表头
    const addData = {
      cell: {
        value: ''
      }
    }
    table.theadAdd({
      type: 'left',
      sourceContainerData: addData,
      targetParentPosition: []
    })
    table.render()
    this.table = table
  }
})
</script>
<style lang="scss" scoped>
</style>
