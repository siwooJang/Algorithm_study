t1 = list(input())
t2 = list(input())
lcs = [[0] * (len(t2) + 1) for _ in range(len(t1) + 1)]
for i in range(1, len(t1)+1):
    for j in range(1, len(t2)+1):
        if t1[i-1] == t2[j-1]:
            lcs[i][j] = lcs[i-1][j-1] + 1
        else:
            lcs[i][j] = max(lcs[i-1][j],lcs[i][j-1])
print(max(map(max,lcs)))