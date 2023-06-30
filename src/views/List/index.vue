<template>
  <a-card title="查询表格" :bordered="false" class="list-container">
    <table-list
      :request="getTableListApi"
      row-key="id"
      :loading="false"
      :summary="summary"
      :columns="columns"
    />
  </a-card>
</template>

<script setup lang="ts">
import { h } from 'vue'
import TableList from '@/components/TableList/index.vue'
import { getTableListApi } from '@/api'
import { TableColumn } from '@/components/TableList/types'
import { Avatar } from '@arco-design/web-vue'

const sexOptions = {
  '0': '未知',
  '1': '男',
  '2': '女'
}
const summary = () => {
  return [
    {
      username: '总计',
      avatar: '1001',
      action: 1
    }
  ]
}
const columns: TableColumn[] = [
  {
    dataIndex: 'username',
    title: '账号'
  },
  {
    dataIndex: 'avatar',
    title: '头像',
    hideInSearch: true,
    renderTableItem: (record) => h(Avatar, { size: 66, shape: 'square', imageUrl: record.avatar })
  },
  {
    dataIndex: 'sex',
    title: '性别',
    enum: sexOptions
  },
  {
    dataIndex: 'action',
    title: '操作',
    hideInSearch: true,
    fixed: 'right',
    width: 100,
    renderTableItem: (record) => [
      {
        text: '修改',
        cb: (row) => console.log(row),
        type: 'primary',
        status: 'plain'
      },
      {
        text: '删除',
        hidden: record.sex == 0,
        cb: (row) => console.log(row)
      }
    ]
  }
]
</script>

<style lang="scss" scoped></style>

<!-- 2023/6/26 9:16 --fcg -->
