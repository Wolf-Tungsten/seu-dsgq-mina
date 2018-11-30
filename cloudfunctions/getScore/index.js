// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const openid = wxContext.OPENID
  if (!openid) {
    openid = event.openid
  }
  let record = await db.collection('record').where({openid}).get()
  if (record.data.length === 0) {
    return {
      submit:false
    }
  } else {
    return {
      submit:true,
      record:record.data[0]
    }
  }
}