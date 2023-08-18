function solution(s) {
    let a =[]
    for(let c of s) { 
        if(s.indexOf(c)===s.lastIndexOf(c)) 
            a.push(c) 
    }
    return a.sort().join("")
}