function solution(nums) {
    const n = nums.length/2;
    const noDup = [...new Set(nums)]
    if(noDup.length>n){
        return n
    }
    return noDup.length
}