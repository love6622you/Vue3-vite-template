import request from '@/lib/request'

const baseUrl = '/api/v1'
function getHomeList(params?: any) {
  return request({
    url: baseUrl + '/homeList',
    method: 'get',
    params
  })
}

export const user = {
  getHomeList
}
