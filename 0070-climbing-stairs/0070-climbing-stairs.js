/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = {1:1,2:2};
    const dfs = (n) => {
        for(let i =3; i<n+1; i++){
            memo[i] = memo[i-1] + memo[i-2]
        }
        return memo[n]
    }
    return dfs(n)
};