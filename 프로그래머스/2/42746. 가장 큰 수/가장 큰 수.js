function solution(numbers) {
    const ans = numbers.map(v => String(v))
    .sort((a,b)=> (b+a) - (a+b)) // 가장 큰 조합부터의 내림차순
    .join('');
    
    return ans[0] === '0'? '0' : ans
}