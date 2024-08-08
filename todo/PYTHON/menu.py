#MENÚ INTERACTIVO; Crear un menu con 4 opciones que te atrape en un bucle
#Que se muestre en la terminal, donde podemos interactuar (input)
#Que solo la opcion 4 rompe el bucle

mi_string = "Hola, Mundo!"

# Usando un bucle for
for caracter in mi_string:
    print(caracter)


def agregar_elementos():
    array = []
    while True:
        elemento = input("Ingresa un elemento (o 'salir' para terminar): ")
        if elemento.lower() == 'salir':
            break
        array.append(elemento)
        print(f"Array actual: {array}")
    return array

# Llamar a la función
array_resultante = agregar_elementos()
print(f"Array final: {array_resultante}")

#----------------------------------------------------

def contar_letra_en_string():
    mi_string = input("Ingresa un string: ")
    letra = input("Ingresa la letra que deseas contar: ")
    
    if len(letra) != 1 or not letra.isalpha():
        print("Por favor, ingresa un solo carácter de letra.")
        return
    
    cantidad = mi_string.count(letra)
    print(f"La letra '{letra}' aparece {cantidad} veces en '{mi_string}'.")

# Llamar a la función
contar_letra_en_string()



mi_string = "Hola, Mundo!"
longitud = len(mi_string)
print(f"La longitud del string es: {longitud}")
# Salida: La longitud del string es: 12
