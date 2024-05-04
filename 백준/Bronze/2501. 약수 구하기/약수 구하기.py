a, b = map(int,input().split())

def getDivisor(n):
    divList = []
    for i in range(1,int(n**(1/2))+1):
        if(n%i == 0):
            divList.append(i)
            if((i**2)!=n):
                divList.append(n//i)
    divList.sort()
    return divList

list = getDivisor(a)
if(len(list)<b):
    print(0)
else:
    print(list[b-1]) 