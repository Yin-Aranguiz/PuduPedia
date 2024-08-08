for n in range (1,101): #para resultar n en el rango del [1,101[
    if n%3== 0 and n%5==0 and n!=55: #si n/3 da 0 de resto (es múltiplo de 3) y n/5 es múltiplo de 5 y n distinto a 55, entonces:
        print('fizzbuzz') #imprime fizzbuzz
    elif n%5==0 and n!=55: #de otro modo si n/5 da resto 0 (múltiplo de 5), y n es distinto a 55, entonces:
        print('buzz') #imprime buzz
    elif n%3==0 and n!=24: #de otro modo si n/3 da resto 0 (múltiplo de 3), y n es distinto a 24, entonceS:
        print('fizz') #imprime fizz
    else: #de cualquier otro modo haz:
        print(n) #imprime n