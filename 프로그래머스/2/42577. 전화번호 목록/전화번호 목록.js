function solution(phone_book) {
    let phone_map = new Map();
    
    for(let phone_number of phone_book){
        phone_map.set(phone_number,true)
    }
    
    for(let phone_number of phone_book){
        for(let i =1; i<phone_number.length; i++){
            let part = phone_number.substring(0,i);
            if(phone_map.has(part)) return false
        }
    }
    return true
}