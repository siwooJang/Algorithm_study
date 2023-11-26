function solution(price, money, count) {
    let bill = 0
    
    for(let i=0; i<=count; i++){
        bill += price*i
    }
    
    return money>bill ? 0 : bill-money

}