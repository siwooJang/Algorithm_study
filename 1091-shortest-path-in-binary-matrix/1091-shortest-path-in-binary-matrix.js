/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    
    if(grid[0][0]===1 || grid[grid.length-1][grid[0].length-1] === 1 ){
        return -1;
    }
    
    let dirs = [ [-1,-1],[-1,0],[-1,1],
                [0,-1]/*cur*/,[0,1],
                [1,-1],[1,0],[1,1] ];
    let queue = [[0,0,1]];
    
    while(queue.length){
        let [curX,curY,cnt] = queue.shift();
        
        if(curX === grid.length -1 && curY === grid[0].length-1)
            return cnt;
        
        for(let [x,y] of dirs){
            let [nextX,nextY] = [curX+x,curY+y];
            
            if(nextX<0 || nextX>grid.length-1 || nextY<0 || nextY>grid[0].length -1 || grid[nextX][nextY]===1)
                continue;
            
            queue.push([nextX,nextY,cnt+1])
            grid[nextX][nextY] = 1;
        }
    }
    
    return -1;
    
};