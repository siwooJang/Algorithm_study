function solution(age) {
    let pg = 'abcdefghij'
    return Array.from(age.toString()).map(t=>pg[+t]).join("")
}