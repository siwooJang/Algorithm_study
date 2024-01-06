const twoSum = function(nums, target) {
    const vMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
      
        if (vMap.get(complement) !== undefined) {
          return ([vMap.get(complement), i])
        } else {
          vMap.set(nums[i], i)
        }
    }
    
};