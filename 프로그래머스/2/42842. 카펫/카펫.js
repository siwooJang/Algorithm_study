function solution(brown, yellow) {
    // 조건 1 : (brown + yellow) / x = y , 전체칸 / 가로 = 세로 
    // 조건 2 : (x-2) * (y-2) === yellow , 가로세로 -2 시에 yellow 영역.
    for (let y = 3; y<brown+yellow;y++){
        let x = Math.floor((brown+yellow) / y)
        if((x-2) * (y-2) === yellow){ 
            return [x,y]
        }
    }
}
