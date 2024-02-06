function solution(citations) {
    let result = 0;
    let s = citations.sort((a,b)=>b-a);
    for(let i=0;i<s.length;i++){
        if(s[i]>i){
            result++
        }
    }
    return result
}
//논문 인용횟수를 내림차순으로 정렬하고 배열 길이만큼 for문을 돌린다.

// 자신의 인용횟수(citations[i])가 자신보다 인용횟수가 많은 논문 수(i) 보다 많으면 정답 수를 1 증가시킨다.

// 자신의 인용횟수가 자신보다 인용횟수가 많은 논문 수와 같거나 작아지면 거기까지가 H index. 이제 result return