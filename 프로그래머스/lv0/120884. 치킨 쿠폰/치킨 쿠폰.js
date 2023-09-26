function solution(chicken) {
    let result = 0;
    let numlist = 0;
    while(true){
        let tmp = Math.floor(chicken/10)
        let num = chicken%10
        result += tmp
        tmp += num
        chicken = tmp
        if(chicken<10){
            break
        }
    }
    return Math.floor(result)
}