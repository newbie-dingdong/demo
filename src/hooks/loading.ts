// 2023/6/5 13:59 --fcg

import { ref } from 'vue'

const useLoading = (initValue = false) => {
  const loading = ref(initValue)
  const setLoading = (value: boolean) => {
    loading.value = value
  }
  const toggle = () => {
    loading.value = !loading.value
  }
  return { loading, setLoading, toggle }
}

export default useLoading
