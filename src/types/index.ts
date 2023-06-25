// 2023/6/25 17:09 --fcg

import { ValidatedError } from '@arco-design/web-vue'

export interface ISubmitFormReturn {
  values: Record<string, any>
  errors: Record<string, ValidatedError> | undefined
}
