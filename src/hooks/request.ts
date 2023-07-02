// 2023/6/5 13:52 --fcg

import { ref, UnwrapRef } from 'vue'
import useLoading from '@/hooks/loading'
import { HttpResponse } from '@/request/type'
import { Notification } from '@arco-design/web-vue'
import '@arco-design/web-vue/lib/notification/style/index.css'
const useRequest = async <T>(
  api: (...args: any[]) => Promise<HttpResponse<T>>,
  params?: object
) => {
  const { loading, setLoading } = useLoading(true)
  const data = ref<T | null>(null)
  try {
    setLoading(true)
    const result = await api({ ...params })
    data.value = result as T as UnwrapRef<T>
  } catch (e: any) {
    Notification.warning({
      title: '接口错误',
      content: e.message
    })
  } finally {
    setLoading(false)
  }
  return { loading, data }
}

export default useRequest
