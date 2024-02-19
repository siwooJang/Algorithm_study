function BFS(start, arr, target) {
  const tranX = [-1, 1, 0, 0];
  const tranY = [0, 0, -1, 1];
  const queue = [start];
  let time = 0;

  while (queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      for (let k = 0; k < 4; k++) {
        let nx = x + tranX[k];
        let ny = y + tranY[k];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < arr.length &&
          ny < arr[0].length &&
          arr[nx][ny] !== "X"
        ) {
          if (target === arr[nx][ny]) {
            return time + 1;
          }

          queue.push([nx, ny]);
          arr[nx][ny] = "X";
        }
      }
    }

    time++;
  }

  return -1;
}

function solution(maps) {
  let leverCord;
  let startCord;
  let maps1 = maps.map((element) => element.split(""));
  let maps2 = maps.map((element) => element.split(""));

  for (let x = 0; x < maps.length; x++) {
    for (let y = 0; y < maps[0].length; y++) {
      if (maps[x][y] === "L") {
        leverCord = [x, y];
      }

      if (maps[x][y] === "S") {
        startCord = [x, y];
      }
    }
  }

  let time1 = BFS(startCord, [...maps1], "L");
  let time2 = BFS(leverCord, [...maps2], "E");

  if (time1 === -1 || time2 === -1) {
    return -1;
  }

  return time1 + time2;
}