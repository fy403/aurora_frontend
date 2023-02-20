import request from '@/utils/request'

export function list() {
    return request({
        url: 'api/faas/list',
        method: 'get',
    })
}



