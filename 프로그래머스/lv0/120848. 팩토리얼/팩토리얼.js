function solution(n) {
    let num = 0;
    let facto = 1;
    while(facto<=n){
        num++
        facto *= num
    }
    return num-1;
}