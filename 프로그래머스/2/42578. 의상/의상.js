function solution(clothes) {
    let obj = {};
    let result = 1;
    
    // obj 키값(v[1]) = 옷 종류, 있는 옷마다 value +1 , 단 없는경우 초기값 0 주고 +1
    // headgear에 yellow_hat이 있으면 headger + 1
    clothes.forEach( (v) => ( obj[v[1]] = (obj[v[1]]||0)+1 )) 
    
    // (옷 종류1 + 안입는경우) * (옷 종류2 + 안입는경우) * ...
    // (a+1) * (b+1) ... , t는 한 종류에 있는 옷 갯수 
    for( let t in obj){  
        result *= obj[t] + 1;
    }

     return result - 1;// 아무것도 안입는 경우 제외
}