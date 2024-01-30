/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const memo = {}; // 중복 계산을 피하기 위한 메모이제이션 객체

    // dp 함수: 현재 위치에서 목표 지점까지의 가능한 경로 수를 반환하는 재귀 함수
    const dp = (row, col) => {
        // 맨 왼쪽 열 또는 맨 위 행에 도달하면 1을 반환
        if (row === 0 || col === 0) {
            return 1;
        }

        const key = row + ',' + col; // 메모이제이션을 위한 키 생성

        // 이미 계산한 결과가 있다면 그 값을 반환
        if (memo[key] !== undefined) {
            return memo[key];
        }

        // 위쪽과 왼쪽으로 이동한 경우의 수를 재귀적으로 계산
        const fromTop = dp(row - 1, col);
        const fromLeft = dp(row, col - 1);

        // 계산한 결과를 메모이제이션
        memo[key] = fromTop + fromLeft;

        return memo[key];
    };

    // 로봇은 오른쪽과 아래쪽으로만 이동할 수 있으므로
    // 목표 지점에서 위쪽과 왼쪽으로 이동하는 경우의 수는 고려하지 않습니다.
    return dp(m - 1, n - 1);
};
