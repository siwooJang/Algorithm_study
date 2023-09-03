function solution(numbers) {
    numbers.sort((a,b)=>b-a)
    let a = numbers.length
    return Math.max(numbers[0]*numbers[1] , numbers[a-2]*numbers[a-1])
}