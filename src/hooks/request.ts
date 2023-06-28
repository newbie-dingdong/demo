// 2023/6/5 13:52 --fcg

import { ref, UnwrapRef } from 'vue'
import useLoading from '@/hooks/loading'
import { HttpResponse } from '@/request/type'

const useRequest = async <T>(api: (...args: any[]) => Promise<HttpResponse<T>>, ...args: any[]) => {
  const { loading, setLoading } = useLoading(true)
  const response = ref<T | null>(null)
  return { loading, response }
}

export default useRequest
