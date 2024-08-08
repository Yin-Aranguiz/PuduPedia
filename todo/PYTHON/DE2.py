#desafio 2
## Escribe un programa que genere un número aleatorio entre 1 y 10
###Permita al usuario adivinar el número
####El programa debe continuar hasta que el usuairio adivine el número correctamente
#####Investigar sobre import randomPY 


import random #importas libreria

while True: #mientras sea verdadero
    user = int(input("Adivina el número del 1-10: ")) #le pido el dato al usuario
    aleatorio = random.randint(1, 10) #pides que te entregue un dato aleatorio entre 1,10
    
    if user < 1 or user > 10: #condicional que dice usuario menor a 1 o mayor a 1 quiebre el bucle
        print("Por favor, ingresa un número del 1 al 10.") #imprime lo que le pide al usuario
    elif user == aleatorio: #si es igual usuario a aleatorio b
        print("¡Adivinaste el número!") #BINGOOO
        break#porsiaca para frenar
    else:
        print("Número incorrecto. Sigue intentando.") #para que vuelva a preguntar


####2. desafio
#Escribir una funcion que salude a Pedro, Juan Carlos y Mariana
#def saludar (x)


def saludar (y): #fijas variable 
   print(f'Hola, {y}') #fijas la formula 

saludar('Pedro') #preguntarle 
saludar('Juank')
saludar('Mariana')

####2.1 desafio: Escribir una función que determine 
# si un número es primo o no
#Si es primo, que retorne TRUE
#Si NO es primo, que retorne False

##TIPS: USAR BOOLEANOS
##TIPS: Investigar como se calcula un primo
def primo (x):
    if primo > 2:
        return ("Sigue")
    elif primo % 1:
        return ("sigue")
    elif primo % x:
        return True
    else:
        False

primo (3)
primo (53)
primo (67)
primo (7)

print(3%1)
print(3%3)

