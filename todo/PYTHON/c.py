print("hola mundo")

##Notas 
 #hacer una máquina que cuenta hasta el 10

contador = 1 # establece un inicialización /El bucle se detendrá cuando el valor de contador sea 6, porque la condición contador <= 5 será False.
while contador <= 10: #menor o igual a 11, asi se lee
    print (contador) #imprime el valor
    contador +=1 #contador += 1 incrementa el valor del contador en 1 en cada iteración.

######desafio 2

import random
# Pedir al usuario que ingrese un número y convertirlo a un entero
number_user = int(input("Introduce un número: "))

if random.randint(1,10) != number_user:
    print 3false" 

else:  
    print "true" 

import random

# Generar un número aleatorio entre 1 y 10
random_number = random.randint(1, 10)

# Pedir al usuario que ingrese un número y convertirlo a un entero
number_user = int(input("Introduce un número: "))


# Comparar el número ingresado por el usuario con el número aleatorio
if random_number != number_user:
    print("False")
else:
    print("True")


 