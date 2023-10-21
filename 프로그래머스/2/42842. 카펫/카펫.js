function solution(brown, yellow) {
    // (brown + yellow) / x = y
    // (x-2) * (y-2) === yellow
    
    if(yellow === 1){
        return [3,3]
    } else if (yellow ===2){
        return [4,3]
    }
    for (let y = 3; y<brown+yellow;y++){
        let x = Math.floor((brown+yellow) / y);
        if((x-2) * (y-2) === yellow){
            return [x,y]
        }
    }
    return 0
}
