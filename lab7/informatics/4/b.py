n = int(input())
a = [int(input()) for i in range(n)]
for i in a:
    if not i % 2:
        print(i, end=' ')