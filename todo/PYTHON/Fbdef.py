#Traspasar el código del ejercicio Fizzbuzz a una función
#Si el número es multiplo de 3, que diga "FIZZ" al pasarlo como variable
#Si es multiplo de 5 diga buzz al pasarlo
#Y si el multiplo de 5 y 3 simultaneo diga fizz buzz
#Si no es ninguno de esos que se imprima el numero solo 
def Fbuzz (X):
    if X % 3 == 0 and X % 5 == 0:
        print ('Fizz Buzz')
    elif X % 5 == 0:
        print ('Buzz')
    elif X % 3 == 0:
        print ('Fizz')
    else:
        print(X)

Fbuzz(15)
Fbuzz(5)
Fbuzz(3)
Fbuzz(24)
Fbuzz(55)
Fbuzz(10)
