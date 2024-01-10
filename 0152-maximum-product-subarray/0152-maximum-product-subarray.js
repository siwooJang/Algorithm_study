var maxProduct = function(nums) {
    let result = nums[0];
    let max = 1,min = 1;
    
    nums.forEach((num)=>{
        let candidate = [max*num,min*num,num];
        max = Math.max(...candidate);
        min = Math.min(...candidate);
        result = Math.max(max,result)
    })
    return result
};