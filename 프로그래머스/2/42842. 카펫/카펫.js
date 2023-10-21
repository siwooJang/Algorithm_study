function solution(brown, yellow) {
    // 조건 1 : (brown + yellow) / x = y
    // 조건 2 : (x-2) * (y-2) === yellow
    for (let y = 3; y<brown+yellow;y++){
        let x = (brown+yellow) / y;
        if((x-2) * (y-2) === yellow){ 
            return [x,y]
        }
    }
}
