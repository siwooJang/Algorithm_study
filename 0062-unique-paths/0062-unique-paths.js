/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // memo 선언 및 초기화
    const memo = Array.from({ length: m }, () => Array(n).fill(-1));

    const dp = (r, c) => {
        if (r === 0 && c === 0) {
            memo[r][c] = 1; // memo에 값 넣기
            return memo[r][c];
        }

        // memo 중복 제거
        if (memo[r][c] === -1) {
            let uniquePaths = 0;
            if (r - 1 >= 0) {
                uniquePaths += dp(r - 1, c);
            }
            if (c - 1 >= 0) {
                uniquePaths += dp(r, c - 1);
            }
            // memo에 값 넣기
            memo[r][c] = uniquePaths;
        }
        return memo[r][c];
    };

    return dp(m - 1, n - 1);
};
