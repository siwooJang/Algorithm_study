function solution(rsp) {
    let  result =  []
    for(let i=0; i<rsp.length; i++){
        if(rsp[i]== 2){
            result.push(0)
        } else if (rsp[i]==0){
            result.push(5)
        } else {
            result.push(2)
        }
    }
    return result.join("")
}