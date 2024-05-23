def count_colors(grid,x,y,size):
    init_color = grid[x][y]
    all_same = True
    
    for i in range(x,x+size): # size * size 탐색해서 다른색깔 있는지 찾기
        for j in range(y,y+size):
            if grid[i][j] != init_color:
                all_same = False
                break
        if not all_same:
            break
   
    if all_same: # 다 같으면 각 색깔 반환
        if init_color == 0:
            return (1,0) # 흰색
        else:
            return (0,1) # 파란색
    else:
        half_size = size // 2
        top_left = count_colors(grid, x, y, half_size)
        top_right = count_colors(grid, x, y+half_size, half_size)
        bottom_left = count_colors(grid, x+half_size, y, half_size)
        bottom_right = count_colors(grid, x+half_size, y+half_size, half_size)
        # 4분할해서 흰색과 파란색 총 갯수 세기
        white_count = top_left[0] + top_right[0] + bottom_left[0] + bottom_right[0]
        blue_count = top_left[1] + top_right[1] + bottom_left[1] + bottom_right[1]
        
        return (white_count,blue_count)
    
N = int(input().strip())
grid = [list(map(int,input().strip().split())) for _ in range(N)]

white_count , blue_count = count_colors(grid,0,0,N)
print(white_count)
print(blue_count)