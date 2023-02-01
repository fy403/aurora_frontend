const Mock = require('mockjs')

const addData = Mock.mock({
    'data': {
        code: 200,
        message: '',
        data:  {},
    }
})
const delData = Mock.mock({
    'data': {
        code: 200,
        message: '',
        data:  {},
    }
})
const editData = Mock.mock({
    'data': {
        code: 200,
        message: '',
        data:  {},
    }
})

function Add(res) {
    // res是一个请求对象，包含: url, type, body
    return addData.data
}
function Del(res) {
    // res是一个请求对象，包含: url, type, body
    return delData.data
}function Edit(res) {
    // res是一个请求对象，包含: url, type, body
    return editData.data
}
export default {
    Add,
    Del,
    Edit,
}