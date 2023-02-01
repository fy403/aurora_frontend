const Mock = require('mockjs')

const faasListData = Mock.mock({
    'data': {
        code: 200,
        message: '',
        data:  [
            {
            "uuid": "5502e755-d9c7-4176-b9fb-cc8e33039b7d",
            "driver": "openfaas",
            "name": "go-http-test",
            "lang": "golang-http",
            "url": "http://127.0.0.1:8080/function/go-http-test",
            "content": "cGFja2FnZSBmdW5jdGlvbgoKaW1wb3J0ICgKCSJmbXQiCgkibmV0L2h0dHAiCgoJaGFuZGxlciAiZ2l0aHViLmNvbS9vcGVuZmFhcy90ZW1wbGF0ZXMtc2RrL2dvLWh0dHAiCikKCi8vIEhhbmRsZSBhIGZ1bmN0aW9uIGludm9jYXRpb24KZnVuYyBIYW5kbGUocmVxIGhhbmRsZXIuUmVxdWVzdCkgKGhhbmRsZXIuUmVzcG9uc2UsIGVycm9yKSB7Cgl2YXIgZXJyIGVycm9yCgoJbWVzc2FnZSA6PSBmbXQuU3ByaW50ZigiQm9keTogJXMiLCBzdHJpbmcocmVxLkJvZHkpKQoKCXJldHVybiBoYW5kbGVyLlJlc3BvbnNlewoJCUJvZHk6ICAgICAgIFtdYnl0ZShtZXNzYWdlKSwKCQlTdGF0dXNDb2RlOiBodHRwLlN0YXR1c09LLAoJfSwgZXJyCn0K",
            "dependencies": "bW9kdWxlIGhhbmRsZXIvZnVuY3Rpb24KCmdvIDEuMTgKCnJlcXVpcmUgZ2l0aHViLmNvbS9vcGVuZmFhcy90ZW1wbGF0ZXMtc2RrL2dvLWh0dHAgdjAuMC4wLTIwMjIwNDA4MDgyNzE2LTU5ODFjNTQ1Y2IwMwo=",
            "status": "UP",
            "timestamp": 1675049348
            },
            {
            "uuid": "67d64e73-0421-4616-9ecf-248e5b751653",
            "driver": "openfaas",
            "name": "go-http-test-2",
            "lang": "golang-http",
            "url": "http://127.0.0.1:8080/function/go-http-test-2",
            "content": "cGFja2FnZSBmdW5jdGlvbgoKaW1wb3J0ICgKCSJmbXQiCgkibmV0L2h0dHAiCgoJaGFuZGxlciAiZ2l0aHViLmNvbS9vcGVuZmFhcy90ZW1wbGF0ZXMtc2RrL2dvLWh0dHAiCikKCi8vIEhhbmRsZSBhIGZ1bmN0aW9uIGludm9jYXRpb24KZnVuYyBIYW5kbGUocmVxIGhhbmRsZXIuUmVxdWVzdCkgKGhhbmRsZXIuUmVzcG9uc2UsIGVycm9yKSB7Cgl2YXIgZXJyIGVycm9yCgoJbWVzc2FnZSA6PSBmbXQuU3ByaW50ZigiQm9keTogJXMiLCBzdHJpbmcocmVxLkJvZHkpKQoKCXJldHVybiBoYW5kbGVyLlJlc3BvbnNlewoJCUJvZHk6ICAgICAgIFtdYnl0ZShtZXNzYWdlKSwKCQlTdGF0dXNDb2RlOiBodHRwLlN0YXR1c09LLAoJfSwgZXJyCn0K",
            "dependencies": "bW9kdWxlIGhhbmRsZXIvZnVuY3Rpb24KCmdvIDEuMTgKCnJlcXVpcmUgZ2l0aHViLmNvbS9vcGVuZmFhcy90ZW1wbGF0ZXMtc2RrL2dvLWh0dHAgdjAuMC4wLTIwMjIwNDA4MDgyNzE2LTU5ODFjNTQ1Y2IwMwo=",
            "status": "CREATED",
            "timestamp": 1675049471
            }
        ],
    }
})
const faasLangsData = Mock.mock({
    'data': {
        code: 200,
        message: '',
        data:  {
            "openfaas": [
                "go",
                "golang-middleware",
                "golang-http",
                "node",
                "python",
                "python3"
            ]
        },
    }
})
const faasCreateData = Mock.mock({
    'data': {
        code: 200,
        message: '',
        data:  '',
    }
})
const faasWriteData = Mock.mock({
    'data': {
        code: 200,
        message: '',
        data:  '',
    }
})
const faasUpData = Mock.mock({
    'data': {
        code: 200,
        message: '',
        data:  '',
    }
})
const faasDeleteData = Mock.mock({
    'data': {
        code: 200,
        message: '',
        data:  '',
    }
})


function faasList(res) {
    // res是一个请求对象，包含: url, type, body
    return faasListData.data
}
function faasLangs(res) {
    // res是一个请求对象，包含: url, type, body
    return faasLangsData.data
}

function faasCreate(res) {
    // res是一个请求对象，包含: url, type, body
    return faasCreateData.data
}

function faasWrite(res) {
    // res是一个请求对象，包含: url, type, body
    return faasWriteData.data
}

function faasUp(res) {
    // res是一个请求对象，包含: url, type, body
    return faasUpData.data
}

function faasDelete(res) {
    // res是一个请求对象，包含: url, type, body
    return faasDeleteData.data
}


export default {
    faasList,
    faasLangs,
    faasCreate,
    faasDelete,
    faasWrite,
    faasUp,
}