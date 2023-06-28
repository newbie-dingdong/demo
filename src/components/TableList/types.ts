// 2023/6/26 9:55 --fcg
import { TableColumnData } from '@arco-design/web-vue'
import { VNode, h } from 'vue'

export interface TableColumn extends TableColumnData {
  hideInSearch?: boolean
  hideInTable?: boolean
  renderColumn?: () => TableRenderButton[]
  renderForm?: (render: typeof h, params: any) => VNode
  enum?: object
  dateType?: 'date' | 'normal'
  formatCell?: (value: any) => any
}

export interface TableRenderButton {
  text: string
  cb: (value: any) => void
  type?: string
}
