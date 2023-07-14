function gcd_cal(a,b){
    return a % b === 0 ? b : gcd_cal(b,a%b)
}
function solution(numer1, denom1, numer2, denom2) {
    
    let a = numer1*denom2+numer2*denom1
    let b = denom1*denom2
    let gcd = gcd_cal(a,b)
    
    return [a/gcd,b/gcd];
}