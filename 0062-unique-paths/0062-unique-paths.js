/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const memo = Array(m).fill().map(() => Array(n).fill(-1));

  const dp = (r, c) => {
    // 기저 조건
    if (r === 0 && c === 0) {
      memo[r][c] = 1;
      return memo[r][c];
    }

    // 이미 계산된 경우
    if (memo[r][c] !== -1) {
      return memo[r][c];
    }

    // 왼쪽과 위쪽에서 오는 경우의 수를 더함
    let paths = 0;
    if (r - 1 >= 0) {
      paths += dp(r - 1, c);
    }
    if (c - 1 >= 0) {
      paths += dp(r, c - 1);
    }

    // 계산된 값을 memo에 저장하고 반환
    memo[r][c] = paths;
    return memo[r][c];
  };

  return dp(m - 1, n - 1);
};