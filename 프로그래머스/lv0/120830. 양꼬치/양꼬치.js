function solution(n, k) {
    let a = parseInt(n/10);
    k = k - a;
    if(k<=0){
        return 12000*n 
    } else{
            return (12000*n) + (2000*k)
    }
}