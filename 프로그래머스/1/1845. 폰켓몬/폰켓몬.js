function solution(nums) {
    const n = nums.length/2;
    const noDupNums = new Set(nums);
    const a = [...noDupNums]
    if(a.length>n){
        return n
    }
    return a.length
}