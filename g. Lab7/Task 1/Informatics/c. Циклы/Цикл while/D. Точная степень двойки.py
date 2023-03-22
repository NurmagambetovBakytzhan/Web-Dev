a = int(input())
i = 1
while(i <= a*2):
    if(i==a):
        print("YES")
        break
    if(i>a):
        print("NO")
        break
    i*=2