def combo_string(s,t):
    if(s < t):
        return s+t+s
    elif(t<s):
        return t+s+t
s = input()
t = input()
print(combo_string(s,t))