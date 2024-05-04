a, b = map(int,input().split())

divList = []
for i in range(1,a+1):
    if(a%i == 0):
        divList.append(i)
divList.sort()

if(len(divList)<b):
    print(0)
else:
    print(divList[b-1]) 
