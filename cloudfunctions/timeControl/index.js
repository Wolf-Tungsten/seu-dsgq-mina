// 云函数入口文件
const cloud = require('wx-server-sdk')
const moment = require('moment')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let now = +moment()
  let startTime = +moment(process.env.startTime, 'YYYY-MM-DD hh:mm:ss')
  let endTime = +moment(process.env.endTime, 'YYYY-MM-DD hh:mm:ss')
  let periodName = process.env.periodName
  let status
  if ( now < startTime ) {
    status = 'wait'
  } else if ( now >= startTime && now < endTime) {
    status = 'pending'
  } else {
    status = 'end'
  }
  return {
    status,
    periodName,
    startTime,
    endTime,
    now
  }
}