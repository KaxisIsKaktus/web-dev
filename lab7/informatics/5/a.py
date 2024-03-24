def __min(a, b, c, d):
    return min([a, b, c, d])

print(__min(*[int(i) for i in input().split()]))