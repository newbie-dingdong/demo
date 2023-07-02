<template>
  <div class="table-container">
    <table-form v-if="headerSearch" @handle-search="search" :columns="columns" />
    <div v-if="toolsBar" :class="['table-action', headerSearch ? 'mt-2' : '']">
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
    <div :class="['table w-full', toolsBar ? 'mt-2' : '']">
      <a-table
        ref="tableRef"
        hide-expand-button-on-empty
        :bordered="bordered"
        :hoverable="hoverable"
        :data="tableData"
        :stripe="stripe"
        :loading="tableLoading"
        :size="size"
        :summary="summary"
        :summary-text="summaryText"
        :summary-span-method="summarySpanMethod"
        :row-selection="rowSelection"
        :row-key="rowKey"
        :page-position="pagePosition"
        @page-change="handlePage"
        @page-size-change="handlePageSize"
        :pagination="paginOptions"
      >
        <template #columns>
          <table-columns :columns="columns" />
        </template>
        <template #summary-cell="{ column, record }">
          {{ record[column.dataIndex] }}
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TableColumn } from './types'
import { IconPlus, IconDownload } from '@arco-design/web-vue/es/icon'
import { TableRowSelection, TableData, TableInstance } from '@arco-design/web-vue'
import TableForm from './components/table-form.vue'
import TableColumns from './components/table-columns.vue'
import { HttpResponse } from '@/request/type'
import useRequest from '@/hooks/request'
import { computed, reactive, ref, watchEffect } from 'vue'
import { TableOperationColumn } from '@arco-design/web-vue/es/table/interface'
import { basePagination } from '@/components/TableList/util'

const props = withDefaults(
  defineProps<{
    headerSearch?: boolean
    toolsBar?: boolean
    columns: TableColumn[]
    sourceData?: any
    bordered?: boolean
    hoverable?: boolean
    stripe?: boolean
    loading?: boolean
    rowKey: string
    request?: <T>() => Promise<HttpResponse<T>>
    pagePosition?: 'tl' | 'top' | 'tr' | 'bl' | 'bottom' | 'br'
    rowSelection?: TableRowSelection
    summaryText?: string
    summarySpanMethod?: (data: {
      record: TableData
      column: TableColumn | TableOperationColumn
      rowIndex: number
      columnIndex: number
    }) => { rowspan?: number; colspan?: number } | void
    summary?: boolean | ((params: { columns: TableColumn[]; data: TableData[] }) => TableData[])
    size?: 'mini' | 'small' | 'medium' | 'large'
  }>(),
  {
    summaryText: '总计',
    sourceData: [],
    toolsBar: true,
    headerSearch: true,
    pagePosition: 'br',
    bordered: false,
    rowKey: 'id',
    hoverable: true,
    stripe: false,
    size: 'large',
    loading: true
  }
)
const paginOptions = reactive({ ...basePagination })
const loadData = ref<any>([])
const tableRef = ref<TableInstance | null>(null)
const tableLoading = ref<boolean>(props.loading)
const total = ref<number>(0)
const emits = defineEmits<{
  (e: 'handleAdd'): void
}>()
const handlePage = (e: number) => {
  // params.current = e
  paginOptions.current = e
}
const handlePageSize = (e: number) => {
  paginOptions.pageSize = e
}
const search = async (queryParams: any) => {
  paginOptions.current = 1
  await fetchData(queryParams)
}

const handleAdd = () => {
  emits('handleAdd')
}

const tableData = computed(() =>
  loadData.value && loadData.value.length > 0 ? loadData.value : props.sourceData
)
const fetchData = async (queryParams?: object) => {
  if (!props.request) return
  tableLoading.value = true
  const { loading: loadingValue, data } = await useRequest<any[]>(props.request, {
    ...queryParams,
    current: paginOptions.current,
    pageSize: paginOptions.pageSize,
    _page: paginOptions.current,
    _limit: paginOptions.pageSize
  })
  loadData.value = data.value
  tableLoading.value = loadingValue.value
}

watchEffect(() => {
  fetchData()
})
</script>

<style lang="scss" scoped></style>

<!-- 2023/6/26 9:20 --fcg -->
