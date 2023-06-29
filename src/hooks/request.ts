// 2023/6/5 13:52 --fcg

import { ref, UnwrapRef } from 'vue'
import useLoading from '@/hooks/loading'
import { HttpResponse } from '@/request/type'

const useRequest = async <T>(
  api: (...args: any[]) => Promise<HttpResponse<T>>,
  params?: object
) => {
  const { loading, setLoading } = useLoading(true)
  const data = ref<T | null>(null)
  try {
    setLoading(true)
    const result = await api({ ...params })
    data.value = result.data as T as UnwrapRef<T>
  } catch (e) {
    console.log(e)
  } finally {
    setLoading(false)
  }
  return { loading, data }
}

export default useRequest
