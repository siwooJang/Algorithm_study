function solution(clothes) {
    let map = new Map();
    let result = 1;
    
    for(let i=0; i<clothes.length; i++){
        if(map.get(clothes[i][1])){
            map.set(clothes[i][1],map.get(clothes[i][1])+1)
        } else {
            map.set(clothes[i][1],1)
        }
    }
    
    const count = [...map].length
    const clothesMap = [...map]

    for(let j=0; j<count; j++){
        result *= clothesMap[j][1]+1
    }
    
    return result-1;
    
}