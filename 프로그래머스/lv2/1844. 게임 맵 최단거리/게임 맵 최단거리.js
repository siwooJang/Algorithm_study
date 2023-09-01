function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  
  // 방향: 상, 하, 좌, 우
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  
  const queue = [];
  queue.push([0, 0, 1]); // [x좌표, y좌표, 이동 횟수]

  while (queue.length > 0) {
    const [x, y, count] = queue.shift();

    // 적의 캠프에 도달한 경우 최단 경로 반환
    if (x === n - 1 && y === m - 1) {
      return count;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 새로운 위치가 게임 맵 범위 내에 있고, 벽이 아닌 경우
      if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1) {
        queue.push([nx, ny, count + 1]);
        maps[nx][ny] = 0; // 방문한 곳은 다시 방문하지 않도록 표시
      }
    }
  }

  // 적의 캠프에 도달할 수 없는 경우
  return -1;
}
