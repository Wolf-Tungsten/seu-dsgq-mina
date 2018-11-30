// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {

  const wxContext = cloud.getWXContext()
  let quiz = event.quiz // 获取用户提交的记录
  let amount = 0 // 总分数
  let got = 0 // 实际得分

  quiz.forEach(k => {
    let single = k.difficulty === '容易' ? 3 : 5
    let userAnswer = []
    ;['A', 'B', 'C', 'D'].forEach(
      option => {
        if (k[`check${option}`]) {
          userAnswer.push(option)
        }
      }
    )
    userAnswer = userAnswer.join('')
    if (userAnswer === k.answer) {
      got += single
    }
    amount += single
  });

  let openid = wxContext.OPENID

  if (!openid) {
    openid = event.openid
  }

  let record = {
    score: Math.round( got / amount * 100 ),
    quiz: quiz,
    openid
  }

  let userInfo = await db.collection('auth').where({openid}).get()
  userInfo = userInfo.data[0]

  // 以防万一删除原有记录，按照逻辑不应该执行
  let log = await db.collection('record').where({openid}).remove()

  record.cardnum = userInfo.cardnum
  record.schoolnum = userInfo.schoolnum
  record.name = userInfo.name

  await db.collection('record').add({data:record})
  
  return {
    success:true
  }
}