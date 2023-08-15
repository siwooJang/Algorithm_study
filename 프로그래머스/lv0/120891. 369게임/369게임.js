function solution(order) {
    let count =0;
    let num = order.toString().split("")
    for(let i=0; i<num.length; i++){
        if(num[i] === '3' || num[i]==='6' || num[i]==='9'){
            count ++
        }
    }
    return count
}