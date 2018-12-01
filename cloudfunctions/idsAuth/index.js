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

  let { cardnum, password } = event
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

  // 执行到此处开始统一身份认证流程
  let infoResult
  if (cardnum.startsWith('10') || cardnum.startsWith('22')) {
    // 适用于教师登录
    try {
      // 优先使用东大 App (ids-mobile) 认证，这种认证成功率比老信息门户 ids3 高，但对某些外籍学生不适用
      let res = await axios.post(
        'http://mobile4.seu.edu.cn/_ids_mobile/login18_9',
        { username: cardnum, password }
      )
    } catch (e) {
      // 当 ids-mobile 抛出 401，改用老门户 ids3 认证再次尝试
      if (e.response && e.response.status === 401) {
        await _axios.get('http://myold.seu.edu.cn/login.portal')
        let res = await _axios.post('http://myold.seu.edu.cn/userPasswordValidate.portal', {
          'Login.Token1': cardnum,
          'Login.Token2': password
        })
        // 若老门户 ids3 认证仍失败，抛出 401
        if (/用户不存在或密码错误/.test(res.data)) {
          return {
            success: false,
            reason: '一卡通或密码错误'
          }
        }
      } else {
        return {
          success: false,
          reason: '身份认证失败'
        }
      }
    }
  } else {
    let authResult = await axios.post("https://myseu.cn/ws3/auth", { cardnum, password, platform: "dsgq-mina" })

    if (!authResult.data.success) {
      // 统一身份认证失败
      return {
        success: false,
        reason: authResult.data.reason
      }
    }

    let token = authResult.data.result

    infoResult = await axios.get("https://myseu.cn/ws3/api/user", { headers: { token } })

    if (!infoResult.data.success) {
      // 身份信息获取失败
      return {
        success: false,
        reason: infoResult.data.reason
      }
    }

    infoResult = infoResult.data.result
  }
  await db.collection('auth').add({
    // data 字段表示需新增的 JSON 数据
    data: {
      openid,
      cardnum,
      name: infoResult ? infoResult.name:'教职员工',
      schoolnum:  infoResult ? infoResult.schoolnum:'教职员工'
    }
  })

  return {
    success: true,
    result: {
      openid,
      cardnum,
      name: infoResult ? infoResult.name:'教职员工',
      schoolnum:  infoResult ? infoResult.schoolnum:'教职员工'
    }
  }
}
