function solution(array, n) {
    array.sort((a,b) => a-b) // 가장 가까운 수 여러개 일때 , 더 작은수 return 하기 위해 오름차순 정렬
    let min = 101;
    let num = 0; let idx = 0;
    for(let i=0; i<array.length; i++){
        if(array[i]>n){
            num = array[i]-n
        } else{
            num = n - array[i]
        }
        if ( min > num){
            min = num
            idx = i
        }
    }
    return array[idx]
}