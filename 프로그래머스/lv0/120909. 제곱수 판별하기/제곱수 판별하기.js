function solution(n) {
    let sqrt = Math.sqrt(n) //sqrt 는 제곱근 
    return Number.isInteger(sqrt) ? 1 : 2  // integer로 나누어 떨어지면 제곱근임 
}