function solution(n, k) {
    let nums = n.toString(k).split("0");
    return nums.filter(el => el !== "" && isPrime(Number(el))).length;
}

const isPrime = (num) => {
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}