import JSEncrypt from 'jsencrypt';

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMdWCc+jR7+fZh+ZW9PZm8wHyO0wOW2+\n'+
                  'E8cohZ+i1bCe7v87MVL7jhm2IjulInL4+ZAK21yDF5q1/LLe0hXjxBMCAwEAAQ=='
const privateKey = 'MIIBVQIBADANBgkqhkiG9w0BAQEFAASCAT8wggE7AgEAAkEAx1YJz6NHv59mH5lb\n'+
                   '09mbzAfI7TA5bb4TxyiFn6LVsJ7u/zsxUvuOGbYiO6Uicvj5kArbXIMXmrX8st7S\n'+
                   'FePEEwIDAQABAkEAnmiYWWLHlNdmf7wOxndLIUQaf6twJ+8CpqVkMy1jJfxurLzr\n'+
                   'JSDEHjmA6wHATcjgvqd2mmBrbxPTqVxQ+QH0CQIhAPrXU/eQLNGpEPYRz9aEhM7c\n'+
                   'Ir+VHFNyEdsVPOUOhO5dAiEAy2+JovhrpRoFyhBZLkOm4GiSaWx2DJmKyedxTQkB\n'+
                   '9S8CIDEByMHhRSBhK5Mnv7dlhJz1nURY2YPkEWEAMTl/MLFxAiA6mZBuD10Cm/Ja\n'+
                   '+EaYGwiwz66NC58dlgTyj+aFKDkWJQIhAO2jLPgWiFSzj6v9zfhH/NIG10ZrFcv4' 

// 加密
export function encrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对需要加密的数据进行加密
}

// 解密
export function decrypt(txt) {
  const decryptor = new JSEncrypt()
  decryptor.setPrivateKey(privateKey) // 设置私钥
  return decryptor.decrypt(txt) // 对需要加密的数据进行解密
}


