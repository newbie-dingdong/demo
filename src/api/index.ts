// 2023/6/28 16:32 --fcg

import request from '@/request'

export const getTableListApi = (params?: any) => request.get('/lists', params)
