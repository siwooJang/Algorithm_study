function solution(slice, n) {
    if (slice / n == 0){
        return 1;
    } else{
        return (n%slice ? Math.floor(n/slice)+1 : Math.floor(n/slice))
    }
}