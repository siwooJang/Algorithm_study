function solution(keyinput, board) {
    let x = board[0]/2 -1
    let y = board[1]/2 -1
    let a = 0; let b =0;
    for(let i=0; i<keyinput.length;i++){
        if(keyinput[i]==="left"){
            if(-a<x)
                a--
        }else if (keyinput[i]==="right"){
            if(a<x)
                a++
        }else if (keyinput[i]==="down"){
            if(-b<y)
                b--
        }else if (keyinput[i]==="up"){
            if(b<y)
                b++
        }
    }

    return [a,b]
}