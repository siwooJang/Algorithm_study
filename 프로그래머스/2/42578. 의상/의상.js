function solution(clothes) {
    let obj = {};
    let result = 1;
    
    // 종류 개수 구하기, (keys[v[1]] || 0) 안해주면 null 값 나온다 
    clothes.forEach( (v) => ( obj[v[1]] = (obj[v[1]] || 0) + 1) )
    
    // (종류1 + 안입는경우) * (종류2 + 안입는경우) * ...
    // (a+1) * (b+1) ...
    for (let a in obj){
        result *= obj[a] + 1;
    }
    
    return result - 1; // 아무것도 안입는 경우 제외
}