function solution(arr)
{
    let result = []
    for(let i =0; i<arr.length;i++){
        result.push(arr[i])
        if(arr[i+1]==arr[i]){
            result.pop()
        }
    }
    return result
}