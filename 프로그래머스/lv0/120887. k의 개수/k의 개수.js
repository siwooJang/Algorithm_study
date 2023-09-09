function solution(i, j, k) {
    return Array(j-i+1).fill(i).map((v,index)=>v+index).join('').split(k).length - 1  
}