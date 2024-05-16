# 북,동,남,서 ( 시계방향 )
dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]

n,m = map(int,input().split())
r,c,d = map(int,input().split())
arr = [list(map(int,input().split())) for _ in range(n)]

visited = [[0]*m for _ in range(n)]

visited[r][c] = 1
count = 1

while True:
    Flag = 0
    for _ in range(4): # 4방향
        d = (d+3) % 4  # 왼쪽방향으로 한칸 회전(반시계 90도 회전)
        nr = r+dr[d]
        nc = c+dc[d]
        
        # 범위 안에 들고, 빈칸이며, 청소할 수 있으면
        # 청소하고 카운트 올리고 위치 갱신, Flag 변경
        if 0<=nr<n and 0<=nc<m and arr[nr][nc]==0:
            if visited[nr][nc] == 0:
                visited[nr][nc] = 1
                count +=1
                r = nr
                c = nc
                Flag = 1 # 청소 완료
                break
                
    if Flag == 0: # 청소 못했을때
        
        # 네 방향 모두 청소를 할 수 없고, 후진했을때 벽이라면 break
        # 만약 뒤가 벽이 아니라면 다시 위치 갱신
        if arr[r-dr[d]][c-dc[d]] == 1:
            print(count)
            break
        else:
            r,c = r-dr[d],c-dc[d]