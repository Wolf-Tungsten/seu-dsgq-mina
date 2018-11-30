// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 配置
const GQ_EASY = 7
const GQ_DIFFICULT = 3
const DS_EASY = 7
const DS_DIFFICULT = 3

// 云函数入口函数
exports.main = async (event, context) => {
    const dsEasyCount = (await db.collection('quiz').where({catalog:'党史', difficulty:'容易'}).count()).total
    const dsDifficultCount = (await db.collection('quiz').where({catalog:'党史', difficulty:'困难'}).count()).total
    const gqEasyCount = (await db.collection('quiz').where({catalog:'国情', difficulty:'容易'}).count()).total
    const gqDifficultCount = (await db.collection('quiz').where({catalog:'国情', difficulty:'困难'}).count()).total

    let quizList = []


    ;[[GQ_EASY, gqEasyCount, '国情', '容易'], 
    [DS_EASY, dsEasyCount, '党史', '容易'], 
    [GQ_DIFFICULT, gqDifficultCount, '国情', '困难'], 
    [DS_DIFFICULT, dsDifficultCount, '党史', '困难']].forEach(k => {
        for (let i = 0; i < k[0]; i++) {
            quizList.push(
                db.collection('quiz').where({catalog:k[2], difficulty:k[3]})
                .skip(Math.round(Math.random()*k[1])).limit(1).get()
            )
        }
    });

    quizList = await Promise.all(quizList)
    let finalList = []
    quizList.forEach(k => {
        if (k.data && k.data[0]) {
            finalList.push(k)
        }
    })
    return finalList.map(k => {
        return k.data[0]
    })
}