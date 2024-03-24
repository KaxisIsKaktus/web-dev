def xor(a, b):
    return int(a != b)

print(xor(*[i for i in input().split()]))