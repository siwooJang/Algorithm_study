function solution(n, numlist) {
    return numlist.filter( num => (num%n) === 0 )
    // filter = 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
}