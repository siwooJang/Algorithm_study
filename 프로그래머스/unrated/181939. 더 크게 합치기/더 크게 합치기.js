function solution(a, b) {
    var answer = 0;
    let ab = a.toString()+b.toString()
    let ba = b.toString()+a.toString()
    if ( parseInt(ab)>parseInt(ba)){
        answer = parseInt(ab)
    } else {
        answer = parseInt(ba)
    }
    return answer;
}

// function solution(a, b) {
//     return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
// }