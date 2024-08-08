#Cree un código que en un rango del 1 a 353
#Este rango debe sumar todos los números primos dentro

def primo (m):   #defino la variable que quiero comprobar si es primo
    divisores= 0  #defino una variable que quiero sacar el numero de variable para comprobar si es menor a 2 
    for j in range (1, m+1): #genero un bucle para comprobar un numero entre el 1 y el numero que eligiste
        if m % j ==  0:    #si el numero que ingresamos es divido por el bucle y su excedente es 0 
             divisores += 1  # aumentale un numero al divisor; es decir si es 9, el primero que revisa es el 1, entonces ahí le agrega 1 a divisores
        if divisores <= 2:   # si divisores menor o igual a 2 como el "3"
            return True, f'es primo' #devuelveme un true y que diga es primo
    return False, f'no es primo'   #devuelveme un false y que no es primo

def rango_primo():
    for numero in range(1, 354):
        if primo(numero):
            print(f"{numero} es un número primo")

# Llamar a la función
rango_primo()