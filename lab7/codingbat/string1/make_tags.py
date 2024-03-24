def make_tags(s,t):
    return "<"+s+">"+t+"<"+s+">"
s= input()
t = input()
print(make_tags(s,t))