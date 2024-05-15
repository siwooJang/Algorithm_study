t = int(input())
for _ in range(t):
    stack = []
    s = input()
    isVPS = True
    
    for ch in s:
        if ch =='(':
            stack.append('(')
        if ch ==')':
            if stack:
                stack.pop()
            elif not stack:
                isVPS= False
                break
    if not stack and isVPS:
        print('YES')
    elif stack or not isVPS:
        print('NO')
