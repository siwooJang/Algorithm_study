function solution(my_string, letter) {
    // RegExp는 정규표현식을 만듬
    // g는 글로벌 하게 없애란거. letter가 A-Z이면 /[A-Z]/g 이렇게 됨 
    let reg = new RegExp(letter,'g') 
    return my_string.replace(reg,'')
}