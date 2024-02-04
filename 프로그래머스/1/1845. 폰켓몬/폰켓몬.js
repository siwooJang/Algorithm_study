function solution(nums) {
    let r = nums.length/2;
    let s = new Set(nums);
    let result = [...s];
    if(r<=result.length){
        return r
    } else if(r>result.length){
        return result.length
    }
    
}