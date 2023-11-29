function solution(name) {
    let answer = 0;
    let min = name.length - 1;
    
    [...name].map((n,i)=>{
        answer += Math.min(n.charCodeAt()-65,91-n.charCodeAt());
        let idx = i +1;
        
        while(idx<name.length && name[idx]==='A'){
            idx++
        }
        min = Math.min(min,i*2+name.length-idx,i+2*(name.length - idx))
    })
    
    return answer + min
}