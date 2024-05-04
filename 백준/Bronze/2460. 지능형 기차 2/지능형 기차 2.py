list = []
P = 0
for i in range(10):
    A, B = map(int, input().split())
    P = P+B-A
    list.append(P)
print(max(list))