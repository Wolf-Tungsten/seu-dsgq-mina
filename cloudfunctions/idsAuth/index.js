// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')
const axiosCookieJarSupport = require('axios-cookiejar-support').default
axiosCookieJarSupport(axios)
const tough = require('tough-cookie')
cloud.init()
const db = cloud.database()
const cookieJar = new tough.CookieJar()
const qs = require('querystring')

let _axios = axios.create({
  // 使用当前会话的 CookieJar
  withCredentials: true,
  jar: cookieJar,
  // 覆盖默认的状态码判断，防止在禁用重定向时误判 302 为错误返回
  validateStatus: s => s < 400,
  transformRequest(req) {
    if (typeof req === 'object') {
      return qs.stringify(req)
    }
    return req
  }
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  let { cardnum, name, identity } = event
  let openid = wxContext.OPENID
  let userInfo = await db.collection('auth').where({ openid }).get()
  if (userInfo && userInfo.data[0]) {
    // 根据 openid 已经查询到用户信息，直接返回
    return {
      success: true,
      result: userInfo.data[0]
    }
  }

  if (!cardnum) {
    return {
      success: false,
      reason: 'unauthorized'
    }
  }

  // 如果 openid 查询失败，但是用户请求包含一卡通号码
  userInfo = await db.collection('auth').where({ cardnum }).get()
  if (userInfo && userInfo.data[0]) {
    // openid 不匹配但是一卡通匹配，是该一卡通已经绑定其他微信账号
    // 拒绝请求
    return {
      success: false,
      reason: "该一卡通号已绑定其他微信账号，如有异议请联系管理员。"
    }
  }

  // 允许插入新记录，从统一身份认证小程序获取的信息
  await db.collection('auth').add({
    // data 字段表示需新增的 JSON 数据
    data: {
      openid,
      cardnum,
      name,
      identity
    }
  })

  return {
    success: true,
    result: {
      openid,
      cardnum,
      name,
      identity
    }
  }
}
