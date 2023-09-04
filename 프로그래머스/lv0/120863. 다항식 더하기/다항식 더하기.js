function solution(polynomial) {
    
    let arr = polynomial.split(" + ")
    let x = 0; let num = 0;
    
    arr.forEach((n) => {
        if(n.includes("x")){
            let str = n.replace("x","") || "1"
            x += parseInt(str,10)
        } else {
            num += parseInt(n)
        }
    })
    
    let answer = []
    
    if(x) answer.push(`${x === 1 ? "" : x}x`)
    if(num) answer.push(num)
    
    return answer.join(" + ")

}