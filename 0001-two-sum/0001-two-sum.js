var twoSum = function (nums, target) {

    let l = 0;
    let r = 1;

    while(l<nums.length){
        if(nums[l]+nums[r]===target){
            return [l,r]
        }else if(r===nums.length-1){
            l++;
            r = l+1;
        } else {
            r++;
        }
    }

}