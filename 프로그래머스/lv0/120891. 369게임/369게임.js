function solution(order) {
    return order.toString().split("").filter((t) => t === '3' || t === '6' || t === '9').length
}