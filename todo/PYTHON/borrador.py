nombre = "Cristian" #strings
numero1 = "23" #strings, un dato en comilla
numero2 = "4" # también se le puede decir caracter
numero3 = 4 #entero o un int
decimal = 3.14 #float, numero decimal
booleano = true or false # ojo que estas son palabras reservadas, que dice que tienen un valor prefijo, no podemos darle otro sentido

frutas = ("autor", 1, 3.14, True, "lucas")  #tuplas
print(frutas[3])    
"-------------------------------------------------------------------------------------------"
# Creamos una tupla llamada frutas con diferentes tipos de datos CHATGPT
frutas = ("autor", 1, 3.14, True, "lucas")

# Imprimimos el tercer elemento de la tupla, que es 3.14
print(frutas[2])
"------------------------------------------------------------------------------"

# Solicitar al usuario que ingrese dos números
numero1 = input("Introduce el primer número: ")
numero2 = input("Introduce el segundo número: ") 

#### Ojito al ejercicio anterior, es una suerte de máquina que me 
#### deja habilitada 
#### la función en la terminal para darle una función a mi antojo
#### eso es gracias a la función "input"

# Verificar cuál número es mayor
if numero1 > numero2:
    print("El primer número es mayor.")
elif numero1 < numero2:
    print("El segundo número es mayor.")
else:
    print("Ambos números son iguales.")

# Solicitar al usuario que ingrese un número
numero = int(input("Introduce un número: "))

# Verificar si el número es par o impar
if numero % 2 == 0:
    print("El número es par.")
else:
    print("El número es impar.")

