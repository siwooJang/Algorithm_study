function solution(array) {
    let max = [-1,-1];
    for(let i =0; i<array.length;i++){
        if(array[i]>max[0]){
            max[0] = array[i]
            max[1] = i
        }
    }
    return max
}