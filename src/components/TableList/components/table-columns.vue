<template>
  <a-table-column
    :title="item.title"
    :key="index"
    v-for="(item, index) in tableColumn"
    :data-index="item.dataIndex"
  >
    <template v-if="item.renderColumn" #cell="{ record }">
      <render-html :render-func="renderButton(item.renderColumn(), record)"></render-html>
    </template>
    <template v-else-if="item.formatCell" #cell="{ column, record }">
      {{ (item.formatCell && item.formatCell(record[column.dataIndex])) || '-' }}
    </template>
    <template v-else-if="item.enum" #cell="{ column, record }">
      {{ (item.enum && item.enum[record[column.dataIndex]]) || '-' }}
    </template>
  </a-table-column>
</template>

<script setup lang="ts">
import { TableColumn, TableRenderButton } from '../types'
import RenderHtml from './render-html.vue'
import { computed } from 'vue'
import { Button } from '@arco-design/web-vue'
import { dataToVNode } from '../util'

const props = defineProps<{
  columns: TableColumn[]
}>()

const tableColumn = computed(() => props.columns.filter((item) => !item.hideInTable))
const renderButton = (data: TableRenderButton[], value: any) => {
  return dataToVNode(data, Button, value)
}
</script>

<style lang="scss" scoped></style>

<!-- 2023/6/28 16:12 --fcg -->
