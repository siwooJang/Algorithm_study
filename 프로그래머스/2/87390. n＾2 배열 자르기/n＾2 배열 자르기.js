function solution(n, left, right) {
    let answer = [];
    
    //left ~ right범위의 임의의 숫자 num에 대해서 좌표 (r, c)를 구하는 공식
    // r = floor(num / n)
    // c = num % n
    
    while (left <= right) {
        answer.push(Math.max(Math.floor(left/n), left++ % n) +1);
    }
    
    return answer;
}