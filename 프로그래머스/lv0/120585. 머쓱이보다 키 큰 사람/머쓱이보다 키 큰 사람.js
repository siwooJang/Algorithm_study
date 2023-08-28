function solution(array, height) {
    let result = array.filter((num)=>(num>height))
    return result.length
}