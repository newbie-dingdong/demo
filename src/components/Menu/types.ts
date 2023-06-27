// 2023/6/27 10:24 --fcg
import type { RouteRecordRaw } from 'vue-router'

type RouteChildrenRaw = RouteRecordRaw['children'] & {
  hideInMenu?: boolean
}
export type RouteRaw = RouteRecordRaw & {
  hideInMenu?: boolean
  children?: RouteChildrenRaw
}
