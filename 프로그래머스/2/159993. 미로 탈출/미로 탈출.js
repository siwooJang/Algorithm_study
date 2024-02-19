// BFS 함수 정의
function BFS(start, arr, target) {
  // 이동 방향을 나타내는 배열
  const tranX = [-1, 1, 0, 0];
  const tranY = [0, 0, -1, 1];
  
  // 큐를 초기화하고 시작 위치를 큐에 추가
  const queue = [start];
  let time = 0; // 경과 시간 초기화

  while (queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      // 상하좌우 이동을 확인
      for (let k = 0; k < 4; k++) {
        let nx = x + tranX[k];
        let ny = y + tranY[k];

        // 다음 위치가 유효하고 벽이 아닌 경우
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < arr.length &&
          ny < arr[0].length &&
          arr[nx][ny] !== "X"
        ) {
          // 목표지점에 도달한 경우
          if (target === arr[nx][ny]) {
            return time + 1; // 경과 시간 반환
          }

          queue.push([nx, ny]); // 다음 위치를 큐에 추가
          arr[nx][ny] = "X"; // 해당 위치를 방문했음을 표시
        }
      }
    }

    time++; // 현재 시간 증가
  }

  return -1; // 목표지점에 도달하지 못한 경우 -1 반환
}

// 주어진 미로에서 최소 시간을 구하는 함수
function solution(maps) {
  let leverCord;
  let startCord;
  let maps1 = maps.map((element) => element.split("")); // 레버에서 출발 지점까지의 미로 복사
  let maps2 = maps.map((element) => element.split("")); // 출발 지점에서 레버까지의 미로 복사

  // 출발 지점과 레버의 위치를 찾음
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

  // 출발 지점에서 레버까지의 최소 시간
  let time1 = BFS(startCord, [...maps1], "L");
  // 레버에서 출발 지점까지의 최소 시간
  let time2 = BFS(leverCord, [...maps2], "E");

  // 어느 한 경로라도 도달할 수 없는 경우 -1 반환
  if (time1 === -1 || time2 === -1) {
    return -1;
  }

  // 출발 지점에서 레버까지의 최소 시간과
  // 레버에서 출발 지점까지의 최소 시간을 합산하여 반환
  return time1 + time2;
}