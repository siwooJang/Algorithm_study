M = int(input())
N = int(input())
prime_list = []
for num in range(M,N+1):
    if(num<2):
        continue
    Flag=True
    for i in range(2,int(num**0.5)+1):
        if(num%i==0):
            Flag=False
            break
    if(Flag):
        prime_list.append(num)
if not prime_list:
    print(-1)
else:
    print(sum(prime_list))
    print(min(prime_list))