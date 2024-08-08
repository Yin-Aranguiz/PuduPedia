# Inicializar la variable
numero = 0

# Usar un bucle while para imprimir los números del 1 al 10
while numero < 10:
    print(numero)
    numero += 1
  
        


# Inicializar las variables
suma = 0
numero = 1

# Usar un bucle while para sumar los números del 1 al 5
while numero <= 5:
    suma += numero
    numero += 1

# Imprimir la suma
print(f"La suma de los números del 1 al 5 es {suma}.")


# Inicializar el contador
contador = 0

# Usar un bucle while para pedir números al usuario
while True:
    numero = int(input("Introduce un número (un número negativo para terminar): "))
    if numero < 0:
        break  # Salir del bucle si el número es negativo
    contador += 1

# Imprimir el número de entradas
print(f"Has introducido {contador} números positivos.")


# Inicializar la variable
numero = 1

# Usar un bucle while para imprimir números pares del 1 al 10
while numero <= 10:
    if numero % 2 == 0:
        print(numero)
    numero += 1


