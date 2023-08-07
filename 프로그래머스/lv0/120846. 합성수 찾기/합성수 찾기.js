function solution(n) {
    let answer = 0;
    for ( let i =0; i<n+1; i++){
        let a =0;
        for ( let j =1; j<i+1; j++){
            if(i%j ===0){
                a++;
            }
        } if(a>2){
            answer++
        }
    }
    return answer
}