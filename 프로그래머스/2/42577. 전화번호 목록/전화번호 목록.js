function solution(phone_book) {
    let result = []
    let a = phone_book.sort();
    for(let i =0; i<a.length-1; i++){
        if(a[i] === a[i+1].substring(0,a[i].length))
            return false
    }
    return true
}