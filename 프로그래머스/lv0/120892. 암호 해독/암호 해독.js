function solution(cipher, code) {
    let answer = []
    let num = code;
    for(let i=1; num<=cipher.length; i++){
        num = code*i-1
            answer.push(cipher[num])
    }
    return answer.join("")
}