function solution(num, k) {
    let n = num.toString().split("")
    for(let i=0; i<n.length;i++){
        if(Number(n[i])===k){
            return i+1
        }
    }
    return -1
}