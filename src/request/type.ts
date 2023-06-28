// 2023/6/28 16:28 --fcg

export interface HttpResponse<T> {
  code: number
  data: T
  msg: string
}
