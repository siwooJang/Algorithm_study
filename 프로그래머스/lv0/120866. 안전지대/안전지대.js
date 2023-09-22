function solution(board) {

    let outside = [[-1,0], [-1,-1], [-1,1], [0,-1],[0,1],[1,0], [1,-1], [1,1]];
    let safezone = 0;
    
    board.forEach((row,y,self)=> row.forEach((it,x)=>{
        if (it === 1) return 0;
        return outside.some(([oy,ox])=>!!self[oy+y]?.[ox+x]) ? false : safezone++;
        // !!self[oy + y] && !!self[oy + y][ox + x] 란 뜻
    }))

    return safezone;
}