d = [0] * 9
for i in range(9):
  d[i] = int(input())
sum = sum(d)

for j in range(8):
  for k in range(j+1, 9):
    if sum - (d[j] + d[k]) == 100: 
      fake1 = d[j]
      fake2 = d[k]
      break

d.remove(fake1)
d.remove(fake2)
d.sort()
for i in d:
  print(i)