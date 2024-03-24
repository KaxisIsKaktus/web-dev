n = int(input())
a = [int(input()) for i in range(n)]
for i in range(0, n, 2):
    print(a[i], end=' ')