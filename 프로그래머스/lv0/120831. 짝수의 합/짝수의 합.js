function solution(n) {
    let result = 0;
    while(n){
        if(n%2==0){
            result+=n
        }
        n--;
    }
    return result;
}