import math
c = 0
x = int(input())
nums = map(int, input().split())
for num in nums:
    if num < 2:
        continue
    is_prime = True
    for i in range(2,int(math.sqrt(num) + 1)):
        if(num%i==0):
            is_prime = False
            break
    if is_prime:
        c += 1
print(c)