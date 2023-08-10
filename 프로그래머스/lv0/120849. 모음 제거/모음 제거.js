function solution(my_string) {
    let vowal = ['a','e','i','o','u']
    let answer = ""
    for(let i =0; i<my_string.length; i++){
        if(!vowal.includes(my_string[i])){
            answer += my_string[i]
        }
    }
    return answer
}