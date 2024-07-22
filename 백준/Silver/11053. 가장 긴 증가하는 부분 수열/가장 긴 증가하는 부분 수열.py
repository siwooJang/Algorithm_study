n = int(input())
t = list(map(int,input().split()))
DP = [0 for i in range(n)]
for i in range(n):
    for j in range(i):
        if t[i] > t[j] and DP[i] < DP[j]:
            DP[i] = DP[j]
    DP[i] += 1
        
print(max(DP))