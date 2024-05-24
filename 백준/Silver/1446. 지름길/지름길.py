def min_distance(N,D,shortcuts):
    # dp[0] = 0 ... dp[150] = 150
    dp = [i for i in range(D+1)]
    
    for i in range(D+1):
        if i>0:
            dp[i] = min(dp[i],dp[i-1]+1)
            
        # 각 지름길을 확인하여 dp 배열을 업데이트    
        for (start,end,length) in shortcuts:
            if start==i and end<=D:
                dp[end] = min(dp[end],dp[start]+length)
    return dp[D]

n, d = map(int, input().split())
shortcuts = [list(map(int, input().split())) for _ in range(n)]

result = min_distance(n,d,shortcuts)
print(result)