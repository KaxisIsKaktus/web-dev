def first_half(str):
    h = 0
    h = len(str) / 2
    return str[: h]
s = input()
print(first_half(s))