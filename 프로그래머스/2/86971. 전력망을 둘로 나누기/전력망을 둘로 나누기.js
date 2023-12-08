function solution(n, wires) {
    // 인접 리스트 생성
    const adjList = Array.from({ length: n + 1 }, () => []);
    wires.forEach(([v1, v2]) => {
        adjList[v1].push(v2);
        adjList[v2].push(v1);
    });

    let minDifference = n; // 최소 차이 초기화

    // DFS 함수
    function dfs(node, visited) {
        visited[node] = true;
        let nodesCount = 1;

        adjList[node].forEach(adjNode => {
            if (!visited[adjNode]) {
                nodesCount += dfs(adjNode, visited);
            }
        });

        return nodesCount;
    }

    // 각 전선을 자르고 최소 차이 계산
    wires.forEach(([v1, v2]) => {
        // 전선을 자르기
        adjList[v1] = adjList[v1].filter(adjNode => adjNode !== v2);
        adjList[v2] = adjList[v2].filter(adjNode => adjNode !== v1);

        // 전송 탑 갯수 계산
        let visited = new Array(n + 1).fill(false);
        let nodesCount = dfs(v1, visited);

        // 차이 계산
        let difference = Math.abs(n - 2 * nodesCount);
        minDifference = Math.min(minDifference, difference);

        // 전선 복구
        adjList[v1].push(v2);
        adjList[v2].push(v1);
    });

    return minDifference;
}