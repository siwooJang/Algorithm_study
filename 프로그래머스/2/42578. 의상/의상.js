function solution(clothes) {
    let obj = {};
    let result = 1;
    
    // obj에 key값 v[1] 넣고 , 그 키값에다가 value +1 해주기, 즉 옷 종류(key값)마다 몇개인지 갯수 세주기
    // (keys[v[1]] || 0) 안해주면 null 값 나온다 
    clothes.forEach( (v) => ( obj[v[1]] = (obj[v[1]] || 0) + 1) )
    
    // (종류1 + 안입는경우) * (종류2 + 안입는경우) * ...
    // (a+1) * (b+1) ... ,
    for (let a in obj){ // 여기서 a는 각 key에 대한 value값들
        result *= obj[a] + 1;
    }
    return result - 1; // 아무것도 안입는 경우 제외
}