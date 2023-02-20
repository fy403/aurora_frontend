const Mock = require('mockjs')

const faasListData = Mock.mock({
    'data': {
        code: 200,
        message: '',
        data: [
            {
              "function_id": "a0afa488-2648-4599-beb9-3392e656a0a0",
              "driver": "aliyunfc",
              "function_name": "go",
              "description": "阿里云Function Compute接入成功的Golang通知",
              "timestamp": 1675414732
            },
            {
              "function_id": "c4788bbd-2e51-4d5e-95cb-5e56197c3a04",
              "driver": "aliyunfc",
              "function_name": "nodejs",
              "description": "阿里云Function Compute接入成功的Node.js通知",
              "timestamp": 1675414732
            },
            {
              "function_id": "bcf34c8f-d05d-4392-828b-6f5feb386884",
              "driver": "aliyunfc",
              "function_name": "php",
              "description": "阿里云Function Compute接入成功的PHP通知",
              "timestamp": 1675414732
            },
            {
              "function_id": "59696162-ea06-4a31-808c-33140c777387",
              "driver": "aliyunfc",
              "function_name": "py3",
              "description": "阿里云Function Compute接入成功的Python3通知",
              "timestamp": 1675414732
            }
          ],
    }
})

function faasList(res){
    return faasListData.data
}


export default {
    faasList,
}