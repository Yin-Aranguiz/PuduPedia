def tiene_mas_de_tres_divisores(n):
    # Contar los divisores de n
    num_divisores = 0 #Aqui definió el numero de divisores posibles
    for i in range(1, n + 1): #creo un bucle desde 1 a n+1; es decir si digo 3, sería un array de 1,2,3
        if n % i == 0:        # condiciona si el numero que ingresamos por el modulo de i de la lista da cero
            num_divisores += 1  # le dice que cada vez que pase eso le agregue un 1 al num de divisores del numero juzgado
        if num_divisores >= 3:  # Si el n de divisores es mayor o igual a 3 
            return True         #Si es mayor o igual True
    return False                #Si no tiene más de tres divisores false

tiene_mas_de_tres_divisores(9)
tiene_mas_de_tres_divisores(3)
tiene_mas_de_tres_divisores(16)

def primo (m):   #defino la variable que quiero comprobar si es primo
    divisores= 0  #defino una variable que quiero sacar el numero de variable para comprobar si es menor a 2 
    for j in range (1, m+1): #genero un bucle para comprobar un numero entre el 1 y el numero que eligiste
        if m % j ==  0:    #si el numero que ingresamos es divido por el bucle y su excedente es 0 
             divisores += 1  # aumentale un numero al divisor; es decir si es 9, el primero que revisa es el 1, entonces ahí le agrega 1 a divisores
        if divisores <= 2:   # si divisores menor o igual a 2 como el "3"
            return True, f'es primo' #devuelveme un true y que diga es primo
    return False, f'no es primo'   #devuelveme un false y que no es primo

primo(9)
primo(7)
primo(16)
primo(47)