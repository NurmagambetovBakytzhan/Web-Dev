import math

a = int(input())
i = 1
sum = 0
while (i <= a):
    if i % (math.sqrt(i)) == 0:
        print(i)
    i += 1
