def saludar(x):
    return (f"Hola amigx {x}")
    saludar("juank")
    saludar("mariana")
    saludar("Pedro")


"---------------------------------------------------------------------------"

def esPrimo(n):
    if n > 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

print(esPrimo(23))
print(esPrimo(21))
print(esPrimo(2))
print(esPrimo(83))
print(esPrimo(97*97))

    