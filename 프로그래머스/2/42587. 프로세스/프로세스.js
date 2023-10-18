function solution(priorities, location) {
    let answer = 0;
    let arr = []
    let max_value = Math.max(...priorities);


    for(let i = 0; i < priorities.length; i++){
        arr.push(i);
    }

    while(priorities.length != 0){
         max_value = Math.max(...priorities);
        
        if(priorities[0] < max_value){ // max보다 작을 시 값,인덱스 둘다 맨앞값 맨뒤로 넣기
            priorities.push(priorities.shift())
            arr.push(arr.shift());

        }else { // priorities, 인덱스인 arr도 하나씩 빼면서 location 비교 
            answer+=1;
            priorities.shift();
            if(arr.shift() == location)
                return answer;

        }
    }
}