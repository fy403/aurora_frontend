import request from '@/utils/request'

export function send(centerRequest) {
  console.log("send")
  return request({
    url: 'api/task/send',
    method: 'post',
    data: centerRequest,
  })
}

export function touch(centerRequest) {
  console.log("touch")
  return request({
    url: 'api/task/touch',
    method: 'post',
    data: centerRequest,
  })
}


export function workerInfo() {
  console.log("workerInfo")
  return request({
    url: 'api/worker/list',
    method: 'get',
  })
}