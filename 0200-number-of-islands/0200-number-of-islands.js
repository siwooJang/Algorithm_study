function numIslands(grid){
    const sink = (r,c) => {
        grid[r][c] = "0";
        [
            [r,c-1],
            [r,c+1],
            [r-1,c],
            [r+1,c]
        ].forEach(([r,c])=>{
            if(0<=r && r<grid.length && 0<=c && c<grid[r].length)
                if(grid[r][c]==="1")
                    sink(r,c);
        });
    };
    
    let cnt = 0;
    for(let r=0; r<grid.length; r++){
        for(let c=0; c<grid[r].length; c++){
            if(grid[r][c]==="1"){
                cnt++;
                sink(r,c);
            }
        }
    }
    
    return cnt;
    
}