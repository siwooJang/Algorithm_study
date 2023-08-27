function solution(array) {
    let a = array.join("")
    let result = 0
    for(let i =0; i<a.length;i++){
        if(a[i] === "7")
            result++
    }
    return result
}