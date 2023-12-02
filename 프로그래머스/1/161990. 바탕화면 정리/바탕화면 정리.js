function solution(wallpaper) {
  // 좌표를 정리할 배열 선언
  const X = [];
  const Y = [];

  // 2중 for문을 사용해 wallpaper안에 있는 파일의 위치를 찾습니다.
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {

      if (wallpaper[i][j] === "#") {
        // 파일을 발견하게 된다면
        // i는 Y 배열에 j는 X 배열에 넣어줍니다.
        // 여기서 i는 y값의 좌표 모임이되고 j는 x값 좌표의 모임이 됩니다.
        Y.push(i);
        X.push(j);
      }

    }
  }

  // 구한 좌표 값을 오름차순으로 정렬해줍니다.
  X.sort((a, b) => a - b);
  Y.sort((a, b) => a - b);

  // 가장 상단 좌표값은 Y의 젤 작은 수가 될 것이고
  // 가장 좌측 좌표값은 X의 젤 작은 수가 될 것입니다.
  // 가장 하단 좌표값은 Y의 젤 큰 수에 1을 더한 값이고 (파일을 포함해야하기 때문)
  // 가장 우측 좌표값은 X의 젤 큰 수에 1을 더한 값이 됩니다.
  return [Y[0], X[0], Y[Y.length - 1] + 1, X[X.length - 1] + 1];
}