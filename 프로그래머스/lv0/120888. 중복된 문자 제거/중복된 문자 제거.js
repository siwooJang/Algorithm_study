function solution(my_string) {
    let result = [];
    for(t of my_string){
        if(!result.includes(t)){
            result.push(t)
        }
    }
    return result.join("")
}