function solution(n) {
    let cnt = 0;
    for(let i =1; i*i<n; i++){
        if(n%i===0) cnt++;
    }
    return Number.isInteger(Math.sqrt(n)) ? 2*cnt+1 : 2*cnt
}