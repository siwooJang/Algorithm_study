function solution(num, total) {
    let result = []
    let mid = Math.ceil(total/num) // 올림 해줘야 한다
    let x = Math.floor(num / 2)
    let start = mid-x
    for(let i =0;i<num;i++){
        result.push(start+i)
    }
    return result
}