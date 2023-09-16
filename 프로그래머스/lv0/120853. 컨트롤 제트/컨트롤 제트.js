function solution(s) {
    let result = []
    s = s.split(" ")
    for(let i of s){
        if(i==="Z"){
            result.pop()
        } else{
            result.push(+i)
        }
    }
    return result.reduce((a,c)=>a+c,0)
}