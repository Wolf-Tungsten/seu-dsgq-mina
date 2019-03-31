const xlsx = require('node-xlsx').default
const fs = require('fs')

let nameList = xlsx.parse('/Users/wolf_tungsten/Documents/党史国情知识竞赛小程序/本科生党员1.XLS')
let rawResult = fs.readFileSync('/Users/wolf_tungsten/Documents/党史国情知识竞赛小程序/第一轮结果+电子.json')

rawResult = '' + rawResult
rawResult =  rawResult.split('\n')
result = []
rawResult = rawResult.forEach( k=>{
    if(k){
        k = JSON.parse(k)
        k.score = +k.score.$numberLong
        result.push(k)
    }
})

let cardnumMap = {}
let collegeMap = {}
nameList[0].data.forEach( k=> {
    cardnumMap[k[0]] = k
})

// 建立map
nameList[0].data.forEach( k=> {
    collegeMap[k[4]] = { amount: 0, recordList: []}
})

// 统计支部总人数
nameList[0].data.forEach( k=> {
    collegeMap[k[4]].amount++
})


result.forEach( r => {
    let cardnum = r.cardnum
    let info = cardnumMap[cardnum]
    console.log(info)
    if(!info){
        console.log(`${cardnum} 没有所在基层党委`)
        return
    }
    collegeMap[info[4]].recordList.push(r)
})

let attendencyList = []
Object.keys(collegeMap).forEach( c => {
    collegeMap[c].count = collegeMap[c].recordList.length
    attendencyList.push({name:c, amount:collegeMap[c].amount, count:collegeMap[c].count})
})

console.log(attendencyList)

attendencyList.sort((a, b) => {
    return b.count/b.amount - a.count/a.amount
})

let output = attendencyList.map(k => {
    return `${k.name},${k.amount},${k.count},${k.count/k.amount}`
})

output = output.join('\n')

fs.writeFileSync('第一轮结果+电子.csv', output)
console.log(output)