function solution(rectangle, characterX, characterY, itemX, itemY) {
    
   //좌표에 2곱해주기
    characterX *=2;
    characterY *=2;
    itemX*=2;
    itemY*=2;
    
    let doubleRec = rectangle.map(rec => rec.map (point => point*2));
    
    //이동좌표 설정해주기
    const dx=[0,0,-1,1];
    const dy=[-1,1,0,0];
    
    //map 그려주기
    
    let map = Array.from({length:103},() => Array(103).fill(0));

    
    doubleRec.forEach(([x1,y1,x2,y2])=>{
        
        for(let i=x1;i<=x2;i++){
            for(let j=y1;j<=y2;j++){
                if(i === x1 || i === x2 || j === y1 || j === y2){
                    if(map[i][j]===0){map[i][j]=1;}
                }
                else{map[i][j]=2;}
            }
        }
        
    });
    
    //큐를 생성하고 시작점을 설정해줍니다.
    let start=[characterX,characterY,0]; // 마지막은 카운트값
    let queue = [start];
    
    //시작점을 탐색하면 안되므로 0으로 설정해준다.
    map[characterX][characterY]=0;
    
    //BFS 탐색을 시작한다.
    while(queue.length > 0){
        
        let [x,y,cnt]=queue.shift();
        
        
        if(x === itemX && y === itemY){ return cnt/2; }
        
        for(let d=0;d<4;d++){
            let nx=x+dx[d];
            let ny=y+dy[d];
            if(map[nx][ny]===1){
                queue.push([nx,ny,cnt+1]);
                map[nx][ny]=0;
            }
        }
        
    }
    
    return 0;
}