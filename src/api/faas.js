import request from '@/utils/request'

export function list() {
    return request({
        url: 'api/faas/list',
        method: 'get',
    })
}

export function langs() {
    return request({
        url: 'api/faas/langs',
        method: 'get',
    })
}

export function create(data) {
    return request({
        url: 'api/faas/create',
        method: 'post',
        data,
    })
}

export function write(data) {
    return request({
        url: 'api/faas/write',
        method: 'post',
        data,
    })
}

export function up(data) {
    return request({
        url: 'api/faas/up',
        method: 'post',
        data,
    })
}

export function del(data) {
    return request({
        url: 'api/faas/delete',
        method: 'post',
        data,
    })
}



