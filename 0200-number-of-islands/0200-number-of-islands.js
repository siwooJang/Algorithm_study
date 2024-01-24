/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let number_of_islands = 0; // 섬의 총 개수
        // row, col 설정
        const row = grid.length;
        const col = grid[0].length;
        // visited 설정 = grid 크기 만큼 False로 만들기
        const visited = Array.from({ length: row }, () => Array(col).fill(false));

        const bfs = (x, y) => {
            // 상,하,좌,우 설정
            const mx = [-1, 1, 0, 0];
            const my = [0, 0, -1, 1];

            visited[x][y] = true; // 방문한 좌표 visited True로 설정
            // queue 설정 및 초기화
            const queue = [];
            queue.push([x, y]);

            while (queue.length > 0) {
                const [cur_x, cur_y] = queue.shift(); // Array Destructuring
                // mx, my 만큼 4번 돌리기
                for (let i = 0; i < mx.length; i++) {
                    // 현재 좌표에서 상,하,좌,우 좌표 구하기
                    const next_x = cur_x + mx[i];
                    const next_y = cur_y + my[i];

                    // 상,하,좌,우 테두리 설정
                    if (next_x >= 0 && next_x < row && next_y >= 0 && next_y < col) {
                        // 땅(1)이고 방문하지 않은
                        if (grid[next_x][next_y] === '1' && !visited[next_x][next_y]) {
                            visited[next_x][next_y] = true; // visited에 해당 좌표 True로 변환
                            queue.push([next_x, next_y]); // queue에 추가하여 이어진 1을 찾아 계속 실행하도록
                        }
                    }
                }
            }
        };

        // 완전탐색
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                // 땅(1)이고 방문하지 않은
                if (grid[i][j] === '1' && !visited[i][j]) {
                    bfs(i, j);
                    number_of_islands += 1;
                }
            }
        }

        return number_of_islands;
};