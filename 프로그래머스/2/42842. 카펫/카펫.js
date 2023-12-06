function solution(brown, yellow) {
    // 조건 1 : (brown + yellow) / x = y
    // 조건 2 : (x-2) * (y-2) === yellow
    let a = brown+yellow;
    for (let y = 3; y<a;y++){
        let x = a / y;
        if((x-2) * (y-2) === yellow){ 
            return [x,y]
        }
    }
}
