/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }

    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    const bfs = (r, c) => {
        const queue = [[r, c]];
        while (queue.length > 0) {
            const [row, col] = queue.shift();
            if (row >= 0 && row < rows && col >= 0 && col < cols && grid[row][col] === '1') {
                grid[row][col] = '0'; // Mark as visited
                queue.push([row + 1, col], [row - 1, col], [row, col + 1], [row, col - 1]);
            }
        }
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                count++;
                bfs(i, j);
            }
        }
    }

    return count;
};