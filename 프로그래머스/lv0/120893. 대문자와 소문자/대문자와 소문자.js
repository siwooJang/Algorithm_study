function solution(my_string) {
    let arr = ""
    for(let i =0; i<my_string.length;i++){
        if(my_string[i]===my_string[i].toUpperCase()){
        arr += my_string[i].toLowerCase()
        } else{
        arr += my_string[i].toUpperCase()
        }
    }

    return arr
}