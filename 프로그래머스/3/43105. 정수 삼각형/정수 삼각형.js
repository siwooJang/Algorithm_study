function solution(triangle) {
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      const a = triangle[i - 1][j - 1] ?? 0;
      const b = triangle[i - 1][j] ?? 0;
 
      if (b >= a) {
        triangle[i][j] += b;
        continue;
      }
      triangle[i][j] += a;
    }
  }
  return Math.max(...triangle.at(-1));
}