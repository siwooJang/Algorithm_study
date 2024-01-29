/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const memo = {};
    const length = cost.length;
    const dp = (n) => {
        if(n===0 || n===1) return 0;
        if(!(n in memo)){
            memo[n] = Math.min(dp(n-1)+cost[n-1],dp(n-2)+cost[n-2]);
        }
        return memo[n]
    }
    
    return dp(length);
};