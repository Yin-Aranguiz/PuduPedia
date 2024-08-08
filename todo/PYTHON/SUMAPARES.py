def suma_pares(listas):
    suma = 0
    for i in listas:
        if i % 2 == 0:
            suma += i
    return suma

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
resultado = suma_pares(numeros)

# Imprime el resultado
print(f'La suma de los números pares es: {resultado}')




