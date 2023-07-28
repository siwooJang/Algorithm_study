function solution(my_string, n) {
    let a =[];
    for(let i=0; i<my_string.length; i++){
            a.push(my_string[i].repeat(n))
    }
    return a.join("");
}