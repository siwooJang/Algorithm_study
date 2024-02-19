function BFS(start, arr, target) {
  const tranX = [-1, 1, 0, 0];
  const tranY = [0, 0, -1, 1];
  const queue = [start];
  const visited = new Set([start.join(',')]);

  while (queue.length > 0) {
    const [x, y, time] = queue.shift();

    for (let k = 0; k < 4; k++) {
      const nx = x + tranX[k];
      const ny = y + tranY[k];

      if (nx >= 0 && ny >= 0 && nx < arr.length && ny < arr[0].length && arr[nx][ny] !== "X" && !visited.has(`${nx},${ny}`)) {
        if (arr[nx][ny] === target) {
          return time + 1;
        }

        queue.push([nx, ny, time + 1]);
        visited.add(`${nx},${ny}`);
      }
    }
  }

  return -1;
}

function solution(maps) {
  let leverCord;
  let startCord;

  const maps1 = maps.map((element) => element.split(""));
  const maps2 = maps.map((element) => element.split(""));

  for (let x = 0; x < maps.length; x++) {
    for (let y = 0; y < maps[0].length; y++) {
      if (maps[x][y] === "L") {
        leverCord = [x, y, 0];
      }

      if (maps[x][y] === "S") {
        startCord = [x, y, 0];
      }
    }
  }

  const a = BFS(startCord, [...maps1], "L");
  const b = BFS(leverCord, [...maps2], "E");

  return a !== -1 && b !== -1 ? a + b : -1;
}