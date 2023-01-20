const Mock = require('mockjs')

const loginData = Mock.mock({
    'data': {
       code: 200,
       message: '',
       data:  {
        user: {
            roles: [
                'admin'
            ],
            user: {
                createTime: '2018-08-23 09:11:56',
                dept: {
                    id: 2,
                    name: '研发部'
                },
                enabled: true,
                gender: '男',
                isAdmin: true,
                nickName: '管理员',
                username: 'admin'
            }
        },
        token: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI0MGM5YjQ5NmRiMmM0MmVmOTBlY2VhZjc2MjhkZDU0YyIsInVzZXIiOiJhZG1pbiIsInN1YiI6ImFkbWluIn0.YzU86yTa7xsGtTlru3f40J--Kl0ZkA3C9_E7o_qNDoPKgF5KkNVuWjxhnVz_EmJTocRI2Iv0mP2DsPPeHW1QuQ'
        }
    }
})

function login (res) {
  // res是一个请求对象，包含: url, type, body
    return loginData.data
}

function logout (res) {
    return ''
}

export default { login, logout }