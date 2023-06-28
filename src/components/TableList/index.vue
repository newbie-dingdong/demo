<template>
  <div class="table-container">
    <table-form @handle-search="search" :columns="columns" />
    <div class="table-action mt-2">
      <a-space :size="20">
        <a-button @click="handleAdd" type="primary">
          <template #icon>
            <icon-plus />
          </template>
          新建
        </a-button>
        <a-button>
          <template #icon>
            <icon-download />
          </template>
          下载
        </a-button>
      </a-space>
    </div>
    <div class="table mt-2 w-full">
      <a-table
        :bordered="bordered"
        :hoverable="hoverable"
        :data="sourceData"
        :stripe="stripe"
        :loading="loading"
        :size="size"
        :row-selection="rowSelection"
        :row-key="rowKey"
        :page-position="pagePosition"
        :pagination="pagination"
      >
        <template #columns>
          <table-columns :columns="columns" />
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TableColumn } from './types'
import { IconPlus, IconDownload } from '@arco-design/web-vue/es/icon'
import { PaginationProps, TableRowSelection } from '@arco-design/web-vue'
import TableForm from './components/table-form.vue'
import TableColumns from './components/table-columns.vue'
import { HttpResponse } from '@/request/type'
const props = withDefaults(
  defineProps<{
    columns: TableColumn[]
    sourceData: any
    bordered?: boolean
    hoverable?: boolean
    stripe?: boolean
    loading?: boolean
    rowKey: string
    request?: <T>() => Promise<HttpResponse<T>>
    pagePosition?: 'tl' | 'top' | 'tr' | 'bl' | 'bottom' | 'br'
    pagination?: boolean | PaginationProps
    rowSelection?: TableRowSelection
    size?: 'mini' | 'small' | 'medium' | 'large'
  }>(),
  {
    sourceData: [],
    pagePosition: 'br',
    bordered: false,
    rowKey: 'id',
    pagination: true,
    hoverable: true,
    stripe: false,
    size: 'large',
    loading: true
  }
)
const emits = defineEmits<{
  (e: 'handleAdd'): void
}>()

const search = async (params: any) => {
  console.log(params)
}
const handleAdd = () => {
  emits('handleAdd')
}
</script>

<style lang="scss" scoped></style>

<!-- 2023/6/26 9:20 --fcg -->
