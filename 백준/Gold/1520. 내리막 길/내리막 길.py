import sys
input = sys.stdin.readline
sys.setrecursionlimit(10 ** 9)

m, n = map(int, input().split())
arr = [list(map(int, input().split())) for i in range(m)]
dp = [[-1]*n for i in range(m)] # DP 테이블을 -1로 초기화 하여 생성
dx = [0, 1, 0, -1]
dy = [1, 0 , -1, 0]

def is_range(x, y, now):
    return 0 <= x < m and 0 <= y < n and arr[x][y] < now

def solution(x, y):
    if x == m-1 and y == n-1: # 종료 지점에 도착 한 경우, 1을 바로 반환해준다.
        return 1
    if dp[x][y] == -1: # DP테이블이 갱신 되지 않은 -1인 임의의 점을 만난다면
        dp[x][y] = 0 
        for i in range(4):
            dr_x, dr_y = x + dx[i], y + dy[i]
            if is_range(dr_x, dr_y, arr[x][y]): 
                dp[x][y] += solution(dr_x, dr_y) # 해당 지점부터 도착지점 까지 갈 수 있는 경로의 수를 재귀적으로 업데이트
    
    return dp[x][y] # 이미 방문한 적이 있다면 부분 최적해 이므로 그 위치에서 출발하는 경우의 수를 리턴
                     
    
print(solution(0, 0))