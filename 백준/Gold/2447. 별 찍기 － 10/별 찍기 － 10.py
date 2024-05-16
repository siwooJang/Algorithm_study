def draw_star(n):
    if n==1:
        return ['*']
    
    S = draw_star(n//3)
    L = []
    
    for star in S:
        L.append(star*3)
    for star in S:
        L.append(star + ' '*(n//3)+star)
    for star in S:
        L.append(star*3)
    return L
N = int(input())
print('\n'.join(draw_star(N)))