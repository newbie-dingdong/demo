<template>
  <div v-if="formColumn.length" class="table-search">
    <a-row>
      <a-col flex="1" class="mr-4">
        <a-form ref="formRef" layout="horizontal" label-align="left" :model="model">
          <a-row class="ml-0" :gutter="8">
            <a-col class="!px-1" v-for="(item, index) in formColumn" :key="index" :span="6">
              <a-form-item :field="item.dataIndex" :label="item.title">
                <a-date-picker
                  class="w-full"
                  v-if="item.dateType === 'date'"
                  v-model="model[item.dataIndex]"
                ></a-date-picker>
                <template v-else-if="item.renderFormItem">
                  <render-html
                    v-model="model[item.dataIndex]"
                    :render-func="item.renderFormItem(model)"
                  ></render-html>
                </template>
                <a-select v-model="model[item.dataIndex]" v-else-if="item.enum">
                  <a-option label="全部" value=""></a-option>
                  <a-option v-for="(p, i) in item.enum" :value="i" :label="p" :key="i"></a-option>
                </a-select>
                <a-input
                  allow-clear
                  v-else
                  :placeholder="item.title"
                  v-model="model[item.dataIndex]"
                />
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
</template>

<script setup lang="ts">
import { reactive, computed, ref } from 'vue'
import { TableColumn } from '../types'
import { FormInstance } from '@arco-design/web-vue'
import { listToObject } from '../util'
import { IconSearch, IconRefresh } from '@arco-design/web-vue/es/icon'
import RenderHtml from './render-html.vue'

const props = defineProps<{
  columns: TableColumn[]
}>()

const emits = defineEmits<{
  (e: 'handleSearch', params: any): void
}>()

const formRef = ref<FormInstance | null>(null)
const formColumn = computed(() => props.columns.filter((item) => !item.hideInSearch))
const model = reactive(listToObject(formColumn.value, 'dataIndex'))

const handleSearch = () => {
  emits('handleSearch', model)
}
const handleReset = () => {
  formRef.value?.resetFields()
}
</script>

<style lang="scss" scoped></style>

<!-- 2023/6/28 15:53 --fcg -->
