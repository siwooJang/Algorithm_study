function solution(my_string, num1, num2) {
    let a = my_string[num1]
    let  b = [...my_string]
    b[num1] = my_string[num2]
    b[num2] = a
    return b.join("")
}