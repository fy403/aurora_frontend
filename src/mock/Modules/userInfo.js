const Mock = require('mockjs')

const userInfoData = Mock.mock({
    'data': {
        code: 200,
        message: '',
        data:  {
             dataScopes: [],
        roles: ['admin'],
        user: {
            dept: {
                id: 2,
                name: '研发部'
            },
            enabled: true,
            gender: '男',
            nickName: '管理员',
            username: 'admin'
            }
        }
    }
})

function userInfo(res) {
    // res是一个请求对象，包含: url, type, body
    return userInfoData.data
}

export default {
    userInfo
}