import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

interface useCounter {
  count: Ref<number>
  doubleCount: Ref<number>
  increment: () => void
}

export const useCounterStore = defineStore('counter', (): useCounter => {
  const count = ref<number>(1)
  const doubleCount = computed<number>(() => count.value * 2)
  const increment = () => {
    count.value++
  }

  return { count, doubleCount, increment }
})
