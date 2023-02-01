import request from '@/utils/request'

export function send(centerRequest) {
  return request({
    url: 'api/task/send',
    method: 'post',
    data: centerRequest,
  })
}

export function touch(centerRequest) {
  return request({
    url: 'api/task/touch',
    method: 'post',
    data: centerRequest,
  })
}


export function workerInfo() {
  return request({
    url: 'api/worker/list',
    method: 'get',
  })
}