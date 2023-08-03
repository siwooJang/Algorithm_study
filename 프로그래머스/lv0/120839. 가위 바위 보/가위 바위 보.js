function solution(rsp) {
    let a ={
        2:0,
        0:5,
        5:2,
    }
    return [...rsp].map(v=>a[v]).join("")
}