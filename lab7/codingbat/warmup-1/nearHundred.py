def nearHundred(x):
    if(abs(100-x)<=10 or abs(200-x)<=10):return True
    else:return False
a = int(input())
print(nearHundred(a))