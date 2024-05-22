def func(k):
    global n, cnt
    
    if k==n:
        cnt +=1
        return
    
    for i in range(n):
        if not used_c[i] and not used_up[k+i] and not used_down[(n-1)+k-i]:
            used_c[i] = True
            used_up[k+i] = True
            used_down[(n-1)+k-i] = True
            func(k+1)
            used_c[i] = False
            used_up[k+i] = False
            used_down[(n-1)+k-i] = False
            
n = int(input())
maps = [[0]*n for _ in range(n)]
used_c = [False] *n  # 열 점유 여부
used_up = [False] * (2*(n-1)+1) # y = x 점유 여부
used_down = [False] * (2*(n-1)+1) # y = -x 점유 여부
cnt = 0
    
func(0)
print(cnt)