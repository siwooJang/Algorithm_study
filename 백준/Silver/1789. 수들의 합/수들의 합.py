import sys
n = int(sys.stdin.readline())
total = 0
cur = 0
while total <= n:
    cur += 1
    total += cur
print(cur - 1)