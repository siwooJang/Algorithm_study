def solution(N,number):
    if N == number:
        return 1
    # set은 중복제거
    dp = [set() for _ in range(9)] # dp[i] 는 N을 i번 이용해서 만들 수 있는 숫자들
    for i in range(1,9):
        dp[i].add(int(str(N) * i)) # 5 , 55, 555 만들려고 str*i 해준후 int로 변환
    
    for i in range(1,9):
        for j in range(1,i):
            for a in dp[j]:
                for b in dp[i-j]:
                    dp[i].add(a+b)
                    dp[i].add(a-b)
                    dp[i].add(a*b)
                    if b != 0:
                        dp[i].add(a//b)
        if number in dp[i]: # dp[i] 값이 number 되면 반환
            return i
    return -1