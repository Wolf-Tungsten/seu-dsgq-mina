// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  
  let {cardnum, password} = event
  let openid = wxContext.OPENID
  let userInfo = await db.collection('auth').where({openid}).get()
  if ( userInfo && userInfo.data[0] ) {
    // 根据 openid 已经查询到用户信息，直接返回
    return {
      success:true,
      result:userInfo.data[0]
    }
  }

  if (!cardnum) {
    return {
      success:false,
      reason:'unauthorized'
    }
  }

  // 如果 openid 查询失败，但是用户请求包含一卡通号码
  userInfo = await db.collection('auth').where({cardnum}).get()
  if ( userInfo && userInfo.data[0] ) {
    // openid 不匹配但是一卡通匹配，是该一卡通已经绑定其他微信账号
    // 拒绝请求
    return {
      success:false,
      reason:"该一卡通号已绑定其他微信账号，如有异议请联系管理员。"
    }
  }

  // 执行到此处开始统一身份认证流程

  let authResult = await axios.post("https://myseu.cn/ws3/auth", {cardnum, password, platform:"dsgq-mina"})
  
  if (!authResult.data.success) {
    // 统一身份认证失败
    return {
      success:false,
      reason:authResult.data.reason
    }
  }

  let token = authResult.data.result

  let infoResult = await axios.get("https://myseu.cn/ws3/api/user", { headers : {token} })

  if (!infoResult.data.success) {
    // 身份信息获取失败
    return {
      success:false,
      reason:infoResult.data.reason
    }
  }

  infoResult = infoResult.data.result
  
  await db.collection('auth').add({
    // data 字段表示需新增的 JSON 数据
    data: {
      openid,
      cardnum,
      name: infoResult.name,
      schoolnum: infoResult.schoolnum
    }
  })
  
  return {
    success:true,
    result:{
      openid,
      cardnum,
      name: infoResult.name,
      schoolnum: infoResult.schoolnum
    }
  }
}
