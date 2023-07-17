function solution(a, b) {
    result = String(a)+String(b)
    result2 = 2*a*b
    if ( parseInt(result) > result2){
        return parseInt(result)
    } else{
        return result2
    }
}