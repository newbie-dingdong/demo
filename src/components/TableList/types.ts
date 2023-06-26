// 2023/6/26 9:55 --fcg
import { TableColumnData } from '@arco-design/web-vue'

export interface TableColumn extends TableColumnData {
  hideInSearch?: boolean
  hideInTable?: boolean
  enum?: object
  dateType?: 'date' | 'normal'
  formatCell?: (value: any) => any
}

export type HeaderButton = 'create' | 'download'
