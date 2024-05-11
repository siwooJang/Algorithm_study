S = input()
stack = []
count = 0
for i in range(len(S)):
    if S[i] == '(':
        stack.append('(')
    else:
        if S[i-1]=='(':
            stack.pop()
            count += len(stack) # 첫번째 경우 : 레이저가 나오면 현재의 쇠막대기 카운트
        else:
            stack.pop()
            count += 1 # 두번째 경우 : 레이저가 아닌 닫는괄호가 나올 시에 1개를 카운팅
print(count)