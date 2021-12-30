import request from '@/utils/request'

export function list (data) {
  return request({
    url: '/table/list',
    method: 'post',
    data
  })
}
export function music () {
  return request({
    url: '/music',
    method: 'post'
  })
}
export function picList () {
  return request({
    url: '/picList',
    method: 'post'
  })
}
