function solution(n, m, section) {
  let answer = 0;
  // 현재까지 칠한 구역
  let part = 0;

  section.forEach((v) => {
    // 현재 구역이 현재까지 칠한 구역보다 크다면
    if (v > part) {
      part = v + m - 1;
      answer++;
    }
  });

  return answer;
}