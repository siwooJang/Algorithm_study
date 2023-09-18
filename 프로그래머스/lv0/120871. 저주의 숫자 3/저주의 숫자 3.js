function solution(n) {
    let ans=0;
    for(let i = 1; i <= n; i++){
        ans += 1;
        while(1){
            if(ans % 3 === 0 || String(ans).includes("3")){
                ans += 1;
                continue;
            }
            break;
        }
    }
    return ans
}