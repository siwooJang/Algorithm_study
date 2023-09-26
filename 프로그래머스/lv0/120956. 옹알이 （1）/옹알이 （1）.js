function solution(babbling) {
    let can = [ "aya", "ye", "woo", "ma"]
    let result = 0;
    for(let i in babbling){
        let temp = babbling[i]
        for(let j in can){
            if(temp.includes(can[j])){
                temp = temp.replace(can[j],"X") // 공백으로 나누면 구별불가능
            }
        }
        temp = temp.replace(/X/gi,"")
        if(temp.length===0)
            result++
    }
    return result
}