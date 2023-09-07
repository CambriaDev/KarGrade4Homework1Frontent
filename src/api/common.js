import request from '@/util/request'

export function getCommonData(type) {
  return request({
    url: '/common/' + type,
    method: 'get'
  })
}
