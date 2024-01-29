/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = {};
    
    const dp = (n) => {
        if(n===1) return 1;
        if(n===2) return 2;
        if(!(n in memo)){
            memo[n] = dp(n-1) + dp(n-2)
        }
        return memo[n]
    }

    return dp(n)

};