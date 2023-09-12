function solution(arr)
{
    let dup = [arr[0]];
    let i = 1;
    arr.map((v,i) => {
        if(dup[dup.length-1] != v) // 연속된 중복 아니면 push
            dup.push(v)
    })
    return dup
}