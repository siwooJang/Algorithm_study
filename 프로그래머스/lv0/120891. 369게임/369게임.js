function solution(order) {
    let a = new Set('369')
    return order.toString().split("").filter((t) => a.has(t)).length
}