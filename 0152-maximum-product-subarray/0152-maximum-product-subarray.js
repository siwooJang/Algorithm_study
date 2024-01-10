/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let result = nums[0];
    let max = 1,
    min = 1;
    nums.forEach((num) => {
        const candidates = [max * num, min * num, num];
        max = Math.max(...candidates);
        min = Math.min(...candidates);
        result = Math.max(max, result);
        });
    return result;
};