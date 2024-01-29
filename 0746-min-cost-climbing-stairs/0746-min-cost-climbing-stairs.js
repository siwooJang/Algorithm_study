/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const length = cost.length;
    const dp = Array(length+1).fill(-1);
    dp[0] = 0; dp[1]=0;
    for(let i=2;i<length+1;i++){
        dp[i] = Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])
    }
    return dp[length]
};