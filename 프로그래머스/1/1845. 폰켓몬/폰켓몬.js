function solution(n) {
    let result = []
    let max = n.length / 2;
    for(let i =0; i<n.length;i++){
        if(result.length<max){
                if(!result.includes(n[i])){
                    result.push(n[i])
                }
            }
        }
    return result.length;    
}