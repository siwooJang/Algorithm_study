function solution(people, limit) {
    people.sort((a, b) => a - b)
    let answer = 0
    let [l,r] = [0,people.length - 1];
    while(l<=r){
        let sum = people[l]+people[r]
        if(sum>limit){ // limit를 넘으면 마지막수(큰수)가 혼자 타는 배, r--
            r--;
        } else { // limit을 넘지 않으면 (첫번째 수와 마지막 수를 배에 태우기 때문에) 양 끝에서 다음 수로 향하도록 l++, r--
            l++;
            r--;
        }
        answer++  // 혼자 타든 같이 타든 배 횟수 추가 answer ++
    }

    return answer
}