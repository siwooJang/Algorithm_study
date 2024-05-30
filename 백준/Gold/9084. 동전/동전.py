import sys
T = int(sys.stdin.readline())
for _ in range(T):
    N, coins, M = int(sys.stdin.readline()), list(map(int, sys.stdin.readline().split())), int(sys.stdin.readline())
    dp = [0]*(M+1)
    dp[0] = 1 # 0원으로 만드는 가지 수 1개
    for coin in coins:
        for money in range(M+1):
            if money >= coin: # 금액이 동전의 가치보다 크면
                dp[money] += dp[money-coin] # 해당 dp는 금액 - 동전에 해당하는 dp합
    print(dp[M])