function solution(array) {
    let m = new Map();
    for (let n of array) {
        m.set(n, (m.get(n)||0)+1); // 에러방지?
    }
    
    m = [...m].sort((a,b)=>b[1]-a[1]);
    return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
    /* 배열이 한 값으로만 이루어져있거나 첫번째 인덱스의 값이 두번째 인덱스보다 크다면(다르다면) 
    제일 맨 앞의 값을 인출, 아니라면 -1을 인출 */
}