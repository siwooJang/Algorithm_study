/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // memo 배열 초기화
  const dp = Array(m).fill().map(() => Array(n).fill(0));

  // 시작점에서의 경우의 수는 1
  dp[0][0] = 1;

  // 나머지 칸의 경우의 수 계산
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 왼쪽과 위쪽에서 오는 경우의 수를 더함
      if (i > 0) {
        dp[i][j] += dp[i - 1][j];
      }
      if (j > 0) {
        dp[i][j] += dp[i][j - 1];
      }
    }
  }

  // 마지막 칸의 경우의 수가 최종 답
  return dp[m - 1][n - 1];
};