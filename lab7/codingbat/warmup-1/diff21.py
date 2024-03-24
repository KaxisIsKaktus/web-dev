def diff21(x):
  if x <= 21:
    return 21 - x
  else:
    return (x - 21) * 2
x = int(input())
print(diff21(x))