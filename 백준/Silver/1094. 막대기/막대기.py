x = int(input())
ans = 0
while x>0:
    if(x%2==1):
        ans +=1
    x //= 2
print(ans)