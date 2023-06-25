// 2023/6/25 16:40 --fcg

import type { Ref } from 'vue'

export interface AppStateReturn {
  slideCollapsed: Ref<Boolean>
  toggleCollapsed: () => void
  slideWidth: Ref<Number>
}
