function solution(i, j, k) {
    let s = '';
    for(i; i<=j; i++){
        s += i
    }
    return s.split(k).length -1
}