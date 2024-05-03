a, b = map(int, input().split())
d = []
for i in range(1,b+1):
    for j in range(i):
        d.append(i)
result = sum(d[a-1:b])
print(result)
        