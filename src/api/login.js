import request from '@/utils/request'

export function login(username, password) {
  // res={token: "xxx", user:"xxx"}
  console.log("login")
  return request({
    url: 'auth/login',
    method: 'post',
    data: {
      username,
      password,
    }
  })
}
export function getInfo() {
  // res={user:"xx", role:"xxx"}
  console.log("info")
  return request({
    url: 'auth/info',
    method: 'get'
  })
}

export function logout() {
  console.log("logout")
  return request({
    url: 'auth/logout',
    method: 'delete'
  })
}
