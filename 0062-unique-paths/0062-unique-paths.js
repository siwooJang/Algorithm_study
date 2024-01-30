/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
    // memo 배열을 생성하고 -1로 초기화
    const memo = Array(m).fill().map(() => Array(n).fill(-1));
    
    // 시작점을 1로 초기화
    memo[0][0] = 1;

    // 모든 행에 대해 반복
    for (let r = 0; r < m; r++) {
        // 모든 열에 대해 반복
        for (let c = 0; c < n; c++) {
            // 만약 memo[r][c]가 -1인 경우 (아직 방문하지 않은 경우)
            if (memo[r][c] === -1) {
                // 위에서 오는 경우의 수 계산
                let fromTop = 0;
                if (r > 0) {
                    fromTop = memo[r - 1][c];
                }

                // 왼쪽에서 오는 경우의 수 계산
                let fromLeft = 0;
                if (c > 0) {
                    fromLeft = memo[r][c - 1];
                }

                // 현재 위치의 경우의 수는 위에서 오는 경우와 왼쪽에서 오는 경우의 합
                memo[r][c] = fromTop + fromLeft;
            }
        }
    }

    // 우측 하단의 최종 결과 반환
    return memo[m - 1][n - 1];
};