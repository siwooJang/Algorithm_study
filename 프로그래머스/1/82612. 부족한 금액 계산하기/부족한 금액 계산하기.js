function solution(price, money, count) {
    let bill = 0
    for(let i=0; i<=count; i++){
        bill += price*i
    }
    if(money>bill){
        return 0
    } 
    
    return Math.abs(money-bill) 

}