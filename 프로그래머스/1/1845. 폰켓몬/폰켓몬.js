function solution(nums) {
    let result = []
    let max = nums.length / 2;
        
    for(let i = 0; i < nums.length; i++) {
        if(result.length < max) { 
            if(!result.includes(nums[i])) {
                result.push(nums[i]);
            }
        }
    }
    
    return result.length;    
}