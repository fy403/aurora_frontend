const Mock = require('mockjs')

const workerInfoData = Mock.mock({
    'data': {
        code: 200,
        message: '',
        data: [
            {
              "uuid": "worker_9bda59e2-a539-458f-ba95-9b25cbefdbea",
              "spec_queue": "e9265afe-6f79-44cd-b2e6-42e01492b5f2",
              "metrics": null,
              "handlers": [
                {
                  "name": "long_running_task",
                  "usage": "默认长时间运行指定时间,接受一个int64类型参数作为默认时间,单位秒,返回error",
                  "in_args": [
                    {
                      "type": "int64",
                      "value": null
                    }
                  ],
                  "out_args": [
                    {
                      "type": "error",
                      "value": null
                    }
                  ],
                  "fn": null
                },
                {
                  "name": "multiply",
                  "usage": "将任意个数int64相乘, 返回int64, error",
                  "in_args": [
                    {
                      "type": "[]int64",
                      "value": null
                    }
                  ],
                  "out_args": [
                    {
                      "type": "int64",
                      "value": null
                    },
                    {
                      "type": "error",
                      "value": null
                    }
                  ],
                  "fn": null
                },
                {
                  "name": "openfaas_driver",
                  "usage": "openfaas的驱动句柄: in[0]为函数名字, in[1]为string; 返回string, error",
                  "in_args": [
                    {
                      "type": "string",
                      "value": null
                    },
                    {
                      "type": "string",
                      "value": null
                    }
                  ],
                  "out_args": [
                    {
                      "type": "string",
                      "value": null
                    },
                    {
                      "type": "error",
                      "value": null
                    }
                  ],
                  "fn": null
                },
                {
                  "name": "split",
                  "usage": "将一个string按字母分割, 返回[]string, error",
                  "in_args": [
                    {
                      "type": "string",
                      "value": null
                    }
                  ],
                  "out_args": [
                    {
                      "type": "[]string",
                      "value": null
                    },
                    {
                      "type": "error",
                      "value": null
                    }
                  ],
                  "fn": null
                },
                {
                  "name": "sum_floats",
                  "usage": "将任意个数float64累加, 返回float64, error",
                  "in_args": [
                    {
                      "type": "[]float64",
                      "value": null
                    }
                  ],
                  "out_args": [
                    {
                      "type": "float64",
                      "value": null
                    },
                    {
                      "type": "error",
                      "value": null
                    }
                  ],
                  "fn": null
                },
                {
                  "name": "add",
                  "usage": "将任意个数int64累加, 返回int64, error",
                  "in_args": [
                    {
                      "type": "[]int64",
                      "value": null
                    }
                  ],
                  "out_args": [
                    {
                      "type": "int64",
                      "value": null
                    },
                    {
                      "type": "error",
                      "value": null
                    }
                  ],
                  "fn": null
                },
                {
                  "name": "aliyunfc_driver",
                  "usage": "aliyunfc的驱动句柄: in[0]为函数名字, in[1]为string; 返回string, error",
                  "in_args": [
                    {
                      "type": "string",
                      "value": null
                    },
                    {
                      "type": "string",
                      "value": null
                    }
                  ],
                  "out_args": [
                    {
                      "type": "string",
                      "value": null
                    },
                    {
                      "type": "error",
                      "value": null
                    }
                  ],
                  "fn": null
                },
                {
                  "name": "concat",
                  "usage": "将一个[]string的元素相拼接, 返回string, error",
                  "in_args": [
                    {
                      "type": "[]string",
                      "value": null
                    }
                  ],
                  "out_args": [
                    {
                      "type": "string",
                      "value": null
                    },
                    {
                      "type": "error",
                      "value": null
                    }
                  ],
                  "fn": null
                }
              ],
              "labels": {
                "k1": "v1",
                "k2": "v2"
              },
              "timestamp": 1675414622
            }
          ]
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