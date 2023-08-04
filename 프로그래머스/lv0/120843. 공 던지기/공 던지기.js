function solution(numbers, k) {
    let idx = 1 // k가 1일때도 생각해야하니까 0은 안됨
    for(let i =0; i<k-1; i++){
        idx += 2;
        
        if(idx>numbers.length){
            idx -= numbers.length
        }
    }
    // result는 공을 받는 사람이고, idx 1에서 시작했으니
    // 공을 던진 사람의 번호를 얻으려면 -2+1 ,  -1  해줘야함
    
    return numbers[idx-1]  
}