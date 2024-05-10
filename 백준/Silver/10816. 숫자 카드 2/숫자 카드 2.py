import bisect

def count_match(mnums,nums):
    nums.sort()
    result = []
    
    for num in mnums:
        left = bisect.bisect_left(nums,num)
        right = bisect.bisect_right(nums,num)
        count = right - left
        result.append(count)
    return result

N = int(input()) 
nums = list(map(int, input().split()))  
M = int(input()) 
mnums = list(map(int, input().split())) 

result = count_match(mnums,nums)
print(*result) # unpack 한후 공백으로 구분해서 출력
