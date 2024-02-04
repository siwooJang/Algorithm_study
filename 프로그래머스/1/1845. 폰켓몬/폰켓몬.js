function solution(nums) {
    let r = nums.length/2;
    let result = [...new Set(nums)];
    return r > result.length ? result.length : r
}