function solution(score) {
    let sum = score.map(v=>v[0]+v[1])
    let sorted = sum.slice().sort((a,b)=>b-a)
    return sum.map(v=>sorted.indexOf(v)+1)
}