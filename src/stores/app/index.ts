// 2023/6/25 16:06 --fcg

import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import config from '@/config'
import { AppStateReturn } from '@/stores/app/types'

const useAppState = defineStore('useAppState', (): AppStateReturn => {
  const slideCollapsed = ref<boolean>(false)
  const toggleCollapsed = () => {
    slideCollapsed.value = !slideCollapsed.value
  }
  const slideWidth = computed(() => (!slideCollapsed.value ? config.slideWidth : 48))
  return {
    slideCollapsed,
    toggleCollapsed,
    slideWidth
  }
})

export default useAppState
