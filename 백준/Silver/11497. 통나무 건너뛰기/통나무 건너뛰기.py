for _ in range(int(input())):
    n = int(input())
    woods = sorted(list(map(int,input().split())))
    lvl = 0
    for i in range(2,n): # 인덱스 차이가 1 나면 맨 끝 통나무들의 높이차가 커진다
        lvl = max(lvl,abs(woods[i]-woods[i-2])) # 인덱스 차이를 2로 두는게 베스트
    print(lvl)