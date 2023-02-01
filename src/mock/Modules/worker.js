const Mock = require('mockjs')

const workerInfoData = Mock.mock({
    'data': {
        code: 200,
        message: '',
        data: [{
            "spec_queue": "spec_queue:3536901809",
            "metrics": null,
            "handlers": [{
                "name": "multiply",
                "usage": "将任意个数int64相乘, 返回int64, error",
                "in_args": [{
                    "name": "",
                    "type": "[]int64",
                    "value": null
                }],
                "out_args": [{
                    "name": "",
                    "type": "int64",
                    "value": null
                }, {
                    "name": "",
                    "type": "error",
                    "value": null
                }]
            }, {
                "name": "panic",
                "usage": "无参数, 直接返回string, error",
                "in_args": null,
                "out_args": [{
                    "name": "",
                    "type": "string",
                    "value": null
                }, {
                    "name": "",
                    "type": "error",
                    "value": null
                }]
            }, {
                "name": "split",
                "usage": "将一个string按字母分割, 返回[]string, error",
                "in_args": [{
                    "name": "",
                    "type": "string",
                    "value": null
                }],
                "out_args": [{
                    "name": "",
                    "type": "[]string",
                    "value": null
                }, {
                    "name": "",
                    "type": "error",
                    "value": null
                }]
            }, {
                "name": "sum_floats",
                "usage": "将任意个数float64累加, 返回float64, error",
                "in_args": [{
                    "name": "",
                    "type": "[]float64",
                    "value": null
                }],
                "out_args": [{
                    "name": "",
                    "type": "float64",
                    "value": null
                }, {
                    "name": "",
                    "type": "error",
                    "value": null
                }]
            }, {
                "name": "add",
                "usage": "将任意个数int64累加, 返回int64, error",
                "in_args": [{
                    "name": "",
                    "type": "[]int64",
                    "value": null
                }],
                "out_args": [{
                    "name": "",
                    "type": "int64",
                    "value": null
                }, {
                    "name": "",
                    "type": "error",
                    "value": null
                }]
            }, {
                "name": "concat",
                "usage": "将一个[]string的元素相拼接, 返回string, error",
                "in_args": [{
                    "name": "",
                    "type": "[]string",
                    "value": null
                }],
                "out_args": [{
                    "name": "",
                    "type": "string",
                    "value": null
                }, {
                    "name": "",
                    "type": "error",
                    "value": null
                }]
            }, {
                "name": "long_running_task",
                "usage": "默认长时间运行指定时间,接受一个int64类型参数作为默认时间,单位秒,返回error",
                "in_args": [{
                    "name": "",
                    "type": "int64",
                    "value": null
                }],
                "out_args": [{
                    "name": "",
                    "type": "error",
                    "value": null
                }]
            }],
            "labels": {
                "k1": "v1",
                "k2": "v2"
            },
            "created_at": {
                "$numberLong": "1673963254"
            }
        }]
    }
})


const workerEditHandlerData = Mock.mock({
    'data' : {
        code: 200,
        message: '',
        data: '',
    }
})

function workerInfo(res) {
    // res是一个请求对象，包含: url, type, body
    return workerInfoData.data
}

function workerEditHandler(res) {
    // res是一个请求对象，包含: url, type, body
    return workerEditHandlerData.data
}

export default {
    workerInfo,
    workerEditHandler,
}