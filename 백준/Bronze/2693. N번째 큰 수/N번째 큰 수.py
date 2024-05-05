n = int(input())

for _ in range(n):
    nums = map(int, input().split())
    nums = sorted(nums,reverse=True)
    print(nums[2])
