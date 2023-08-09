function solution(n)
{
    let a =0;
    while(n){
        a += n%10
        n = Math.floor(n/10)
    }

    return Math.floor(a);
}