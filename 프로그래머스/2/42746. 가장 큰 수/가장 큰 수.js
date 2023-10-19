function solution(numbers) {
    const answer = numbers.map(v => String(v))
    .sort((a,b)=> (b+a) - (a+b)) // 가장 큰 조합부터의 내림차순
    .join('');
    
    return answer[0] === '0'? '0' : answer
}