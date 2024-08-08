def es_primo(numero):
    if numero <= 1:
        return False
    for i in range(2, int(numero**0.5) + 1):
        if numero % i == 0:
            return False
    return True

def suma_primos(rango):
    suma = 0
    primos = []
    for num in range(1, rango + 1):
        if es_primo(num):
            primos.append(num)
            suma += num
    return primos, suma

def main():
    rango = 353
    primos, suma = suma_primos(rango)
    print(f"Estos son los números primos entre 1 y {rango}: {primos}")
    print(f"La suma de estos números primos es: {suma}")

if __name__ == "__main__":
    main()


