#Escribe un programa que pida al usuario que introduzca números enteros. 
#El programa debe continuar pidiendo números hasta que el usuario 
#introduzca un número negativo. Luego,
#el programa debe imprimir la suma de todos los números introducidos.

# Inicializar la variable para la suma
suma = 0

# Inicializar la variable para el número ingresado
numero = 0

# Bucle while que continúa mientras el número ingresado no sea negativo
while numero >= 0:
    # Pedir al usuario que introduzca un número
    numero = int(input("Introduce un número: "))
    
    # Verificar si el número es negativo
    if numero < 0:
        # Si es negativo, salir del bucle
        break
    
    # Si el número no es negativo, añadirlo a la suma
    suma += numero

# Imprimir la suma de todos los números ingresados
print("La suma de los números introducidos es:", suma)
