// 2023/6/26 9:55 --fcg
import { TableColumnData } from '@arco-design/web-vue'
import { VNode } from 'vue'

export interface TableColumn extends TableColumnData {
  hideInSearch?: boolean
  hideInTable?: boolean
  renderTableItem?: (value: any) => TableRenderButton[] | VNode
  renderFormItem?: (params: any) => VNode
  enum?: object
  dateType?: 'date' | 'normal'
  formatCell?: (value: any) => any
}

export interface TableRenderButton {
  text: string
  hidden?: boolean
  cb: (value: any) => void
  type?: string
}
