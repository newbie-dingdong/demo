// 2023/6/28 14:02 --fcg

import { TableColumn, TableRenderButton } from '@/components/TableList/types'
import { Component, h } from 'vue'

export const listToObject = (list: TableColumn[], key: string) => {
  const obj = list.reduce((acc: any, item: any) => {
    Object.keys(item).forEach(() => {
      acc[item[key]] = ''
    })
    return acc
  }, {})
  return obj
}

export const dataToVNode = (data: TableRenderButton[], component: Component, value: any) => {
  const vnode = data.map((item: any) =>
    h(
      component,
      {
        type: item.type || 'secondary',
        status: item.status,
        onClick: () => item.cb(value)
      },
      { default: () => item.text }
    )
  )
  return vnode
}
