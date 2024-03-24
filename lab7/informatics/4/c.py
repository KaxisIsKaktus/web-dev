n = int(input())
print(sum([1 if int(i) > 0 else 0 for i in input().split()]))