/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = {}
    const dfs = (n) => {
        if(n===1) return 1;
        if(n===2) return 2;
        if(!(n in memo)){
            memo[n] = dfs(n-1) + dfs(n-2)
        }
        return memo[n]
    }

    return dfs(n)

};