# Solicitar al usuario que ingrese dos números
numero1 = input("Introduce el primer número")
numero2 = input("Introduce el segundo número")
# Verificar cuál número es mayor
if numero1 > numero2:
    print("El primer número es mayor")
elif numero1 < numero2:
    print("El segundo número es mayor.“)
else:
    print("Ambos números son iguales.“)
# Solicitar al usuario que ingrese un número
numero = int(input("Introduce un número: “))
# Verificar si el número es par o impar
if numero % 2 == 0:
    print(“El número es par.“)
else:
    print(“El número es impar.“)
# Solicitar al usuario que ingrese su edad
edad = int(input("Introduce tu edad: “))
# Clasificar la etapa de vida según la edad
if edad < 12:
    print(“Eres un niño.“)
elif edad < 18:
    print(“Eres un adolescente.“)
elif edad < 65:
    print(“Eres un adulto.“)
else:
    print(“Eres un adulto mayor.“)
# Solicitar al usuario que ingrese dos números
numero1 = int(input(“Introduce el primer número: “))
numero2 = int(input(“Introduce el segundo número: “))
# Verificar si el primer número es múltiplo del segundo
if numero1 % numero2 == 0:
    print(f”{numero1} es múltiplo de {numero2}.“)
else:
    print(f”{numero1} no es múltiplo de {numero2}.“)
# Solicitar al usuario que ingrese un número
n = int(input(“Introduce un número: “))
# Inicializar la suma
suma = 0
# Usar un bucle for para sumar los primeros n números
for i in range(1, n + 1):
    suma += i
# Imprimir la suma
print(f”La suma de los primeros {n} números es {suma}.“)
# Solicitar al usuario que ingrese palabras separadas por comas
entrada = input(“Introduce una lista de palabras separadas por comas: “)
# Convertir la entrada en una lista de palabras
palabras = entrada.split(“,”)
# Usar un bucle for para imprimir cada palabra
for palabra in palabras:
    print(palabra.strip())
# Solicitar al usuario que ingrese una palabra
palabra = input(“Introduce una palabra: “)
# Inicializar el contador
contador = 0
# Usar un bucle while para contar las letras
while contador < len(palabra):
    contador += 1
# Imprimir el número de letras
print(f”La palabra ‘{palabra}’ tiene {contador} letras.“)
# Solicitar al usuario que ingrese una cadena de texto
cadena = input(“Introduce una cadena de texto: “)
# Solicitar al usuario que ingrese el carácter a contar
caracter = input(“Introduce el carácter a contar: “)
# Inicializar el contador
contador = 0
# Usar un bucle for para contar las apariciones del carácter
for c in cadena:
    if c == caracter:
        contador += 1
# Imprimir el resultado
print(f”El carácter ‘{caracter}’ aparece {contador} veces en la cadena.“)
# Usar un bucle for para recorrer los números del 1 al 100
for i in range(1, 101):
    # Usar condicionales para determinar qué imprimir
    if i % 3 == 0 and i % 5 == 0:
        print(“FizzBuzz”)
    elif i % 3 == 0:
        print(“Fizz”)
    elif i % 5 == 0:
        print(“Buzz”)
    else:
        print(i)
# Inicializar el contador
contador = 0
# Usar un bucle while para pedir números al usuario
while True:
    numero = int(input(“Introduce un número (un número negativo para terminar): “))
    if numero < 0:
        break  # Salir del bucle si el número es negativo
    contador += 1
# Imprimir el número de entradas
print(f”Has introducido {contador} números positivos.“)
# Inicializar la suma
suma = 0
# Usar un bucle while para pedir números al usuario
while True:
    numero = int(input(“Introduce un número (un número impar para terminar): “))
    if numero % 2 != 0:
        break  # Salir del bucle si el número es impar
    suma += numero
# Imprimir la suma de los números pares
print(f”La suma de los números pares es {suma}.“)
# Número secreto
numero_secreto = 7
# Inicializar la variable para la adivinanza del usuario
adivinanza = int(input(“Adivina el número secreto (entre 1 y 10): “))
# Usar un bucle while para seguir pidiendo adivinanzas hasta que el usuario acierte
while adivinanza != numero_secreto:
    if adivinanza < numero_secreto:
        print(“El número secreto es mayor.“)
    else:
        print(“El número secreto es menor.“)
    adivinanza = int(input(“Intenta de nuevo: “))
# Felicitar al usuario por adivinar el número correcto
print(“¡Felicidades! Has adivinado el número secreto.“)
:ojos:
1

17:35
# Solicitar al usuario que ingrese dos números
numero1 = input(“Introduce el primer número: “)
numero2 = input(“Introduce el segundo número: “)
# Verificar cuál número es mayor
if numero1 > numero2:
    print(“El primer número es mayor.“)
elif numero1 < numero2:
    print(“El segundo número es mayor.“)
else:
    print(“Ambos números son iguales.“)
# Solicitar al usuario que ingrese un número
numero = int(input("Introduce un número: "))
# Verificar si el número es par o impar
if numero % 2 == 0:
    print(“El número es par.“)
else:
    print(“El número es impar.“)
# Solicitar al usuario que ingrese su edad
edad = int(input("Introduce tu edad: "))
# Clasificar la etapa de vida según la edad
if edad < 12:
    print(“Eres un niño.“)
elif edad < 18:
    print(“Eres un adolescente.“)
elif edad < 65:
    print(“Eres un adulto.“)
else:
    print(“Eres un adulto mayor.“)
# Solicitar al usuario que ingrese dos números
numero1 = int(input("Introduce el primer número: "))
numero2 = int(input("Introduce el segundo número: "))
# Verificar si el primer número es múltiplo del segundo
if numero1 % numero2 == 0:
    print(f”{numero1} es múltiplo de {numero2}.“)
else:
    print(f”{numero1} no es múltiplo de {numero2}.“)
# Solicitar al usuario que ingrese un número
n = int(input("Introduce un número: "))
# Inicializar la suma
suma = 0
# Usar un bucle for para sumar los primeros n números
for i in range(1, n + 1):
    suma += i
# Imprimir la suma
print(f”La suma de los primeros {n} números es {suma}.“)
# Solicitar al usuario que ingrese palabras separadas por comas
entrada = input(“Introduce una lista de palabras separadas por comas: “)
# Convertir la entrada en una lista de palabras
palabras = entrada.split(“,”)
# Usar un bucle for para imprimir cada palabra
for palabra in palabras:
    print(palabra.strip())
# Solicitar al usuario que ingrese una palabra
palabra = input(“Introduce una palabra: “)
# Inicializar el contador
contador = 0
# Usar un bucle while para contar las letras
while contador < len(palabra):
    contador += 1
# Imprimir el número de letras
print(f”La palabra ‘{palabra}’ tiene {contador} letras.“)
# Solicitar al usuario que ingrese una cadena de texto
cadena = input(“Introduce una cadena de texto: “)
# Solicitar al usuario que ingrese el carácter a contar
caracter = input(“Introduce el carácter a contar: “)
# Inicializar el contador
contador = 0
# Usar un bucle for para contar las apariciones del carácter
for c in cadena:
    if c == caracter:
        contador += 1
# Imprimir el resultado
print(f”El carácter ‘{caracter}’ aparece {contador} veces en la cadena.“)
# Usar un bucle for para recorrer los números del 1 al 100
for i in range(1, 101):
    # Usar condicionales para determinar qué imprimir
    if i % 3 == 0 and i % 5 == 0:
        print(“FizzBuzz”)
    elif i % 3 == 0:
        print(“Fizz”)
    elif i % 5 == 0:
        print(“Buzz”)
    else:
        print(i)
# Inicializar el contador
contador = 0
# Usar un bucle while para pedir números al usuario
while True:
    numero = int(input("Introduce un número (un número negativo para terminar): "))
    if numero < 0:
        break  # Salir del bucle si el número es negativo
    contador += 1
# Imprimir el número de entradas
print(f”Has introducido {contador} números positivos.“)
# Inicializar la suma
suma = 0
# Usar un bucle while para pedir números al usuario
while True:
    numero = int(input("Introduce un número (un número impar para terminar): "))
    if numero % 2 != 0:
        break  # Salir del bucle si el número es impar
    suma += numero
# Imprimir la suma de los números pares
print(f”La suma de los números pares es {suma}.“)
# Número secreto
numero_secreto = 7
# Inicializar la variable para la adivinanza del usuario
adivinanza = int(input("Adivina el número secreto (entre 1 y 10): "))
# Usar un bucle while para seguir pidiendo adivinanzas hasta que el usuario acierte
while adivinanza != numero_secreto:
    if adivinanza < numero_secreto:
        print(“El número secreto es mayor.“)
    else:
        print(“El número secreto es menor.“)
    adivinanza = int(input("Intenta de nuevo: "))
# Felicitar al usuario por adivinar el número correcto
print(“¡Felicidades! Has adivinado el número secreto.“)
17:36
# Inicializar la variable
numero = -1
# Usar un bucle while para imprimir los números del 1 al 10
while numero <= 10:
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
print(f”La suma de los números del 1 al 5 es {suma}.“)
# Inicializar el contador
contador = 0
# Usar un bucle while para pedir números al usuario
while True:
    numero = int(input("Introduce un número (un número negativo para terminar): "))
    if numero < 0:
        break  # Salir del bucle si el número es negativo
    contador += 1
# Imprimir el número de entradas
print(f”Has introducido {contador} números positivos.“)
# Inicializar la variable
numero = 1
# Usar un bucle while para imprimir números pares del 1 al 10
while numero <= 10:
    if numero % 2 == 0:
        print(numero)
    numero += 1
17:36
# Usar un bucle for para imprimir los números del 1 al 10
for numero in range(1, 11):
    print(numero)
# Inicializar la suma
suma = 0
# Usar un bucle for para sumar los números del 1 al 5
for numero in range(1, 6):
    suma += numero
# Imprimir la suma
print(f”La suma de los números del 1 al 5 es {suma}.“)
# Lista de frutas
frutas = [“manzana”, “plátano”, “cereza”, “fresa”]
# Usar un bucle for para imprimir cada fruta
for fruta in frutas:
    print(fruta)
# Cadena de texto
cadena = “12345678 0"
for caracter in cadena:
    print(caracter)
# Usar un bucle for para imprimir la tabla de multiplicar del 3
for num in range(1, 11):
    print(f”3 x {num} = {3 * num}“)