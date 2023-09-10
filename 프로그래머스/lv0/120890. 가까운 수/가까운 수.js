function solution(array, n) {
    array.sort((a,b) => a-b) // 가장 가까운 수 여러개 일때 , 더 작은수 return 하기 위해 오름차순 정렬
    let min = 101;
    let num = 0 , result = 0;
    
    for(let i of array){
        num = Math.abs(n-i)
        if ( min > num){
            min = num
            result = i
        }
    }
    return result
}