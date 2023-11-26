function solution(arr)
{
    let dups = [arr[0]];
    let i = 1;
    arr.map((v,i) => {
        if(dups[dups.length-1] != v) // 연속된 중복 아니면 push
            dups.push(v)
    })
    return dups
}