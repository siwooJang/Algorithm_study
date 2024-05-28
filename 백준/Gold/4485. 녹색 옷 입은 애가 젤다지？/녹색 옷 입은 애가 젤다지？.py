import heapq
import sys
input = sys.stdin.readline
inf = int(1e9)
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

def dijkstra(t,graph,dist):
    que = []
    dist[0][0] = graph[0][0]
    
    heapq.heappush(que, (dist[0][0],0,0) ) # 가중치, x , y
    
    while que:
        cost, x, y = heapq.heappop(que)
        
        if dist[x][y] < cost: # 바로 이동하는 거리가 더 짧으면
            continue
            
        for i in range(4): # 상하좌우
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0 <= ny < n : # 그래프를 벗어 나지 않을 때
                temp = cost + graph[nx][ny]
                if temp < dist[nx][ny]: # 다른 곳을 들리는게 더 빠른 경우
                    dist[nx][ny] = temp # 업데이트
                    heapq.heappush(que,(temp,nx,ny))
    print('Problem {}: {}'.format(t,dist[n-1][n-1]))

t = 1

while True:
    n = int(input())
    graph = []
    if not n:
        break
        
    for i in range(n):
        graph.append(list(map(int, input().split())))
    dist = [[inf for i in range(n)] for j in range(n)]
    dijkstra(t,graph,dist)
    
    t += 1