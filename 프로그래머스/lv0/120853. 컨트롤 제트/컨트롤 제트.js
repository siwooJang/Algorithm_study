function solution(s) {
    let result = []
    s = s.split(" ")
    for(let i of s){
        if(i==="Z"){
            result.pop()
        } else{
            result.push(+i) // 숫자로 변환해서 넣으려고 +
        }
    }
    return result.reduce((a,c)=>a+c,0)
}