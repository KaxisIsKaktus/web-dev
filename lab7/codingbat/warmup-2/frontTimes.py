def frontTimes(s,x):
    size = 3
    print(size)
    if 3 > len(s): size = len(s)
    front = s[:size]
    return front*x


print(frontTimes('Chocolate', 2))