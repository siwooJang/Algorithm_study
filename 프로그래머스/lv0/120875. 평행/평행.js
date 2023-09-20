function solution(dots) {
    // 생각해줘야 하는 경우 : 1 2  1 3  1 4
    let [[x1,y1],[x2,y2],[x3,y3],[x4,y4]] = dots
    
    if((y1-y2)/(x1-x2) === (y3-y4) / (x3-x4)) return 1
    if((y1-y3)/(x1-x3) === (y2-y4) / (x2-x4)) return 1
    if((y1-y4)/(x1-x4) === (y2-y3) / (x2-x3)) return 1
    
    return 0
}