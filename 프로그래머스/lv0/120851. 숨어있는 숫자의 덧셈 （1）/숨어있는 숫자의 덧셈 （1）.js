function solution(my_string) {
    let result = 0
    my_string = my_string.split('').map(Number).filter(t=>!isNaN(t))
    for(let i =0; i<my_string.length; i++){
        result += my_string[i];
    }
    return result
}