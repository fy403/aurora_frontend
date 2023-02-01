// 引入mockjs
import Mock from 'mockjs'
// 引入模板函数类
import loginApi from './Modules/login'
import userInfoApi from './Modules/userInfo'
import workerAPi from './Modules/worker'
import taskApi from './Modules/task'
// import handlerAPi from './Modules/handler'
import faasAPi from './Modules/faas'
// Mock函数
const { mock } = Mock

// 设置延时
Mock.setup({
  timeout: 400
})

// 使用拦截规则拦截命中的请求，mock(url, post/get, 返回的数据);
mock(/\/auth\/login/, 'post', loginApi.login)
mock(/\/auth\/info/, 'get', userInfoApi.userInfo)
mock(/\/auth\/logout/, 'delete', loginApi.logout)

mock(/\/api\/worker\/list/, 'get', workerAPi.workerInfo)
mock(/\/api\/worker\/edit/, 'post', workerAPi.workerEditHandler)

// TODO: 此部分功能不完善
// mock(/\/api\/handler\/add/, 'post', handlerAPi.Add)
// mock(/\/api\/handler\/del/, 'del', handlerAPi.Del)
// mock(/\/api\/handler\/edit/, 'put', handlerAPi.Edit)

mock(/\/api\/task\/send/, 'post', taskApi.taskSend)
mock(/\/api\/task\/touch/, 'post', taskApi.taskTouch)

mock(/\/api\/faas\/list/, 'get', faasAPi.faasList)
mock(/\/api\/faas\/langs/, 'get', faasAPi.faasLangs)
mock(/\/api\/faas\/create/, 'post', faasAPi.faasCreate)
mock(/\/api\/faas\/up/, 'post', faasAPi.faasUp)
mock(/\/api\/faas\/write/, 'post', faasAPi.faasWrite)
mock(/\/api\/faas\/delete/, 'post', faasAPi.faasDelete)


