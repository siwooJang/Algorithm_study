from itertools import combinations
heights = []

for _ in range(9):
    height = int(input())
    heights.append(height)

# 2명을 제외한 순열을 돌려서, 합이 100이면 오름차순 정렬 후 출력
for comb in combinations(heights,7):
    if(sum(comb)==100):
        for i in sorted(comb):
            print(i)
        break