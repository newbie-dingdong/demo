<template>
  <a-card title="查询表格" :bordered="false" class="list-container">
    <table-list row-key="username" :loading="false" :source-data="data" :columns="columns" />
  </a-card>
</template>

<script setup lang="ts">
import TableList from '@/components/TableList/index.vue'
import { TableColumn } from '@/components/TableList/types'

const columns: TableColumn[] = [
  {
    dataIndex: 'username',
    title: '账号',
    dateType: 'date'
    // hideInSearch: true
  },
  {
    dataIndex: 'password',
    title: '密码',
    hideInSearch: true
  },
  {
    dataIndex: 'sex',
    title: '性别',
    enum: {
      '0': '未知',
      '1': '男',
      '2': '女'
    }
  },
  {
    dataIndex: 'height',
    title: '身高',
    enum: {
      small: '矮',
      medium: '中等',
      large: '高'
    }
  }
]
const data = [
  {
    username: '张三',
    password: '123123',
    sex: 2,
    height: 168
    // render:(v)=> v==1?'男':'女'
  },
  {
    username: '张三',
    password: '123123',
    sex: 1,
    height: 'medium'
  },
  {
    username: '张三',
    password: '123123',
    sex: 0,
    height: 'large'
  }
]
</script>

<style lang="scss" scoped></style>

<!-- 2023/6/26 9:16 --fcg -->
