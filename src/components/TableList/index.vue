<template>
  <div class="table-container">
    <div v-if="formColumn.length" class="table-search">
      <a-row>
        <a-col flex="1" class="mr-4">
          <a-form ref="formRef" layout="horizontal" label-align="left" :model="model">
            <a-row class="ml-0" :gutter="8">
              <a-col class="!px-1" v-for="(item, index) in formColumn" :key="index" :span="6">
                <a-form-item :field="item.dataIndex" :label="item.title">
                  <a-date-picker
                    v-if="item.dateType == 'date'"
                    v-model="model[item.dataIndex]"
                  ></a-date-picker>
                  <a-select v-model="model[item.dataIndex]" v-else-if="item.enum">
                    <a-option label="全部" value=""></a-option>
                    <a-option v-for="(p, i) in item.enum" :value="i" :label="p" :key="i"></a-option>
                  </a-select>
                  <a-input v-else :placeholder="item.title" v-model="model[item.dataIndex]" />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </a-col>
        <a-col flex="initial">
          <a-space size="16">
            <a-button @click="handleSearch" type="primary">
              <template #icon>
                <icon-search />
              </template>
              搜索
            </a-button>
            <a-button @click="handleReset">
              <template #icon>
                <icon-refresh />
              </template>
              重置
            </a-button>
          </a-space>
        </a-col>
      </a-row>
      <a-divider margin="0"></a-divider>
    </div>
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
          <a-table-column
            :title="item.title"
            :key="index"
            v-for="(item, index) in tableColumn"
            :data-index="item.dataIndex"
          >
            <template v-if="item.formatCell || item.enum" #cell="{ column, record }">
              {{ item.formatCell && item.formatCell(record[column.dataIndex]) }}
              {{ (item.enum && item.enum[record[column.dataIndex]]) || '-' }}
            </template>
          </a-table-column>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  IconSearch,
  IconRefresh,
  IconPlus,
  IconFolder,
  IconDownload
} from '@arco-design/web-vue/es/icon'
import { FormInstance, PaginationProps, TableRowSelection } from '@arco-design/web-vue'
import { TableColumn, HeaderButton } from '@/components/TableList/types'
import { computed, reactive, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    columns: TableColumn[]
    sourceData: any
    bordered?: boolean
    hoverable?: boolean
    stripe?: boolean
    loading?: boolean
    rowKey: string
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

const listToObject = (list: any[], key: string) => {
  const obj = list.reduce((acc: any, item: any) => {
    Object.keys(item).forEach((it) => {
      acc[item[key]] = ''
    })
    return acc
  }, {})
  return obj
}

const formRef = ref<FormInstance | null>(null)
const tableColumn = computed(() => props.columns.filter((item) => !item.hideInTable))
const formColumn = computed(() => props.columns.filter((item) => !item.hideInSearch))
const model = reactive(listToObject(formColumn.value, 'dataIndex'))

const handleSearch = () => {
  console.log(model)
}
const handleReset = () => {
  formRef.value?.resetFields()
}
const handleAdd = () => {
  emits('handleAdd')
}
</script>

<style lang="scss" scoped></style>

<!-- 2023/6/26 9:20 --fcg -->
