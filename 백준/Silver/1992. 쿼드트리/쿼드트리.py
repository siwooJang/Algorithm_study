def div(s_row,s_col,size):
    if size==1:
        print(arr[s_row][s_col],end="")
        return
    num = arr[s_row][s_col]
    
    for row in range(s_row,s_row+size):
        for col in range(s_col,s_col+size):
            if num != arr[row][col]:
                print("(",end="")
                size //=2
                div(s_row,s_col,size)
                div(s_row,s_col+size,size)
                div(s_row+size,s_col,size)
                div(s_row+size,s_col+size,size)
                print(")",end="")
                return
    print(arr[s_row][s_col],end="")
    return

n = int(input())
arr = []
for _ in range(n):
    arr.append(list(map(int,list(input().rstrip()))))

div(0,0,n)