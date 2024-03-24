def extra_end(s):
    if(len(s)>2):return 3*(s[-2:])
    else: return 3*s
s = input()
print(extra_end(s))