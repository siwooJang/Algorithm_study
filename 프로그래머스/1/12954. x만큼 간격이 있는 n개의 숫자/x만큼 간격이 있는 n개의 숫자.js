function solution(x, n) {
    let answer = []
    for(let i=0; i<n; i++){
        answer.push(x*(i+1))
    }
    return answer
}