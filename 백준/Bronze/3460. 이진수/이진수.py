T = int(input())
def bin(n):
    i=0
    while(n!=0):
        if(n% 2 == 1):
            print(i,end=" ")
        n //= 2
        i+=1
for _ in range(T):
    bin(int(input()))