// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 配置
const GQ_EASY = process.env.GQ_EASY
const GQ_DIFFICULT = process.env.GQ_DIFFICULT
const DS_EASY = process.env.DS_EASY
const DS_DIFFICULT = process.env.DS_DIFFICULT

// 云函数入口函数
exports.main = async (event, context) => {
    const dsEasyCount = (await db.collection('quiz').where({catalog:'党史', difficulty:'容易'}).count()).total
    const dsDifficultCount = (await db.collection('quiz').where({catalog:'党史', difficulty:'困难'}).count()).total
    const gqEasyCount = (await db.collection('quiz').where({catalog:'国情', difficulty:'容易'}).count()).total
    const gqDifficultCount = (await db.collection('quiz').where({catalog:'国情', difficulty:'困难'}).count()).total

    let quizList = []
    let idPool = {} // 用于去重


    const catelogs = [[GQ_EASY, gqEasyCount, '国情', '容易'], 
    [DS_EASY, dsEasyCount, '党史', '容易'], 
    [GQ_DIFFICULT, gqDifficultCount, '国情', '困难'], 
    [DS_DIFFICULT, dsDifficultCount, '党史', '困难']]
    

    for( let k = 0; k < 4; k++ ){
        idPool = {} // 清空去重
        for (let i = 0; i < catelogs[k][0]; i++) {
            let quiz
            while(1){
                quiz = await db.collection('quiz').where({catalog:catelogs[k][2], difficulty:catelogs[k][3]}).skip(Math.round(Math.random()*catelogs[k][1])).limit(1).get();
                if(quiz.data.length === 0){
                    // 没有命中则重新生成
                    continue
                }
                if(idPool['$'+quiz.data[0]._id]){
                    // 存在重复则重新生成
                    continue
                }
                idPool['$'+quiz.data[0]._id] = true
                quizList.push(quiz)
                break
            }
        }
    }

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

exports.main()