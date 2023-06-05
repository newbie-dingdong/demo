// 2023/6/5 13:52 --fcg

import { AxiosResponse } from 'axios'
import { ref, UnwrapRef } from 'vue'
import useLoading from '@/hooks/loading'

interface HttpResponse<T = unknown> {
  code: number
  data: T
  msg: string
}

const useRequest = <T>(
  api: () => Promise<AxiosResponse<HttpResponse>>,
  defaultValue = [] as unknown as T,
  isLoading: true
) => {
  const { loading, setLoading } = useLoading(isLoading)
  const response = ref<T>(defaultValue)
  api()
    .then((res) => {
      response.value = res.data as unknown as UnwrapRef<T>
    })
    .finally(() => setLoading(false))
  return { loading, response }
}

export default useRequest
